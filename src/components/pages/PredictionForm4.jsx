import React, { useState } from 'react';
import axios from 'axios';
import { Card, Select, Option, Typography, Button } from '@material-tailwind/react';
import { NavigationbarWithDropdownMultilevelMenu } from '../Navbar';
import { SimpleFooter } from '../Footer';
import { OpenDrawer } from '../Drawer';

export function PredictionForm4() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [prediction, setPrediction] = useState('');
  const [formValues, setFormValues] = useState({
    teamA: "",
    teamB: "",
    venue: "",
    firstInningsScore: "",
    over: "",
    scoreTillNow: "",
    wicketsFallen: "",
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
    if (
      !formValues.teamA ||
      !formValues.teamB ||
      !formValues.venue ||
      !formValues.firstInningsScore ||
      !formValues.over ||
      !formValues.scoreTillNow ||
      !formValues.wicketsFallen
    ) {
      alert("Please fill in all fields before submitting.");
      return;
    }

    try {
      const response = await axios.post(
        'http://127.0.0.1:8000/predict_second_score',
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

  return (
    <>
      <div className="h-[100vh] w-full bg-gradient-to-b from-black to-blue-gray-900">
        <div className='p-5'>
          <NavigationbarWithDropdownMultilevelMenu />
          <div className='flex justify-center items-center mt-20'>
            <Card className="bg-white text-black p-5" color="transparent" shadow={false}>
              <Typography variant="h4" color="blue-gray">Predict Score Second Inn.</Typography>
              <Typography color="gray" className="mt-1 font-normal">
                Predict the match score using first innings details and current progress.
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
                  >
                    {teams.filter((team) => team !== formValues.teamA).map((team) => <Option className='mb-2' key={team} value={team}>{team}</Option>)}
                  </Select>
                  <Select
                    label="Select Venue"
                    value={formValues.venue}
                    onChange={(value) => updateFormValue("venue", value)}
                  >
                    {venues.map((venue) => <Option className='mb-2' key={venue} value={venue}>{venue}</Option>)}
                  </Select>
                  <input
                    type="number"
                    placeholder="First Innings Score"
                    className="border rounded p-2"
                    value={formValues.firstInningsScore}
                    onChange={(e) => updateFormValue("firstInningsScore", e.target.value)}
                  />
                  <input
                    type="number"
                    placeholder="Over (e.g., 15.4)"
                    className="border rounded p-2"
                    value={formValues.over}
                    onChange={(e) => updateFormValue("over", e.target.value)}
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
        </div>
        <footer className='mt-20'>
          <SimpleFooter />
        </footer>
      </div>

      {isDrawerOpen && (
        <OpenDrawer onClose={handleCloseDrawer} prediction={`Predicted Score: ${prediction}`} />
      )}
    </>
  );
}
