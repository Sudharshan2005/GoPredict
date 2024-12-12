import React from "react";
import { FlipWords } from './ui/flip-words'; 

export const Flipping = () => {
  const flippingWords = ["outcomes", "winners", "scores", "results"];

  return (
    <div className="flex flex-col items-center justify-center text-white mt-20">
      <h1 className="text-5xl font-bold flex items-center gap-2">
        <span className="text-blue-gray-400">Predict</span>
        <FlipWords words={flippingWords} duration={2000} className="text-5xl font-bold" />
      </h1>
      <p className="mt-4 text-blue-gray-400 text-lg italic">Get ahead of the game with data-driven insights!</p>
    </div>
  );
};
