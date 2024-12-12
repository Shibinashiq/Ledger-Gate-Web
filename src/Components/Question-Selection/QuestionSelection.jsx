import { Button, Card } from "@nextui-org/react"
import { ArrowLeft, Check, Copy } from 'lucide-react'
import { useState, useEffect } from "react"

export default function QuestionSelection() {
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
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="flex items-center justify-between bg-white px-4 py-3 shadow-sm">
        <div className="flex items-center gap-4">
          <Button isIconOnly variant="light" className="text-gray-700">
            <ArrowLeft size={20} />
          </Button>
          <h1 className="text-lg font-medium">Review Questions</h1>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Copy className="h-5 w-5 text-gray-500" />
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100">
              🕒
            </span>
            <span className="font-medium">{formatTime(timeLeft)}</span>
          </div>
          <Button color="warning" className="bg-orange-500 font-medium text-white">
            Finish
          </Button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="hidden md:flex flex-col gap-2 p-4 bg-white shadow-sm">
          {questions.map((q) => (
            <Button
              key={q.number}
              className={`h-10 w-10 min-w-[40px] ${
                q.active
                  ? "bg-green-500 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-50"
              }`}
              size="sm"
            >
              {q.number}
            </Button>
          ))}
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-auto">
          <div className="p-4 pb-20"> {/* Added padding at the bottom for footer space */}
            <Card className="bg-white p-6">
              <span className="text-sm text-gray-500 mb-2">Question No.1</span>
              <h2 className="text-lg font-medium mb-6">
                How are financial statements related to the objective of financial reporting?
              </h2>

              <div className="space-y-3">
                {/* Correct Answer */}
                <label className="flex items-start gap-4 p-4 rounded-lg bg-green-50 border border-green-200">
                  <div className="flex items-center h-5 mt-0.5">
                    <input
                      type="radio"
                      checked={true}
                      readOnly
                      className="h-4 w-4 accent-green-500"
                    />
                  </div>
                  <span className="text-sm flex-1">
                    Companies use financial statements to document their cash flow, and documenting cash flow is the objective of financial reporting.
                  </span>
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                </label>

                {/* Other Options */}
                {[
                  "Companies use financial statements to determine selling prices of products, and determining selling prices of products is the objective of financial reporting.",
                  "Companies use financial statements to determine which new projects to pursue, and deciding which projects to pursue is the objective of financial reporting.",
                  "Companies use financial statements to provide financial information to potential capital providers, and providing information to capital providers is the objective of financial reporting."
                ].map((text, index) => (
                  <label key={index} className="flex items-start gap-4 p-4 rounded-lg bg-white border border-gray-200">
                    <div className="flex items-center h-5 mt-0.5">
                      <input
                        type="radio"
                        disabled
                        className="h-4 w-4 accent-green-500"
                      />
                    </div>
                    <span className="text-sm">{text}</span>
                  </label>
                ))}
              </div>

              {/* Correct Answer Message */}
              <div className="mt-6">
                <div className="flex items-center gap-2 text-green-600 mb-4">
                  <Check className="h-5 w-5" />
                  <span className="font-medium">Your answered correctly</span>
                </div>

                {/* Explanations */}
                <div className="space-y-4 text-sm text-gray-600">
                  <div>
                    <p className="font-medium mb-1">Correct Answer Explanation for D</p>
                    <p>The main objective of financial reporting is to provide information to capital providers (investors and creditors). Financial statements are one way that information is provided to capital providers. Therefore, this is the correct answer.</p>
                  </div>

                  <div>
                    <p className="font-medium mb-1">Explanation for A</p>
                    <p>Documenting cash flow is important but it is not the sole objective of financial reporting. In addition, only one financial statement directly relates to cash flow. Therefore, this is an incorrect answer.</p>
                  </div>

                  <div>
                    <p className="font-medium mb-1">Explanation for B</p>
                    <p>Determining selling prices is not an objective of financial reporting. It is one goal of managerial accounting. Therefore, this is an incorrect answer.</p>
                  </div>

                  <div>
                    <p className="font-medium mb-1">Explanation for C</p>
                    <p>Determining which projects to pursue is not an objective of financial reporting. It is one goal of managerial accounting. Therefore, this is an incorrect answer.</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex border-t bg-white mt-auto sticky bottom-0 left-0 right-0">
        <Button
          variant="light"
          className="flex-1 rounded-none py-4 text-gray-700"
          startContent={<ArrowLeft size={18} />}
        >
          Previous
        </Button>
        <Button
          color="primary"
          className="flex-1 rounded-none py-4"
        >
          Next
        </Button>
      </div>
    </div>
  )
}

