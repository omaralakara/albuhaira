import { cn } from "@/lib/utils"

type CurveConnectorProps = {
  /** Horizontal start (top) and end (bottom) as % of the container width */
  from?: number
  to?: number
  className?: string
}

/**
 * A quiet line that carries the hero's curve between sections. It stretches
 * with its container (non-scaling stroke keeps it 1px), is purely decorative
 * and never animates, so it can't distract from the content around it.
 */
export function CurveConnector({ from = 82, to = 12, className }: CurveConnectorProps) {
  const mid = (from + to) / 2
  const d = `M ${from} 0 C ${from} 45, ${mid + (from - to) * 0.18} 50, ${mid} 50 S ${to} 55, ${to} 100`

  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      fill="none"
      className={cn("pointer-events-none block h-24 w-full overflow-visible text-brand/30 md:h-32", className)}
    >
      <path d={d} stroke="currentColor" strokeWidth={1} vectorEffect="non-scaling-stroke" />
    </svg>
  )
}
