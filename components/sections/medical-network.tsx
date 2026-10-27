import { ArrowRight, IdCard } from "lucide-react"

import { SectionHeading } from "@/components/site/section-heading"
import { SmartLink } from "@/components/site/smart-link"
import { networkLinks, networkNotice } from "@/content/medical-network"

import { FinderForm } from "./medical/finder-form"

/**
 * Section 7, Medical network: "Find care within your network."
 * The policy-dependence wording sits beside the finder so the search is read
 * in context: the network on the member's card decides which providers apply.
 * Reading order is heading, finder, then the TPA alternative, so phones reach
 * the search first; from lg the TPA link sits under the notice, beside the finder.
 */
export function MedicalNetwork() {
  const { tpa } = networkLinks

  return (
    <section id="medical-network" aria-labelledby="medical-network-title" className="pt-14 pb-14 md:pt-20 md:pb-12">
      <div className="page-container grid gap-12 lg:grid-cols-12 lg:grid-rows-[auto_1fr] lg:gap-10 xl:gap-x-16">
        <div className="lg:col-span-5 lg:col-start-1 lg:row-start-1">
          <SectionHeading
            id="medical-network-title"
            eyebrow="Medical network"
            title="Find care within your network."
            intro={networkNotice.lead}
            size="display-2"
          />

          <div className="mt-8 flex gap-4 rounded-2xl border border-brand/15 bg-brand-tint p-5 sm:p-6">
            <IdCard aria-hidden="true" strokeWidth={1.75} className="mt-0.5 size-6 shrink-0 text-brand" />
            <p className="leading-relaxed font-medium text-ink">{networkNotice.check}</p>
          </div>
        </div>

        {/* On desktop the finder starts level with the headline, not the eyebrow */}
        <div className="lg:col-span-7 lg:col-start-6 lg:row-span-2 lg:row-start-1 lg:pt-11">
          <FinderForm />
        </div>

        <div className="border-t border-line pt-5 lg:col-span-5 lg:col-start-1 lg:row-start-2">
          <SmartLink href={tpa.href} className="text-link inline-flex min-h-11 items-center gap-2">
            {tpa.label}
            <ArrowRight aria-hidden="true" strokeWidth={2} className="size-4 shrink-0" />
          </SmartLink>
          <p className="mt-1 max-w-md text-[0.9375rem] leading-relaxed text-ink-muted">{tpa.description}</p>
        </div>
      </div>
    </section>
  )
}
