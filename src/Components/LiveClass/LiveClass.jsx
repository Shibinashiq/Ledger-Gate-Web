"use client"

import React from "react"
import { Card, CardBody } from "@nextui-org/card"
import { Tabs, Tab } from "@nextui-org/tabs"
import { Chip } from "@nextui-org/chip"
import { PlayCircle, Calendar, HelpCircle } from 'lucide-react'

const ClassCard = ({ 
  title, 
  chapter, 
  date, 
  time, 
  isLive, 
  isDoubt, 
  doubtCount 
}) => (
  <Card className={isLive ? "border border-red-100 bg-red-50/30" : ""}>
    <CardBody className="p-4">
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-3">
          {isDoubt ? (
            <HelpCircle className="mt-1 h-5 w-5 text-gray-600" />
          ) : (
            <PlayCircle className="mt-1 h-5 w-5 text-gray-600" />
          )}
          <div>
            <h3 className="font-semibold text-gray-900">{title}</h3>
            <p className="text-sm text-gray-500">{chapter}</p>
          </div>
        </div>
        {isLive && (
          <Chip 
            size="sm" 
            color="danger"
            className="bg-red-500 text-white"
          >
            Live Now
          </Chip>
        )}
        {isDoubt && doubtCount && (
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-xs text-blue-500">
            {doubtCount}
          </span>
        )}
      </div>
      {(date || time) && (
        <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
          <Calendar className="h-4 w-4" />
          <span>{date}</span>
          {time && <span className="ml-auto">{time}</span>}
        </div>
      )}
    </CardBody>
  </Card>
)

const MonthSection = ({ month, classes }) => {
  // Find all live classes and other classes
  const liveClasses = classes.filter((classItem) => classItem.isLive);
  const normalClasses = classes.filter((classItem) => !classItem.isLive);

  // Create a new array with 6 slots (2 rows × 3 columns)
  const arrangedClasses = new Array(6).fill(null);

  // Place live classes in the first row (positions 0, 1, 2)
  liveClasses.forEach((liveClass, index) => {
    if (index < 3) { // Only fill first row
      arrangedClasses[index] = liveClass;
    }
  });

  // Fill second row with normal classes (positions 3, 4, 5)
  normalClasses.forEach((normalClass, index) => {
    if (index < 3) { // Only fill second row
      arrangedClasses[index + 3] = normalClass;
    }
  });

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-gray-900">{month}</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {arrangedClasses.map((classItem, index) => (
          <div key={index}>
            {classItem && <ClassCard {...classItem} />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default function LiveClass() {
  const novemberClasses = [
    {
      title: "Financial Statement Analysis",
      chapter: "Chapter E1",
      date: "25",
      time: "10:30 AM - 11:30 AM",
      isLive: true
    },
    {
      title: "Capital budgeting Process",
      chapter: "Chapter E1",
      date: "23",
      time: "10:30 AM - 11:30 AM",
      isLive: true

    },
    {
      title: "Doubt clearing session",
      chapter: "Section A",
      date: "24",
      time: "11:30 AM - 12:30 PM",
      isDoubt: true,
      doubtCount: 2
    },
    {
      title: "Financial Statement Analysis",
      chapter: "Chapter E3",
      date: "25",
      time: "12:30 PM - 1:30 PM"
    },
    {
      title: "Strategic Cost Management",
      chapter: "Chapter E4",
      date: "26",
      time: "1:30 PM - 2:30 PM"
    }
  ];

  const decemberClasses = [
    {
      title: "Capital budgeting Process",
      chapter: "Chapter E1"
    },
    {
      title: "Doubt clearing session",
      chapter: "Section A",
      isDoubt: true,
      doubtCount: 2
    },
    {
      title: "Financial Statement Analysis",
      chapter: "Chapter E3"
    }
  ];

  return (
     <div 
          className="min-w-full min-h-full p-6" 
          style={{
            background: `linear-gradient(to bottom, #FDE7C7 10%, #F4F4F4 40%)`,
          }}
        >
   <div className=" ml-16 mt-3">
          <h1 className=" text-2xl font-bold text-gray-900">Live Class</h1>
          
          <Tabs 
            aria-label="Class status" 
            color="warning"
            variant="underlined"
            classNames={{
              tabList: "gap-6 w-full relative rounded-none p-0 border-b border-gray-200",
              cursor: "w-full bg-[#FF6B00]",
              tab: "max-w-fit px-0 h-12",
              tabContent: "group-data-[selected=true]:text-[#FF6B00]"
            }}
          >
            <Tab 
              key="upcoming" 
              title={
                <span className="px-0 font-medium">Upcoming</span>
              }
            >
              <Card className="h-[500px] w-[1200px] ">
                <CardBody className="p-6 overflow-y-auto">
                  <div className="">
                    <MonthSection month="November 2024" classes={novemberClasses} />
                  </div>
                </CardBody>
              </Card>
            </Tab>
            <Tab 
              key="completed" 
              title={
                <span className="px-0 font-medium">Completed</span>
              }
            >
              <Card className="h-[500px] mt-4">
                <CardBody className="p-6 overflow-y-auto">
                  <div className="">
                    <MonthSection month="November 2024" classes={novemberClasses} />
                    <MonthSection month="November 2024" classes={novemberClasses} />
                    <MonthSection month="December 2024" classes={decemberClasses} />
                  </div>
                </CardBody>
              </Card>
            </Tab>
          </Tabs>
        </div>
      </div>
  )
}
