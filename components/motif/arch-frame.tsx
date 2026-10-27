import type { CSSProperties, ReactNode } from "react"

import { cn } from "@/lib/utils"

import { CurveLine } from "./curve-line"

type Ratio = readonly [width: number, height: number]

type ArchFrameProps = {
  children: ReactNode
  /** Width:height of the frame; the arch is a true semicircle on top */
  ratio?: Ratio
  /** Which way the line's tail flows out of the frame */
  line?: "right" | "left" | "none"
  /** Gap between photo edge and line, in viewBox units (frame width = ratio[0] * 100) */
  offset?: number
  draw?: "load" | "view" | false
  className?: string
  /** Classes for the masked photo area (e.g. background while loading) */
  maskClassName?: string
  /** Colour and stroke width of the line, e.g. "text-brand/50 [stroke-width:1.2]" */
  lineClassName?: string
}

/**
 * Arch-framed photograph with the thin protective line that traces it.
 * The arch echoes the arched windows in the Al Buhaira emblem; the line
 * starts outside the frame, wraps over the arch and flows on, suggesting
 * continuity. Server component; only the line's draw-on runs on the client.
 */
export function ArchFrame({
  children,
  ratio = [4, 5],
  line = "right",
  offset = 16,
  draw = "view",
  className,
  maskClassName,
  lineClassName,
}: ArchFrameProps) {
  const [rw, rh] = ratio
  const w = rw * 100
  const h = rh * 100
  const rise = ((w / 2 / h) * 100).toFixed(3)

  return (
    <div className={cn("relative", className)} style={{ aspectRatio: `${rw} / ${rh}` }}>
      <div
        className={cn("arch absolute inset-0 isolate overflow-hidden bg-canvas-deep", maskClassName)}
        style={{ "--arch-rise": `${rise}%` } as CSSProperties}
      >
        {children}
      </div>
      {line !== "none" && (
        <CurveLine
          d={archEmbracePath(w, h, offset, line)}
          viewBox={`0 0 ${w} ${h}`}
          draw={draw}
          className={cn("absolute inset-0 h-full w-full text-brand/45 [stroke-width:1.15]", lineClassName)}
        />
      )}
    </div>
  )
}

/**
 * Path that swoops in from below one side, rises parallel to the frame,
 * follows the arch at a constant offset and flows out on the other side.
 */
export function archEmbracePath(w: number, h: number, o: number, tail: "right" | "left" = "right") {
  // Drawn for a right-hand tail; X() mirrors it for a left-hand one
  const X = (x: number) => (tail === "right" ? x : w - x)
  const sweep = tail === "right" ? 1 : 0
  const r = w / 2
  const R = r + o
  const start = -o
  const end = w + o
  const springLine = r
  const exitY = springLine + h * 0.28

  return [
    `M ${X(start - 70)} ${h + 34}`,
    `C ${X(start - 22)} ${h + 20} ${X(start)} ${h - 18} ${X(start)} ${h - 92}`,
    `L ${X(start)} ${springLine}`,
    `A ${R} ${R} 0 0 ${sweep} ${X(end)} ${springLine}`,
    `L ${X(end)} ${exitY}`,
    `C ${X(end)} ${exitY + 70} ${X(end + 26)} ${exitY + 104} ${X(end + 96)} ${exitY + 118}`,
  ].join(" ")
}
