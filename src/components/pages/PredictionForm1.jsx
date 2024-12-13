import React, { useState } from 'react';
import axios from 'axios';
import { NavigationbarWithDropdownMultilevelMenu } from "../Navbar";
import { Card, Select, Option, Typography, Button } from '@material-tailwind/react';
import { OpenDrawer } from "../Drawer";
import { SimpleFooter } from '../Footer';

export function PredictionForm1() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [prediction, setPrediction] = useState('');

  const [formValues, setFormValues] = useState({
    teamA: "",
    teamB: "",
    tossWinner: "",
    tossDecision: "",
    venue: "",
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
    try {
      const payload = {
        teamA: formValues.teamA,
        teamB: formValues.teamB,
        tossWinner: formValues.tossWinner,
        tossDecision: formValues.tossDecision,
        venue: formValues.venue,
      };
      const response = await axios.post('http://127.0.0.1:8000/predict', payload);
      setPrediction(response.data.prediction);
      handleOpenDrawer();
    } catch (error) {
      console.error('Error making prediction:', error);
      alert('Failed to fetch prediction. Check your input or backend server.');
    }
  };

  const teamASelected = formValues.teamA !== "";

  const teamBOptions = teamASelected
    ? teams.filter((team) => team !== formValues.teamA)
    : [];

  return (
    <>
      <div className="h-[103vh] w-full bg-gradient-to-b from-black to-blue-gray-900">
        <div className="p-5">
          <NavigationbarWithDropdownMultilevelMenu />
          <div className="h-[80vh] flex justify-center items-center mt-10">
            <Card className="bg-white text-black p-5" color="transparent" shadow={false}>
              <Typography variant="h4" color="blue-gray">Predict Winner Before Match</Typography>
              <Typography color="gray" className="mt-1 font-normal">
                Unlock insights into match outcomes with advanced prediction algorithms.
              </Typography>
              <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                <div className="mb-1 flex flex-col gap-6">
                  {/* Team A Selection */}
                  <Typography variant="h6" color="blue-gray" className="-mb-5">Team A</Typography>
                  <Select
                    variant="outlined"
                    label="Select Team A"
                    value={formValues.teamA}
                    onChange={(value) => updateFormValue("teamA", value)}
                  >
                    {teams.map((each) => (
                      <Option className='mb-2' key={each} value={each}>{each}</Option>
                    ))}
                  </Select>

                  {/* Team B Selection (Enabled only if Team A is selected) */}
                  <Typography variant="h6" color="blue-gray" className="-mb-5">Team B</Typography>
                  <Select
                    variant="outlined"
                    label="Select Team B"
                    value={formValues.teamB}
                    onChange={(value) => updateFormValue("teamB", value)}
                    disabled={!teamASelected}
                  >
                    {teamBOptions.map((team) => (
                      <Option className='mb-2' key={team} value={team}>{team}</Option>
                    ))}
                  </Select>

                  {/* Toss Winner Selection (Enabled only if both Team A and Team B are selected) */}
                  <Typography variant="h6" color="blue-gray" className="-mb-5">Toss Winner</Typography>
                  <Select
                    variant="outlined"
                    label="Select Toss Winner"
                    value={formValues.tossWinner}
                    onChange={(value) => updateFormValue("tossWinner", value)}
                    disabled={!teamASelected || !formValues.teamB}
                  >
                    {[formValues.teamA, formValues.teamB].filter(Boolean).map((team) => (
                      <Option className='mb-2' key={team} value={team}>{team}</Option>
                    ))}
                  </Select>

                  {/* Toss Decision Selection */}
                  <Typography variant="h6" color="blue-gray" className="-mb-5">Toss Decision</Typography>
                  <Select
                    variant="outlined"
                    label="Select Toss Decision"
                    value={formValues.tossDecision}
                    onChange={(value) => updateFormValue("tossDecision", value)}
                    disabled={!formValues.tossWinner} // Disabled until toss winner is selected
                  >
                    <Option className='mb-2' value="Bat">Bat</Option>
                    <Option value="Bowl">Bowl</Option>
                  </Select>

                  {/* Venue Selection */}
                  <Typography variant="h6" color="blue-gray" className="-mb-5">Venue</Typography>
                  <Select
                    variant="outlined"
                    label="Select Venue"
                    value={formValues.venue}
                    onChange={(value) => updateFormValue("venue", value)}
                  >
                    {venues.map((each) => (
                      <Option className='mb-2' key={each} value={each}>{each}</Option>
                    ))}
                  </Select>
                </div>
              </form>
              <div className="mt-5 text-center flex flex-col justify-center items-center">
                <Button className="normal-case font-bold" onClick={handleSubmit}>GoPredict</Button>
              </div>
            </Card>
          </div>
        </div>
        <footer className='ml-5 mr-5'>
          <SimpleFooter />
        </footer>
      </div>

      {isDrawerOpen && <OpenDrawer onClose={handleCloseDrawer} prediction={`Predicted Winner: ${prediction}`} />}
    </>
  );
}
