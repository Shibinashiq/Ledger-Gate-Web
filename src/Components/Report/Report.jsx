import { Card, Progress, Accordion, AccordionItem } from "@nextui-org/react"
import { ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'

export default function Report() {
  const [activeTab, setActiveTab] = useState("Exams")

  const tabs = ["Exams", "Video watch", "Snap test"]

  const sections = [
    {
      title: "Part 1",
      progress: 20,
      subsections: [
        {
          title: "Section A",
          completion: "2/10 Completed",
          progress: 20,
          topics: [
            { name: "Financial Statements", progress: 100 },
            { name: "Budgeting Methodologies", progress: 20 },
            { name: "Forecasting Techniques", progress: 80 },
            { name: "Budgeting Concepts", progress: 0 },
            { name: "Strategic Planning", progress: 0 },
          ],
        },
        { title: "Section B", completion: "0/10 Completed", progress: 0, topics: [] },
        { title: "Section C", completion: "0/10 Completed", progress: 0, topics: [] },
        { title: "Section D", completion: "0/10 Completed", progress: 0, topics: [] },
        { title: "Section E", completion: "0/10 Completed", progress: 0, topics: [] },
        { title: "Section F", completion: "0/10 Completed", progress: 0, topics: [] },
      ],
    },
    {
      title: "Part 2",
      progress: 0,
      subsections: [],
    },
  ]

  return (
    <div className="min-h-screen min-w-full bg-gradient-to-b from-[#C7D5FD] to-[#F4F4F4] p-6">

      <div className=" ml-16 mt-3">
        <h1 className="mb-6 text-2xl font-bold">Report</h1>

        <div className="mb-6 flex space-x-6 border-b border-gray-200">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`pb-2 text-sm font-medium ${
                activeTab === tab
                  ? "border-b-2 border-red-500 text-gray-900"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="space-y-4">
          {sections.map((section, index) => (
            <Card key={index} className="p-4 shadow-sm">
              <div className="mb-4">
                <div className="mb-2 flex items-center justify-between">
                  <h2 className="text-lg font-semibold">{section.title}</h2>
                  <span className="text-sm text-gray-500">{section.progress}%</span>
                </div>
                <Progress 
                  value={section.progress}
                  className="h-2"
                  color="success"
                />
              </div>

              <Accordion className="grid grid-cols-1 sm:grid-cols-2 gap-4" variant="splitted">
                {section.subsections.map((subsection, subIndex) => (
                  <AccordionItem
                    key={subIndex}
                    aria-label={subsection.title}
                    title={
                      <div className="flex items-center justify-between py-2">
                        <div className="flex items-center gap-4">
                          <div className="relative h-8 w-8">
                            <div className="absolute inset-0 rounded-full border-2 border-gray-200" />
                            <svg className="absolute inset-0" width="32" height="32" viewBox="0 0 32 32">
                              <circle
                                cx="16"
                                cy="16"
                                r="14"
                                fill="none"
                                stroke="#4ade80"
                                strokeWidth="2"
                                strokeDasharray="87.96459430051421"
                                strokeDashoffset={87.96459430051421 * (1 - subsection.progress / 100)}
                              />
                            </svg>
                          </div>
                          <div>
                            <p className="font-medium">{subsection.title}</p>
                            <p className="text-xs text-gray-500">{subsection.completion}</p>
                          </div>
                        </div>
                        {({ isOpen }) => (
                          isOpen ? (
                            <ChevronUp className="h-4 w-4 text-gray-400" />
                          ) : (
                            <ChevronDown className="h-4 w-4 text-gray-400" />
                          )
                        )}
                      </div>
                    }
                  >
                    <div className="space-y-3 pt-2">
                      {subsection.topics.map((topic, topicIndex) => (
                        <div key={topicIndex}>
                          <div className="mb-1 flex items-center justify-between">
                            <span className="text-sm">{topic.name}</span>
                            <span className="text-sm text-gray-500">{topic.progress}%</span>
                          </div>
                          <Progress 
                            value={topic.progress}
                            className="h-1.5"
                            color="success"
                          />
                        </div>
                      ))}
                    </div>
                  </AccordionItem>
                ))}
              </Accordion>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

