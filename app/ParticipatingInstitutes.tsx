import AnimatedSection from "@/ui/basic/AnimatedSection";
import InfiniteLogoSlider from "./InfiniteLogoSlider";
import { Montserrat } from "next/font/google";
import { institutes } from "@/data/data";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-montserrat-font",
});

export default function ParticipatingInstitutes() {
  return (
    <section className="flex flex-col items-stretch gap-16 py-16">
      <AnimatedSection>
        <h1 className={`text-4xl self-center text-center font-bold ${montserrat.className}`}>Participating Institutes</h1>
      </AnimatedSection>
      <AnimatedSection>
        <InfiniteLogoSlider logos={institutes} speed={6} />
      </AnimatedSection>
    </section>
  )
}