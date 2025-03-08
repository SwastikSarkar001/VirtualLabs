"use client"

import type React from "react"
import { createContext, useContext, useState, useCallback, useEffect } from "react"

type TextScrambleContextType = {
  registerComponent: (id: number) => void
  unregisterComponent: (id: number) => void
  notifyAnimationComplete: (id: number) => void
  triggerNextAnimation: () => void
}

const TextScrambleContext = createContext<TextScrambleContextType | null>(null)

export function useTextScramble() {
  const context = useContext(TextScrambleContext)
  if (!context) {
    throw new Error("useTextScramble must be used within a TextScrambleProvider")
  }
  return context
}

export function TextScrambleProvider({
  children,
  suggestionTime = 8000,
}: {
  children: React.ReactNode
  suggestionTime?: number
}) {
  const [registeredComponents, setRegisteredComponents] = useState<Set<number>>(new Set())
  const [completedComponents, setCompletedComponents] = useState<Set<number>>(new Set())
  const [animationCounter, setAnimationCounter] = useState(0)

  const registerComponent = useCallback((id: number) => {
    setRegisteredComponents((prev) => {
      const newSet = new Set(prev)
      newSet.add(id)
      return newSet
    })
  }, [])

  const unregisterComponent = useCallback((id: number) => {
    setRegisteredComponents((prev) => {
      const newSet = new Set(prev)
      newSet.delete(id)
      return newSet
    })
    setCompletedComponents((prev) => {
      const newSet = new Set(prev)
      newSet.delete(id)
      return newSet
    })
  }, [])

  const notifyAnimationComplete = useCallback((id: number) => {
    setCompletedComponents((prev) => {
      const newSet = new Set(prev)
      newSet.add(id)
      return newSet
    })
  }, [])

  const triggerNextAnimation = useCallback(() => {
    setAnimationCounter((prev) => prev + 1)
  }, [])

  // Check if all registered components have completed their animations
  useEffect(() => {
    if (
      completedComponents.size > 0 &&
      registeredComponents.size > 0 &&
      completedComponents.size === registeredComponents.size
    ) {
      setCompletedComponents(new Set())

      // Schedule next animation cycle
      const timer = setTimeout(() => {
        triggerNextAnimation()
      }, suggestionTime)
      return () => clearTimeout(timer)
    }
  }, [completedComponents, registeredComponents, suggestionTime, triggerNextAnimation])

  // Start first animation after components are registered
  useEffect(() => {
    if (registeredComponents.size > 0 && animationCounter === 0) {
      const timer = setTimeout(() => {
        triggerNextAnimation()
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [registeredComponents.size, animationCounter, triggerNextAnimation])

  return (
    <TextScrambleContext.Provider
      value={{
        registerComponent,
        unregisterComponent,
        notifyAnimationComplete,
        triggerNextAnimation,
      }}
    >
      {children}
    </TextScrambleContext.Provider>
  )
}

