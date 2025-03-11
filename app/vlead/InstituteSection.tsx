import Image from "next/image"
import { Logo } from "../InfiniteLogoSlider"

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

export default function InstituteSection() {
  return (
    <div className="mx-auto max-w-[80rem] self-stretch px-4 md:px-16">
      <h1 className="text-4xl mb-12 font-bold text-center">
        Participating Institutes
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-16 justify-items-center mb-16">
        {logos.map(logo => (
          <div
            key={logo.id}
            className="flex flex-col items-center justify-center gap-4 bg-gray-800 p-4 aspect-square w-full h-full max-w-80 rounded-xl"
          >
            <div className="relative w-full h-32 md:h-40">
              <Image 
                src={logo.src} 
                alt={logo.name} 
                fill 
                sizes="(max-width: 768px) 100vw, 320px" 
                className="object-contain" 
              />
            </div>
            <p className="text-lg font-medium text-center">{logo.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
