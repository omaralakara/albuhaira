import { ArrowUpRight } from "lucide-react"

import { SmartLink } from "@/components/site/smart-link"
import type { FooterLink } from "@/content/footer"
import { isExternal } from "@/content/links"
import { cn } from "@/lib/utils"

/**
 * Footer link lists. Rows are compact for mouse users from md up, and 44px
 * tall on phones and touch screens (`pointer-coarse`).
 */
export function FooterLinkList({ links, className }: { links: FooterLink[]; className?: string }) {
  return (
    <ul className={cn("grid", className)}>
      {links.map((link) => (
        <li key={`${link.label}-${link.href}`}>
          <FooterLinkItem link={link} />
        </li>
      ))}
    </ul>
  )
}

function FooterLinkItem({ link }: { link: FooterLink }) {
  const external = isExternal(link.href)

  return (
    <SmartLink
      href={link.href}
      className="group/fl inline-flex items-center gap-1.5 py-1.5 text-[0.9375rem] leading-snug text-ink-soft transition-colors hover:text-brand max-md:min-h-11 max-md:py-2 pointer-coarse:min-h-11 pointer-coarse:py-2"
    >
      <span className="underline decoration-transparent decoration-1 underline-offset-[0.25em] transition-colors group-hover/fl:decoration-brand/40">
        {/* Keep phone numbers in labels on one line, e.g. "(800 8181)" */}
        {link.label.replace(/(\d) (?=\d)/g, "$1 ")}
        {/* Inline, so it stays beside the last word when the label wraps */}
        {external && (
          <ArrowUpRight
            aria-hidden="true"
            strokeWidth={1.75}
            className="ml-1 inline-block size-3.5 align-[-0.1em] text-ink-muted group-hover/fl:text-brand"
          />
        )}
      </span>
    </SmartLink>
  )
}
