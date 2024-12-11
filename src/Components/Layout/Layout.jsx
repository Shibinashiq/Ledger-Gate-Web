import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function Layout() {
  return (
    <div className="flex h-screen">
      <Sidebar />

      <div className="flex flex-col flex-grow ">
        <Navbar />

        <div className="flex-grow p-4">
          <Outlet /> 
        </div>
      </div>
    </div>
  );
}

export default Layout;
