"use client"

import { useState, useRef } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"

type TimelineItem = {
  id: string
  date: string
  title: string
  description: string[]
  icon?: React.ReactNode
}

type TimelineProps = {
  items: TimelineItem[]
}

export default function Timeline({ items = [] }: TimelineProps) {
  const [activeItem, setActiveItem] = useState<string | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0.4, 1, 1, 0.4])
  const scale = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0.8, 1, 1, 0.8])

  return (
    <div ref={containerRef} className="relative w-full mt-16 text-gray-100 min-h-[600px]">
      <motion.div style={{ opacity, scale }} className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 sm:left-1/2 sm:-ml-px h-full w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"></div>

          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.25, 0.1, 0.25, 1.0],
              }}
              className={`relative mb-12 sm:mb-16 ${index % 2 === 0 ? "sm:ml-0" : "sm:ml-0"}`}
            >
              <div
                className={`flex items-center ${
                  index % 2 === 0 ? "flex-row sm:flex-row-reverse text-left sm:text-right" : "flex-row text-left"
                }`}
              >
                {/* Content container */}
                <div className={`flex-grow ${index % 2 === 0 ? "sm:pr-16 pr-8" : "sm:pl-16 pl-8"}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    onClick={() => setActiveItem(item.id === activeItem ? null : item.id)}
                    className={`p-5 rounded-xl bg-gray-800 border border-gray-700 shadow-xl cursor-pointer transition-all duration-300 ${
                      activeItem === item.id
                        ? "bg-gradient-to-br from-gray-800 to-gray-900 border-gray-600 shadow-blue-900/20"
                        : "hover:bg-gray-800"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium px-2.5 py-0.5 rounded-full bg-blue-900/30 text-blue-300">
                        {item.date}
                      </span>
                      <motion.div animate={{ rotate: activeItem === item.id ? 180 : 0 }} className="text-gray-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </motion.div>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-1">{item.title}</h3>
                    <AnimatePresence>
                      {activeItem === item.id && (
                        <motion.ul
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden list-disc pl-5 pt-3"
                        >
                          {
                            item.description.map((desc, index) => (
                              <li key={index} className="text-gray-300">{desc}</li>
                            ))
                          }
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </div>

                {/* Timeline dot */}
                <div className="absolute left-0 sm:left-1/2 sm:-ml-3.5 -ml-3.5">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className={`h-7 w-7 rounded-full flex items-center justify-center ${
                      activeItem === item.id ? "bg-blue-500 shadow-lg shadow-blue-500/50" : "bg-gray-700"
                    }`}
                  >
                    {item.icon || <span className="h-3 w-3 rounded-full bg-white"></span>}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}