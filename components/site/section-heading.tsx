import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

type SectionHeadingProps = {
  id?: string
  eyebrow?: string
  title: ReactNode
  intro?: ReactNode
  /** Optional content aligned to the end of the heading row (e.g. a link) */
  aside?: ReactNode
  align?: "start" | "split"
  className?: string
  tone?: "light" | "dark"
  /** Title size: `display-1` for the narrative sections, `display-2` for utility ones (finder, FAQ, contact) */
  size?: "display-1" | "display-2"
}

/**
 * Editorial section heading: eyebrow, large serif title, short intro.
 * `split` puts the intro/aside in a second column on large screens.
 */
export function SectionHeading({
  id,
  eyebrow,
  title,
  intro,
  aside,
  align = "start",
  className,
  tone = "light",
  size = "display-1",
}: SectionHeadingProps) {
  const dark = tone === "dark"

  return (
    <div
      className={cn(
        "grid gap-6",
        align === "split" && "lg:grid-cols-12 lg:items-end lg:gap-10",
        className
      )}
    >
      <div className={cn(align === "split" && "lg:col-span-7")}>
        {eyebrow && <p className={cn("eyebrow mb-5", dark && "text-sky")}>{eyebrow}</p>}
        <h2
          id={id}
          className={cn(
            "font-display font-normal",
            size === "display-2" ? "text-display-2" : "text-display-1",
            dark ? "text-white" : "text-ink"
          )}
        >
          {title}
        </h2>
      </div>
      {(intro || aside) && (
        <div className={cn("grid gap-5", align === "split" && "lg:col-span-5 lg:justify-self-end")}>
          {intro && (
            <p className={cn("max-w-xl text-lead", dark ? "text-white/80" : "text-ink-soft")}>{intro}</p>
          )}
          {aside}
        </div>
      )}
    </div>
  )
}
