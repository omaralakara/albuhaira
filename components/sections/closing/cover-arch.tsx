import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

/**
 * The hero's arch, left empty: a thin brand line that rises from the two
 * route cards below, crowns the heading and comes back down. Pure CSS, so
 * the dome stays a true semicircle and the line stays 1px at any width:
 * the wrapper is a size container and the top radius is 50cqw (half its
 * width). Purely decorative and static.
 */
export function CoverArch({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("@container relative mx-auto", className)}>
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        {/* Daylight through the arch */}
        <div className="absolute inset-0 rounded-t-[50cqw] bg-linear-to-b from-sky-soft via-sky-soft/35 to-transparent to-80%" />
        {/* The line: dome and legs in one outline */}
        <div className="absolute inset-0 rounded-t-[50cqw] border border-b-0 border-brand/40" />
        {/* Where the legs meet the two routes */}
        <span className="absolute -bottom-[3px] -left-[3px] size-[7px] rounded-full bg-brand" />
        <span className="absolute -right-[3px] -bottom-[3px] size-[7px] rounded-full bg-brand" />
      </div>
      <div className="relative">{children}</div>
    </div>
  )
}
