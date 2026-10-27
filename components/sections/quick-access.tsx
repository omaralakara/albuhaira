import { ArrowRight, CarFront, ClipboardList, Headset, Stethoscope, type LucideIcon } from "lucide-react"

import { IconBadge } from "@/components/site/icon-badge"
import { phones } from "@/content/contacts"
import { cn } from "@/lib/utils"

type QuickItem = {
  href: string
  icon: LucideIcon
  label: string
  helper: string
  roadside?: boolean
}

const items: QuickItem[] = [
  { href: "#claims", icon: ClipboardList, label: "Make a claim", helper: "Motor, medical and other claims" },
  {
    href: "#medical-network",
    icon: Stethoscope,
    label: "Find a provider",
    helper: "Search our medical network by emirate",
  },
  {
    href: phones.roadside.tel,
    icon: CarFront,
    label: "Roadside assistance",
    helper: "Where included in your motor policy",
    roadside: true,
  },
  { href: "#contact", icon: Headset, label: "Contact support", helper: "Helplines, head office and branches" },
]

/** Utility strip for existing customers, directly under the hero. */
export function QuickAccess() {
  return (
    <section aria-labelledby="quick-access-title" className="page-container relative z-10 pt-6 lg:pt-8">
      <h2 id="quick-access-title" className="mb-4 text-[0.9375rem] font-semibold text-ink-soft">
        Already insured with us?
      </h2>
      <ul className="grid grid-cols-2 overflow-hidden rounded-3xl border border-line bg-surface shadow-soft lg:grid-cols-4">
        {items.map((item, index) => (
          <li
            key={item.label}
            // The fill sits on the cell, so the rounded focus ring never shows square corners of it
            className={cn(
              "border-line transition-colors",
              item.roadside ? "bg-gold-soft/70 hover:bg-gold-soft" : "hover:bg-canvas/70",
              index % 2 === 0 && "border-r",
              index < 2 && "border-b lg:border-b-0",
              index === 1 && "lg:border-r",
              index === 2 && "lg:border-r"
            )}
          >
            {/* Stacked cells up to xl: a row of four icon-text-arrow rows is too tight below 1280px.
                The focus ring is drawn inside the cell, which the rounded strip would otherwise clip. */}
            <a
              href={item.href}
              className="group flex h-full min-h-[5.5rem] flex-col gap-3 p-4 focus-visible:rounded-[1.25rem] focus-visible:outline-offset-[-4px] sm:p-5 xl:flex-row xl:items-center xl:gap-3 xl:p-6"
            >
              <IconBadge icon={item.icon} tone={item.roadside ? "gold" : "brand"} />
              <span className="min-w-0 flex-1">
                <span className="block leading-snug font-semibold text-ink">{item.label}</span>
                {item.roadside && (
                  <span className="mt-0.5 block font-display text-[1.375rem] leading-tight whitespace-nowrap text-ink tabular-nums">
                    {phones.roadside.display}
                  </span>
                )}
                <span className="mt-1 block text-sm leading-snug text-ink-muted">{item.helper}</span>
              </span>
              <ArrowRight
                aria-hidden="true"
                strokeWidth={1.75}
                className="hidden size-5 shrink-0 text-ink-muted transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-brand xl:block"
              />
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
