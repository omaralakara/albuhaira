"use client"

import type { PointerEventHandler } from "react"
import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react"

import { audienceDefaults, type Audience } from "./hero-options"
import { SmartLink } from "@/components/site/smart-link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { isExternal } from "@/content/links"
import { cn } from "@/lib/utils"

import { OPTIONS } from "./moments"

type SelectorProps = {
  audience: Audience
  selected: Record<Audience, string | null>
  /** The option whose moment is in the main window while the photos flip on their own */
  showingId: string | null
  onAudienceChange: (audience: Audience) => void
  onChoose: (audience: Audience, id: string) => void
  /** Pointer or focus on a choice: fetch its photos ahead */
  onIntent: (audience: Audience, id: string | null) => void
  onPointerEnter?: PointerEventHandler
  onPointerLeave?: PointerEventHandler
  className?: string
}

/**
 * The selector, set straight onto the canvas instead of inside a card: a
 * labelled pair of tabs, the products as chips (the one in the main window is
 * outlined while the photos flip), then the description and actions, which
 * only ever change when the visitor chooses something.
 */
export function ArchesSelector({
  audience,
  selected,
  showingId,
  onAudienceChange,
  onChoose,
  onIntent,
  onPointerEnter,
  onPointerLeave,
  className,
}: SelectorProps) {
  return (
    <div className={className} onPointerEnter={onPointerEnter} onPointerLeave={onPointerLeave}>
      <Tabs value={audience} onValueChange={(value) => onAudienceChange(value as Audience)} className="gap-0">
        <div className="flex flex-wrap items-end justify-between gap-x-6 border-b border-line">
          <p
            id="hero-selector-label"
            className="sr-only text-[0.9375rem] font-semibold text-ink sm:not-sr-only sm:pb-3 lg:pb-[clamp(0.5rem,1.4svh,0.75rem)]"
          >
            What would you like to protect?
          </p>
          <TabsList
            variant="line"
            aria-labelledby="hero-selector-label"
            className="w-full justify-start gap-6 rounded-none p-0 group-data-horizontal/tabs:h-11 sm:w-auto"
          >
            {(["personal", "business"] as const).map((a) => (
              <TabsTrigger
                key={a}
                value={a}
                onPointerEnter={() => {
                  if (a !== audience) onIntent(a, selected[a])
                }}
                className={cn(
                  "h-full flex-none rounded-none border-0 px-0 text-[0.9375rem] font-semibold text-ink-muted hover:text-ink data-active:text-ink",
                  "focus-visible:border-0 focus-visible:ring-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand",
                  "after:bg-brand group-data-horizontal/tabs:after:bottom-[-1px] group-data-horizontal/tabs:after:h-[2px]"
                )}
              >
                {a === "personal" ? "For me" : "For my business"}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        {(["personal", "business"] as const).map((a) => (
          // The panel starts with the product choices, so it needs no tab stop of its own
          <TabsContent key={a} value={a} tabIndex={-1} className="mt-4 lg:mt-[clamp(0.75rem,2svh,1.25rem)]">
            <Panel
              audience={a}
              selectedId={selected[a]}
              showingId={a === audience ? showingId : null}
              onChoose={(id) => onChoose(a, id)}
              onIntent={(id) => onIntent(a, id)}
            />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}

function Panel({
  audience,
  selectedId,
  showingId,
  onChoose,
  onIntent,
}: {
  audience: Audience
  selectedId: string | null
  showingId: string | null
  onChoose: (id: string) => void
  onIntent: (id: string) => void
}) {
  const options = OPTIONS[audience]
  const defaults = audienceDefaults[audience]
  const option = options.find((o) => o.id === selectedId) ?? null
  const quoteHref = option?.quoteHref ?? defaults.quoteHref
  const quoteLabel = option?.quoteLabel ?? defaults.quoteLabel
  const QuoteArrow = isExternal(quoteHref) ? ArrowUpRight : ArrowRight

  return (
    <>
      <fieldset>
        <legend className="sr-only">
          {audience === "personal" ? "Choose the cover you need" : "Choose the cover your business needs"}
        </legend>
        <div className={cn("grid gap-2 sm:grid-cols-3", audience === "personal" ? "grid-cols-3" : "grid-cols-2")}>
          {options.map((o) => (
            <label
              key={o.id}
              data-showing={showingId === o.id || undefined}
              onPointerEnter={() => onIntent(o.id)}
              className={cn(
                "relative flex h-11 min-w-0 cursor-pointer items-center justify-center gap-2 rounded-full border px-3 text-sm font-medium whitespace-nowrap select-none sm:justify-start sm:px-4 sm:text-[0.9375rem] lg:h-[clamp(2.375rem,5svh,2.75rem)]",
                "border-line bg-surface/70 text-ink transition-[color,background-color,border-color,box-shadow] duration-300 hover:border-ink/30 hover:bg-surface",
                // The moment in the main window, while the photos flip on their own
                "data-showing:border-brand/45 data-showing:bg-surface data-showing:text-brand data-showing:shadow-[0_6px_16px_-10px_rgb(16_38_148/0.45)]",
                "has-checked:border-brand has-checked:bg-brand has-checked:text-white has-checked:shadow-none",
                "has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-brand",
                "motion-reduce:transition-none"
              )}
            >
              <input
                type="radio"
                name={`hero-${audience}`}
                value={o.id}
                // One tab stop for the group (the chosen product, or the first); arrow keys move within it
                tabIndex={o.id === (selectedId ?? options[0].id) ? 0 : -1}
                checked={selectedId === o.id}
                onChange={() => onChoose(o.id)}
                onFocus={() => onIntent(o.id)}
                className="sr-only"
              />
              <o.icon aria-hidden="true" strokeWidth={1.75} className="hidden size-[1.125rem] shrink-0 sm:block" />
              {o.label}
            </label>
          ))}
        </div>
      </fieldset>

      {/* Room for the longest summary, so choosing never moves the actions (business lines run longer) */}
      <div
        aria-live="polite"
        className={cn(
          "mt-4 lg:mt-[clamp(0.75rem,1.8svh,1.125rem)]",
          audience === "personal" ? "min-h-[4.6rem] sm:min-h-[3.1rem]" : "min-h-[6.1rem] sm:min-h-[4.6rem]"
        )}
      >
        {option ? (
          <p className="text-[0.9375rem] leading-relaxed text-ink-soft">
            <span className="sr-only">{option.name}: </span>
            {option.summary}{" "}
            <SmartLink href={option.learnHref} className="text-link whitespace-nowrap">
              What&rsquo;s covered
            </SmartLink>
          </p>
        ) : (
          <p className="text-[0.9375rem] leading-relaxed text-ink-muted">{defaults.prompt}</p>
        )}
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-x-6 gap-y-2 lg:mt-[clamp(0.625rem,1.6svh,1.125rem)]">
        <Button asChild size="lg" className="max-sm:h-11 max-sm:px-5 max-sm:text-[0.9375rem]">
          <SmartLink href={quoteHref}>
            {/* One flex item, so the button's gap doesn't widen the spaces between words */}
            <span>
              <QuoteLabel label={quoteLabel} />
            </span>
            <QuoteArrow aria-hidden="true" />
          </SmartLink>
        </Button>
        <a
          href={defaults.exploreHref}
          className="group/explore inline-flex h-11 items-center gap-2 text-[0.9375rem] font-semibold text-ink underline decoration-ink/25 underline-offset-[0.3em] transition-colors hover:text-brand hover:decoration-brand"
        >
          Explore insurance
          <ArrowDown
            aria-hidden="true"
            strokeWidth={1.75}
            className="size-4 transition-transform duration-200 group-hover/explore:translate-y-0.5 motion-reduce:transition-none"
          />
        </a>
      </div>
    </>
  )
}

/** "Get a motor quote" reads "Get a quote" on phones so both actions share one row. */
function QuoteLabel({ label }: { label: string }) {
  const parts = /^((?:Get|Request) an?) (.+) (quote)$/.exec(label)
  if (!parts) return <>{label}</>
  return (
    <>
      {parts[1]} <span className="hidden sm:inline">{parts[2]}&nbsp;</span>
      {parts[3]}
    </>
  )
}
