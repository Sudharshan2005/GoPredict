/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";

export const AnimatedTestimonials = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setCurrentIndex(0);
  }, [testimonials]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex + 1) % testimonials.length
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1)
    );
  };

  const renderQuote = (quote) => {
    return quote.split('\n').map((line, index) => (
      <p key={index} className="text-xl italic text-gray-600">{line}</p>
    ));
  };

  return (
    <div className="w-full max-w-6xl mx-auto py-12 px-6">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="w-full h-96 md:w-1/2 flex justify-end items-center">
          <motion.img
            key={currentIndex}
            src={testimonials[currentIndex].src}
            alt={testimonials[currentIndex].name}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-sm rounded-lg shadow-lg object-cover"
          />
        </div>

        <div className="w-full mt-10 md:w-1/2">
          <div className="mb-4">
            <h2 className="text-3xl font-semibold text-white">
              {testimonials[currentIndex].name}
            </h2>
            <p className="text-sm text-gray-400 uppercase">
              {testimonials[currentIndex].team}
            </p>
          </div>

          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8 }}
          >
            {renderQuote(testimonials[currentIndex].quote)}
          </motion.div>

          <div className="flex justify-start gap-4 mt-6">
            <button
              onClick={handlePrev}
              className="p-2 rounded-full bg-blue-gray-600 hover:bg-gray-300 focus:outline-none"
            >
              <ArrowLeftIcon className="w-6 h-6 text-white hover:text-blue-gray-600" />
            </button>
            <button
              onClick={handleNext}
              className="p-2 rounded-full bg-blue-gray-600 hover:bg-gray-300 focus:outline-none"
            >
              <ArrowRightIcon className="w-6 h-6 text-white hover:text-blue-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
