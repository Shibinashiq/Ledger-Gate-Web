import React from "react";
import Navbar from "../Components/Layout/Navbar"; 
import Sidebar from "../Components/Layout/Sidebar"; 
import Report from "../Components/Report/Report";
const ReportPage = () => {
  return (
    <div>
      <Navbar />

      <div className="flex ">
        <Sidebar />

        <div className="flex flex-1  bg-gray-100 items-center justify-center">
            <Report /> 
        </div>
      </div>
    </div>
  );
};

export default ReportPage;
