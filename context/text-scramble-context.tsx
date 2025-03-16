"use client"

import type React from "react"
import { createContext, useContext, useState, useCallback, useEffect, useRef } from "react"

type TextScrambleContextType = {
  startAnimation: () => void
  isAnimating: boolean
  currentIndex: number
  registerComponent: (id: string) => void
  unregisterComponent: (id: string) => void
}

const TextScrambleContext = createContext<TextScrambleContextType | undefined>(undefined)

export function useTextScramble() {
  const context = useContext(TextScrambleContext)
  if (context === undefined) {
    throw new Error("useTextScramble must be used within a TextScrambleProvider")
  }
  return context
}

type TextScrambleProviderProps = {
  children: React.ReactNode
  suggestionTime?: number
  autoStart?: boolean
}

export function TextScrambleProvider({ children, suggestionTime = 8000, autoStart = true }: TextScrambleProviderProps) {
  const [isAnimating, setIsAnimating] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const componentsRef = useRef<Set<string>>(new Set())

  const registerComponent = useCallback((id: string) => {
    componentsRef.current.add(id)
  }, [])

  const unregisterComponent = useCallback((id: string) => {
    componentsRef.current.delete(id)
  }, [])

  const startAnimation = useCallback(() => {
    if (isAnimating) return

    setIsAnimating(true)

    // After animation completes, update the index and reset animation state
    setTimeout(() => {
      setCurrentIndex((prev) => prev + 1)
      setIsAnimating(false)
    }, suggestionTime * 0.625) // This timing aligns with the animation duration in TextScramble
  }, [isAnimating, suggestionTime])

  // Auto-start animation cycle
  useEffect(() => {
    if (!isAnimating && autoStart) {
      const timer = setTimeout(startAnimation, suggestionTime)
      return () => clearTimeout(timer)
    }
  }, [isAnimating, startAnimation, suggestionTime, autoStart])

  const value = {
    startAnimation,
    isAnimating,
    currentIndex,
    registerComponent,
    unregisterComponent,
  }

  return <TextScrambleContext.Provider value={value}>{children}</TextScrambleContext.Provider>
}

