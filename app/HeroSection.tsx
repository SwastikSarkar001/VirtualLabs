import Image from "next/image"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="relative bg-dark-background text-dark-foreground h-screen flex flex-col items-center justify-center pt-10">
      <Image
        src='/background.png'
        fill
        objectPosition='center'
        alt=""
        className="absolute z-1"
        priority
      />
      <div className="flex flex-col items-start gap-4 w-[90%] sm:w-4/5 md:w-3/5 relative">
        <div className="pointer-events-none absolute z-2 -translate-1/5 size-100 bg-radial from-violet-500/40 to-70% to-transparent rounded-full" />
        <div className="text-5xl relative z-2 md:text-6xl font-semibold tracking-normal lg:tracking-wide md:leading-20">
          <span className="text-transparent bg-linear-300 bg-clip-text from-fuchsia-400 from-70% to-80% to-fuchsia-50">Virtual Labs</span> for <span className="text-violet-500">Engineering</span> <span className="text-transparent bg-linear-130 bg-clip-text from-blue-500 from-60% to-80% to-blue-50">Education</span>
        </div>
        <div className="not-sm:text-sm lg:text-lg text-zinc-400 z-2">The Virtual Labs Engineering, Architecture, and Design (VLEAD) Team at IIIT Hyderabad optimizes Virtual Labs operations, including infrastructure management, system administration, user interface design, process coordination, analytics, automation, performance, security enhancements, content authoring tool development, and technology research. Their efforts ensure efficiency and a seamless learning experience.</div>
        <Link href='/start-learning' className="mt-2 z-2 cursor-pointer flex gap-2 items-center bg-gradient-to-b from-violet-700 to-violet-900 hover:to-violet-800 transition-colors py-2 px-4 rounded-lg">
          Start Learning!
        </Link>
      </div>
    </section>
  )
}