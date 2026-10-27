import { ArrowRight, ArrowUpRight } from "lucide-react"

import { IconBadge } from "@/components/site/icon-badge"
import { SmartLink } from "@/components/site/smart-link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { claimsHub } from "@/content/claims"
import { phones, urgentLines } from "@/content/contacts"
import { digitalNav, digitalNavFooter, mainNav, type NavItem, type NavLink } from "@/content/navigation"
import { ONLINE_PORTAL } from "@/content/personal"
import { cn } from "@/lib/utils"

import { ExternalMark, groupLabelClass, groupNumber, iconFor } from "./nav-parts"
import { isRoadside, UrgentLineCompact } from "./urgent-lines"

/*
 * Body of the mobile menu sheet: urgent help first, then the four menus as
 * an accordion, the Contact link and Digital services. Server-rendered and
 * slotted into the client <MobileNav>.
 */

// Rows run to the edge of the accordion panel, which clips overflow: draw the focus ring inside
const rowClass =
  "-mx-3 flex rounded-2xl px-3 transition-colors hover:bg-surface focus-visible:outline-offset-[-2px]"

/*
 * Colours sit on the inner spans: the shadcn AccordionContent wrapper recolours
 * hovered links (`[&_a]:hover:text-foreground`) and adds margins to <p>, so the
 * sheet uses spans/divs with their own colours inside the accordion.
 */
function HubLink({ link, className }: { link: NavLink; className?: string }) {
  return (
    <SmartLink
      href={link.href}
      className={cn("inline-flex min-h-11 items-center gap-2 rounded-full text-[0.9375rem] font-semibold", className)}
    >
      <span className="text-brand underline decoration-brand/30 decoration-1 underline-offset-[0.3em]">
        {link.label}
      </span>
      <ArrowRight aria-hidden="true" strokeWidth={1.75} className="size-4 text-brand" />
    </SmartLink>
  )
}

function SheetLink({ link, clamp = false }: { link: NavLink; clamp?: boolean }) {
  if (link.href === phones.roadside.tel) {
    return (
      <a href={link.href} className={cn(rowClass, "items-start gap-3 bg-gold-soft/70 py-3 hover:bg-gold-soft")}>
        <UrgentLineCompact line={phones.roadside} />
      </a>
    )
  }
  if (link.href === claimsHub.href) return <HubLink link={link} className="mt-1" />

  const icon = iconFor(link.href)
  if (!link.description) {
    return (
      <SmartLink
        href={link.href}
        arrow="auto"
        arrowClassName="text-ink-muted"
        className={cn(rowClass, "min-h-11 items-center gap-1.5 py-2 text-[0.9375rem] font-medium text-ink-soft")}
      >
        {link.label}
      </SmartLink>
    )
  }
  return (
    <SmartLink href={link.href} className={cn(rowClass, "items-start gap-3 py-2.5")}>
      {icon && <IconBadge icon={icon} size="sm" />}
      <span className={cn("min-w-0", icon && "pt-1.5")}>
        <span className="flex items-center gap-1.5 text-[0.9375rem] leading-snug font-semibold text-ink">
          {link.label}
          <ExternalMark href={link.href} className="text-ink-muted" />
        </span>
        <span className={cn("mt-0.5 block text-[0.8125rem] leading-snug text-ink-muted", clamp && "line-clamp-2")}>
          {link.description}
        </span>
      </span>
    </SmartLink>
  )
}

function MenuSection({ item }: { item: NavItem }) {
  return (
    <div className="grid gap-6">
      {item.groups?.map((group, index) => {
        const id = `sheet-${item.id}-${index}`
        return (
          <div key={group.title}>
            <div id={id} className={cn(groupLabelClass, "mb-1.5 flex gap-2.5")}>
              {item.id === "business" && <span className="text-brand tabular-nums">{groupNumber(index)}</span>}
              {group.title}
            </div>
            <ul aria-labelledby={id} className="grid">
              {group.links.map((link) => (
                <li key={link.href}>
                  <SheetLink link={link} clamp={item.id === "business"} />
                </li>
              ))}
            </ul>
          </div>
        )
      })}
      {item.feature && (
        <div className="rounded-2xl bg-brand-tint p-5">
          <div className="font-display text-[1.5rem] leading-tight text-ink">{item.feature.title}</div>
          <div className="mt-1.5 text-[0.875rem] leading-relaxed text-ink-soft">{item.feature.body}</div>
          <SmartLink
            href={item.feature.link.href}
            arrow="auto"
            arrowClassName="size-4 text-brand"
            className="mt-2 inline-flex min-h-11 items-center gap-1.5 text-[0.9375rem] font-semibold"
          >
            <span className="text-brand underline decoration-brand/30 decoration-1 underline-offset-[0.3em]">
              {item.feature.link.label}
            </span>
          </SmartLink>
        </div>
      )}
      {item.footerLinks && (
        <div className="-mt-2 grid justify-items-start">
          {item.footerLinks.map((link) => (
            <HubLink key={link.href} link={link} />
          ))}
        </div>
      )}
    </div>
  )
}

export function MobileNavBody() {
  const menus = mainNav.filter((item) => item.groups)
  const contact = mainNav.find((item) => item.id === "contact")

  return (
    <div className="px-5 pt-5 pb-12 sm:px-6">
      <section aria-labelledby="sheet-urgent" className="rounded-3xl border border-line bg-surface p-2">
        <h3 id="sheet-urgent" className={cn(groupLabelClass, "px-3 pt-3 pb-2")}>
          Urgent help
        </h3>
        <ul className="grid gap-0.5">
          {urgentLines.map((line) => (
            <li key={line.tel}>
              <a
                href={line.tel}
                className={cn(
                  "flex items-start gap-3 rounded-2xl px-3 py-3 transition-colors hover:bg-canvas",
                  isRoadside(line) && "bg-gold-soft/70 hover:bg-gold-soft"
                )}
              >
                <UrgentLineCompact line={line} />
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#claims"
          className="mt-1 flex min-h-11 items-center justify-between rounded-2xl px-3 text-[0.9375rem] font-semibold text-brand transition-colors hover:bg-canvas"
        >
          All claim options
          <ArrowRight aria-hidden="true" strokeWidth={1.75} className="size-4" />
        </a>
      </section>

      <nav aria-label="Main" className="mt-6">
        <Accordion type="single" collapsible>
          {menus.map((item) => (
            <AccordionItem key={item.id} value={item.id} className="border-b border-line">
              <AccordionTrigger className="min-h-14 items-center rounded-none py-3 text-[1.0625rem] font-semibold text-ink hover:no-underline aria-expanded:text-brand **:data-[slot=accordion-trigger-icon]:size-5 **:data-[slot=accordion-trigger-icon]:text-ink-muted">
                {item.label}
              </AccordionTrigger>
              {/* px-3: the panel clips overflow (height animation), so rows' hover
                  backgrounds stay inside it and the content reads as a sub-level */}
              <AccordionContent className="px-3 pt-1 pb-6 [&_a]:no-underline">
                <MenuSection item={item} />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        {contact?.href && (
          <SmartLink
            href={contact.href}
            className="flex min-h-14 items-center justify-between border-b border-line text-[1.0625rem] font-semibold text-ink"
          >
            {contact.label}
            <ArrowRight aria-hidden="true" strokeWidth={1.75} className="size-5 text-ink-muted" />
          </SmartLink>
        )}
      </nav>

      <section aria-labelledby="sheet-digital" className="mt-10">
        <h3 id="sheet-digital" className="font-display text-[1.625rem] leading-tight text-ink">
          Digital services
        </h3>
        <div className="mt-4 grid gap-6">
          {digitalNav.map((group, index) => {
            const id = `sheet-digital-${index}`
            return (
              <div key={group.title}>
                <p id={id} className={cn(groupLabelClass, "mb-1.5")}>
                  {group.title}
                </p>
                <ul aria-labelledby={id} className="grid">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <SmartLink href={link.href} className={cn(rowClass, "min-h-11 flex-col justify-center py-2.5")}>
                        <span className="flex items-center gap-1.5 text-[0.9375rem] leading-snug font-semibold text-ink">
                          {link.label}
                          <ExternalMark href={link.href} className="text-ink-muted" />
                        </span>
                        {link.description && (
                          <span className="mt-0.5 block text-[0.8125rem] leading-snug text-ink-muted">
                            {link.description}
                          </span>
                        )}
                      </SmartLink>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
          <HubLink link={digitalNavFooter} className="-mt-2" />
        </div>
      </section>
    </div>
  )
}

/**
 * Pinned at the bottom of the sheet: the one primary action. On short screens
 * (landscape phones) the note goes and the padding tightens, so the menu
 * keeps room to scroll.
 */
export function MobileNavFooter() {
  return (
    <div className="shrink-0 border-t border-line bg-canvas px-5 pt-4 pb-[max(1rem,env(safe-area-inset-bottom))] sm:px-6 [@media(max-height:30rem)]:pt-3 [@media(max-height:30rem)]:pb-[max(0.75rem,env(safe-area-inset-bottom))]">
      <Button asChild size="lg" className="w-full">
        <SmartLink href={ONLINE_PORTAL}>
          Get a quote
          <ArrowUpRight aria-hidden="true" strokeWidth={1.75} />
        </SmartLink>
      </Button>
      {/* The six products in the online portal's picker; the Personal menu lists more covers */}
      <p className="mt-2.5 text-center text-[0.8125rem] text-ink-muted [@media(max-height:30rem)]:hidden">
        For motor, medical, travel, home, yacht and Jet Ski.
      </p>
    </div>
  )
}
