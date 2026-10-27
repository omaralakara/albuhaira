import { ArrowRight } from "lucide-react"

import { SectionHeading } from "@/components/site/section-heading"
import { SmartLink } from "@/components/site/smart-link"
import { Button } from "@/components/ui/button"
import { businessGroups, businessLinks } from "@/content/business"
import { images } from "@/content/images"
import { cn } from "@/lib/utils"

import { BusinessAccordion } from "./business-accordion"
import { BusinessExplorer, type ExplorerGroup } from "./business-explorer"
import { kickerItems } from "./dot-list"
import { LineEntry } from "./line-entry"

/**
 * Section 5, Business insurance: "Protection that keeps business moving."
 * A white band with an interactive explorer on desktop (vertical tabs beside a
 * crossfading photo, the group's lines full width below) and an accordion
 * below `lg`. Only one of the two is displayed, so only one is in the
 * accessibility tree. Both end with the same call to action.
 */
export function BusinessInsurance() {
  const groups: ExplorerGroup[] = businessGroups.map((group, index) => ({
    id: group.id,
    number: String(index + 1).padStart(2, "0"),
    name: group.name,
    kicker: kickerItems(group.kicker),
    explanation: group.explanation,
    image: images[group.image],
    lines: group.lines.map((line) => ({ id: line.id, content: <LineEntry line={line} /> })),
  }))

  return (
    <section id="business" aria-labelledby="business-title" className="bg-surface py-14 md:py-20 lg:py-24">
      <div className="page-container">
        <SectionHeading
          id="business-title"
          eyebrow="Business insurance"
          title="Protection that keeps business moving."
          intro="Cover for your people, property and projects, transport and specialist risks, from a single group policy to bespoke programmes."
          align="split"
        />

        <div className="mt-10 md:mt-12 lg:mt-14">
          <BusinessExplorer groups={groups} className="hidden lg:grid" />
          <BusinessAccordion className="lg:hidden" />
        </div>

        <BusinessActions />
      </div>
    </section>
  )
}

/** The section's call to action: a full-width band under the explorer or accordion. */
function BusinessActions() {
  const { talk, hub } = businessLinks
  // Long labels may wrap inside the button (narrow phones, enlarged text spacing) instead of overflowing
  const wrap = "h-auto min-h-12 py-2.5 text-center whitespace-normal"

  return (
    <div className="mt-10 grid gap-7 rounded-3xl bg-canvas p-6 sm:p-8 lg:mt-14 lg:grid-cols-12 lg:items-center lg:gap-x-10 lg:p-10 xl:gap-x-16">
      <div className="min-w-0 lg:col-span-5">
        <p className="font-display text-[1.625rem] leading-tight text-ink sm:text-[1.875rem]">
          Need cover built around your business?
        </p>
        <p className="mt-2 text-ink-soft">
          Request a quote for a specific line above, or tell us what you need to protect.
        </p>
      </div>

      <div className="flex min-w-0 flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center lg:col-span-7 lg:justify-end">
        <Button asChild size="lg" className={cn(wrap, "w-full sm:w-auto")}>
          <SmartLink href={talk.href}>
            {talk.label}
            <ArrowRight aria-hidden="true" />
          </SmartLink>
        </Button>
        <Button asChild size="lg" variant="outline" className={cn(wrap, "w-full sm:w-auto")}>
          <SmartLink href={hub.href}>{hub.label}</SmartLink>
        </Button>
      </div>
    </div>
  )
}
