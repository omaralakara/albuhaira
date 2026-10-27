import type { ReactNode } from "react"

import { emails, phones } from "@/content/contacts"

/**
 * Turns the published phone numbers and email addresses inside a sentence
 * into tel: and mailto: links, keeping the number visible. Only values from
 * content/contacts.ts are matched, so nothing else in the copy is touched.
 */
const telByDisplay = new Map<string, string>(Object.values(phones).map((p) => [p.display, p.tel]))
const addresses = new Set<string>(Object.values(emails).map((e) => e.address))

const escape = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")

// Longest first, so "motorclaims@…" wins over "claims@…"
const pattern = new RegExp(
  `(${[...telByDisplay.keys(), ...addresses]
    .sort((a, b) => b.length - a.length)
    .map(escape)
    .join("|")})`,
  "g"
)

function InlineContact({ href, children }: { href: string; children: string }) {
  // The underline sits on the inner span so container rules for <a> can't double it
  return (
    <a href={href} className="group/inline font-semibold whitespace-nowrap text-brand">
      <span className="underline decoration-brand/30 decoration-1 underline-offset-[0.3em] transition-colors group-hover/inline:decoration-brand">
        {children}
      </span>
    </a>
  )
}

export function linkifyContacts(text: string): ReactNode[] {
  return text.split(pattern).map((part, index) => {
    const tel = telByDisplay.get(part)
    if (tel) return <InlineContact key={index} href={tel}>{part}</InlineContact>
    if (addresses.has(part)) return <InlineContact key={index} href={`mailto:${part}`}>{part}</InlineContact>
    return part
  })
}
