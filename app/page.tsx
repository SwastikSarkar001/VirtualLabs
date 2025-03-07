import Footer from "./Footer";
import HeroSection from "./HeroSection";
import Navbar from "./Navbar";
// import LearningSpheres from "./LearningSpheres";
// import ParticipatingInstitutes from "./ParticipatingInstitutes";
import VideoSection from "./VideoSection";

export default function Home() {
  return (
    <main className="flex flex-col items-stretch font-body">
      <Navbar />
      <HeroSection />
      {/* <LearningSpheres /> */}
      {/* <ParticipatingInstitutes /> */}
      <VideoSection />
      <Footer />
    </main>
  )
}