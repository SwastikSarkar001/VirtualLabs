import Footer from "@/ui/basic/Footer";
import Navbar from "@/ui/basic/Navbar";
import DetailedAnalysisPage from "./DetailedAnalysisPage";

export function generateMetadata() {
  return {
    title: "Detailed Analysis | Virtual Labs",
    description: "Detailed analysis of user engagement with Virtual Labs"
  }
}

export default function Home() {
  return (
    <main className="flex flex-col items-stretch font-body min-h-screen">
      <Navbar />
      <DetailedAnalysisPage />
      <Footer />
    </main>
  )
}