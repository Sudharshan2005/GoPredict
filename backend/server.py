from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import numpy as np
from tensorflow.keras.models import load_model
from sklearn.preprocessing import StandardScaler
import pandas as pd

app = Flask(__name__)
CORS(app)

classifier = joblib.load('random_forest_model.joblib')
model_first_innings = load_model("first_innings_score.h5")
model_second_innings = load_model('second_innings_winner.h5')
model = load_model('second_innings_score.h5')

matches = pd.read_csv('matches.csv')
final_df = pd.read_csv("first_innings_score_2.csv")
csv = pd.read_csv('grps_for_score.csv')

scaler_y = StandardScaler()
scaler_y.fit_transform(final_df[["first_innings_score"]])

scaler_x = joblib.load('scaler_x(sec).pkl')
scaler_y = joblib.load('scaler_y(sec).pkl')

team_mapping = {
    'Gujarat Titans': 2, 'Rajasthan Royals': 7, 'Lucknow Super Giants': 4,
    'Punjab Kings': 6, 'Mumbai Indians': 5, 'Royal Challengers Bangalore': 8,
    'Kolkata Knight Riders': 3, 'Sunrisers Hyderabad': 9,
    'Delhi Capitals': 1, 'Chennai Super Kings': 0,
}

venue_mapping = {
    'Bengaluru': 8, 'Dharamsala': 6, 'Mohali': 6, 'Chandigarh': 6,
    'Indore': 6, 'Delhi': 1, 'Mumbai': 5, 'Navi Mumbai': 5,
    'Kolkata': 3, 'Jaipur': 7, 'Guwahati': 7, 'Hyderabad': 9,
    'Chennai': 0, 'Lucknow': 4, 'Ahmedabad': 2
}

teams = {v: k for k, v in team_mapping.items()}


team_mapping_2 =  {'Chennai Super Kings': 1, 'Delhi Capitals': 2, 'Kolkata Knight Riders': 3, 
                 'Mumbai Indians': 4, 'Punjab Kings': 5, 'Rajasthan Royals': 6, 
                 'Royal Challengers Bengaluru': 7, 'Sunrisers Hyderabad': 8, 
                 'Lucknow Super Giants': 9, 'Gujarat Titans': 0}

venue_mapping_2 = {
    'Bengaluru': 7, 'Dharamsala': 5, 'Mohali': 5, 'Chandigarh': 5, 'Indore': 5,
    'Delhi': 2, 'Mumbai': 4, 'Navi Mumbai': 4, 'Kolkata': 3, 'Jaipur': 6, 
    'Guwahati': 6, 'Hyderabad': 8, 'Chennai': 1, 'Lucknow': 9, 'Ahmedabad': 0
}


def preprocess_input(data):
    teamA = team_mapping.get(data['teamA'])
    teamB = team_mapping.get(data['teamB'])
    venue = venue_mapping.get(data['venue'])

    t1w = csv[csv["venue"] == venue]["team1_wins"].iloc[0]
    t2w = csv[csv["venue"] == venue]["team2_wins"].iloc[0]
    a1 = csv[csv["venue"] == venue]["a1"].iloc[0]
    a2 = csv[csv["venue"] == venue]["a2"].iloc[0]
    humid = csv[csv["venue"] == venue]["humid"].iloc[0]
    bs = csv[csv["venue"] == venue]["boundary_size"].iloc[0]

    if None in [teamA, teamB, venue]:
        raise ValueError("Invalid team or venue mapping")

    processed_data = np.array([[teamA, teamB, venue, t1w, t2w, a1, humid, bs, a2, 
                                data['over'], data['scoreTillNow'], data['wicketsFallen'], 
                                data['firstInningsScore']]])

    processed_data = processed_data.reshape((processed_data.shape[0], 1, processed_data.shape[1]))

    processed_data_scaled = scaler_x.transform(processed_data.reshape(processed_data.shape[0], processed_data.shape[2]))
    processed_data_scaled = processed_data_scaled.reshape((processed_data.shape[0], 1, processed_data.shape[2]))

    return processed_data_scaled



# First API: Match Winner Prediction
@app.route("/predict", methods=["POST"])
def predict_match_winner():
    try:
        data = request.get_json()

        teamA = data.get("teamA")
        teamB = data.get("teamB")
        tossWinner = data.get("tossWinner")
        tossDecision = data.get("tossDecision")
        venue = data.get("venue")

        if not all([teamA, teamB, tossWinner, tossDecision, venue]):
            return jsonify({"error": "Missing required fields"}), 400

        batting_team = team_mapping.get(teamA)
        bowling_team = team_mapping.get(teamB)
        venue_code = venue_mapping.get(venue)
        toss_winner = team_mapping.get(tossWinner)
        toss_decision = 1 if tossDecision == "Bat" else 0

        if None in (batting_team, bowling_team, venue_code, toss_winner):
            return jsonify({"error": "Invalid input values."}), 400

        match_data = matches[matches["city"] == venue_code]
        if match_data.empty:
            return jsonify({"error": "No data available for the specified venue"}), 400

        f = match_data["first_innings_score"].iloc[0]
        s = match_data["second_innings_score"].iloc[0]

        input_data = np.array([[venue_code, batting_team, bowling_team, toss_winner, toss_decision, f, s]])

        prediction = classifier.predict(input_data)
        predicted_team = teams.get(prediction[0])

        if predicted_team not in [teamA, teamB]:
            predicted_team = np.random.choice([teamA, teamB])

        print(predicted_team)
        return jsonify({"prediction": predicted_team})

    except Exception as e:
        return jsonify({"error": str(e)}), 500



# Second API: First Innings Score Prediction
import random

@app.route('/predict_rnn', methods=['POST'])
def predict_first_innings_score():
    try:
        data = request.get_json()

        batting_team = team_mapping.get(data.get("batting_team"))
        bowling_team = team_mapping.get(data.get("bowling_team"))
        toss_winner = team_mapping.get(data.get("toss_winner"))
        toss_decision = 1 if data.get("toss_decision") == "Bat" else 2
        venue = venue_mapping.get(data.get("venue"))
        over = data.get("over")
        score_till_now = data.get("score_till_now")
        wickets_fallen = data.get("wickets_fallen")

        if None in [batting_team, bowling_team, toss_winner, venue, over, score_till_now, wickets_fallen]:
            return jsonify({"error": "Missing required fields"}), 400

        try:
            humid = final_df[final_df["city"] == venue]["due_factor"].iloc[0]
            boundary_size = final_df[final_df["city"] == venue]["boundary_size"].iloc[0]
        except IndexError:
            return jsonify({"error": "Invalid venue ID"}), 400

        input_data = np.array([[
            batting_team, bowling_team, toss_winner, toss_decision, venue, humid,
            boundary_size, over, score_till_now, wickets_fallen
        ]]).reshape(1, -1)

        y_pred_scaled = model_first_innings.predict(input_data)
        predicted_score = scaler_y.inverse_transform(y_pred_scaled)
        predicted_score = float(predicted_score[0][0]) + 14

        if predicted_score < score_till_now:
            random_factor = random.randint(8, 16)
            predicted_score += (20 - over) * random_factor

        return jsonify({"predicted_score": round(predicted_score, 0)})

    except Exception as e:
        return jsonify({"error": str(e)}), 500




# Third API: Second Innings Winner Prediction
@app.route('/predict_second', methods=['POST'])
def predict_second_innings_winner():
    try:
        data = request.get_json()

        required_fields = ['teamA', 'teamB', 'venue', 'ball', 'firstInningsScore',
                           'scoreTillNow', 'wicketsFallen', 'tossWinner', 'tossDecision']
        missing_fields = [field for field in required_fields if field not in data]
        if missing_fields:
            return jsonify({'error': f'Missing fields: {", ".join(missing_fields)}'}), 400

        teamA = team_mapping.get(data['teamA'])
        teamB = team_mapping.get(data['teamB'])
        venue = venue_mapping.get(data['venue'])
        tossWinner = team_mapping.get(data['tossWinner'])
        tossDecision = 1 if data['tossDecision'] == "Bat" else 2

        if None in [teamA, teamB, venue, tossWinner]:
            return jsonify({'error': 'Invalid team or venue mapping'}), 400

        try:
            ball = float(data['ball'])
            firstInningsScore = float(data['firstInningsScore'])
            scoreTillNow = float(data['scoreTillNow'])
            wicketsFallen = float(data['wicketsFallen'])
        except ValueError as e:
            return jsonify({'error': f'Invalid numeric input: {str(e)}'}), 400

        features = np.array([[teamA, teamB, ball, venue, tossWinner, tossDecision,
                              firstInningsScore, scoreTillNow, wicketsFallen]], dtype=np.float32)
        features = features.reshape((1, 1, 9))

        output = model_second_innings.predict(features)
        predicted_winner_index = np.argmax(output)
        predicted_winner = next((team for team, idx in team_mapping.items() if idx == predicted_winner_index), None)

        if predicted_winner not in [data['teamA'], data['teamB']]:
            predicted_winner = np.random.choice([data['teamA'], data['teamB']])

        return jsonify({'prediction': predicted_winner})

    except Exception as e:
        return jsonify({'error': str(e)}), 500

    


@app.route('/predict_second_score', methods=['POST'])
def predict_winner():
    try:
        data = request.json

        processed_data = preprocess_input(data)

        prediction_scaled = model.predict(processed_data)

        prediction_score = scaler_y.inverse_transform(prediction_scaled)

        predicted_score = round(prediction_score[0][0] + 5, 0)


        return jsonify({'prediction': str(predicted_score)})

    except Exception as e:
        return jsonify({'error': str(e)}), 500


if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0", port=8000)
