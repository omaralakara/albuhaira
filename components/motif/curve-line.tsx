"use client"

import { useReducedMotion } from "motion/react"
import * as m from "motion/react-m"

import { cn } from "@/lib/utils"

type CurveLineProps = {
  /** SVG path data in viewBox units */
  d: string
  viewBox: string
  className?: string
  /** Draw the line once: on page load, when scrolled into view, or not at all */
  draw?: "load" | "view" | false
  delay?: number
  duration?: number
}

/**
 * The thin "continuity" line. It scales uniformly with its frame (no
 * non-scaling-stroke, which breaks pathLength dashes in Chromium), so set the
 * stroke width per breakpoint with `[stroke-width:…]` classes when needed.
 * The draw-on plays once and is instant for reduced-motion visitors.
 */
export function CurveLine({ d, viewBox, className, draw = "view", delay = 0.2, duration = 1.8 }: CurveLineProps) {
  const reduce = useReducedMotion()
  const transition = reduce ? { duration: 0 } : { duration, delay, ease: [0.65, 0, 0.35, 1] as const }
  const hidden = { pathLength: 0, opacity: 0 }
  const shown = { pathLength: 1, opacity: 1 }

  const motionProps =
    draw === "load"
      ? { initial: hidden, animate: shown }
      : draw === "view"
        ? { initial: hidden, whileInView: shown, viewport: { once: true, amount: 0.4 } }
        : {}

  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox={viewBox}
      fill="none"
      className={cn("pointer-events-none overflow-visible", className)}
    >
      <m.path
        d={d}
        stroke="currentColor"
        strokeWidth={1}
        strokeLinecap="round"
        strokeLinejoin="round"
        transition={transition}
        {...motionProps}
      />
    </svg>
  )
}
