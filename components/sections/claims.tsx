import { ArrowRight } from "lucide-react"

import { SectionHeading } from "@/components/site/section-heading"
import { SmartLink } from "@/components/site/smart-link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { claimRoutes, claimsHub, type ClaimRoute } from "@/content/claims"

import { AssistanceContacts } from "./claims/assistance-contacts"
import { ClaimSteps } from "./claims/claim-steps"
import { RouteCard } from "./claims/route-card"

/** Segment labels on phones; the full route name stays in the accessible name. */
const segmentLabels: Record<ClaimRoute["id"], { short: string; rest: string }> = {
  motor: { short: "Motor", rest: " claims" },
  medical: { short: "Medical", rest: " reimbursement" },
  other: { short: "Other", rest: " insurance claims" },
}

/**
 * Section 6, Claims: "Support when you need it."
 * A calm, static sky band: three claim routes (where each leads, what to
 * prepare, the next step, who to contact), the published step lists, and who
 * to call. Below md the routes are a segmented control showing one route at a
 * time; from md all three show (the tab list is hidden and every panel stays
 * mounted). No entrance animation; claims guidance and contact details never move.
 */
export function Claims() {
  return (
    <section id="claims" aria-labelledby="claims-title" className="bg-sky-soft py-14 md:py-20">
      <div className="page-container">
        <SectionHeading
          id="claims-title"
          eyebrow="Claims"
          title={
            <>
              Support when <em className="italic text-brand">you need it.</em>
            </>
          }
          intro="Choose your claim type to see where it leads and what to prepare. Our team will guide you from there."
          aside={
            <SmartLink href={claimsHub.href} className="text-link inline-flex min-h-11 items-center gap-2 justify-self-start">
              All claim options
              <ArrowRight aria-hidden="true" strokeWidth={2} className="size-4 shrink-0" />
            </SmartLink>
          }
          align="split"
        />

        <Tabs defaultValue={claimRoutes[0].id} className="mt-8 gap-5 md:mt-12 md:gap-0">
          <TabsList
            aria-label="Claim type"
            className="w-full rounded-full border border-brand/10 bg-surface p-1 group-data-horizontal/tabs:h-auto md:hidden"
          >
            {claimRoutes.map((route) => {
              const label = segmentLabels[route.id]
              return (
                <TabsTrigger
                  key={route.id}
                  value={route.id}
                  className="h-11 rounded-full px-3 text-[0.9375rem] font-semibold text-ink-soft hover:text-ink data-active:bg-brand data-active:text-white"
                >
                  {label.short}
                  <span className="sr-only">{label.rest}</span>
                </TabsTrigger>
              )
            })}
          </TabsList>

          {/* From xl, each card spans the grid's four rows (subgrid) so their parts line up */}
          <div className="grid gap-5 xl:grid-cols-3 xl:gap-x-6 xl:gap-y-0">
            {claimRoutes.map((route) => (
              <TabsContent
                key={route.id}
                value={route.id}
                forceMount
                // Each panel holds its own links and button, so the panel itself needn't be a tab stop
                tabIndex={-1}
                className="flex text-base data-[state=inactive]:max-md:hidden xl:row-span-4 xl:grid xl:grid-rows-subgrid"
              >
                <RouteCard route={route} className="w-full" />
              </TabsContent>
            ))}
          </div>
        </Tabs>

        <ClaimSteps className="mt-12 md:mt-14" />
        <AssistanceContacts className="mt-12 md:mt-14" />
      </div>
    </section>
  )
}
