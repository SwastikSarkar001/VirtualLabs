import Footer from "@/ui/basic/Footer";
import Navbar from "@/ui/basic/Navbar";
import { BarChart } from "@/ui/graphs/BarChart";
import { courseMetrics, disciplineMetrics, instituteMetrics } from "@/data/metrics";
import { PieChart } from "@/ui/graphs/PieChart";
import { LineChart } from "@/ui/graphs/LineChart";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-montserrat-font",
});


const colors = [
  "#00BFFF",
  "#BB86FC",
  "#03DAC6",
  "#FF8A65",
  "#FF4081",
  "#FFEB3B",
  "#00ACC1",
  "#AEEA00",
  "#FF5252"
]

export function generateMetadata() {
  return {
    title: "Summary",
    description: "Summary of user engagement with Virtual Labs"
  }
}

export default function Home() {
  return (
    <main className="flex flex-col items-stretch font-body min-h-screen">
      <Navbar />
      <section className="mt-24 mx-4 sm:mx-8 md:mx-16 xl:mx-16 flex flex-col gap-4 flex-grow">
        <div className="mb-4">
          <h1 className={`text-4xl mb-1 font-bold text-center ${montserrat.className}`}>Summary</h1>
          <h2 className="text-xl text-center text-gray-400">(January 2020 - Present)</h2>
        </div>
        <BarChart
          data={instituteMetrics}
          bars={[
            { dataKey: 'users', name: 'Users', color: 'hsl(221, 83%, 53%)' },
            { dataKey: 'views', name: 'Page Views', color: 'hsl(142, 71%, 45%)' }
          ]}
          xAxisKey="shortName"
          yAxisUnit="M"
          title="Page Views and Number of Users of each Institutes"
          description="This bar chart displays the number of users and page views for each institute, providing a clear comparison of user engagement across different institutes."
          height={300}
          className="mb-4 border-gray-300/40 rounded-xl md:px-8 md:py-6"
          />
        <PieChart
          data={
            disciplineMetrics.map((discipline, index) => ({
              name: discipline.discipline,
              value: discipline.users,
              color: colors[index % colors.length]
            }))
          }
          title="Users by Discipline"
          description="This pie chart illustrates the distribution of users across various disciplines, highlighting the user base for each discipline."
          height={350}
          innerRadius={50}
          outerRadius={90}
          paddingAngle={3}
          className="mb-4 border-gray-300/40 rounded-xl md:px-8 md:py-6"
        />
        <PieChart
          data={
            disciplineMetrics.map((discipline, index) => ({
              name: discipline.discipline,
              value: discipline.views,
              color: colors[index % colors.length]
            }))
          }
          title="Page Views by Discipline"
          description="This pie chart shows the distribution of page views across different disciplines, providing insights into which disciplines are most frequently viewed."
          height={350}
          outerRadius={90}
          paddingAngle={3}
          className="mb-4 border-gray-300/40 rounded-xl md:px-8 md:py-6"
          />
        <LineChart
          data={courseMetrics}
          className="mb-12 border-gray-300/40 rounded-xl md:px-8 md:py-6"
          lines={[
            { dataKey: "users", name: "Users", color: "hsl(221, 83%, 53%)" },
            { dataKey: "views", name: "Page Views", color: "hsl(142, 71%, 45%)" },
          ]}
          xAxisKey="courseName"
          yAxisUnit="M"
          title="Top 10 Courses by Users and Page Views"
          description="This line chart displays the number of users and page views for the top 10 courses, providing insights into the popularity of different courses."
          height={350}
        />
      </section>
      <Footer />
    </main>
  )
}