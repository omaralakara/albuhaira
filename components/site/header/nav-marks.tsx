import { ArrowUpRight } from "lucide-react"

import { isExternal } from "@/content/links"
import { cn } from "@/lib/utils"

/*
 * Small shared pieces for the header menus. They import no page content, so
 * the client dropdowns can use them without pulling product copy into the
 * browser bundle (iconFor in nav-parts.tsx does import it).
 */

/** Arrow shown after links to other domains (they open in a new tab). */
export function ExternalMark({ href, className }: { href: string; className?: string }) {
  if (!isExternal(href)) return null
  return <ArrowUpRight aria-hidden="true" strokeWidth={1.75} className={cn("size-3.5 shrink-0", className)} />
}

/** Small uppercase title above a group of links. */
export const groupLabelClass = "text-[0.6875rem] leading-none font-semibold tracking-[0.14em] text-ink-muted uppercase"

export const groupNumber = (index: number) => String(index + 1).padStart(2, "0")
