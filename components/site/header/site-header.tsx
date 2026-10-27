import { ArrowUpRight } from "lucide-react"

import { Logo } from "@/components/site/logo"
import { SmartLink } from "@/components/site/smart-link"
import { Button } from "@/components/ui/button"
import { mainNav } from "@/content/navigation"
import { ONLINE_PORTAL } from "@/content/personal"
import { cn } from "@/lib/utils"

import { DesktopNav } from "./desktop-nav"
import { HeaderShell } from "./header-shell"
import { MegaMenuPanel } from "./mega-menu"
import { MobileNav } from "./mobile-nav"
import { MobileNavBody, MobileNavFooter } from "./mobile-nav-body"
import { UrgentHelp } from "./urgent-help"
import { UtilityBar } from "./utility-bar"

/**
 * Site header. Render it as a direct child of <body> (a sibling of <main>),
 * not inside a short wrapper, so the sticky main bar works.
 *
 * ≥ 1280px: a 44px utility bar, then the 68px main bar (the header sticks at
 * -44px, so only the utility bar scrolls away). While keyboard focus or the
 * Digital services menu is in the utility bar, the whole header sticks at 0
 * so the focused control stays on screen.
 * < 1280px: the compact bar with Get a quote, Urgent help and Menu.
 * HeaderShell hides the bar while you scroll down and brings it back when you
 * scroll up, so it never trails the content you're reading.
 */
export function SiteHeader({ className }: { className?: string }) {
  const entries = mainNav.map((item) => ({
    id: item.id,
    label: item.label,
    href: item.href,
    panel: item.groups ? <MegaMenuPanel item={item} /> : undefined,
  }))

  return (
    <HeaderShell
      className={cn(
        "group/header sticky top-0 z-40 xl:-top-11",
        "xl:has-[[data-utility-bar]:focus-within]:top-0 xl:has-[[data-utility-bar]_[data-state=open]]:top-0",
        className
      )}
    >
      {/* Quiet scrim behind an open mega menu; the header itself stays crisp */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 hidden bg-ink/10 opacity-0 transition-opacity duration-300 group-has-[[data-mega-open]]/header:opacity-100 motion-reduce:transition-none xl:block"
      />
      <UtilityBar />
      <div className="relative border-b border-line bg-canvas/90 backdrop-blur-md">
        <div className="page-container flex h-(--header-height) items-center gap-3">
          <Logo preload className="h-7 min-[375px]:h-8 xl:h-10" />
          <DesktopNav entries={entries} className="ml-6 min-[1440px]:ml-8" />
          <div className="ml-auto flex items-center gap-1 sm:gap-2">
            <Button
              asChild
              size="sm"
              className="relative after:absolute after:-inset-y-1 after:inset-x-0 max-[359px]:hidden xl:hidden"
            >
              <SmartLink href={ONLINE_PORTAL}>Get a quote</SmartLink>
            </Button>
            <UrgentHelp />
            <Button asChild className="hidden xl:inline-flex">
              <SmartLink href={ONLINE_PORTAL}>
                Get a quote
                <ArrowUpRight aria-hidden="true" strokeWidth={1.75} />
              </SmartLink>
            </Button>
            <MobileNav footer={<MobileNavFooter />} className="-mr-2.5 xl:hidden">
              <MobileNavBody />
            </MobileNav>
          </div>
        </div>
      </div>
    </HeaderShell>
  )
}
