import Footer from "./ui/Footer";
import HeroSection from "./HeroSection";
import Navbar from "./ui/Navbar";
// import LearningSpheres from "./LearningSpheres";
import ParticipatingInstitutes from "./ParticipatingInstitutes";
import VideoSection from "./VideoSection";

export default function Home() {
  return (
    <main className="flex flex-col items-stretch font-body">
      <Navbar />
      <HeroSection />
      {/* <LearningSpheres /> */}
      <ParticipatingInstitutes />
      <VideoSection />
      <Footer />
    </main>
  )
}