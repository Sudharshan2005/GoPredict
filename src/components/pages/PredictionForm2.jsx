import React, { useState } from 'react';
import axios from 'axios';
import { Card, Select, Option, Typography, Button } from '@material-tailwind/react';
import { NavigationbarWithDropdownMultilevelMenu } from '../Navbar';
import { SimpleFooter } from '../Footer';
import { OpenDrawer } from '../Drawer';

export function PredictionForm2() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [prediction, setPrediction] = useState('');
  const [formValues, setFormValues] = useState({
    teamA: "",
    teamB: "",
    venue: "",
    ball: "",
    firstInningsScore: "",
    scoreTillNow: "",
    wicketsFallen: "",
    tossWinner: "",
    tossDecision: "",
  });

  const teams = [
    'Gujarat Titans', 'Rajasthan Royals', 'Lucknow Super Giants',
    'Punjab Kings', 'Mumbai Indians', 'Royal Challengers Bangalore',
    'Kolkata Knight Riders', 'Sunrisers Hyderabad', 'Delhi Capitals',
    'Chennai Super Kings',
  ];

  const venues = [
    'Bengaluru', 'Dharamsala', 'Mohali', 'Chandigarh', 'Indore',
    'Delhi', 'Mumbai', 'Navi Mumbai', 'Kolkata', 'Jaipur',
    'Guwahati', 'Hyderabad', 'Chennai', 'Lucknow', 'Ahmedabad',
  ];

  const updateFormValue = (key, value) => {
    setFormValues((prev) => ({ ...prev, [key]: value }));
  };

  const handleOpenDrawer = () => {
    setIsDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
  };

  const handleSubmit = async () => {
    const requiredFields = [
      'teamA', 'teamB', 'venue', 'ball', 'firstInningsScore',
      'scoreTillNow', 'wicketsFallen', 'tossWinner', 'tossDecision'
    ];
    for (let field of requiredFields) {
      if (!formValues[field]) {
        alert(`Please fill all fields before submitting. Missing: ${field}`);
        return;
      }
    }

    try {
      const response = await axios.post(
        'http://127.0.0.1:8000/predict_second',
        formValues,
        { headers: { 'Content-Type': 'application/json' } }
      );
      setPrediction(response.data.prediction);
      handleOpenDrawer();
    } catch (error) {
      console.error('Error making prediction:', error.response?.data || error.message);
      alert('Failed to fetch prediction. Check your input or backend server.');
    }
  };

  const teamASelected = formValues.teamA !== "";
  const teamBOptions = teamASelected ? teams.filter((team) => team !== formValues.teamA) : [];
  const tossWinnerEnabled = teamASelected && formValues.teamB !== "";

  return (
    <div className="h-[111vh] w-full bg-gradient-to-b from-black to-blue-gray-900">
      <div className='p-5'>
        <NavigationbarWithDropdownMultilevelMenu />
        <div className='flex justify-center items-center mt-20'>
          <Card className="bg-white text-black p-5" color="transparent" shadow={false}>
            <Typography variant="h4" color="blue-gray">Predict Winner After Inn.</Typography>
            <Typography color="gray" className="mt-1 font-normal">
              Get insights into match predictions based on the given parameters.
            </Typography>
            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
              <div className="mb-1 flex flex-col gap-6">
                <Select
                  label="Select Team A"
                  value={formValues.teamA}
                  onChange={(value) => updateFormValue("teamA", value)}
                >
                  {teams.map((team) => <Option className='mb-2' key={team} value={team}>{team}</Option>)}
                </Select>
                
                <Select
                  label="Select Team B"
                  value={formValues.teamB}
                  onChange={(value) => updateFormValue("teamB", value)}
                  disabled={!teamASelected}
                >
                  {teamBOptions.map((team) => <Option className='mb-2' key={team} value={team}>{team}</Option>)}
                </Select>
                
                <Select
                  label="Select Venue"
                  value={formValues.venue}
                  onChange={(value) => updateFormValue("venue", value)}
                >
                  {venues.map((venue) => <Option className='mb-2' key={venue} value={venue}>{venue}</Option>)}
                </Select>

                <Select
                  label="Toss Winner"
                  value={formValues.tossWinner}
                  onChange={(value) => updateFormValue("tossWinner", value)}
                  disabled={!tossWinnerEnabled}
                >
                  {[formValues.teamA, formValues.teamB].filter(Boolean).map((team) => (
                    <Option className='mb-2' key={team} value={team}>{team}</Option>
                  ))}
                </Select>

                <Select
                  label="Toss Decision"
                  value={formValues.tossDecision}
                  onChange={(value) => updateFormValue("tossDecision", value)}
                >
                  <Option className='mb-2' value="Bat">Bat</Option>
                  <Option value="Bowl">Bowl</Option>
                </Select>

                <input
                  type="number"
                  placeholder="Ball Number (e.g., 14.3)"
                  className="border rounded p-2"
                  value={formValues.ball}
                  onChange={(e) => updateFormValue("ball", e.target.value)}
                />

                <input
                  type="number"
                  placeholder="First Innings Score"
                  className="border rounded p-2"
                  value={formValues.firstInningsScore}
                  onChange={(e) => updateFormValue("firstInningsScore", e.target.value)}
                />

                <input
                  type="number"
                  placeholder="Score Till Now"
                  className="border rounded p-2"
                  value={formValues.scoreTillNow}
                  onChange={(e) => updateFormValue("scoreTillNow", e.target.value)}
                />

                <input
                  type="number"
                  placeholder="Wickets Fallen"
                  className="border rounded p-2"
                  value={formValues.wicketsFallen}
                  onChange={(e) => updateFormValue("wicketsFallen", e.target.value)}
                />
              </div>
            </form>
            <div className='mt-5 text-center'>
              <Button className='normal-case' onClick={handleSubmit}>GoPredict</Button>
            </div>
          </Card>
        </div>
        <footer className='mt-20'>
          <SimpleFooter />
        </footer>
      </div>

      {isDrawerOpen && <OpenDrawer onClose={handleCloseDrawer} prediction={`Predicted Winner: ${prediction}`} />}
    </div>
  );
}
