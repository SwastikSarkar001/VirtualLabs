import Footer from "@/ui/basic/Footer";
import Navbar from "@/ui/basic/Navbar";
import Sidebar from "./sidebar"
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
  "#AEEA00",
  "#FF4081",
  "#FFEB3B",
  "#00ACC1",
  "#FF5252",
  "#FF8A65",
  "#03DAC6",
  "#BB86FC",
  "#00BFFF",
]

export function generateMetadata() {
  return {
    title: "Detailed Analysis | Virtual Labs",
    description: "Detailed analysis of user engagement with Virtual Labs"
  }
}

export default function Home() {
  return (
    <main className="flex flex-col items-stretch font-body min-h-screen relative">
      <Navbar />
      <Sidebar className=" my-20 rounded-2xl ml-7 sticky top-20  h-max"/>
      
      <Footer />
    </main>
  )
}