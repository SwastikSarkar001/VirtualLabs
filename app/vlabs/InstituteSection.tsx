import Image from "next/image"
import { institutes } from "@/data/data"

export default function InstituteSection() {
  return (
    <div className="mx-auto max-w-[80rem] self-stretch px-4 md:px-16">
      <h1 className="text-4xl mb-12 font-bold text-center">
        Participating Institutes
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-16 justify-items-center mb-16">
        {institutes.map(logo => (
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
