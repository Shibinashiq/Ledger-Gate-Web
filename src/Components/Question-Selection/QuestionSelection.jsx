import React, { useState, useCallback } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Answer from "./Answer";

export default function QuestionSelection() {
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const CORRECT_ANSWER = "1";

  const handleAnswerSelection = (value) => {
    if (!isSubmitted) {
      setSelectedAnswer(value);
    }
  };

  const handleSubmit = useCallback(() => {
    if (selectedAnswer) {
      setIsSubmitted(true);
    }
  }, [selectedAnswer]);

  const getOptionClassName = (value) => {
    if (!isSubmitted) {
      return selectedAnswer === value 
        ? " " 
        : "";
    }
    
    if (value === CORRECT_ANSWER) {
      return "border-green-500 bg-[#FFEDCB]";
    }
    
    if (selectedAnswer === value && selectedAnswer !== CORRECT_ANSWER) {
      return "border-red-500 bg-[#FFEDCB]";
    }
    
    return "border-gray-200";
  };

  const getIndicatorStyle = (value) => {
    if (!isSubmitted) return null;

    if (value === CORRECT_ANSWER) {
      return {
        text: "Correct",
        className: "bg-green-500 text-white"
      };
    }

    if (selectedAnswer === value && selectedAnswer !== CORRECT_ANSWER) {
      return {
        text: "Wrong",
        className: "bg-red-500 text-white"
      };
    }

    return null;
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header onSubmit={handleSubmit} />

      <div className="flex flex-1">
        <Sidebar />

        <div className="flex-1 overflow-y-auto pl-[12rem] pr-4 mt-24 pb-[8rem]">
          <span className="inline-flex items-center px-2.5 mb-2 py-0.5 rounded-full text-xs font-medium bg-gray-200 text-black">
            Question no: 1
          </span>
          <h2 className="text-lg font-medium mb-4">
            How are financial statements related to the objective of financial reporting?
          </h2>

          {/* Question Options */}
          <div className="space-y-6">
            {["1", "2", "3", "4"].map((value) => {
              const indicator = getIndicatorStyle(value);
              return (
                <div key={value} className="relative">
                  {/* Indicator Chip */}
                  {isSubmitted && indicator && (
                    <div 
                      className={`absolute -top-3 left-4 px-2 py-0.5 text-xs rounded-full z-10 ${indicator.className}`}
                    >
                      {indicator.text}
                    </div>
                  )}

                  <label
                    className={`flex h-[55px] w-[80rem] items-center gap-4 p-4 border rounded-2xl cursor-pointer 
                      ${getOptionClassName(value)} 
                      ${isSubmitted && indicator ? 'mt-2' : ''}`}
                  >
                    <input
                      type="checkbox"
                      name="answer"
                      value={value}
                      checked={selectedAnswer === value}
                      onChange={() => handleAnswerSelection(value)}
                      disabled={isSubmitted}
                      className="h-4 w-4 rounded accent-black"
                    />
                    <span className="text-sm text-black">
                      {`Option ${value} explanation`}
                    </span>
                  </label>
                </div>
              );
            })}
          </div>

          {/* Explanations Section */}
          {isSubmitted && <Answer />}

          {/* Fixed Navigation Buttons */}
          <Footer />
        </div>
      </div>
    </div>
  );
}