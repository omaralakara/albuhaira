import Image from "next/image"

import { FooterColumn } from "@/components/site/footer/footer-column"
import { FooterLinkList } from "@/components/site/footer/footer-links"
import { SocialGlyph } from "@/components/site/footer/social-glyph"
import { Logo } from "@/components/site/logo"
import { SmartLink } from "@/components/site/smart-link"
import { company } from "@/content/company"
import { app } from "@/content/digital"
import { footerColumns, social } from "@/content/footer"

const kicker = "kicker text-ink"

const badges = [
  { ...app.stores.apple, src: "/brand/app-store-badge.svg" },
  { ...app.stores.google, src: "/brand/google-play-badge.svg" },
]

/**
 * Section 12 — site footer on canvas-deep. The official logo sits on this
 * light surface unchanged. From md up the five link columns are laid out in
 * full; on phones each folds behind its heading so every link stays one tap
 * away without a very long page. Each list is rendered once for both.
 */
export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-canvas-deep text-ink">
      <h2 className="sr-only">Site footer</h2>
      <div className="page-container pt-12 pb-8 md:pt-16 md:pb-10">
        {/* Brand, app and social */}
        <div className="grid gap-10 border-b border-line-strong/70 pb-12 lg:grid-cols-12 lg:items-end lg:gap-8 lg:pb-14">
          <div className="lg:col-span-6 xl:col-span-5">
            <Logo className="h-12 md:h-14" />
            <p className="mt-8 font-display text-[1.875rem] leading-[1.1] tracking-[-0.01em] text-ink md:text-[2.25rem]">
              Life moves. <em className="italic text-brand">Stay protected.</em>
            </p>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-muted">
              Insuring individuals, families and businesses across the UAE since {company.founded}.
            </p>
          </div>

          <div className="flex flex-col gap-10 sm:flex-row sm:flex-wrap sm:gap-x-14 lg:col-span-6 lg:gap-y-8 xl:col-span-7 xl:justify-end">
            <div>
              <h3 className={kicker}>{app.name} app</h3>
              <ul className="mt-4 flex gap-3">
                {badges.map((badge) => (
                  <li key={badge.href}>
                    <SmartLink
                      href={badge.href}
                      className="block rounded-[0.6rem] py-0.5 transition-opacity hover:opacity-85"
                    >
                      <Image src={badge.src} alt={badge.label} width={156} height={40} className="h-10 w-auto" />
                    </SmartLink>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className={kicker}>Follow us</h3>
              <ul className="mt-2 grid grid-cols-2 gap-x-6">
                {social.map((item) => (
                  <li key={item.href}>
                    <SmartLink
                      href={item.href}
                      className="group/social inline-flex min-h-11 items-center gap-2.5 text-[0.9375rem] font-medium text-ink-soft transition-colors hover:text-brand"
                    >
                      <SocialGlyph label={item.label} className="text-ink group-hover/social:text-brand" />
                      <span className="underline decoration-transparent decoration-1 underline-offset-[0.25em] group-hover/social:decoration-brand/40">
                        {item.label}
                      </span>
                    </SmartLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <nav aria-label="Footer" className="grid py-4 md:grid-cols-3 md:gap-x-8 md:gap-y-12 md:py-12 lg:grid-cols-5 lg:gap-x-6 lg:py-14 xl:gap-x-8">
          {footerColumns.map((column) => (
            <FooterColumn key={column.title} title={column.title} headingClassName={kicker}>
              <FooterLinkList links={column.links} />
            </FooterColumn>
          ))}
        </nav>

        {/* Bottom bar */}
        <div className="border-t border-line-strong/70 pt-5 text-sm text-ink-muted md:pt-7">
          <p className="py-2.5">&copy; 2026 {company.legalName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
