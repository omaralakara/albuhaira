import { ArrowRight, type LucideIcon } from "lucide-react"
import Image from "next/image"
import type { ReactNode } from "react"

import { IconBadge } from "@/components/site/icon-badge"
import { buttonVariants } from "@/components/ui/button"
import { claimsHub } from "@/content/claims"
import { company } from "@/content/company"
import { phones } from "@/content/contacts"
import type { NavGroup, NavItem, NavLink } from "@/content/navigation"
import { cn } from "@/lib/utils"

import { MegaMenuLink } from "./mega-menu-link"
import { ExternalMark, groupLabelClass, groupNumber, iconFor } from "./nav-parts"
import { UrgentLineContent } from "./urgent-lines"

/*
 * Desktop mega menu panels (server-rendered, slotted into the client
 * NavigationMenu). Each panel is laid out for its own content: product
 * grids with icons for personal cover, four numbered columns for business,
 * claim routes beside the helplines for claims, and plain lists for the
 * company pages.
 */

function GroupTitle({ id, number, children }: { id: string; number?: string; children: ReactNode }) {
  return (
    <p id={id} className={cn(groupLabelClass, "mb-3 flex items-center gap-3")}>
      {number && <span className="text-brand tabular-nums">{number}</span>}
      <span>{children}</span>
      <span aria-hidden="true" className="h-px flex-1 bg-line" />
    </p>
  )
}

/** Label + optional description (+ optional icon). The whole row is the link. */
function LinkRow({ link, icon }: { link: NavLink; icon?: LucideIcon }) {
  return (
    <MegaMenuLink
      href={link.href}
      className="group/link -mx-3 flex items-start gap-3.5 rounded-2xl p-3 transition-colors hover:bg-canvas"
    >
      {icon && (
        <IconBadge
          icon={icon}
          size="sm"
          className="transition-colors duration-200 group-hover/link:bg-brand group-hover/link:text-white motion-reduce:transition-none"
        />
      )}
      <span className={cn("min-w-0", icon && "pt-[0.4375rem]")}>
        <span className="flex items-center gap-1.5 text-[0.9375rem] leading-snug font-semibold text-ink transition-colors group-hover/link:text-brand">
          {link.label}
          <ExternalMark href={link.href} className="text-ink-muted" />
        </span>
        {link.description && (
          <span className="mt-1 block text-[0.8125rem] leading-[1.45] text-ink-muted">{link.description}</span>
        )}
      </span>
    </MegaMenuLink>
  )
}

function PlainLink({ link }: { link: NavLink }) {
  return (
    <MegaMenuLink
      href={link.href}
      className="-mx-3 flex min-h-11 items-center gap-1.5 rounded-xl px-3 py-2 text-[0.9375rem] leading-snug font-medium text-ink-soft transition-colors hover:bg-canvas hover:text-brand"
    >
      {link.label}
      <ExternalMark href={link.href} className="text-ink-muted" />
    </MegaMenuLink>
  )
}

/** "See everything" links: brand text with a forward arrow. */
function HubLink({ link, className }: { link: NavLink; className?: string }) {
  return (
    <MegaMenuLink
      href={link.href}
      className={cn(
        "group/hub inline-flex min-h-11 items-center gap-2 rounded-full text-[0.9375rem] font-semibold text-brand",
        className
      )}
    >
      <span className="underline decoration-brand/30 decoration-1 underline-offset-[0.3em] transition-colors group-hover/hub:decoration-brand">
        {link.label}
      </span>
      <ArrowRight
        aria-hidden="true"
        strokeWidth={1.75}
        className="size-4 transition-transform group-hover/hub:translate-x-0.5 motion-reduce:transition-none"
      />
    </MegaMenuLink>
  )
}

function PanelFooter({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "flex flex-wrap items-center gap-x-8 gap-y-1 border-t border-line bg-canvas/60 px-8 py-1.5",
        className
      )}
    >
      {children}
    </div>
  )
}

/** Thin double arch, the site's signature motif, used as a quiet watermark. */
function ArchMark({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" focusable="false" viewBox="0 0 180 240" fill="none" className={className}>
      <path d="M20 240V100a70 70 0 0 1 140 0v140" stroke="currentColor" strokeWidth={1.25} />
      <path d="M6 240V100a84 84 0 0 1 168 0v140" stroke="currentColor" strokeWidth={1.25} />
    </svg>
  )
}

function FeatureTile({ feature, className }: { feature: NonNullable<NavItem["feature"]>; className?: string }) {
  return (
    <div className={cn("relative isolate flex flex-col overflow-hidden rounded-2xl bg-brand-tint p-7", className)}>
      <ArchMark className="absolute -right-8 -bottom-20 -z-10 h-64 text-brand/20" />
      <p className="font-display text-[1.875rem] leading-[1.1] tracking-[-0.01em] text-ink">{feature.title}</p>
      <p className="mt-3 max-w-[30ch] text-[0.9375rem] leading-relaxed text-ink-soft">{feature.body}</p>
      <div className="mt-auto pt-6">
        <MegaMenuLink
          href={feature.link.href}
          className={cn(buttonVariants({ variant: "outline" }), "bg-surface hover:bg-surface focus-visible:outline-solid")}
        >
          {feature.link.label}
          <ExternalMark href={feature.link.href} className="size-4" />
        </MegaMenuLink>
      </div>
    </div>
  )
}

function GroupList({
  menu,
  group,
  index,
  number,
  listClassName,
  renderLink,
}: {
  menu: NavItem["id"]
  group: NavGroup
  index: number
  number?: string
  listClassName?: string
  renderLink: (link: NavLink) => ReactNode
}) {
  const id = `mega-${menu}-${index}`
  return (
    <>
      <GroupTitle id={id} number={number}>
        {group.title}
      </GroupTitle>
      <ul aria-labelledby={id} className={cn("grid gap-1", listClassName)}>
        {group.links.map((link) => (
          <li key={link.href}>{renderLink(link)}</li>
        ))}
      </ul>
    </>
  )
}

function PersonalPanel({ item }: { item: NavItem }) {
  const groups = item.groups ?? []
  // Groups with descriptions get product rows; the rest (More personal cover) sit in the footer
  const featured = groups.filter((g) => g.links.some((l) => l.description))
  const compact = groups.filter((g) => !g.links.some((l) => l.description))

  return (
    <>
      <div className="grid grid-cols-12 gap-x-10 p-8">
        <div className="col-span-8 grid content-start gap-6">
          {featured.map((group, index) => (
            <div key={group.title}>
              <GroupList
                menu="personal"
                group={group}
                index={index}
                listClassName="grid-cols-2 gap-x-6"
                renderLink={(link) => <LinkRow link={link} icon={iconFor(link.href)} />}
              />
            </div>
          ))}
        </div>
        {item.feature && <FeatureTile feature={item.feature} className="col-span-4" />}
      </div>
      <PanelFooter className="items-end justify-between pt-4 pb-2">
        {compact.map((group, index) => (
          <div key={group.title}>
            <p id={`mega-personal-more-${index}`} className={groupLabelClass}>
              {group.title}
            </p>
            <ul aria-labelledby={`mega-personal-more-${index}`} className="mt-1 flex flex-wrap items-center gap-x-5">
              {group.links.map((link) => (
                <li key={link.href}>
                  <MegaMenuLink
                    href={link.href}
                    className="inline-flex min-h-11 items-center rounded-md text-[0.875rem] font-medium text-ink-soft transition-colors hover:text-brand"
                  >
                    {link.label}
                  </MegaMenuLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
        {item.footerLinks?.map((link) => <HubLink key={link.href} link={link} />)}
      </PanelFooter>
    </>
  )
}

function BusinessPanel({ item }: { item: NavItem }) {
  return (
    <>
      <div className="grid grid-cols-4 gap-x-10 p-8">
        {item.groups?.map((group, index) => (
          <div key={group.title}>
            <GroupList
              menu="business"
              group={group}
              index={index}
              number={groupNumber(index)}
              renderLink={(link) => <LinkRow link={link} />}
            />
          </div>
        ))}
      </div>
      {item.footerLinks && (
        <PanelFooter>
          {item.footerLinks.map((link) => (
            <HubLink key={link.href} link={link} />
          ))}
        </PanelFooter>
      )}
    </>
  )
}

const claimColumns = ["col-span-5", "col-span-4", "col-span-3"]

function ClaimsPanel({ item }: { item: NavItem }) {
  return (
    <div className="grid grid-cols-12 gap-x-10 p-8">
      {item.groups?.map((group, index) => (
        <div key={group.title} className={claimColumns[index] ?? "col-span-3"}>
          <GroupList
            menu="claims"
            group={group}
            index={index}
            renderLink={(link) => {
              if (link.href === phones.roadside.tel) {
                return (
                  <MegaMenuLink
                    href={link.href}
                    className="-mx-3 mb-1 flex items-start gap-3.5 rounded-2xl bg-gold-soft/70 p-3 transition-colors hover:bg-gold-soft"
                  >
                    <UrgentLineContent line={phones.roadside} />
                  </MegaMenuLink>
                )
              }
              if (link.href === claimsHub.href) return <HubLink link={link} className="mt-1" />
              if (link.description) return <LinkRow link={link} icon={iconFor(link.href)} />
              return <PlainLink link={link} />
            }}
          />
        </div>
      ))}
    </div>
  )
}

function AboutPanel({ item }: { item: NavItem }) {
  return (
    <div className="grid grid-cols-4 gap-x-10 p-8">
      {item.groups?.map((group, index) => (
        <div key={group.title}>
          <GroupList
            menu="about"
            group={group}
            index={index}
            listClassName="gap-0"
            renderLink={(link) => <PlainLink link={link} />}
          />
        </div>
      ))}
      <div className="flex flex-col rounded-2xl bg-canvas p-6">
        <Image src="/brand/al-buhaira-emblem.svg" alt="" width={56} height={56} className="size-14" />
        <p className="mt-auto pt-8 font-display text-[1.875rem] leading-none tracking-[-0.01em] text-ink">
          Since <span className="text-brand">{company.founded}</span>
        </p>
        <p className="mt-3 text-[0.8125rem] leading-snug text-ink-muted">{company.listing}</p>
        <p className="mt-1.5 text-[0.8125rem] leading-snug text-ink-muted">{company.membership}</p>
      </div>
    </div>
  )
}

export function MegaMenuPanel({ item }: { item: NavItem }) {
  switch (item.id) {
    case "personal":
      return <PersonalPanel item={item} />
    case "business":
      return <BusinessPanel item={item} />
    case "claims":
      return <ClaimsPanel item={item} />
    case "about":
      return <AboutPanel item={item} />
    default:
      return null
  }
}
