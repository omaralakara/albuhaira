import { ArrowRight, Handshake, Landmark, type LucideIcon } from "lucide-react"

import { SmartLink } from "@/components/site/smart-link"
import { Button } from "@/components/ui/button"
import { company, companyLinks } from "@/content/company"

import { MilestoneTimeline } from "./trust/milestone-timeline"
import { SkylineArch } from "./trust/skyline-arch"
import { ValuesRow } from "./trust/values-row"

const facts: { icon: LucideIcon; text: string }[] = [
  { icon: Landmark, text: company.listing },
  { icon: Handshake, text: company.membership },
]

/**
 * Section 8, Trust: "Experience behind every policy."
 * Confidence comes from type, space and verifiable facts only: the founding
 * year, the founding decree, the ADX listing and EIA membership, dated awards
 * with their awarding bodies, and the SHIELD values. No ratings, financial
 * claims, counts or testimonials. The top padding is lighter than the bottom:
 * the medical network above also ends on the warm canvas.
 */
export function Trust() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="overflow-x-clip pt-14 pb-14 md:pt-16 md:pb-20 lg:pt-18 lg:pb-24"
    >
      <div className="page-container">
        {/* Statement: a 2x2 grid on desktop (year + facts | title + links), one column on phones */}
        <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-12 lg:gap-x-10 xl:gap-x-16">
          <div className="lg:col-span-5">
            <p className="eyebrow">About Al Buhaira</p>
            <p className="mt-10 font-display font-normal lg:mt-12">
              <span className="block text-[1.75rem] leading-none text-ink-soft italic sm:text-[2rem]">Since</span>
              <span className="mt-3 -ml-[0.05em] block text-[clamp(7.25rem,2rem+13vw,13.25rem)] leading-[0.86] tracking-[-0.035em] text-brand lining-nums sm:mt-4">
                {company.founded}
              </span>
            </p>
          </div>

          <div className="lg:col-span-7 lg:pt-[5.25rem]">
            <h2 id="about-title" className="font-display text-display-1 font-normal text-ink">
              Experience behind every policy.
            </h2>
            <p className="mt-6 max-w-[38rem] text-lead text-ink-soft">{company.foundingStatement}</p>
          </div>

          <ul role="list" className="grid max-w-[38rem] border-t border-line lg:col-span-5">
            {facts.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-start gap-3.5 border-b border-line py-4">
                <Icon aria-hidden="true" strokeWidth={1.75} className="mt-0.5 size-5 shrink-0 text-brand" />
                <span className="leading-snug text-ink">{text}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 lg:col-span-7 lg:self-start">
            <Button asChild variant="outline" size="lg">
              <SmartLink href={companyLinks.about.href}>
                {companyLinks.about.label}
                <ArrowRight aria-hidden="true" strokeWidth={2} />
              </SmartLink>
            </Button>
            <ul role="list" className="flex flex-wrap gap-x-8">
              {[companyLinks.investors, companyLinks.governance].map((link) => (
                <li key={link.href}>
                  <SmartLink href={link.href} className="text-link inline-flex min-h-11 items-center gap-2">
                    {link.label}
                    <ArrowRight aria-hidden="true" strokeWidth={2} className="size-4 shrink-0" />
                  </SmartLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* The skyline in a true arch beside the awards, on the same columns as the statement */}
        <div className="mt-12 grid grid-cols-1 gap-y-12 md:mt-16 md:grid-cols-12 md:items-center md:gap-x-10 xl:gap-x-16">
          <SkylineArch className="md:col-span-6 lg:col-span-5" />
          <MilestoneTimeline className="md:col-span-6 lg:col-span-7" />
        </div>
        <ValuesRow className="mt-12 border-t border-line pt-8 md:mt-16 md:pt-10" />
      </div>
    </section>
  )
}
