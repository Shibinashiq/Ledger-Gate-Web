import React from 'react'
import { Button, Card } from "@nextui-org/react";

function Sidebar() {
    
  const questions = [
    { number: 1, active: true },
    { number: 2, active: false },
    { number: 3, active: false },
    { number: 4, active: false },
    { number: 5, active: false },
    { number: 6, active: false },
    { number: 7, active: false },
    { number: 8, active: false },
  ];

  return (
    <div className="hidden md:flex flex-col gap-2 p-4 bg-white shadow-sm fixed top-16 left-0 h-[calc(100vh-64px)] z-20">
    {questions.map((q) => (
      <Button
        key={q.number}
        className={`h-8 w-15 ${
          q.active
            ? "bg-[#27B667] text-white hover:bg-[#229956]"
            : "bg-white border hover:bg-gray-100"
        }`}
        size="sm"
      >
        {q.number}
      </Button>
    ))}
  </div>
  )
}

export default Sidebar