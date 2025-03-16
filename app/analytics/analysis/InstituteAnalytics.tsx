"use client"

import { useState, useEffect } from "react"
import { LineChart } from "@/ui/graphs/LineChart"
import { PieChart } from "@/ui/graphs/PieChart"
import { HorizontalBarChart } from "@/ui/graphs/HorizontalBarChart"
import { ChartLoading } from "@/ui/graphs/ChartLoading"
import { InstituteProp, subjects } from "@/data/data"

const colors = [
  "#8884d8",
  "#82ca9d",
  "#ffc658",
  "#ff8042",
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#d0ed57",
  "#a4de6c",
  "#FF8042",
]

// Mock data - replace with your actual data fetching logic
const generateMockData = (instituteId: string, timeRange: "day" | "week" | "month" | "year") => {
  // Generate random data for demonstration
  const times = timeRange === 'day' ?
    Array.from({ length: 12 }, (_, i) => `${(new Date().getHours() - (11 - i) + 24) % 24}:00`) :
    timeRange === 'week' ?
    Array.from({ length: 7 }, (_, i) => {
      const date = new Date()
      date.setDate(date.getDate() - i)
      return date.toLocaleDateString("en-US", { weekday: "short" })
    }).reverse() :
    timeRange === 'month' ?
    Array.from({ length: 30 }, (_, i) => {
      const date = new Date()
      date.setDate(date.getDate() - i)
      return date.toLocaleDateString("en-GB", { day: '2-digit', month: '2-digit' })
    }).reverse() :
    Array.from({ length: 12 }, (_, i) => {
      const date = new Date()
      date.setMonth(date.getMonth() - i)
      return date.toLocaleDateString("en-GB", { month: "2-digit", year: "2-digit" })
    }).reverse()

  const disciplines = subjects.map(subject => subject.fieldName)

  // Page views
  const pageViewsData = times.map((time) => ({
    time,
    views: Math.floor(Math.random() * 1000) + 500,
  }))

  // Users
  const usersData = times.map((time) => ({
    time,
    users: Math.floor(Math.random() * 500) + 200,
  }))

  // Discipline-wise users
  const disciplineUsersData = disciplines.map((discipline, index) => ({
    name: discipline,
    value: Math.floor(Math.random() * 1000) + 100,
    color: colors[index],
  }))

  // Discipline-wise page views
  const disciplineViewsData = disciplines.map((discipline) => ({
    discipline,
    views: Math.floor(Math.random() * 2000) + 1000,
  }))

  return {
    pageViewsData,
    usersData,
    disciplineUsersData,
    disciplineViewsData,
    instituteId,
  }
}

export default function InstituteAnalytics({ institute }: { institute: Omit<InstituteProp, 'src'> }) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [timeRange, setTimeRange] = useState<"day" | "week" | "month" | "year">("week")

  useEffect(() => {
    setLoading(true)

    // Simulate API call
    setTimeout(() => {
      const mockData = generateMockData(institute.id.toString(), timeRange)
      setData(mockData)
      setLoading(false)
    }, 500)
  }, [institute.id, timeRange])

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ChartLoading height={300} message="Loading analytics data..." />
        <ChartLoading height={300} message="Loading analytics data..." />
        <ChartLoading height={400} message="Loading analytics data..." />
        <ChartLoading height={400} message="Loading analytics data..." />
      </div>
    )
  }

  if (!data) {
    return <div className="text-center text-gray-400">No data available</div>
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <h1 className="text-2xl font-bold text-violet-300">Analytics for {institute.name}</h1>

        <div className="flex items-center space-x-2 bg-violet-950/50 rounded-lg p-1">
          {["day", "week", "month", "year"].map((range) => (
            <button
              key={range}
              onClick={() => setTimeRange(range as typeof timeRange)}
              className={`px-3 py-1.5 rounded-md text-sm ${
                timeRange === range
                  ? "bg-violet-700 text-white"
                  : "text-gray-400 hover:text-white hover:bg-violet-900/50"
              }`}
            >
              {range.charAt(0).toUpperCase() + range.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <LineChart
          data={data.pageViewsData}
          lines={[{ dataKey: "views", name: "Page Views", color: "#8884d8" }]}
          xAxisKey='time'
          title={`${timeRange.charAt(0).toUpperCase() + timeRange.slice(1)}-wise Page Views`}
          description={`Number of page views per ${timeRange}`}
          height={300}
        />

        <LineChart
          data={data.usersData}
          lines={[{ dataKey: "users", name: "Users", color: "#82ca9d" }]}
          xAxisKey='time'
          title={`${timeRange.charAt(0).toUpperCase() + timeRange.slice(1)}-wise Users`}
          description={`Number of users per ${timeRange}`}
          height={300}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <PieChart
          data={data.disciplineUsersData}
          title="Discipline-wise Users"
          description="Distribution of users across different disciplines"
          height={400}
        />

        <HorizontalBarChart
          data={data.disciplineViewsData}
          bars={[{ dataKey: "views", name: "Page Views", color: "#8884d8" }]}
          yAxisKey="discipline"
          title="Discipline-wise Page Views"
          description="Number of page views per discipline"
          height={400}
        />
      </div>
    </div>
  )
}

