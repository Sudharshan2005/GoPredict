import React from "react";
import { useNavigate } from "react-router-dom";
import { EvervaultCard } from "./ui/evervault-card";
import { Button } from "@material-tailwind/react";
import { Dialogbox1 } from "./DialogBox1";
import { Dialogbox2 } from "./DialogBox2";

export const AceternityCards = ({ details }) => {
  const navigate = useNavigate();
  const { text, buttonLabel, tagline } = details;

  const cardsData = [
    {
      text: text,
      buttonLabel: buttonLabel,
      tagline: tagline,
    }
  ];

  return (
    <div className="flex flex-wrap justify-center items-center gap-6 p-6 bg-gradient-to-b from-gray-800 to-black w-80 h-fit">
      {cardsData.map((card, index) => (
        <div key={index} className="w-64 h-80 flex flex-col items-center justify-between">
          <EvervaultCard text={card.text} className="flex-1 shadow-lg rounded-3xl" />
          <div className="w-full flex flex-col items-center gap-2 mt-4">
            {}
            {card.text === "Winner" ? (
              <div className="bg-white text-center w-20 h-8 flex justify-center items-center rounded">
                <Dialogbox1 />
              </div>
            ) : card.text === "Score" ? (
              <div className="bg-white text-center w-20 h-8 flex justify-center items-center rounded">
                <Dialogbox2 />
              </div>
            ) : null}

            <p className="text-sm italic text-gray-300">{card.tagline}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
