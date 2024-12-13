import React from 'react'
import { useState, useEffect } from "react";
import { ArrowLeft, Check, ChevronDown } from "lucide-react";
import { Button, Card } from "@nextui-org/react";

function Header({ onSubmit }) {
    const [timeLeft, setTimeLeft] = useState(84);
    useEffect(() => {
        const timer = setInterval(() => {
          setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);
        return () => clearInterval(timer);
      }, []);
    
    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
          .toString()
          .padStart(2, "0")}`;
      };
    
  return (
    <header className="flex items-center h-[4rem] border justify-between bg-white px-4 py-3 shadow-sm fixed top-0 left-0 w-full z-10">
        <div className="flex items-center gap-4">
          <Button isIconOnly variant="light" className="text-gray-700">
            <ArrowLeft size={20} />
          </Button>
          <h1 className="text-large font-sans">Review Questions</h1>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 rounded-full border p-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-100">
              🕒
            </span>
            <span className="font-medium">{formatTime(timeLeft)}</span>
          </div>
          <Button 
            onClick={onSubmit}
            color="warning" 
            className="bg-[#F36B25] w-12 h-11 font-medium text-white"
          >
            Finish
          </Button>
        </div>
      </header>
  )
}
export default Header