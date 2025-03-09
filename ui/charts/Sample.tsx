"use client"

import { BarChart } from "@/ui/charts/BarCharts"
import { LineChart } from "@/ui/charts/LineCharts"
import { PieChart } from "@/ui/charts/PieCharts"

// Sample data for charts
const monthlyData = [
  { month: "Jan", revenue: 1200, expenses: 900, profit: 300 },
  { month: "Feb", revenue: 1400, expenses: 950, profit: 450 },
  { month: "Mar", revenue: 1300, expenses: 1000, profit: 300 },
  { month: "Apr", revenue: 1700, expenses: 1200, profit: 500 },
  { month: "May", revenue: 1600, expenses: 1100, profit: 500 },
  { month: "Jun", revenue: 2000, expenses: 1300, profit: 700 },
]

const deviceData = [
  { name: "Desktop", value: 45, color: "hsl(221, 83%, 53%)" },
  { name: "Mobile", value: 35, color: "hsl(262, 80%, 50%)" },
  { name: "Tablet", value: 20, color: "hsl(335, 78%, 58%)" },
]

const trafficData = [
  { day: "Mon", direct: 120, organic: 220, referral: 80 },
  { day: "Tue", direct: 140, organic: 250, referral: 90 },
  { day: "Wed", direct: 160, organic: 270, referral: 100 },
  { day: "Thu", direct: 180, organic: 300, referral: 120 },
  { day: "Fri", direct: 170, organic: 280, referral: 110 },
  { day: "Sat", direct: 150, organic: 240, referral: 95 },
  { day: "Sun", direct: 130, organic: 230, referral: 85 },
]

export default function Home() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="mb-8 text-2xl font-bold">Modern Recharts Examples</h1>

      <div className="mb-8">
        <h2 className="mb-4 text-xl font-semibold">Line Chart</h2>
        <LineChart
          data={trafficData}
          lines={[
            { dataKey: "direct", name: "Direct", color: "hsl(221, 83%, 53%)" },
            { dataKey: "organic", name: "Organic", color: "hsl(142, 71%, 45%)" },
            { dataKey: "referral", name: "Referral", color: "hsl(335, 78%, 58%)" },
          ]}
          xAxisKey="day"
          title="Website Traffic"
          description="Daily website traffic by source"
          height={350}
        />
      </div>

      <div className="mb-8">
        <h2 className="mb-4 text-xl font-semibold">Bar Chart</h2>
        <BarChart
          data={monthlyData}
          bars={[
            { dataKey: "revenue", name: "Revenue", color: "hsl(221, 83%, 53%)" },
            { dataKey: "expenses", name: "Expenses", color: "hsl(335, 78%, 58%)" },
            { dataKey: "profit", name: "Profit", color: "hsl(142, 71%, 45%)" },
          ]}
          xAxisKey="month"
          title="Financial Performance"
          description="Monthly revenue, expenses, and profit"
          height={350}
        />
      </div>

      <div className="mb-8">
        <h2 className="mb-4 text-xl font-semibold">Pie Chart</h2>
        <PieChart
          data={deviceData}
          title="Device Distribution"
          description="User sessions by device type"
          height={350}
        />
      </div>

      <div className="mb-8">
        <h2 className="mb-4 text-xl font-semibold">Stacked Bar Chart</h2>
        <BarChart
          data={trafficData}
          bars={[
            { dataKey: "direct", name: "Direct", color: "hsl(221, 83%, 53%)" },
            { dataKey: "organic", name: "Organic", color: "hsl(142, 71%, 45%)" },
            { dataKey: "referral", name: "Referral", color: "hsl(335, 78%, 58%)" },
          ]}
          xAxisKey="day"
          title="Traffic Composition"
          description="Daily traffic composition by source"
          height={350}
          stacked={true}
        />
      </div>

      <div className="mb-8">
        <h2 className="mb-4 text-xl font-semibold">Donut Chart</h2>
        <PieChart
          data={deviceData}
          title="Device Distribution"
          description="User sessions by device type"
          height={350}
          innerRadius={60}
          outerRadius={90}
        />
      </div>
    </main>
  )
}

