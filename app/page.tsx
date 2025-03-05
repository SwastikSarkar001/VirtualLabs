import Footer from "./Footer";
import HeroSection from "./HeroSection";
import Navbar from "./Navbar";
import LearningSpheres from "./LearningSpheres";
import ParticipatingInstitutes from "./ParticipatingInstitutes";

export default function Home() {
  return (
    <main className="flex flex-col items-stretch">
      <Navbar />
      <HeroSection />
      <LearningSpheres />
      <ParticipatingInstitutes />
      <Footer />
    </main>
  )
}