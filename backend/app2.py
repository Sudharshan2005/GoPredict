from flask import Flask, request, jsonify
from tensorflow.keras.models import load_model
from flask_cors import CORS
import numpy as np

# Initialize Flask app
app = Flask(__name__)
CORS(app)

# Load the TensorFlow model
model = load_model('second_innings_winner.h5')

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

# Prediction endpoint
@app.route('/predict_second', methods=['POST'])
def predict():
    try:
        data = request.get_json()

        # Validate all required fields
        required_fields = ['teamA', 'teamB', 'venue', 'ball', 'firstInningsScore', 
                           'scoreTillNow', 'wicketsFallen', 'tossWinner', 'tossDecision']
        for field in required_fields:
            if field not in data:
                return jsonify({'error': f'Missing field: {field}'}), 400

        # Validate mappings
        teamA = team_mapping.get(data['teamA'])
        teamB = team_mapping.get(data['teamB'])
        venue = venue_mapping.get(data['venue'])
        tossWinner = team_mapping.get(data['tossWinner'])
        tossDecision = 1 if data['tossDecision'] == "Bat" else 2

        if None in [teamA, teamB, venue, tossWinner]:
            return jsonify({'error': 'Invalid team or venue mapping'}), 400

        # Validate numeric fields
        try:
            ball = float(data['ball'])
            firstInningsScore = float(data['firstInningsScore'])
            scoreTillNow = float(data['scoreTillNow'])
            wicketsFallen = float(data['wicketsFallen'])
        except ValueError as e:
            return jsonify({'error': f'Invalid numeric input: {str(e)}'}), 400

        # Prepare input features
        features = np.array([[teamA, teamB, ball, venue, tossWinner, tossDecision, 
                              firstInningsScore, scoreTillNow, wicketsFallen]], dtype=np.float32)

        # Make prediction
        features = features.reshape((1, 1, 9)) 
        output = model.predict(features)
        predicted_winner_index = np.argmax(output)
        predicted_winner = [team for team, idx in team_mapping.items() if idx == predicted_winner_index][0]

        return jsonify({'prediction': predicted_winner})

    except Exception as e:
        return jsonify({'error': str(e)}), 400


if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0", port=8002)
