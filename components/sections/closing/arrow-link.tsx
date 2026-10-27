import { ArrowRight, ArrowUpRight } from "lucide-react"
import type { ReactNode } from "react"

import { SmartLink } from "@/components/site/smart-link"
import { isExternal } from "@/content/links"
import { cn } from "@/lib/utils"

/**
 * A text link with a trailing arrow: → for this site and in-page anchors,
 * ↗ for other domains (SmartLink opens those in a new tab and announces it,
 * and keeps same-page anchors native). At least 44px tall so it works as a
 * touch target in link rows.
 */
export function ArrowLink({
  href,
  children,
  className,
}: {
  href: string
  children: ReactNode
  className?: string
}) {
  const Icon = isExternal(href) ? ArrowUpRight : ArrowRight

  return (
    <SmartLink
      href={href}
      className={cn("group/arrow inline-flex min-h-11 items-center gap-1.5 font-semibold text-brand", className)}
    >
      <span className="underline decoration-brand/30 decoration-1 underline-offset-[0.3em] transition-colors group-hover/arrow:decoration-brand">
        {children}
      </span>
      <Icon
        aria-hidden="true"
        strokeWidth={1.75}
        className="size-4 shrink-0 transition-transform duration-200 group-hover/arrow:translate-x-0.5 motion-reduce:transition-none"
      />
    </SmartLink>
  )
}
