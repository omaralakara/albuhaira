"use client"

import type { ReactNode } from "react"
import type { HTMLMotionProps } from "motion/react"
import * as m from "motion/react-m"

/**
 * AnimatedContent — adapted from React Bits (https://reactbits.dev, MIT + Commons Clause).
 *
 * Same props and defaults as the React Bits component, with GSAP/ScrollTrigger
 * swapped for Motion's `whileInView` so the site ships a single animation
 * library. The entrance plays once; afterwards the content stays still.
 * Reduced motion is handled globally by <MotionConfig reducedMotion="user">
 * (movement is dropped, only a short fade remains). Without JavaScript a
 * <noscript> rule in the root layout reveals [data-animated-content].
 */
export interface AnimatedContentProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children?: ReactNode
  /** Travel distance in px */
  distance?: number
  direction?: "vertical" | "horizontal"
  reverse?: boolean
  /** Seconds */
  duration?: number
  /** Cubic-bezier control points; default matches GSAP "power3.out" */
  ease?: [number, number, number, number]
  initialOpacity?: number
  animateOpacity?: boolean
  scale?: number
  /** Share of the element that must be visible before it animates (0–1) */
  threshold?: number
  /** Seconds */
  delay?: number
  once?: boolean
}

export default function AnimatedContent({
  children,
  distance = 100,
  direction = "vertical",
  reverse = false,
  duration = 0.8,
  ease = [0.215, 0.61, 0.355, 1],
  initialOpacity = 0,
  animateOpacity = true,
  scale = 1,
  threshold = 0.1,
  delay = 0,
  once = true,
  ...props
}: AnimatedContentProps) {
  const offset = (reverse ? -1 : 1) * distance
  const axis = direction === "horizontal" ? "x" : "y"

  return (
    <m.div
      data-animated-content=""
      initial={{ [axis]: offset, scale, opacity: animateOpacity ? initialOpacity : 1 }}
      whileInView={{ [axis]: 0, scale: 1, opacity: 1 }}
      viewport={{ once, amount: threshold }}
      transition={{ duration, delay, ease }}
      {...props}
    >
      {children}
    </m.div>
  )
}
