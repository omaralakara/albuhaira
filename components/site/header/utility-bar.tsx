import { SmartLink } from "@/components/site/smart-link"
import { phones } from "@/content/contacts"
import { site } from "@/content/links"
import { digitalNav, digitalNavFooter } from "@/content/navigation"
import { cn } from "@/lib/utils"

import { DigitalServicesMenu } from "./digital-services-menu"

const utilityLink =
  "inline-flex h-11 items-center rounded-full px-3 font-medium text-ink-soft transition-colors hover:text-ink"

/**
 * Non-sticky utility bar (≥ 1280px): portals and quick links on the left,
 * a quiet roadside line on the right. Scrolls away; the main bar stays.
 */
export function UtilityBar({ className }: { className?: string }) {
  return (
    <div
      data-utility-bar
      className={cn("relative hidden border-b border-line bg-canvas-deep/70 text-[0.8125rem] xl:block", className)}
    >
      <div className="page-container flex h-11 items-center justify-between gap-8">
        <nav aria-label="Services" className="-ml-3">
          <ul className="flex items-center">
            <li>
              <DigitalServicesMenu groups={digitalNav} footer={digitalNavFooter} />
            </li>
            <li>
              <SmartLink href="#medical-network" className={utilityLink}>
                Find a medical provider
              </SmartLink>
            </li>
            <li>
              <SmartLink href={site("/branches")} className={utilityLink}>
                Branches
              </SmartLink>
            </li>
          </ul>
        </nav>
        <p className="flex items-center gap-3 text-ink-muted">
          <a
            href={phones.roadside.tel}
            className="group/roadside -mx-2 inline-flex h-11 items-center gap-2.5 rounded-full px-2 text-ink-soft transition-colors hover:text-ink"
          >
            <span aria-hidden="true" className="size-2 rounded-full bg-gold ring-[3px] ring-gold/35" />
            <span className="font-medium">{phones.roadside.label}</span>
            <span className="font-semibold text-ink tabular-nums underline decoration-transparent underline-offset-4 transition-colors group-hover/roadside:decoration-ink/40">
              {phones.roadside.display}
            </span>
          </a>
          <span aria-hidden="true" className="h-3.5 w-px bg-line-strong" />
          <span>Where included in your motor policy</span>
        </p>
      </div>
    </div>
  )
}
