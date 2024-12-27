import { useState, useEffect } from "react";
import { NavigationbarWithDropdownMultilevelMenu } from "../Navbar";
import { SimpleFooter } from "../Footer";
import { TeamLogos } from "../TeamSelection";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function TeamsPage() {
  const [selectedTeam, setSelectedTeam] = useState("Chennai Super Kings");
  const [playerData, setPlayerData] = useState({});
  const [error, setError] = useState(null);

  const handleTeamSelection = (teamName) => {
    setSelectedTeam(teamName);
  };

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await fetch('http://localhost:5001/players');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();

        const teamData = data["0"];

        const cleanedData = { ...teamData };
        const keys = Object.keys(cleanedData);

        keys.slice(0, 2).forEach((key) => {
          delete cleanedData[key];
        });

        setPlayerData(cleanedData);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchPlayers();
  }, []);

  const { color, batters = [], allRounders = [], bowlers = [] } = playerData[selectedTeam] || {};

  return (
    <>
      <div className="h-[210vh] w-full bg-gradient-to-b from-black to-blue-gray-900">
        <div className="p-5">
          <NavigationbarWithDropdownMultilevelMenu />
          <div className="text-center mt-14 w-auto">
            <TeamLogos onSelectTeam={handleTeamSelection} />
          </div>
          <div className="mt-14">
            <div className="text-center">
              <h1 className="text-5xl font-bold text-blue-gray-500">
                {selectedTeam}
              </h1>
            </div>
            <div className="mt-10">
              <h1 className="text-4xl ml-20 text-blue-gray-600 font-bold">Batters:</h1>
              {batters.length > 0 ? (
                <AnimatedTestimonials testimonials={batters} />
              ) : (
                <p>No batters available.</p>
              )}
            </div>
            <div className="mt-14">
              <h1 className="text-4xl ml-20 text-blue-gray-600 font-bold">All-rounders:</h1>
              {allRounders.length > 0 ? (
                <AnimatedTestimonials testimonials={allRounders} />
              ) : (
                <p>No all-rounders available.</p>
              )}
            </div>
            <div className="mt-14">
              <h1 className="text-4xl ml-20 text-blue-gray-600 font-bold">Bowlers:</h1>
              {bowlers.length > 0 ? (
                <AnimatedTestimonials testimonials={bowlers} />
              ) : (
                <p>No bowlers available.</p>
              )}
            </div>
          </div>
        </div>
      </div>
      <footer className="p-5">
        <SimpleFooter />
      </footer>
    </>
  );
}

