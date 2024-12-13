import React from 'react'
import {  Card } from "@nextui-org/react";
import {  Check } from "lucide-react";
import { Button } from "@nextui-org/react";


function Answer() {
  return (
    <div className="mt-6 space-y-2 w-[80rem]">
    <Card className="bg-white p-6">
      {/* Correct Answer Message */}
      <div className="flex items-center gap-2 mb-4">
        <div className="flex items-center justify-center w-5 h-5 rounded-full bg-green-50">
          <Check className="h-3 w-3 text-green-600" />
        </div>
        <span className="text-sm font-medium">You answered correctly</span>
      </div>

      {/* Correct Answer Explanation */}
      <div className="mb-4 p-4 bg-green-50/50 rounded-lg">
        <p className="text-sm font-medium text-gray-900 mb-2">
          Correct Answer Explanation for D
        </p>
        <p className="text-sm text-gray-600">
          The main objective of financial reporting is to provide information to capital providers (investors and creditors). Financial statements are one way that information is provided to capital providers. Therefore, this is the correct answer.
        </p>
      </div>

      {/* Other Explanations */}
      <div className="">
        {["A", "B", "C"].map((key) => (
          <div key={key} className=" rounded-lg overflow-hidden p-4">
            <span className="text-sm font-medium text-gray-900">Explanation for {key}</span>
            <p className="text-sm text-gray-600 mt-2">
              Explanation content for {key}.
            </p>
          </div>
        ))}
      </div>
    </Card>
  </div>
  )
}

export default Answer