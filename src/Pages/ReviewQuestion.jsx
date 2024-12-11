import React from "react";
import Navbar from "../Components/Layout/Navbar"; 
import Sidebar from "../Components/Layout/Sidebar"; 
import ReviewQuestions from "../Components/Review-Question/ReviewQuestion";
const ReviewQuestion = () => {
  return (
    <div>
      <Navbar />

      <div className="flex ">
        <Sidebar />

        <div className="flex flex-1  bg-gray-100 items-center justify-center">
            <ReviewQuestions /> 
        </div>
      </div>
    </div>
  );
};

export default ReviewQuestion;
