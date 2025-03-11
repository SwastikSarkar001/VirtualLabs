import AnimatedSection from "@/ui/basic/AnimatedSection";
import InfiniteLogoSlider, { Logo } from "./InfiniteLogoSlider";

const logos: Logo[] = [
  {
    id: 1,
    name: 'IIT Kharagpur',
    src: '/institute-logos/iitkgp.svg',
  },
  {
    id: 2,
    name: 'IIT Roorkee',
    src: '/institute-logos/iitr.svg',
  },
  {
    id: 3,
    name: 'IIT Guwahati',
    src: '/institute-logos/iitg.svg',
  },
  {
    id: 4,
    name: 'IIT Delhi',
    src: '/institute-logos/iitd.svg',
  },
  {
    id: 5,
    name: 'IIT Bombay',
    src: '/institute-logos/iitb.svg',
  },
  {
    id: 6,
    name: 'IIT Kanpur',
    src: '/institute-logos/iitk.svg',
  },
  {
    id: 7,
    name: 'IIIT Hyderabad',
    src: '/institute-logos/iiith.png',
  },
  {
    id: 8,
    name: 'Amrita Vishwa Vidyapeetham',
    src: '/institute-logos/avv.svg',
  },
  {
    id: 9,
    name: 'Dayalbagh Educational Institute',
    src: '/institute-logos/dei.png',
  },
  {
    id: 10,
    name: 'NITK Surathkal',
    src: '/institute-logos/nitk.png'
  },
  {
    id: 11,
    name: 'COEP Technological University, Pune',
    src: '/institute-logos/coep.png'
  }
]

export default function ParticipatingInstitutes() {
  return (
    <section className="flex flex-col items-stretch gap-16 py-16">
      <AnimatedSection>
        <h1 className="text-4xl self-center text-center font-bold">Participating Institutes</h1>
      </AnimatedSection>
      <AnimatedSection>
        <InfiniteLogoSlider  logos={logos} speed={1} />
      </AnimatedSection>
    </section>
  )
}