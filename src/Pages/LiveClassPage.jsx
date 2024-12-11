import React from "react";
import Navbar from "../Components/Layout/Navbar"; 
import Sidebar from "../Components/Layout/Sidebar"; 
import LiveClass from "../Components/LiveClass/LiveClass";

const LiveClassPage = () => {
  return (
    <div>
      <Navbar />

      <div className="flex ">
        <Sidebar />

        <div className="flex flex-1  bg-gray-100 items-center justify-center">
            <LiveClass /> 
        </div>
      </div>
    </div>
  );
};

export default LiveClassPage;
