import { ArrowRight } from "lucide-react"

import { SmartLink } from "@/components/site/smart-link"
import type { BusinessLine } from "@/content/business"
import { cn } from "@/lib/utils"

/**
 * One line of business cover: name, plain-English summary, the types of cover
 * it groups, its qualification (always shown next to the benefit) and the two
 * next steps. Shared by the desktop tabs (as columns) and the mobile accordion,
 * where the group name is the h3 and each line is an h4. The links sit at the
 * bottom, so they line up across columns.
 */
export function LineEntry({ line, className }: { line: BusinessLine; className?: string }) {
  return (
    <div className={cn("flex flex-col gap-y-3", className)}>
      <div className="min-w-0">
        <h4 className="font-display text-[1.4375rem] leading-tight font-normal text-ink">{line.name}</h4>
        <p className="mt-2 leading-relaxed text-ink-soft">{line.summary}</p>
        {line.includes && (
          <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-soft">
            <span className="font-semibold text-ink">Types of cover:</span> {line.includes.join(", ")}
          </p>
        )}
        {line.qualifier && <p className="mt-3 text-[0.8125rem] leading-snug text-ink-muted">{line.qualifier}</p>}
      </div>

      <div className="mt-auto -mb-1 flex flex-wrap items-center gap-x-7">
        <SmartLink href={line.href} className="text-link inline-flex min-h-11 items-center gap-2 text-[0.9375rem]">
          Learn more
          <span className="sr-only"> about {line.name} insurance</span>
          <ArrowRight aria-hidden="true" strokeWidth={2} className="size-4 shrink-0" />
        </SmartLink>
        <SmartLink href={line.quoteHref} className="text-link inline-flex min-h-11 items-center gap-2 text-[0.9375rem]">
          Request a quote
          <span className="sr-only"> for {line.name} insurance</span>
          <ArrowRight aria-hidden="true" strokeWidth={2} className="size-4 shrink-0" />
        </SmartLink>
      </div>
    </div>
  )
}
