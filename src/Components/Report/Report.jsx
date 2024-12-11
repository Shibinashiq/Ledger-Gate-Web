import { Tabs, Tab, Progress, Card, Accordion, AccordionItem } from "@nextui-org/react"
import { ChevronDown, ChevronUp } from 'lucide-react'

export default function Report() {
  const sections = [
    {
      title: "Part 1",
      progress: 20,
      subsections: [
        {
          title: "Section A",
          completion: "2/10 Completed",
          progress: 20,
          levels: [
            { name: "Beginner", progress: 10 },
            { name: "Intermediate", progress: 30 },
            { name: "Advanced", progress: 50 },
          ],
        },
        {
          title: "Section B",
          completion: "0/10 Completed",
          progress: 0,
          levels: [
            { name: "Beginner", progress: 0 },
            { name: "Intermediate", progress: 0 },
            { name: "Advanced", progress: 0 },
          ],
        },
        // Add other subsections here...
      ],
    },
    {
      title: "Part 2",
      progress: 50,
      subsections: [
        {
          title: "Section A",
          completion: "5/10 Completed",
          progress: 50,
          levels: [
            { name: "Beginner", progress: 30 },
            { name: "Intermediate", progress: 50 },
            { name: "Advanced", progress: 70 },
          ],
        },
        // Add other subsections here...
      ],
    },
  ]

  return (
    <div className="min-h-screen min-w-full bg-gradient-to-b from-blue-50 to-white p-6">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-6 text-2xl font-bold">Report</h1>

        <Tabs aria-label="Report sections" color="primary" variant="light" className="mb-6">
          <Tab key="exams" title="Exams" />
          <Tab key="video-watch" title="Video Watch" />
          <Tab key="snap-test" title="Snap Test" />
        </Tabs>

        {/* Main Card containing all sections */}
        <Card className="p-4 shadow-sm">
          <div className="space-y-4">
            {sections.map((section, index) => (
              <div key={index} className="mb-6">
                {/* Section Title and Progress */}
                <div className="mb-4">
                  <div className="mb-2 flex items-center justify-between">
                    <h2 className="text-lg font-semibold">{section.title}</h2>
                    <span className="text-sm text-gray-500">{section.progress}%</span>
                  </div>
                  <Progress value={section.progress} className="h-2" color="success" />
                </div>

                {/* Accordion for subsections */}
                <Accordion className="grid grid-cols-2 gap-4" variant="splitted">
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
                      {/* Levels within each subsection */}
                      <div className="space-y-3 pt-2">
                        {subsection.levels.map((level, levelIndex) => (
                          <div key={levelIndex}>
                            <div className="mb-1 flex items-center justify-between">
                              <span className="text-sm">{level.name}</span>
                              <span className="text-sm text-gray-500">{level.progress}%</span>
                            </div>
                            <Progress value={level.progress} className="h-1.5" color="success" />
                          </div>
                        ))}
                      </div>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}
