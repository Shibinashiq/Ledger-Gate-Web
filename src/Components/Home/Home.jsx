import { Card, Badge, Avatar } from "@nextui-org/react"
import { ChevronRight, Star, TrendingUp ,User} from 'lucide-react'
import { ChevronDown } from 'lucide-react'
import subjectIcon from '../../assets/reservation-table.png';




export default function HomePage() {
  return (
    <div className="min-h-screen  min-w-full p-14 ">
      {/* Header */}

      <div className="mb-8 flex justify-between items-center">
    <div>
        <h1 className="text-2xl font-bold">Welcome back!</h1>
        <p className="text-sm text-gray-600">Your Path to Professional Excellence!</p>
    </div>
        <Card className="p-3 w-fit cursor-pointer hover:bg-gray-50" isPressable>
            <div className="flex items-center gap-2">
                <p className="text-sm text-gray-600">My course:</p>
                <p className="font-semibold flex items-center">
                    CMA 
                    <ChevronDown className="h-4 w-4 ml-2 text-gray-500 transition-transform group-hover:rotate-180" />
                </p>
            </div>
        </Card>

    </div>

      {/* Feature Cards */}
      
      <div className="mb-8 grid gap-4 md:grid-cols-3">
        <Card>
          <div className="bg-amber-100 p-6">
            <div className="flex justify-between">
              <div>
                <h3 className="text-md font-semibold mb-2">Grow your career with</h3>
                <p className="font-bold">Ledger gate</p>
              </div>
              <Star className="h-6 w-6 text-amber-400" />
            </div>
            <div className="mt-4">
              <TrendingUp className="h-20 w-20 text-amber-200" />
            </div>
          </div>
        </Card>

        <Card>
          <div className="bg-purple-100 p-6">
            <div className="flex justify-between">
              <div>
                <h3 className="text-md font-semibold mb-2">Elevate your future with</h3>
                <p className="font-bold">expert mentors</p>
              </div>
              <Badge color="secondary">New</Badge>
            </div>
            <div className="mt-4">
              <Star className="h-20 w-20 text-purple-200" />
            </div>
          </div>
        </Card>

        <Card>
          <div className="bg-blue-100 p-6">
            <div className="flex justify-between">
              <div>
                <h3 className="text-md font-semibold mb-2">Grow your career with</h3>
                <p className="font-bold">Ledger gate</p>
              </div>
              <Star className="h-6 w-6 text-blue-400" />
            </div>
            <div className="mt-4">
              <TrendingUp className="h-20 w-20 text-blue-200" />
            </div>
          </div>
        </Card>
      </div>

      {/* Subjects */}
      <div className="mb-8">
        <Card className="">
                    <h2 className="text-xl font-semibold mb-4 p-4">Subjects</h2>
            <div className="grid gap-4 md:grid-cols-3 p-4 pt-0">
                {['Part 1', 'Part 2', 'Part 3'].map((part, index) => (
                    <Card key={index} isPressable className="w-full h-16">
                        <div className="p-3">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    {/* Using the PNG image as an icon */}
                                    <img src={subjectIcon} alt="Subject Icon" className="h-auto w-10 " />
                                    <p className="font-medium">{part}</p>
                                </div>
                                <ChevronDown className="h-4 w-4 text-gray-500 transition-transform group-hover:rotate-180" />
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </Card>
    </div>


      {/* Top Hiring Companies */}
      {/* Top Hiring Companies */}
        <div className="mb-8">
        <Card>
            <h2 className="text-xl font-semibold mb-4 p-4">Top Hiring Companies</h2>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 p-4 pt-0">
            {['EY', 'accenture', 'CATERPILLAR', 'EY'].map((company, index) => (
                <Card key={index}>
                <div className="h-20 flex items-center justify-center">
                    <img
                    src={`/placeholder.svg?height=48&width=48&text=${company}`}
                    alt={company}
                    className="h-12= w-12 object-contain"
                    />
                </div>
                </Card>
            ))}
            </div>
        </Card>
        </div>

      {/* Top Mentors */}
      {/* Top Mentors */}
     
      <div className="mb-8">
            <Card>
                <h2 className="text-xl font-semibold mb-4 p-4">Top Mentors</h2>
                <div className="grid grid-cols-3 gap-4 md:grid-cols-6 p-4 pt-0">
                {[
                    { name: 'Maria Paul', role: 'Managing Partner' },
                    { name: 'Anwar Ali', role: 'Managing Partner' },
                    { name: 'David Peter', role: 'Managing Partner' },
                    { name: 'Maria Paul', role: 'Managing Partner' },
                    { name: 'Anwar Ali', role: 'Managing Partner' },
                    { name: 'David Peter', role: 'Managing Partner' },
                ].map((mentor, index) => (
                    <div key={index} className="flex flex-col items-center">
                       <Card className="mb-2" style={{ width: '4rem', height: '65px' }}>
                                <div className="p-4 flex justify-center items-center">
                                    <User className="h-8 w-8 text-gray-400" />
                                </div>
                            </Card>
                        <div className="text-center">
                            <p className="text-sm font-medium">{mentor.name}</p>
                            <p className="text-xs text-gray-600">{mentor.role}</p>
                        </div>
                    </div>
                ))}
                </div>
            </Card>
        </div>

    {/* Top Videos */}
        <div className="mb-8">
        <Card>
            <h2 className="text-xl font-semibold mb-4 p-4">Top Videos</h2>
            <div className="grid gap-4 md:grid-cols-4 p-4 pt-0">
            {[
                'Introduction to Principles',
                'Get Started with ACCA',
                'Introduction to Principles',
                'Get Started with ACCA',
            ].map((title, index) => (
                <Card key={index} isPressable>
                <div>
                    <img
                    src={`/placeholder.svg?height=180&width=320&text=Video ${index + 1}`}
                    alt={title}
                    className="w-full h-auto object-cover"
                    />
                    <div className="p-3">
                    <p className="text-sm font-medium">{title}</p>
                    </div>
                </div>
                </Card>
            ))}
            </div>
        </Card>
        </div>
    </div>
  )
}

