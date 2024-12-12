import { Button, Card } from "@nextui-org/react"
import { ArrowLeft } from 'lucide-react'
import { useState, useEffect } from "react"
import flagicon from '../../assets/Flag.png'


export default function ReviewQuestions() {
  const [selectedAnswer, setSelectedAnswer] = useState("")
  const [timeLeft, setTimeLeft] = useState(84) // 1:24 in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0))
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`
  }

  const questions = [
    { number: 1, active: true },
    { number: 2, active: false },
    { number: 3, active: false },
    { number: 4, active: false },
    { number: 5, active: false },
    { number: 6, active: false },
    { number: 7, active: false },
    { number: 8, active: false },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Header */}
      <header className="flex items-center  border  justify-between bg-white px-4 py-3 shadow-sm">
        <div className="flex items-center gap-4">
          <Button isIconOnly variant="light" className="text-gray-700">
            <ArrowLeft size={20} />
          </Button>
          <h1 className="text-large font-sans  ">Review Questions</h1>
        </div>
        <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 rounded-full border p-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-100">
            🕒
          </span>
          <span className="font-medium">{formatTime(timeLeft)}</span>
        </div>

          <Button color="warning"  className="bg-[#F36B25] w-12 h-11 font-medium text-white">
            Finish
          </Button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden ">
        {/* Sidebar */}
        <div className="hidden absolute h-[39rem] overflow-hidden z-20 md:flex flex-col gap-2 p-4 bg-white shadow-sm"
        >
       
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

        {/* Main Content */}
       {/* Main Content */}
              <div className="flex-1 overflow-auto">
                <div className="pl-[12rem] pr-4  mt-8"> {/* Adjust padding to match the sidebar width */}
                  <span className="inline-flex items-center px-2.5 mb-2 py-0.5 rounded-full text-xs font-medium bg-gray-200 text-black">
                    Multiple Choice
                  </span>
                  <h2 className="text-lg font-medium mb-4 ">
                    How are financial statements related to the objective of financial reporting?
                  </h2>
                  <div className="space-y-4">
                    <label className="flex h-[60px] w-[80rem] items-center gap-4 p-4 border border-gray-200 rounded-2xl cursor-pointer hover:bg-gray-50 bg-white">
                      <input
                        type="checkbox"
                        name="answer"
                        value="1"
                        checked={selectedAnswer === "1"}
                        onChange={(e) => setSelectedAnswer(e.target.value)}
                        className="h-4 w-4 accent-black rounded"
                      />
                      <span className="text-sm">
                        Companies use financial statements to document their cash flow, and documenting cash flow is the objective of financial reporting.
                      </span>
                    </label>
                    <label className="flex items-center h-[60px] w-[80rem] gap-4 p-4 border border-gray-200 rounded-2xl cursor-pointer hover:bg-gray-50 bg-white">
                      <input
                        type="checkbox"
                        name="answer"
                        value="2"
                        checked={selectedAnswer === "2"}
                        onChange={(e) => setSelectedAnswer(e.target.value)}
                        className="h-4 w-4 accent-black rounded"
                      />
                      <span className="text-sm">
                        Companies use financial statements to determine selling prices of products, and determining selling prices of products is the objective of financial reporting.
                      </span>
                    </label>
                    <label className="flex items-center h-[60px] w-[80rem] gap-4 p-4 border border-gray-200 rounded-2xl cursor-pointer hover:bg-gray-50 bg-white">
                      <input
                        type="checkbox"
                        name="answer"
                        value="3"
                        checked={selectedAnswer === "3"}
                        onChange={(e) => setSelectedAnswer(e.target.value)}
                        className="h-4 w-4 accent-black rounded"
                      />
                      <span className="text-sm">
                        Companies use financial statements to determine which new projects to pursue, and deciding which projects to pursue is the objective of financial reporting.
                      </span>
                    </label>
                    <label className="flex items-center h-[60px] w-[80rem] gap-4 p-4 border border-gray-200 rounded-2xl cursor-pointer hover:bg-gray-50 bg-white">
                      <input
                        type="checkbox"
                        name="answer"
                        value="4"
                        checked={selectedAnswer === "4"}
                        onChange={(e) => setSelectedAnswer(e.target.value)}
                        className="h-4 w-4 accent-black rounded"
                      />
                      <span className="text-sm">
                        Companies use financial statements to provide financial information to potential capital providers, and providing information to capital providers is the objective of financial reporting.
                      </span>
                    </label>
                  </div>
                </div>
              </div>

      </div>

      {/* Navigation Buttons */}
          <div className="flex justify-between relative items-center border-t mb-2 border-gray-200  px-4">
            {/* Left Icon */}
              <div className="flex items-center ml-28">
                <img src={flagicon} 
                    alt="Icon Description" 
                    className="h-10 w-full object-contain"
                  />
              </div>



            {/* Buttons on the Right */}
                <div className="flex relative  h-16 justify-center items-center gap-4 ">
                  <Button
                    color="black"
                    className="w-32 h-10 rounded-xl  font-semibold  bg-black text-white"

                  >
                    Previous
                  </Button>
                  <Button
                    color="black"
                    className="w-32 h-10 rounded-xl font-semibold bg-black text-white"
                  >
                       Next
                  </Button>
               </div>

          </div>

    </div>
  )
}

