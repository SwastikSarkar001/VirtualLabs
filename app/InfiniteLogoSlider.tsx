"use client"

import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import { InstituteProp } from "@/data/data"

interface InfiniteLogoSliderProps {
  logos: InstituteProp[]
  speed?: number
  direction?: "left" | "right"
  pauseOnHover?: boolean
}

export default function InfiniteLogoSlider({
  logos,
  speed = 40,
  direction = "left",
  pauseOnHover = true,
}: InfiniteLogoSliderProps) {
  const [isHovering, setIsHovering] = useState(false)
  const sliderRef = useRef<HTMLDivElement>(null)

  // Duplicate the logos array to create the infinite effect
  const duplicatedLogos = [...logos, ...logos]

  useEffect(() => {
    if (!sliderRef.current) return

    // Set the animation based on direction and speed
    const slider = sliderRef.current
    const animationName = direction === "left" ? "slideLeft" : "slideRight"
    const animationDuration = `${logos.length * speed}s`

    slider.style.animationName = animationName
    slider.style.animationDuration = animationDuration
    slider.style.animationTimingFunction = "linear"
    slider.style.animationIterationCount = "infinite"

    // Pause animation on hover if enabled
    if (pauseOnHover && isHovering) {
      slider.style.animationPlayState = "paused"
    } else {
      slider.style.animationPlayState = "running"
    }
  }, [logos.length, speed, direction, pauseOnHover, isHovering])

  return (
    <div className="w-full overflow-hidden bg-gray-900 py-8">
      <div className="relative">
        <style jsx global>{`
          @keyframes slideLeft {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          
          @keyframes slideRight {
            0% {
              transform: translateX(-50%);
            }
            100% {
              transform: translateX(0);
            }
          }
        `}</style>

        <div
          ref={sliderRef}
          className="flex items-center"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {duplicatedLogos.map((logo, index) => (
            <div
              key={`${logo.id}-${index}`}
              className="flex-shrink-0 mx-2 transition-transform duration-300 hover:scale-110"
            >
                <div className="relative h-24 w-48 md:h-28 md:w-56 lg:h-32 lg:w-64">
                <Image
                  src={logo.src || "/placeholder.svg"}
                  alt={logo.name}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 192px, (max-width: 1200px) 224px, 256px"
                />
                </div>
              <p className="mt-2 text-center text-sm text-gray-300">{logo.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

