import React from 'react'
import { Button, Card } from "@nextui-org/react";
// import { ArrowLeft, Check, ChevronDown } from "lucide-react";
// import { useState, useEffect } from "react";
import flagicon from "../../assets/Flag.png";


function Footer() {
  return (
    <div className="fixed bottom-0 left-0 w-full  bg-gray-50 px-4 border-t border-gray-200 flex justify-between items-center z-10">
            {/* Left Icon */}
            <div className="flex items-center ml-28">
              <img src={flagicon} alt="Icon Description" className="h-10 w-full object-contain" />
            </div>

            {/* Buttons on the Right */}
            <div className="flex relative h-16 justify-center items-center gap-4">
              <Button color="black" className="w-32 h-10 rounded-xl font-semibold bg-black text-white">
                Previous
              </Button>
              <Button color="black" className="w-32 h-10 rounded-xl font-semibold bg-black text-white">
                Next
              </Button>
            </div>
          </div>
  )
}

export default Footer