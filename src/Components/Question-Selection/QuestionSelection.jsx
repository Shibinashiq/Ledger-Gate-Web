import { Button, Card } from "@nextui-org/react"
import { ArrowLeft, Check, ChevronDown } from 'lucide-react'
import { useState, useEffect } from "react"
import flagicon from '../../assets/Flag.png'
export default function QuestionSelection() {
    const [timeLeft, setTimeLeft] = useState(84) // 1:24 in seconds
    const [expandedExplanation, setExpandedExplanation] = useState(null)
    const [selectedAnswer, setSelectedAnswer] = useState("")
  
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
  
    const toggleExplanation = (key) => {
      setExpandedExplanation(expandedExplanation === key ? null : key)
    }
  
    return (
      <div className="min-h-screen flex flex-col bg-gray-50">
        {/* Header (Fixed Navbar) */}
        <header className="flex items-center border justify-between bg-white px-4 py-3 shadow-sm fixed top-0 left-0 w-full z-10">
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
            <Button color="warning" className="bg-[#F36B25] w-12 h-11 font-medium text-white">
              Finish
            </Button>
          </div>
        </header>
  
        <div className="flex flex-1">
          {/* Sidebar (Fixed) */}
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
  
          {/* Main Content (Scrollable) */}
          <div className="flex-1 overflow-y-auto pl-[12rem] pr-4 mt-24 pb-[8rem]">
            <span className="inline-flex items-center px-2.5 mb-2 py-0.5 rounded-full text-xs font-medium bg-gray-200 text-black">
              Multiple Choice
            </span>
            <h2 className="text-lg font-medium mb-4">
              How are financial statements related to the objective of financial reporting?
            </h2>
  
            {/* Question Options */}
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
  
            {/* Explanations Section */}
            <div className="mt-6 space-y-2">
              <div className="flex items-center gap-2 text-green-600 mb-4">
                <Check className="h-5 w-5" />
                <span className="font-medium">You answered correctly</span>
              </div>
  
              {/* Correct Answer Explanation */}
              <div className="border rounded-lg">
                <div className="p-4">
                  <p className="font-medium mb-1">Correct Answer Explanation for D</p>
                  <p className="text-sm text-gray-600">
                    The main objective of financial reporting is to provide information to capital providers (investors and creditors). Financial statements are one way that information is provided to capital providers. Therefore, this is the correct answer.
                  </p>
                </div>
              </div>
  
              {/* Collapsible Explanations */}
              {[ 
                {
                  key: 'A',
                  title: 'Explanation for A',
                  content: 'Documenting cash flow is important, but it is not the sole objective of financial reporting. In addition, only one financial statement directly relates to cash flow. Therefore, this is an incorrect answer.'
                },
                {
                  key: 'B',
                  title: 'Explanation for B',
                  content: 'Determining selling prices is not an objective of financial reporting. It is one goal of managerial accounting. Therefore, this is an incorrect answer.'
                },
                {
                  key: 'C',
                  title: 'Explanation for C',
                  content: 'Determining which projects to pursue is not an objective of financial reporting. It is one goal of managerial accounting. Therefore, this is an incorrect answer.'
                }
              ].map((explanation) => (
                <div key={explanation.key} className="border rounded-lg">
                  <button
                    onClick={() => toggleExplanation(explanation.key)}
                    className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50"
                  >
                    <span className="font-medium">{explanation.title}</span>
                    <ChevronDown
                      className={`h-5 w-5 transition-transform ${expandedExplanation === explanation.key ? "rotate-180" : ""}`}
                    />
                  </button>
                  {expandedExplanation === explanation.key && (
                    <div className="p-4 pt-0">
                      <p className="text-sm text-gray-600">{explanation.content}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
  
        {/* Fixed Navigation Buttons */}
        <div className="fixed bottom-0 left-0 w-full bg-white  px-4 border-t border-gray-200 flex justify-between items-center z-10">
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
      </div>
    )
  }
  
