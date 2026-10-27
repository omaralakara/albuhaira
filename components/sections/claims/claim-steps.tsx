import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { claimRoutes, type ClaimRoute } from "@/content/claims"
import { cn } from "@/lib/utils"

type Step = NonNullable<ClaimRoute["steps"]>[number]

/** Tab labels; on phones only the first word shows (the full label stays in the accessible name). */
const tabLabels: Partial<Record<ClaimRoute["id"], { short: string; rest: string }>> = {
  motor: { short: "Motor", rest: " claim" },
  medical: { short: "Medical", rest: " reimbursement" },
}

/**
 * "How it works": the two step lists the live site publishes (motor claims and
 * medical reimbursement), drawn exactly as published. No durations and no
 * "approved" end state: the last step is the site's own last step. Non-motor
 * claims have no published steps, so they have no tab. What to prepare lives
 * on each route card, so all three routes carry it the same way. Static on
 * purpose: claims guidance never animates. A vertical list below xl; from xl,
 * one row of steps (four for motor, six for medical) joined by a thin rule.
 */
export function ClaimSteps({ className }: { className?: string }) {
  const routes = claimRoutes.filter((route) => route.steps?.length && tabLabels[route.id])

  return (
    <div className={className}>
      <h3 id="claims-steps-title" className="font-display text-display-3 font-normal text-ink">
        How it works
      </h3>
      <Tabs defaultValue={routes[0]?.id} className="mt-5 gap-0 rounded-3xl border border-brand/10 bg-surface">
        <TabsList
          variant="line"
          aria-labelledby="claims-steps-title"
          className="flex w-full justify-start gap-7 rounded-none border-b border-line p-0 px-5 group-data-horizontal/tabs:h-auto sm:gap-9 sm:px-8 lg:px-10"
        >
          {routes.map((route) => {
            const label = tabLabels[route.id]!
            return (
              <TabsTrigger
                key={route.id}
                value={route.id}
                className={cn(
                  "h-14 flex-none rounded-md border-0 px-0.5 pt-1 text-base font-semibold text-ink-muted hover:text-ink data-active:text-ink sm:h-16",
                  // Selected indicator: a brand rule on the list's bottom border (CSS only)
                  "after:bg-brand group-data-horizontal/tabs:after:bottom-[-1px] group-data-horizontal/tabs:after:h-[3px] group-data-horizontal/tabs:after:rounded-full"
                )}
              >
                {label.short}
                <span className="max-sm:sr-only">{label.rest}</span>
              </TabsTrigger>
            )
          })}
        </TabsList>

        <div className="px-5 pt-7 pb-6 sm:px-8 sm:pt-9 sm:pb-9 lg:px-10 lg:pb-10">
          {routes.map((route) => (
            <TabsContent
              key={route.id}
              value={route.id}
              className="rounded-xl text-base focus-visible:outline-offset-8"
            >
              <Stepper steps={route.steps!} />
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </div>
  )
}

function Stepper({ steps }: { steps: Step[] }) {
  return (
    <ol
      role="list"
      className={cn(
        "grid xl:gap-x-(--step-gap)",
        steps.length > 4 ? "xl:grid-cols-6 xl:[--step-gap:1.5rem]" : "xl:grid-cols-4 xl:[--step-gap:2.5rem]"
      )}
    >
      {steps.map((step, index) => {
        const last = index === steps.length - 1
        return (
          <li
            key={step.title}
            className="relative grid grid-cols-[2.5rem_minmax(0,1fr)] gap-x-4 sm:gap-x-5 xl:grid-cols-1 xl:content-start xl:gap-y-4"
          >
            {/* The rule to the next step: down the left below xl, across to the next number from xl */}
            {!last && (
              <span
                aria-hidden="true"
                className="absolute top-12 bottom-2 left-5 w-px -translate-x-1/2 bg-brand/20 xl:top-5 xl:right-[calc(0.5rem-var(--step-gap))] xl:bottom-auto xl:left-12 xl:h-px xl:w-auto xl:translate-x-0"
              />
            )}
            <span
              aria-hidden="true"
              className="flex size-10 items-center justify-center rounded-full border border-brand/15 bg-brand-tint font-display text-lg leading-none text-brand tabular-nums"
            >
              {index + 1}
            </span>
            <div className={cn("pt-2 xl:pt-0", !last && "pb-7 xl:pb-0")}>
              <p className="leading-snug font-semibold text-ink">
                <span className="sr-only">Step {index + 1}: </span>
                {step.title}
              </p>
              <p className="mt-1.5 leading-relaxed text-ink-soft xl:text-[0.9375rem]">{step.detail}</p>
            </div>
          </li>
        )
      })}
    </ol>
  )
}
