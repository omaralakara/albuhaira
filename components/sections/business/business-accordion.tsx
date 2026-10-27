import Image from "next/image"
import { ChevronDown } from "lucide-react"

import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { businessGroups } from "@/content/business"
import { images } from "@/content/images"
import { cn } from "@/lib/utils"

import { AnchoredAccordion } from "./anchored-accordion"
import { DotList, kickerItems } from "./dot-list"
import { LineEntry } from "./line-entry"

/**
 * Below `lg`: the same four groups as an accordion (one open at a time, the
 * first open on load), each with its photo, explanation and lines.
 */
export function BusinessAccordion({ className }: { className?: string }) {
  return (
    <AnchoredAccordion
      defaultValue={businessGroups[0].id}
      className={cn("border-t border-line", className)}
    >
      {businessGroups.map((group, index) => {
        const image = images[group.image]
        return (
          <AccordionItem
            key={group.id}
            value={group.id}
            data-value={group.id}
            className={cn(
              "border-b border-line",
              // Widen the panel's clipping box (content stays put) so focus rings on edge links aren't cut off
              "*:data-[slot=accordion-content]:-mx-1.5 *:data-[slot=accordion-content]:px-1.5"
            )}
          >
            <AccordionTrigger
              className={cn(
                "grid grid-cols-[2rem_minmax(0,1fr)_2.75rem] items-baseline gap-x-3 gap-y-1 rounded-none border-0 py-6 text-left text-base font-normal hover:no-underline sm:grid-cols-[3rem_minmax(0,1fr)_2.75rem] sm:py-7",
                // Swap the default chevrons for the circled one below
                "**:data-[slot=accordion-trigger-icon]:hidden!"
              )}
            >
              <span
                aria-hidden="true"
                className="col-start-1 row-start-1 text-sm font-semibold tracking-[0.08em] text-ink-muted tabular-nums transition-colors group-aria-expanded/accordion-trigger:text-brand"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="col-start-2 row-start-1 min-w-0 font-display text-[1.625rem] leading-[1.15] tracking-[-0.01em] text-ink sm:text-[1.875rem]">
                {group.name}
              </span>
              <span className="sr-only">: </span>
              {/* The kicker may run under the chevron column so it stays on one line on phones */}
              <DotList
                items={kickerItems(group.kicker)}
                className="col-span-2 col-start-2 row-start-2 text-[0.9375rem] leading-snug text-ink-muted"
              />
              <span
                aria-hidden="true"
                className="col-start-3 row-start-1 -my-2 flex size-11 items-center justify-center self-center justify-self-end rounded-full border border-line text-ink-soft transition-[background-color,border-color,color] duration-300 group-aria-expanded/accordion-trigger:border-brand/20 group-aria-expanded/accordion-trigger:bg-brand-tint group-aria-expanded/accordion-trigger:text-brand"
              >
                <ChevronDown
                  strokeWidth={1.75}
                  className="size-5 transition-transform duration-300 ease-out-quart group-aria-expanded/accordion-trigger:rotate-180 motion-reduce:transition-none"
                />
              </span>
            </AccordionTrigger>

            <AccordionContent className="pb-10 text-base sm:pl-[3.75rem] [&_a]:underline-offset-[0.3em] [&_a]:hover:text-brand [&_p:not(:last-child)]:mb-0">
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-canvas-deep">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 640px) calc(100vw - 8rem), calc(100vw - 2.5rem)"
                  placeholder="blur"
                  className="object-cover"
                  style={{ objectPosition: image.position }}
                />
                <div aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-ink/5 ring-inset" />
              </div>
              <p className="mt-6 text-lead text-ink">{group.explanation}</p>
              <ul role="list" className="mt-6 border-t border-line">
                {group.lines.map((line) => (
                  <li key={line.id} className="border-b border-line py-6 last:border-b-0 last:pb-0">
                    <LineEntry line={line} />
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        )
      })}
    </AnchoredAccordion>
  )
}
