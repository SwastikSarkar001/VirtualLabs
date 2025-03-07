'use client';

import { Space_Mono } from "next/font/google";
import TextScramble from "./ui/TextScramble";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono-font",
});

type StatsDataProps = {
  name: string;
  value: string;
}

const statsData: StatsDataProps[] = [{
  name: 'Users',
  value: '17.2 Million'
}, {
  name: 'Views',
  value: '124.2 Million'
}, {
  name: 'Website Page Views',
  value: '81330147'
}, {
  name: 'Participants Attended',
  value: '8560251'
}, {
  name: 'Nodal Centers',
  value: '1531'
}, {
  name: 'Usage',
  value: '4679904'
}
]

export default function VideoSection() {
  return (
    <section className="h-screen relative grid place-content-center">
      <video className="absolute pointer-events-none size-full object-cover" muted loop autoPlay>
        <source src="/virtual-labs.mp4" type="video/mp4" />
      </video>
      <div className={`text-center z-1 flex flex-col gap-4`}>
        <TextScramble suggestions={statsData.map(data => data.name)} className={`text-3xl sm:text-5xl font-extralight ${spaceMono.className}`} />
        <TextScramble suggestions={statsData.map(data => data.value)} className={`text-xl sm:text-3xl font-semibold ${spaceMono.className}`} />
      </div>
    </section>
  )
}