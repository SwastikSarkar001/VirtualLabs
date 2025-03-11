'use client'

import { FieldProp, subjects } from "@/data/data"
import Link from "next/link"
import { LuMoveLeft, LuMoveRight, LuMoveUpRight } from "react-icons/lu";
import { useRef } from "react";
import AnimatedSection from "@/ui/basic/AnimatedSection";
import { motion, Variants } from "framer-motion";

export default function LearningSpheres() {
  const scrollableRef = useRef<HTMLDivElement>(null);

  // Scroll left by the width of the window
  const handleScrollLeft = () => {
    if (scrollableRef.current) scrollableRef.current.scrollBy(-100, 0);
  };
  
  // Scroll right by the width of the window
  const handleScrollRight = () => {
    if (scrollableRef.current) scrollableRef.current.scrollBy(100, 0);
  };

  const colors = [
    'from-orange-300 via-orange-500 to-orange-400',
    'from-green-300 via-green-500 to-green-400',
    'from-blue-300 via-blue-500 to-blue-400',
    'from-purple-300 via-purple-500 to-purple-400',
    'from-pink-300 via-pink-500 to-pink-400',
    'from-rose-300 via-rose-500 to-rose-400',
    'from-yellow-300 via-yellow-500 to-yellow-400',
    'from-cyan-300 via-cyan-500 to-cyan-400',
    'from-teal-300 via-teal-500 to-teal-400',
  ]
  
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="flex flex-col items-stretch gap-16 py-16 px-8">
      <AnimatedSection>
        <div className="flex items-center justify-between gap-3 sm:gap-6">
          <h1 className="text-3xl sm:text-4xl self-center font-bold">Learning Spheres</h1>
          <div className="flex gap-3 sm:gap-6 items-center">
            <button aria-label="Scroll left" onClick={handleScrollLeft} className="p-3 sm:p-4 rounded-full transition-colors text-foreground border-foreground border-2 bg-background disabled:invert hover:text-background hover:border-background hover:bg-foreground">
              <LuMoveLeft className="stroke-3" />
            </button>
            <button aria-label="Scroll right" onClick={handleScrollRight} className="p-3 sm:p-4 rounded-full transition-colors text-foreground border-foreground border-2 bg-background hover:text-background hover:border-background hover:bg-foreground">
              <LuMoveRight className="stroke-3" />
            </button>
          </div>
        </div>
      </AnimatedSection>
      <AnimatedSection staggerChildren={0.1}>
        <div ref={scrollableRef} className="scrollbar-hide overflow-x-scroll scroll-smooth snap-x snap-mandatory">
          <div className="flex items-stretch gap-8">
            {subjects.map((subject, index) => (
              // Wrap each card in a motion.div to use the parent's variants
              <motion.div
                key={subject.fieldId}
                variants={cardVariants}
                className="snap-start"
              >
                <Card subject={subject} bgcolor={colors[index % colors.length]} />
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </section>
  )
}

function Card({ subject, bgcolor }: { subject: FieldProp, bgcolor: string }) {
  return (
    <div className={`w-60 h-full text-background bg-linear-to-bl ${bgcolor} px-6 py-6 rounded-xl flex flex-col gap-6`}>
      <h2 className="text-xl mb-auto">{subject.fieldName}</h2>
      <p className="text-sm text-gray-700 line-clamp-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat architecto ipsa, blanditiis laudantium saepe id sunt ducimus quis aliquam numquam, molestias quas quasi praesentium similique.
      </p>
      <svg aria-hidden width="89" height="7" viewBox="0 0 89 7" fill="none" xmlns="http://www.w3.org/2000/svg" stroke='currentColor'>
        <path d="M1 3.51678C16.8594 -5.17697 14.266 12.1434 30 3.51678" strokeWidth="2"/>
        <path d="M59 3.51678C74.8594 -5.17697 72.266 12.1434 88 3.51678" strokeWidth="2"/>
        <path d="M30 3.51678C45.8594 -5.17697 43.266 12.1434 59 3.51678" strokeWidth="2"/>
      </svg>
      <div className="border-t-2 pt-5">
        <Link href={`/learn/${subject.fieldRouteName}`} className="w-max text-sm flex items-center gap-2 link-hover">
          <div>Learn More</div>
          <LuMoveUpRight className="size-[1.2em]" />
        </Link>
      </div>
    </div>
  )
}