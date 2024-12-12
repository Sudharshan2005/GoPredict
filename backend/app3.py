from flask import Flask, request, jsonify
import tensorflow as tf
from flask_cors import CORS
import numpy as np
import pandas as pd
import joblib  # For loading the .pkl files

# Initialize Flask app
app = Flask(__name__)
CORS(app)

# Load the TensorFlow model
model = tf.keras.models.load_model('second_innings_score.h5')

# Load the scalers from .pkl files
scaler_x = joblib.load('scaler_x(sec).pkl')  # Input scaler
scaler_y = joblib.load('scaler_y(sec).pkl')  # Output scaler

# Load the CSV for venue data
csv = pd.read_csv('grps_for_score.csv')

# Mappings for teams and venues
team_mapping =  {'Chennai Super Kings': 1, 'Delhi Capitals': 2, 'Kolkata Knight Riders': 3, 
                 'Mumbai Indians': 4, 'Punjab Kings': 5, 'Rajasthan Royals': 6, 
                 'Royal Challengers Bengaluru': 7, 'Sunrisers Hyderabad': 8, 
                 'Lucknow Super Giants': 9, 'Gujarat Titans': 0}

venue_mapping = {
    'Bengaluru': 7, 'Dharamsala': 5, 'Mohali': 5, 'Chandigarh': 5, 'Indore': 5,
    'Delhi': 2, 'Mumbai': 4, 'Navi Mumbai': 4, 'Kolkata': 3, 'Jaipur': 6, 
    'Guwahati': 6, 'Hyderabad': 8, 'Chennai': 1, 'Lucknow': 9, 'Ahmedabad': 0
}

# Preprocessing function (maps inputs using mappings and scales using scaler_x)
def preprocess_input(data):
    # Get the team and venue mappings
    teamA = team_mapping.get(data['teamA'])
    teamB = team_mapping.get(data['teamB'])
    venue = venue_mapping.get(data['venue'])

    # Get venue-specific statistics from CSV
    t1w = csv[csv["venue"] == venue]["team1_wins"].iloc[0]
    t2w = csv[csv["venue"] == venue]["team2_wins"].iloc[0]
    a1 = csv[csv["venue"] == venue]["a1"].iloc[0]
    a2 = csv[csv["venue"] == venue]["a2"].iloc[0]
    humid = csv[csv["venue"] == venue]["humid"].iloc[0]
    bs = csv[csv["venue"] == venue]["boundary_size"].iloc[0]

    # Validate if any mapping is invalid
    if None in [teamA, teamB, venue]:
        raise ValueError("Invalid team or venue mapping")

    # Prepare the data (features)
    processed_data = np.array([[teamA, teamB, venue, t1w, t2w, a1, humid, bs, a2, 
                                data['over'], data['scoreTillNow'], data['wicketsFallen'], 
                                data['firstInningsScore']]])

    # Reshaping data for model input
    processed_data = processed_data.reshape((processed_data.shape[0], 1, processed_data.shape[1]))

    # Standardizing the input using scaler_x
    processed_data_scaled = scaler_x.transform(processed_data.reshape(processed_data.shape[0], processed_data.shape[2]))
    processed_data_scaled = processed_data_scaled.reshape((processed_data.shape[0], 1, processed_data.shape[2]))

    return processed_data_scaled

@app.route('/predict_second_score', methods=['POST'])
def predict_winner():
    try:
        # Get JSON data from request
        data = request.json

        # Preprocess the input data
        processed_data = preprocess_input(data)

        # Perform prediction using the model
        prediction_scaled = model.predict(processed_data)

        # Reverse the scaling of the prediction using scaler_y
        prediction_score = scaler_y.inverse_transform(prediction_scaled)

        # Extract the prediction score (single value)
        predicted_score = round(prediction_score[0][0], 0)

        return jsonify({'prediction': str(predicted_score)})

    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8002, debug=True)
