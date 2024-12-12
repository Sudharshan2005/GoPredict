from flask import Flask, request, jsonify
from flask_cors import CORS  # Import CORS
import numpy as np
from tensorflow.keras.models import load_model
from sklearn.preprocessing import StandardScaler
import pandas as pd

# Initialize Flask app
app = Flask(__name__)

# Enable CORS for all routes
CORS(app)

# Load the saved model
model = load_model("fisrt_innings_score.h5")  # Replace with the actual path to your .h5 model

team_numbers = {
    'Royal Challengers Bengaluru': 1,
    'Punjab Kings': 2,
    'Delhi Capitals': 3,
    'Mumbai Indians': 4,
    'Kolkata Knight Riders': 5,
    'Rajasthan Royals': 6,
    'Sunrisers Hyderabad': 7,
    'Chennai Super Kings': 8,
    'Lucknow Super Giants': 9,
    'Gujarat Titans': 1
}

home = {
    'Bangalore': 1,
    'Bengaluru': 1,
    'Dharamsala': 2,
    'Mohali': 2,
    'Chandigarh': 2,
    'Indore': 2,
    'Delhi': 3,
    'Mumbai': 4,
    'Navi Mumbai': 4,
    'Kolkata': 5,
    'Jaipur': 6,
    'Guwahati': 6,
    'Hyderabad': 7,
    'Chennai': 8,
    'Lucknow': 9,
    'Ahmedabad': 0
}

# Load additional data (e.g., final_df) and scalers
final_df = pd.read_csv("first_innings_score.csv")  # Replace with your CSV file containing venue data
scaler_y = StandardScaler()
scaler_y.fit_transform(final_df[["first_innings_score"]])  # Replace target_column with the actual column name for scaling

# Define the prediction route
@app.route('/predict_rnn', methods=['POST'])
def predict():
    try:
        data = request.get_json()  # Get the data from the request body
        print("Incoming data:", data)  # Print incoming data for debugging

        # Ensure the required fields exist in the data
        batting_team = team_numbers.get(data.get("batting_team"))
        bowling_team = team_numbers.get(data.get("bowling_team"))
        toss_winner = team_numbers.get(data.get("toss_winner"))
        toss_decision = 1 if data.get("toss_decision") == "Bat" else 2
        venue = home.get(data.get("venue"))
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

        # Prepare the input data for prediction
        input_data = np.array([
            [
                batting_team,
                bowling_team,
                toss_winner,
                toss_decision,
                venue,
                humid,
                boundary_size,
                over,
                score_till_now,
                wickets_fallen,
            ]
        ]).reshape(1, -1)

        # Make the prediction
        y_pred_scaled = model.predict(input_data)
        predicted_score = scaler_y.inverse_transform(y_pred_scaled)

        # Convert the predicted score to a standard float for JSON serialization
        predicted_score = float(predicted_score[0][0])

        # Return the result as JSON
        return jsonify({"predicted_score": round(predicted_score, 2)})

    except Exception as e:
        print("Error:", e)
        return jsonify({"error": "An error occurred while processing the request."}), 500


if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0", port=8001)
