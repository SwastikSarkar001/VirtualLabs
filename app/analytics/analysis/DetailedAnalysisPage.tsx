"use client"

import { useState } from "react"
import AnalyticsSidebar from "./AnalyticsSidebar"
import InstituteAnalytics from "./InstituteAnalytics"
import { ChartLoading } from "@/ui/graphs/ChartLoading"
import { Montserrat } from "next/font/google";
import { institutes } from "@/data/data"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-montserrat-font",
});


// Mock data for institutes - replace with your actual data
const institutesData = institutes.map(institute => ({
  id: institute.id,
  name: institute.name
}))

export default function DetailedAnalysisPage() {
  const [selectedInstitute, setSelectedInstitute] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleInstituteSelect = (instituteId: string) => {
    setIsLoading(true)
    setSelectedInstitute(instituteId)

    // Simulate loading data
    setTimeout(() => {
      setIsLoading(false)
    }, 800)
  }

  return (
    <div className="pt-30 pb-16 min-h-screen text-foreground self-stretch">
      <h1 className={`text-4xl font-bold text-center mb-12 ${montserrat.className}`}>Detailed Analysis</h1>
      <div className="px-4">
        <div className="flex flex-col md:flex-row gap-6">
          <AnalyticsSidebar
            institutes={institutesData}
            selectedInstitute={selectedInstitute}
            onSelectInstitute={handleInstituteSelect}
          />
          <div className="flex-1">
            {!selectedInstitute && (
              <div className="flex flex-col items-center justify-center h-[60vh] text-center">
                <div className="text-4xl font-bold text-indigo-400 mb-4">Institute Analytics</div>
                <p className="text-gray-400 max-w-md">
                  Select an institute from the sidebar to view detailed analytics including page views, user statistics,
                  and discipline-wise data.
                </p>
              </div>
            )}

            {selectedInstitute && isLoading && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ChartLoading height={300} message="Loading institute data..." />
                <ChartLoading height={300} message="Loading institute data..." />
                <ChartLoading height={400} message="Loading page views..." />
                <ChartLoading height={400} message="Loading user data..." />
              </div>
            )}

            {selectedInstitute && !isLoading && <InstituteAnalytics institute={institutesData.find(institute => institute.id.toString() === selectedInstitute)!} />}
          </div>
        </div>
      </div>
    </div>
  )
}