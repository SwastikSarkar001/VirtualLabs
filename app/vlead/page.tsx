import Footer from "@/ui/basic/Footer";
import Navbar from "@/ui/basic/Navbar";
import ViewableSection from "./ViewableSection";

export function generateMetadata() {
  return {
    title: "About VLEAD",
    description: 'VLEAD is a platform that provides a virtual lab environment for students to learn and experiment with various technologies.',
  }
}

export default function Home() {
  return (
    <main className="flex flex-col items-stretch font-body min-h-screen">
      <Navbar />
      <ViewableSection />
      <Footer />
    </main>
  )
}
