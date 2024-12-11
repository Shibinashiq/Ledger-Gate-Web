import { RadioGroup, Radio, Button, Card } from "@nextui-org/react"
import { ArrowLeft } from 'lucide-react'
import { useState, useEffect } from "react"

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

  const answers = [
    "Companies use financial statements to document their cash flow, and documenting cash flow is the objective of financial reporting.",
    "Companies use financial statements to determine selling prices of products, and determining selling prices of products is the objective of financial reporting.",
    "Companies use financial statements to determine which new projects to pursue, and deciding which projects to pursue is the objective of financial reporting.",
    "Companies use financial statements to provide financial information to potential capital providers, and providing information to capital providers is the objective of financial reporting.",
  ]

  return (
    <div className="h-[100px]  bg-gray-50 p-4">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button isIconOnly variant="light" className="text-gray-700">
            <ArrowLeft size={20} />
          </Button>
          <h1 className="text-lg font-medium">Review Questions</h1>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white">
              🕒
            </span>
            <span className="font-medium">{formatTime(timeLeft)}</span>
          </div>
          <Button color="danger" className="bg-orange-500 font-medium">
            Finish
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-[auto,1fr]">
        {/* Question Numbers */}
        <div className="flex flex-row md:flex-col gap-2">
          {questions.map((q) => (
            <Button
              key={q.number}
              className={`h-10 w-10 ${
                q.active
                  ? "bg-blue-500 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
              size="sm"
            >
              {q.number}
            </Button>
          ))}
        </div>

        {/* Question Content */}
        <Card className="p-6">
          <div className="mb-6">
            <span className="text-sm text-gray-500">Question No.1</span>
            <h2 className="text-lg font-medium">
              How are financial statements related to the objective of financial reporting?
            </h2>
          </div>

          <RadioGroup 
            value={selectedAnswer} 
            onValueChange={setSelectedAnswer}
          >
            {answers.map((answer, index) => (
              <Radio key={index} value={index.toString()}>
                {answer}
              </Radio>
            ))}
          </RadioGroup>

          <div className="mt-6 flex justify-between">
            <Button
              variant="bordered"
              className="border-gray-300"
              startContent={<ArrowLeft size={18} />}
            >
              Previous
            </Button>
            <Button color="primary">
              Next
            </Button>
          </div>
        </Card>
      </div>
    </div>
  )
}

