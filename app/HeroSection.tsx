import AnimatedSection from "@/ui/basic/AnimatedSection"
import Image from "next/image"
import Link from "next/link"
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-montserrat-font",
});


export default function HeroSection() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center">
      <Image
        src='/background.png'
        fill
        alt=""
        className="absolute inset-0 z-1 object-cover"
        priority
      />
      <AnimatedSection direction="up" className="flex flex-col items-center justify-center">
        <div className="mt-10 flex flex-col items-start gap-4 w-[90%] sm:w-4/5 md:w-5/7 relative">
          <div className="pointer-events-none absolute z-2 -translate-1/5 size-100 bg-radial from-violet-500/40 to-70% to-transparent rounded-full" />
          <div className={`text-5xl relative z-2 md:text-6xl font-semibold tracking-normal lg:tracking-wide md:leading-20 ${montserrat.className}`}>
            <span className={`text-transparent bg-linear-300 bg-clip-text from-fuchsia-400 from-70% to-80% to-fuchsia-50 ${montserrat.className}`}>Virtual Labs</span> for <span className={`text-violet-500 ${montserrat.className}`}>Engineering</span> <span className={`text-transparent bg-linear-130 bg-clip-text from-blue-500 from-60% to-80% to-blue-50 ${montserrat.className}`}>Education</span>
          </div>
          <div className="not-sm:text-xs font-regular lg:text-lg text-zinc-400 z-2 py-2">The Virtual Labs Engineering, Architecture, and Design (VLEAD) Team at IIIT Hyderabad optimizes Virtual Labs operations, including infrastructure management, system administration, user interface design, process coordination, analytics, automation, performance, security enhancements, content authoring tool development, and technology research.</div>
          <Link href='/learn' className="mt-2 z-2 w-max-auto cursor-pointer flex gap-2 items-center bg-gradient-to-b from-violet-700 to-violet-900 hover:to-violet-800 transition-colors py-2 px-6 rounded-full">
            Start Learning
          </Link>
        </div>
      </AnimatedSection>
    </section>
  )
}