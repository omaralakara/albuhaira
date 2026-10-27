import type { CSSProperties } from "react"

import { cn } from "@/lib/utils"

/**
 * SplitText — adapted from React Bits (https://reactbits.dev, MIT + Commons Clause).
 *
 * The original splits text with GSAP after hydration and keeps the element
 * hidden until then. For the hero we need the opposite: a brief, one-time
 * entrance where the headline is readable immediately. This port keeps the
 * React Bits props that matter here, renders every piece on the server and
 * animates with a CSS keyframe (`split-rise` in globals.css), so it:
 *   - paints with the first frame (no hydration wait, no GSAP dependency),
 *   - runs once per page load,
 *   - is skipped entirely under `prefers-reduced-motion: reduce`.
 * Screen readers get the full sentence; the animated pieces are aria-hidden.
 */
export interface SplitTextProps {
  text: string
  className?: string
  /** Delay between pieces in ms (React Bits default: 50) */
  delay?: number
  /** Duration of each piece in seconds */
  duration?: number
  /** CSS easing function */
  ease?: string
  splitType?: "chars" | "words"
  /** Vertical offset each piece rises from */
  fromY?: string
  /** Continue a stagger that started in a previous SplitText */
  startIndex?: number
  /** Delay before the first piece in ms */
  startDelay?: number
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span"
  textAlign?: CSSProperties["textAlign"]
}

type PieceStyle = CSSProperties & Record<`--${string}`, string | number>

export default function SplitText({
  text,
  className,
  delay = 50,
  duration = 0.64,
  ease,
  splitType = "words",
  fromY = "0.4em",
  startIndex = 0,
  startDelay = 0,
  tag: Tag = "p",
  textAlign,
}: SplitTextProps) {
  const words = text.split(" ")
  let index = startIndex

  const rootStyle: PieceStyle = {
    textAlign,
    "--split-stagger": `${delay}ms`,
    "--split-duration": `${duration * 1000}ms`,
    "--split-start": `${startDelay}ms`,
    "--split-y": fromY,
    ...(ease ? { "--split-ease": ease } : {}),
  }

  return (
    <Tag className={cn("split-animate", className)} style={rootStyle}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {words.map((word, w) => {
          const gap = w < words.length - 1 ? " " : null
          if (splitType === "words") {
            return (
              <span key={w}>
                <span className="split-piece" style={{ "--split-index": index++ } as PieceStyle}>
                  {word}
                </span>
                {gap}
              </span>
            )
          }
          return (
            <span key={w}>
              <span className="inline-block whitespace-nowrap">
                {Array.from(word).map((char, c) => (
                  <span key={c} className="split-piece" style={{ "--split-index": index++ } as PieceStyle}>
                    {char}
                  </span>
                ))}
              </span>
              {gap}
            </span>
          )
        })}
      </span>
    </Tag>
  )
}
