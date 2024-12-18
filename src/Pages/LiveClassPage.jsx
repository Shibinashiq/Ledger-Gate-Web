import React from "react";
import Navbar from "../Components/Layout/Navbar"; 
import Sidebar from "../Components/Layout/Sidebar"; 
import LiveClass from "../Components/LiveClass/LiveClass";

const LiveClassPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
    <Navbar />

    <div className="flex flex-1 overflow-hidden">
      {/* Sidebar */}
      <Sidebar className="w-64 bg-gray-100" />

      {/* Main Content */}
      <div className="flex-1   overflow-auto">
        <LiveClass />
      </div>
    </div>
  </div>
  );
};

export default LiveClassPage;
