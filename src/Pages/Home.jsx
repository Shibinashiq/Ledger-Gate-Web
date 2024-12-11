import React from "react";
import Navbar from "../Components/Layout/Navbar"; 
import Sidebar from "../Components/Layout/Sidebar"; 
import Home from "../Components/Home/Home"
const HomePage = () => {
  return (
    <div>
      <Navbar />

      <div className="flex ">
        <Sidebar />

        <div className="flex flex-1  bg-gray-100 items-center justify-center">
            <Home /> 
        </div>
      </div>
    </div>
  );
};

export default HomePage;
