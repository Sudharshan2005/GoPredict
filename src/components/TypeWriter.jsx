"use client";

import { useNavigate } from "react-router-dom";
import { TypewriterEffect } from "./ui/typewriter-effect";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { Button } from "@material-tailwind/react";
import { PredictForm } from "./pages/PredicPage";

const TypeWriterPredict = () => {
  const navigate = useNavigate()
    const words = [
      { text: "Predict ", className: "text-white" },
      { text: "Your ", className: "text-white" },
      { text: "Cricket ", className: "text-white" },
      { text: "Matches...", className: "text-white" },
    ];
  
    return (
      <div className="flex flex-col items-center space-y-10 p-10 mt-20">
        <p className="text-neutral-600 text-white dark:text-neutral-200 text-base  mb-0">
        Predict. Play. Win: Your Cricket Insights Simplified!
        </p>
        <TypewriterEffect
          words={words} 
        />
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
        <Button onClick={() => navigate('/predict-page')} className="w-40 h-10">
          Go Predict
        </Button>
        <Button onClick={() => navigate('/teams-page')} className="w-40 h-10 bg-white text-black">
          Explore
        </Button>
      </div>
  
        {/* <TypewriterEffectSmooth 
          words={words} 
          className="text-4xl" 
          cursorClassName="bg-red-500" 
        /> */}
      </div>
    );
  };
  
  export default TypeWriterPredict;