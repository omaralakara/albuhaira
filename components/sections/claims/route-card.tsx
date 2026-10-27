import { ArrowRight, Car, FileDown, FileText, Mail, Phone, ReceiptText, type LucideIcon } from "lucide-react"

import { IconBadge } from "@/components/site/icon-badge"
import { SmartLink } from "@/components/site/smart-link"
import { Button } from "@/components/ui/button"
import type { ClaimRoute } from "@/content/claims"
import { cn } from "@/lib/utils"

import { PrepareBox } from "./prepare-box"

const icons: Record<ClaimRoute["id"], LucideIcon> = {
  motor: Car,
  medical: ReceiptText,
  other: FileText,
}

/**
 * One claim route, complete in itself and in reading order: where it leads,
 * what to prepare (with the route's note), the next step on the live site,
 * then who to contact (plus the PDF claim form, where the route has one).
 *
 * Layouts:
 * - phones: stacked;
 * - `md`–`lg`: two columns, summary, action and contacts beside "What to prepare";
 * - `xl`: three cards side by side. Each card joins the list's four rows (CSS
 *   subgrid) so the prepare boxes, actions and contact lines line up.
 */
export function RouteCard({ route, className }: { route: ClaimRoute; className?: string }) {
  return (
    <div
      className={cn(
        "flex flex-col rounded-3xl border border-brand/10 bg-surface p-6 sm:p-8",
        "md:grid md:grid-cols-2 md:grid-rows-[auto_1fr] md:gap-x-8 lg:gap-x-12 lg:p-10",
        "xl:row-span-4 xl:grid-cols-1 xl:grid-rows-subgrid xl:gap-y-0 xl:p-8",
        className
      )}
    >
      {/* 1. Where it leads */}
      <div className="md:col-start-1 md:row-start-1">
        <IconBadge icon={icons[route.id]} />
        <h3 className="mt-5 font-display text-display-3 font-normal text-ink">{route.title}</h3>
        <p className="mt-3 text-ink-soft">{route.summary}</p>
      </div>

      {/* 2. What to prepare, with the route's note */}
      <PrepareBox
        prepare={route.prepare}
        note={route.note}
        className="mt-6 md:col-start-2 md:row-span-2 md:row-start-1 md:mt-0 md:self-start xl:col-start-1 xl:row-span-1 xl:row-start-2 xl:mt-6 xl:self-stretch"
      />

      {/* 3 + 4. Next step and contacts: under the summary at md–lg, two separate subgrid rows at xl */}
      <div className="mt-7 md:col-start-1 md:row-start-2 md:mt-8 xl:contents">
        <div className="xl:mt-7">
          <Button
            asChild
            variant="secondary"
            size="lg"
            className="h-auto min-h-12 w-full justify-between py-3 text-left text-balance whitespace-normal sm:w-auto sm:gap-6 xl:w-full"
          >
            <SmartLink href={route.action.href}>
              {route.action.label}
              <ArrowRight aria-hidden="true" strokeWidth={2} />
            </SmartLink>
          </Button>
        </div>

        <ul
          role="list"
          className={cn(
            "mt-5 grid content-start border-t border-line pt-3 text-[0.9375rem] sm:flex sm:flex-wrap sm:gap-x-8",
            "xl:grid xl:gap-x-0"
          )}
        >
          {route.phones.map((phone) => {
            // Name the line when it isn't the route's own team (e.g. head office)
            const lineName = phone.label !== route.title ? phone.label : null
            return (
              <li key={phone.tel}>
                <a
                  href={phone.tel}
                  className="flex min-h-11 flex-wrap items-center gap-x-3 gap-y-0.5 rounded-md text-ink transition-colors hover:text-brand"
                >
                  <Phone aria-hidden="true" strokeWidth={1.75} className="size-[1.125rem] shrink-0 text-brand" />
                  <span className="font-semibold tabular-nums">
                    <span className="sr-only">Call {phone.label}: </span>
                    {phone.display}
                  </span>
                  {lineName && (
                    <span aria-hidden="true" className="text-sm text-ink-muted">
                      {lineName}
                    </span>
                  )}
                </a>
              </li>
            )
          })}
          {route.email && (
            <li className="min-w-0">
              <a
                href={`mailto:${route.email}`}
                className="flex min-h-11 items-center gap-3 rounded-md text-ink transition-colors hover:text-brand"
              >
                <Mail aria-hidden="true" strokeWidth={1.75} className="size-[1.125rem] shrink-0 text-brand" />
                <span className="min-w-0 font-semibold [overflow-wrap:anywhere]">
                  <span className="sr-only">Email </span>
                  {route.email}
                </span>
              </a>
            </li>
          )}
          {route.secondary && (
            <li>
              <SmartLink
                href={route.secondary.href}
                className="flex min-h-11 items-center gap-3 rounded-md font-semibold text-ink transition-colors hover:text-brand"
              >
                <FileDown aria-hidden="true" strokeWidth={1.75} className="size-[1.125rem] shrink-0 text-brand" />
                {route.secondary.label}
              </SmartLink>
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}
