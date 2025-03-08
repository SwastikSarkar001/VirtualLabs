"use client"

import type React from "react"

import { useCallback, useEffect, useRef, useState } from "react"

// Global state for synchronization
const syncState = {
  components: new Set<number>(),
  completedAnimations: new Set<number>(),
  nextAnimationTimer: null as NodeJS.Timeout | null,
  suggestionTime: 8000,
  triggerAnimation: () => {
    // This will be defined later
  },
}

type TextScrambleProps = {
  /** The suggestions which will be visible one by one */
  suggestions: string[]
  /** More the ratio, slower the animation, default is 0.1 */
  animationSpeedFactor?: number
} & React.HTMLAttributes<HTMLDivElement>

// Simple counter for generating IDs
let idCounter = 0

export default function TextScramble({ suggestions, animationSpeedFactor = 0.1, ...props }: TextScrambleProps) {
  const [text, setText] = useState(suggestions[0])
  const [isAnimating, setIsAnimating] = useState(false)
  const [suggestionsIndex, setSuggestionsIndex] = useState(1)
  const componentId = useRef(idCounter++)

  // Animation timing parameters
  const rotateTime = 100 * animationSpeedFactor
  const letterTime = 1000 * animationSpeedFactor
  const cancelRotateTime = 5000 * animationSpeedFactor

  // Animation state references
  const animationRef = useRef<{
    oldText: string
    newText: string
    difflen: number
    len: number
    toLeft: boolean
    activeIntervals: number[]
  }>({
    oldText: "",
    newText: "",
    difflen: 0,
    len: 0,
    toLeft: false,
    activeIntervals: [],
  })

  // Helper functions for character manipulation
  const countIndex = useCallback((st: string, index: number) => {
    return st[index]?.charCodeAt(0) - 32 || 0
  }, [])

  const replaceChar = useCallback((replaceChar: string, index: number, currentText: string) => {
    const firstPart = currentText.substring(0, index)
    const lastPart = currentText.substring(index + 1)
    return firstPart + replaceChar + lastPart
  }, [])

  const replaceCharacter = useCallback(
    (count: number, pos: number) => {
      setText((prevText) => replaceChar(String.fromCharCode(" ".charCodeAt(0) + count), pos, prevText))
    },
    [replaceChar],
  )

  const deleteCharacter = useCallback((pos: number) => {
    setText((prevText) => {
      const firstPart = prevText.substring(0, pos)
      const lastPart = prevText.substring(pos + 1)
      return firstPart + lastPart
    })
  }, [])

  const rotateLetter = useCallback(
    (count: number, position: number) => {
      if (count === 90) {
        // If counter is at 'z' shift it to ' '
        count = 0
        replaceCharacter(count, position)
        return count
      } else if (count === 0) {
        // If counter is at ' ' shift it to 'A'
        count = 33
        replaceCharacter(count, position)
        return count
      } else if (count === 58) {
        // If counter is at 'Z' shift it to 'a'
        count = 65
        replaceCharacter(count, position)
        return count
      } else {
        // Counter will increment serially
        ++count
        replaceCharacter(count, position)
        return count
      }
    },
    [replaceCharacter],
  )

  const clearAllIntervals = useCallback(() => {
    animationRef.current.activeIntervals.forEach((id) => clearInterval(id))
    animationRef.current.activeIntervals = []
  }, [])

  const rotate = useCallback(
    (position: number) => {
      let count = countIndex(text, position)
      const startTime = new Date().getTime()

      const intervalId = window.setInterval(() => {
        count = rotateLetter(count, position)

        if (new Date().getTime() - startTime > cancelRotateTime) {
          const { newText, toLeft } = animationRef.current

          clearInterval(intervalId)
          animationRef.current.activeIntervals = animationRef.current.activeIntervals.filter((id) => id !== intervalId)

          // If this position exists in the new text, replace with the correct character
          // Otherwise delete the character
          if (position < newText.length) {
            replaceCharacter(countIndex(newText, position), position)
          } else {
            deleteCharacter(position)
          }

          const { len } = animationRef.current

          // Check if this is the last character to animate
          if ((toLeft && position === 0) || (!toLeft && position === len - 1)) {
            // Ensure the final text exactly matches the target text
            setTimeout(() => {
              setText(animationRef.current.newText)
              setIsAnimating(false)

              // Notify that this component has completed its animation
              syncState.completedAnimations.add(componentId.current)

              // If all components have completed their animations, schedule the next animation
              if (syncState.completedAnimations.size === syncState.components.size) {
                syncState.completedAnimations.clear()

                // Schedule next animation
                if (syncState.nextAnimationTimer) {
                  clearTimeout(syncState.nextAnimationTimer)
                }

                syncState.nextAnimationTimer = setTimeout(() => {
                  syncState.triggerAnimation()
                }, syncState.suggestionTime)
              }
            }, 100)
          }
        }
      }, rotateTime)

      animationRef.current.activeIntervals.push(intervalId)
    },
    [text, countIndex, rotateLetter, replaceCharacter, deleteCharacter, cancelRotateTime, rotateTime],
  )

  const shift = useCallback(() => {
    const { toLeft, len } = animationRef.current
    let counter = toLeft ? len - 1 : 0

    // Start the first character animation
    rotate(counter)

    if (toLeft) {
      // Right to left animation (when original text is longer)
      const intId = window.setInterval(() => {
        if (counter !== 0) {
          counter--
          rotate(counter)
        } else {
          clearInterval(intId)
          animationRef.current.activeIntervals = animationRef.current.activeIntervals.filter((id) => id !== intId)
        }
      }, letterTime)

      animationRef.current.activeIntervals.push(intId)
    } else {
      // Left to right animation (when new text is longer or equal)
      const intId = window.setInterval(() => {
        if (counter !== len - 1) {
          // If new text is longer, we need to add spaces to the current text
          if (animationRef.current.difflen < 0) {
            if (counter >= text.length - 1) {
              setText((prev) => prev + " ")
              animationRef.current.difflen += 1
            }
          }

          counter++
          rotate(counter)
        } else {
          clearInterval(intId)
          animationRef.current.activeIntervals = animationRef.current.activeIntervals.filter((id) => id !== intId)
        }
      }, letterTime)

      animationRef.current.activeIntervals.push(intId)
    }
  }, [rotate, text, letterTime])

  const startAnimation = useCallback(() => {
    if (isAnimating) return

    // Clear any existing intervals before starting new animation
    clearAllIntervals()

    setIsAnimating(true)

    const oldText = text
    const newText = suggestions[suggestionsIndex]
    const difflen = oldText.length - newText.length
    const len = Math.max(oldText.length, newText.length)
    const toLeft = oldText.length > newText.length // Right-to-left when old text is longer

    animationRef.current = {
      ...animationRef.current,
      oldText,
      newText,
      difflen,
      len,
      toLeft,
      activeIntervals: [],
    }

    setSuggestionsIndex((prev) => (prev === suggestions.length - 1 ? 0 : prev + 1))

    shift()
  }, [isAnimating, text, suggestions, suggestionsIndex, shift, clearAllIntervals])

  // Register this component for synchronization
  useEffect(() => {
    syncState.components.add(componentId.current)

    // Define the global trigger function if it hasn't been defined yet
    if (!syncState.triggerAnimation) {
      syncState.triggerAnimation = () => {
        // This will trigger all registered components to start their animations
        document.dispatchEvent(new CustomEvent("start-text-scramble"))
      }

      // Start the first animation after a short delay
      setTimeout(() => {
        syncState.triggerAnimation()
      }, 500)
    }

    return () => {
      // Clean up when component unmounts
      syncState.components.delete(componentId.current)
      syncState.completedAnimations.delete(componentId.current)

      // If this was the last component and there's a pending timer, clear it
      if (syncState.components.size === 0 && syncState.nextAnimationTimer) {
        clearTimeout(syncState.nextAnimationTimer)
        syncState.nextAnimationTimer = null
      }
    }
  }, [])

  // Listen for the global animation trigger event
  useEffect(() => {
    const handleStartAnimation = () => {
      if (!isAnimating) {
        startAnimation()
      }
    }

    document.addEventListener("start-text-scramble", handleStartAnimation)

    return () => {
      document.removeEventListener("start-text-scramble", handleStartAnimation)
    }
  }, [isAnimating, startAnimation])

  // Clean up intervals on unmount
  useEffect(() => {
    return () => clearAllIntervals()
  }, [clearAllIntervals])

  // Ensure proper cleanup between animations
  useEffect(() => {
    if (!isAnimating) {
      clearAllIntervals()
    }
  }, [isAnimating, clearAllIntervals])

  return (
    <div {...props} aria-live="polite">
      {text}
    </div>
  )
}

