import type { ReactNode } from "react"
import { ArrowRight, ArrowUpRight, BriefcaseBusiness, Phone, UsersRound, type LucideIcon } from "lucide-react"

import { ContactBlock } from "@/components/sections/closing/contact-block"
import { CoverArch } from "@/components/sections/closing/cover-arch"
import { IconBadge } from "@/components/site/icon-badge"
import { SmartLink } from "@/components/site/smart-link"
import { Button } from "@/components/ui/button"
import { businessLinks } from "@/content/business"
import { mainNav } from "@/content/navigation"
import { ONLINE_PORTAL } from "@/content/personal"

/** The verified "Buy online" wording from the Personal menu */
const buyOnline = mainNav.find((item) => item.id === "personal")?.feature

/**
 * Section 11 — the closing invitation and the contact details.
 * No photo: the hero's arch returns as an empty outline that frames the
 * heading, and its two legs stand on the two routes (personal, business).
 * The arch spans exactly from one card's centre to the other's: its width is
 * half the grid plus half the gap, so it lines up at every breakpoint.
 */
export function FinalCta() {
  return (
    <>
      <section id="find-cover" aria-labelledby="find-cover-title" className="pt-14 pb-12 md:pt-20 md:pb-14">
        <div className="page-container">
          <CoverArch className="w-[80%] md:w-[calc(50%+0.75rem)] lg:w-[calc(50%+1rem)]">
            <div className="px-[7cqw] pt-[11cqw] pb-14 text-center md:pb-20">
              <h2
                id="find-cover-title"
                className="font-display text-[clamp(2.25rem,11.5cqw,4.75rem)] leading-none font-normal tracking-[-0.02em] text-ink"
              >
                {/* Shaped for the dome (short line first); spaces keep the text whole for copy and AT */}
                <span className="block">Let&rsquo;s</span>{" "}
                <span className="block">find the right</span>{" "}
                <span className="block">
                  cover <em className="italic text-brand">for you.</em>
                </span>
              </h2>
              <p className="mx-auto mt-6 max-w-[30ch] text-lead text-ink-soft md:mt-8">
                Start a quote online for personal cover, or talk to our team about your business.
              </p>
            </div>
          </CoverArch>

          <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
            <RouteCard
              icon={UsersRound}
              kicker="For you and your family"
              title={
                <>
                  Explore <span className="whitespace-nowrap">personal insurance</span>
                </>
              }
              href="#personal"
              body={buyOnline?.body ?? ""}
            >
              <Button asChild size="lg">
                <SmartLink href={ONLINE_PORTAL}>
                  Get a quote online
                  <ArrowUpRight aria-hidden="true" strokeWidth={1.75} />
                </SmartLink>
              </Button>
            </RouteCard>

            <RouteCard
              icon={BriefcaseBusiness}
              kicker="For your business"
              title={
                <>
                  Discuss <span className="whitespace-nowrap">business insurance</span>
                </>
              }
              href={businessLinks.talk.href}
              // The enquiry form's own description; it promises no call-back
              body="Ask a question or request a quote through our enquiry form, or call our head office."
            >
              <Button asChild size="lg" variant="outline">
                <a href={businessLinks.phone.tel}>
                  <Phone aria-hidden="true" strokeWidth={1.75} />
                  Call {businessLinks.phone.display}
                </a>
              </Button>
            </RouteCard>
          </div>
        </div>
      </section>

      <ContactBlock />
    </>
  )
}

/** The title link covers the whole card; its focus ring outlines the card. */
const stretched =
  "outline-none after:absolute after:inset-0 after:rounded-3xl focus-visible:after:outline-2 focus-visible:after:outline-offset-3 focus-visible:after:outline-brand"

/**
 * A route card: the title link stretches over the whole card; the action
 * row sits above it so its own links stay separately clickable. Titles keep
 * their noun phrase together, so a wrap never leaves one word on a line.
 */
function RouteCard({
  icon,
  kicker,
  title,
  href,
  body,
  children,
}: {
  icon: LucideIcon
  kicker: string
  title: ReactNode
  href: string
  body: string
  children: ReactNode
}) {
  return (
    <div className="group/route relative flex min-w-0 flex-col rounded-3xl border border-line bg-surface p-6 transition-colors duration-200 hover:border-line-strong sm:p-9 lg:p-11">
      <div className="flex items-start justify-between gap-6">
        <IconBadge icon={icon} size="lg" />
        <span
          aria-hidden="true"
          className="grid size-11 place-items-center rounded-full border border-line-strong text-ink transition-colors duration-200 group-hover/route:border-brand group-hover/route:bg-brand group-hover/route:text-white"
        >
          <ArrowRight
            strokeWidth={1.75}
            className="size-5 transition-transform duration-200 group-hover/route:translate-x-0.5 motion-reduce:transition-none"
          />
        </span>
      </div>
      <p className="kicker mt-6 text-ink-muted sm:mt-8">{kicker}</p>
      <h3 className="mt-2 font-display text-display-3 font-normal text-ink transition-colors group-hover/route:text-brand">
        {/* SmartLink keeps same-page anchors native */}
        <SmartLink href={href} className={stretched}>
          {title}
        </SmartLink>
      </h3>
      <p className="mt-3 max-w-md text-ink-soft">{body}</p>
      <div className="relative z-10 mt-auto flex flex-wrap items-center gap-x-4 gap-y-3 pt-8">{children}</div>
    </div>
  )
}
