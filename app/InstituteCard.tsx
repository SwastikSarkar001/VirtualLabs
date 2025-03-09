'use client'

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

type CardProps = {
  src: string;
  alt: string;
  text: string;
}

export default function InstituteCard({ src, alt, text }: CardProps) {
  const [overlay, setOverlay] = useState(false);
  return (
    <motion.div
      className="relative size-48 rounded-full bg-gray-800 grid place-content-center"
      onHoverStart={() => setOverlay(true)}
      onHoverEnd={() => setOverlay(false)}
    >
      <AnimatePresence>
        {
          overlay && (
            <motion.div
              className="absolute z-1 inset-0 rounded-full bg-black/50 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="text-foreground"
                initial={{ y: 10 }}
                animate={{ y: 0 }}
                exit={{ y: 10 }}
              >
                {text}
              </motion.div>
            </motion.div>
          )
        }
      </AnimatePresence>
      <motion.div
        className="relative size-40"
      >
        <Image
          className="object-center grayscale invert"
          src={src}
          fill
          alt={alt}
          priority
        />
      </motion.div>
    </motion.div>
  )
}
