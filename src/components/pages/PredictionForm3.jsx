import React, { useState } from "react";
import axios from "axios";
import { NavigationbarWithDropdownMultilevelMenu } from "../Navbar";
import { Card, Select, Option, Typography, Button, Input } from "@material-tailwind/react";
import { SimpleFooter } from "../Footer";
import { OpenDrawer } from "../Drawer";

export function PredictionForm3() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [prediction, setPrediction] = useState("");
  const [formValues, setFormValues] = useState({
    teamA: "",
    teamB: "",
    venue: "",
    tossWinner: "",
    tossDecision: "",
    over: "",
    scoreTillNow: "",
    wicketsFallen: "",
  });
  const [loading, setLoading] = useState(false);

  const teams = [
    "Gujarat Titans", "Rajasthan Royals", "Lucknow Super Giants",
    "Punjab Kings", "Mumbai Indians", "Royal Challengers Bangalore",
    "Kolkata Knight Riders", "Sunrisers Hyderabad", "Delhi Capitals",
    "Chennai Super Kings",
  ];

  const venues = [
    "Bengaluru", "Dharamsala", "Mohali", "Chandigarh", "Indore", "Delhi",
    "Mumbai", "Navi Mumbai", "Kolkata", "Jaipur", "Guwahati", "Hyderabad",
    "Chennai", "Lucknow", "Ahmedabad",
  ];

  const handleOpenDrawer = () => setIsDrawerOpen(true);
  const handleCloseDrawer = () => setIsDrawerOpen(false);

  const handleSubmit = async () => {
    if (
      !formValues.teamA || !formValues.teamB || !formValues.venue || 
      !formValues.tossWinner || !formValues.tossDecision || 
      !formValues.over || !formValues.scoreTillNow || !formValues.wicketsFallen
    ) {
      alert("Please fill in all fields before submitting.");
      return;
    }

    setLoading(true);
    try {
      const payload = {
        batting_team: formValues.teamA,
        bowling_team: formValues.teamB,
        toss_winner: formValues.tossWinner,
        toss_decision: formValues.tossDecision,
        venue: formValues.venue,
        over: parseFloat(formValues.over),
        score_till_now: parseInt(formValues.scoreTillNow),
        wickets_fallen: parseInt(formValues.wicketsFallen),
      };

      const response = await axios.post("http://127.0.0.1:8000/predict_rnn", payload);
      setPrediction(response.data.predicted_score);
      handleOpenDrawer();
    } catch (error) {
      console.error("Error making prediction:", error.response ? error.response.data : error.message);
      alert("Failed to fetch prediction. Ensure the backend server is running.");
    } finally {
      setLoading(false);
    }
  };

  const updateFormValue = (key, value) => {
    setFormValues((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <>
      <div className="h-[103vh] w-full bg-gradient-to-b from-black to-blue-gray-900">
        <div className="p-5">
          <NavigationbarWithDropdownMultilevelMenu />
          <div className="h-[80vh] flex justify-center items-center mt-10">
            <Card className="bg-white text-black p-5" color="transparent" shadow={false}>
              <Typography variant="h4" color="blue-gray">Predict Score First Inn.</Typography>
              <Typography color="gray" className="mt-1 font-normal">
                Use advanced algorithms to predict the first innings score.
              </Typography>
              <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                <div className="mb-4 flex flex-col gap-4">
                  <Select
                    variant="outlined"
                    label="Team A"
                    value={formValues.teamA}
                    onChange={(value) => updateFormValue("teamA", value)}
                  >
                    {teams.map((each) => (
                      <Option className='mb-2' key={each} value={each}>
                        {each}
                      </Option>
                    ))}
                  </Select>
                  <Select
                    variant="outlined"
                    label="Team B"
                    value={formValues.teamB}
                    onChange={(value) => updateFormValue("teamB", value)}
                  >
                    {teams
                      .filter((team) => team !== formValues.teamA)
                      .map((team) => (
                        <Option className='mb-2' key={team} value={team}>
                          {team}
                        </Option>
                      ))}
                  </Select>
                  <Select
                    variant="outlined"
                    label="Venue"
                    value={formValues.venue}
                    onChange={(value) => updateFormValue("venue", value)}
                  >
                    {venues.map((each) => (
                      <Option className='mb-2' key={each} value={each}>
                        {each}
                      </Option>
                    ))}
                  </Select>
                  <Select
                    variant="outlined"
                    label="Toss Winner"
                    value={formValues.tossWinner}
                    onChange={(value) => updateFormValue("tossWinner", value)}
                  >
                    {[formValues.teamA, formValues.teamB]
                      .filter(Boolean)
                      .map((team) => (
                        <Option className='mb-2' key={team} value={team}>
                          {team}
                        </Option>
                      ))}
                  </Select>
                  <Select
                    variant="outlined"
                    label="Toss Decision"
                    value={formValues.tossDecision}
                    onChange={(value) => updateFormValue("tossDecision", value)}
                  >
                    <Option className='mb-2' value="Bat">Bat</Option>
                    <Option value="Bowl">Bowl</Option>
                  </Select>
                  <Input
                    type="number"
                    label="Over"
                    value={formValues.over}
                    onChange={(e) => updateFormValue("over", e.target.value)}
                  />
                  <Input
                    type="number"
                    label="Score Till Now"
                    value={formValues.scoreTillNow}
                    onChange={(e) => updateFormValue("scoreTillNow", e.target.value)}
                  />
                  <Input
                    type="number"
                    label="Wickets Fallen"
                    value={formValues.wicketsFallen}
                    onChange={(e) => updateFormValue("wicketsFallen", e.target.value)}
                  />
                </div>
              </form>
              <div className="mt-5 text-center">
                <Button
                  className="normal-case font-bold"
                  onClick={handleSubmit}
                  disabled={loading}
                >
                  {loading ? "Loading..." : "GoPredict"}
                </Button>
              </div>
            </Card>
          </div>
        </div>
        <footer className="ml-5 mr-5">
          <SimpleFooter />
        </footer>
      </div>

      {isDrawerOpen && (
        <OpenDrawer onClose={handleCloseDrawer} prediction={`Predicted Score: ${prediction}`} />
      )}
    </>
  );
}
