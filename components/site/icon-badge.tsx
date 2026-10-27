import type { LucideIcon } from "lucide-react"

import { cn } from "@/lib/utils"

const tones = {
  brand: "bg-brand-tint text-brand",
  gold: "bg-gold text-ink",
  sky: "bg-sky-soft text-brand",
  inverse: "bg-white/10 text-sky",
} as const

/** A Lucide icon in a soft circular well. Decorative: the label carries meaning. */
export function IconBadge({
  icon: Icon,
  tone = "brand",
  size = "md",
  className,
}: {
  icon: LucideIcon
  tone?: keyof typeof tones
  size?: "sm" | "md" | "lg"
  className?: string
}) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-full",
        tones[tone],
        size === "sm" && "size-9 [&_svg]:size-[18px]",
        size === "md" && "size-11 [&_svg]:size-5",
        size === "lg" && "size-14 [&_svg]:size-6",
        className
      )}
    >
      <Icon strokeWidth={1.75} />
    </span>
  )
}
