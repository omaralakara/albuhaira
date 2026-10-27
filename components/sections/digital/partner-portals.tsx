import { ArrowRight, ArrowUpRight } from "lucide-react"

import { SmartLink } from "@/components/site/smart-link"
import { partnerPortals } from "@/content/digital"
import { isExternal } from "@/content/links"
import { cn } from "@/lib/utils"

type Portal = (typeof partnerPortals)[number]

/** Portals grouped by audience, in the order the content lists them. */
const groups = partnerPortals.reduce<{ audience: Portal["audience"]; portals: Portal[] }[]>((all, portal) => {
  const group = all.find((g) => g.audience === portal.audience)
  if (group) group.portals.push(portal)
  else all.push({ audience: portal.audience, portals: [portal] })
  return all
}, [])

/**
 * "For partners": the specialist portals, kept apart from the customer app
 * and grouped by who they serve. Portals on their own subdomains open in a
 * new tab (SmartLink adds the screen-reader hint); pages on albuhaira.com
 * open in place.
 */
export function PartnerPortals({ className }: { className?: string }) {
  return (
    <div className={cn("grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-x-12", className)}>
      <div className="lg:col-span-4">
        <h3 id="digital-partners-title" className="font-display text-display-3 font-normal text-white">
          For partners
        </h3>
        <p className="mt-3 max-w-xs leading-relaxed text-white/75">Portals for medical providers and broker partners.</p>
      </div>

      <div className="grid gap-10 sm:grid-cols-2 sm:gap-8 lg:col-span-8 lg:gap-12">
        {groups.map((group) => (
          <div key={group.audience}>
            <h4 className="font-semibold text-sky">{group.audience}</h4>
            <ul role="list" className="mt-3 border-t border-white/15">
              {group.portals.map((portal) => {
                const external = isExternal(portal.href)
                const Arrow = external ? ArrowUpRight : ArrowRight
                return (
                  <li key={portal.href} className="border-b border-white/15">
                    <SmartLink
                      href={portal.href}
                      className="group flex min-h-11 items-start justify-between gap-4 rounded-lg py-4 focus-visible:outline-sky"
                    >
                      <span className="min-w-0">
                        <span className="block leading-snug font-semibold text-white underline decoration-transparent underline-offset-[0.3em] transition-colors group-hover:decoration-sky">
                          {portal.label}
                        </span>
                        <span className="mt-1 block text-[0.9375rem] leading-relaxed text-white/75">
                          {portal.description}
                        </span>
                      </span>
                      <Arrow
                        aria-hidden="true"
                        strokeWidth={1.75}
                        className={cn(
                          "mt-0.5 size-5 shrink-0 text-sky transition-transform duration-200 group-hover:translate-x-0.5",
                          external && "group-hover:-translate-y-0.5"
                        )}
                      />
                    </SmartLink>
                  </li>
                )
              })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
