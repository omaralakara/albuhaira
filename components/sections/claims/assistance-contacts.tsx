import { ArrowRight, CarFront, Phone } from "lucide-react"

import { IconBadge } from "@/components/site/icon-badge"
import { SmartLink } from "@/components/site/smart-link"
import { claimsHub } from "@/content/claims"
import { phones } from "@/content/contacts"

// The head office is on the "Other insurance claims" card; Contact keeps the full directory and the office hours
const directory = [phones.motorClaims, phones.medical, phones.marineClaims]

/**
 * Who to call: roadside assistance first (gold, always with its policy
 * qualifier), then the claims and medical lines, the medical claim status
 * request and a link to the full contact directory. No hours are attached to
 * roadside or the claims lines because the site states none.
 */
export function AssistanceContacts({ className }: { className?: string }) {
  const roadside = phones.roadside

  return (
    <div className={className}>
      <h3 id="claims-contacts-title" className="font-display text-display-3 font-normal text-ink">
        Who to call
      </h3>

      {/* md: roadside beside the directory; xl: the directory takes the wider share */}
      <div className="mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-12">
        {/* Roadside assistance: gold is reserved for it across the site */}
        <a
          href={roadside.tel}
          className="block rounded-3xl border border-gold/70 bg-gold-soft p-6 transition-colors hover:border-gold sm:p-7 xl:col-span-4"
        >
          <span className="flex items-center gap-3">
            <IconBadge icon={CarFront} tone="gold" />
            <span className="leading-snug font-semibold text-ink">{roadside.label}</span>
          </span>
          <span className="mt-5 block font-display text-[2.5rem] leading-none text-ink tabular-nums sm:text-[2.75rem]">
            {roadside.display}
          </span>
          <span className="mt-3 block text-ink-soft">{roadside.purpose}</span>
          <span className="mt-1 block text-sm leading-snug font-medium text-gold-ink">{roadside.qualifier}</span>
        </a>

        {/* Rows sit side by side only when the card itself is wide enough (container queries) */}
        <div className="@container overflow-hidden rounded-3xl border border-brand/10 bg-surface xl:col-span-8">
          <ul role="list" className="divide-y divide-line">
            {directory.map((line) => (
              <li key={line.tel}>
                <a
                  href={line.tel}
                  className="flex min-h-[4.5rem] flex-col gap-1.5 px-5 py-4 transition-colors hover:bg-sky-soft/50 focus-visible:outline-offset-[-4px] sm:px-6 @md:flex-row @md:items-center @md:justify-between @md:gap-4"
                >
                  <span className="min-w-0">
                    <span className="block leading-snug font-semibold text-ink">{line.label}</span>
                    <span className="mt-0.5 block text-sm leading-snug text-ink-muted">{line.purpose}</span>
                  </span>
                  <span className="flex shrink-0 items-center gap-2 font-semibold text-brand tabular-nums">
                    <Phone aria-hidden="true" strokeWidth={1.75} className="size-4" />
                    {line.display}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <ul role="list" className="mt-4 flex flex-col gap-x-10 sm:flex-row sm:flex-wrap">
        <li>
          <SmartLink href={claimsHub.medicalStatus.href} className="text-link inline-flex min-h-11 items-center gap-2">
            {claimsHub.medicalStatus.label}
            <ArrowRight aria-hidden="true" strokeWidth={2} className="size-4 shrink-0" />
          </SmartLink>
        </li>
        <li>
          <SmartLink href="#contact" className="text-link inline-flex min-h-11 items-center gap-2">
            Office hours and all helplines
            <ArrowRight aria-hidden="true" strokeWidth={2} className="size-4 shrink-0" />
          </SmartLink>
        </li>
      </ul>
    </div>
  )
}
