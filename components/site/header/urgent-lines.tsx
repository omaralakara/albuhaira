import { Anchor, CarFront, HeartPulse, Phone, Truck, type LucideIcon } from "lucide-react"

import { IconBadge } from "@/components/site/icon-badge"
import { phones, type Phone as PhoneLine } from "@/content/contacts"

const lineIcons = new Map<PhoneLine, LucideIcon>([
  [phones.roadside, Truck],
  [phones.motorClaims, CarFront],
  [phones.medical, HeartPulse],
  [phones.marineClaims, Anchor],
])

/** Gold is reserved for roadside assistance, so it stays easy to spot. */
export function isRoadside(line: PhoneLine) {
  return line === phones.roadside
}

/**
 * One helpline, laid out for quick scanning: what it is, the number (large,
 * always visible), what it is for, and its policy qualifier where it has one.
 * Rendered inside a tel: link by the caller.
 */
export function UrgentLineContent({ line }: { line: PhoneLine }) {
  const roadside = isRoadside(line)
  const Icon = lineIcons.get(line) ?? Phone

  return (
    <>
      <IconBadge icon={Icon} tone={roadside ? "gold" : "brand"} size="sm" className="mt-0.5" />
      <span className="min-w-0 flex-1">
        <span className="block text-[0.8125rem] leading-snug font-medium text-ink-soft">{line.label}</span>
        <span className="mt-0.5 block text-[1.1875rem] leading-tight font-semibold tracking-[-0.01em] text-ink tabular-nums">
          {line.display}
        </span>
        <span className="mt-1 block text-[0.8125rem] leading-snug text-ink-muted">{line.purpose}</span>
        {line.qualifier && (
          <span className="mt-2 block text-[0.75rem] leading-snug font-medium text-gold-ink">{line.qualifier}</span>
        )}
      </span>
    </>
  )
}

/** Denser variant for the mobile menu: label and number on one line. */
export function UrgentLineCompact({ line }: { line: PhoneLine }) {
  const roadside = isRoadside(line)
  const Icon = lineIcons.get(line) ?? Phone

  return (
    <>
      <IconBadge icon={Icon} tone={roadside ? "gold" : "brand"} size="sm" />
      <span className="min-w-0 flex-1 pt-px">
        <span className="flex flex-wrap items-baseline justify-between gap-x-3">
          <span className="text-[0.9375rem] leading-snug font-semibold text-ink">{line.label}</span>
          <span className="text-[0.9375rem] leading-snug font-semibold whitespace-nowrap text-ink tabular-nums">
            {line.display}
          </span>
        </span>
        <span className="mt-0.5 block text-[0.8125rem] leading-snug text-ink-muted">{line.purpose}</span>
        {line.qualifier && (
          <span className="mt-1.5 block text-[0.75rem] leading-snug font-medium text-gold-ink">{line.qualifier}</span>
        )}
      </span>
    </>
  )
}
