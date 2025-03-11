import Footer from "@/ui/basic/Footer";
import Navbar from "@/ui/basic/Navbar";
import ViewableSection from "./ViewableSection";

export default function Home() {
  return (
    <main className="flex flex-col items-stretch font-body min-h-screen">
      <Navbar />
      <ViewableSection />
      <Footer />
    </main>
  )
}
