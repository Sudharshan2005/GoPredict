from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np
import pandas as pd
import joblib  # For loading the .pkl files

# Initialize Flask app
app = Flask(__name__)
CORS(app)

# Load models and datasets
classifier = joblib.load('random_forest_model.joblib')


matches = pd.read_csv('matches.csv')

# Mappings for teams and venues
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


# Preprocessing function for second innings score prediction

# Match Winner Prediction API
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

        return jsonify({"prediction": predicted_team})

    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000, debug=True)
