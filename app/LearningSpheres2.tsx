"use client"

import { type FieldProp, subjects } from "@/data/data"
import Link from "next/link"
import { motion } from "framer-motion"
import { useRef, useState } from "react"
import { LuMoveLeft, LuMoveRight, LuMoveUpRight } from "react-icons/lu"

export default function LearningSpheres() {
  const scrollableRef = useRef<HTMLDivElement>(null)

  // Scroll left by the width of the window
  const handleScrollLeft = () => {
    if (scrollableRef.current) scrollableRef.current.scrollBy(-window.innerWidth, 0)
  }

  // Scroll right by the width of the window
  const handleScrollRight = () => {
    if (scrollableRef.current) scrollableRef.current.scrollBy(window.innerWidth, 0)
  }

  return (
    <section className="flex flex-col items-stretch gap-16 py-16 px-8">
      <div className="flex items-center justify-between gap-3 sm:gap-6">
        <h1 className="text-3xl sm:text-4xl self-center font-bold">Learning Spheres</h1>
        <div className="flex gap-3 sm:gap-6 items-center">
          <button
            onClick={handleScrollLeft}
            className="p-3 sm:p-4 rounded-full transition-colors text-foreground border-foreground border-2 bg-background disabled:invert hover:text-background hover:border-background hover:bg-foreground"
          >
            <LuMoveLeft className="stroke-[3px]" />
          </button>
          <button
            onClick={handleScrollRight}
            className="p-3 sm:p-4 rounded-full transition-colors text-foreground border-foreground border-2 bg-background hover:text-background hover:border-background hover:bg-foreground"
          >
            <LuMoveRight className="stroke-[3px]" />
          </button>
        </div>
      </div>
      <div ref={scrollableRef} className="scrollbar-hide overflow-x-scroll scroll-smooth">
        <div className="flex items-end *:shrink-0 gap-8">
          {subjects.map((subject) => (
            <Card key={subject.fieldId} subject={subject} />
          ))}
        </div>
      </div>
    </section>
  )
}

function Card({ subject }: { subject: FieldProp }) {
  const [isHovered, setIsHovered] = useState(false)

  const cardVariants = {
    normal: {
      height: 320, // Fixed height in normal state
    },
    expanded: {
      height: 370, // Expanded height when hovered
    },
  }

  return (
    <motion.div
      className="w-80 group text-background bg-gradient-to-bl from-orange-200 via-orange-500 to-orange-400 px-6 py-8 rounded-xl flex flex-col gap-8 overflow-hidden"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      variants={cardVariants}
      initial="normal"
      animate={isHovered ? "expanded" : "normal"}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <h2 className="text-xl">{subject.fieldName}</h2>
      <p className="text-sm text-gray-700">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat architecto ipsa, blanditiis laudantium saepe
        id sunt ducimus quis aliquam numquam, molestias quas quasi praesentium similique. Quaerat explicabo nobis
        blanditiis illum.
      </p>
      <svg
        width="89"
        height="7"
        viewBox="0 0 89 7"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        stroke="currentColor"
      >
        <path d="M1 3.51678C16.8594 -5.17697 14.266 12.1434 30 3.51678" strokeWidth="2" />
        <path d="M59 3.51678C74.8594 -5.17697 72.266 12.1434 88 3.51678" strokeWidth="2" />
        <path d="M30 3.51678C45.8594 -5.17697 43.266 12.1434 59 3.51678" strokeWidth="2" />
      </svg>

      <motion.div
        className="border-t-2 border-gray-700 pt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      >
        <Link
          className="text-sm flex items-center justify-between text-gray-700"
          href={`/learn/${subject.fieldRouteName}`}
        >
          <div>Learn More</div>
          <LuMoveUpRight />
        </Link>
      </motion.div>
    </motion.div>
  )
}

