import Footer from "@/ui/basic/Footer";
import Navbar from "@/ui/basic/Navbar";
import ViewableSection from "./ViewableSection";

export function generateMetadata() {
  return {
    title: "Experiments and Developments",
    description: 'Explore the experiments and developments in the field of Virtual Labs.'
  };
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
