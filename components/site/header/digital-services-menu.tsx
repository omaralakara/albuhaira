"use client"

import { ArrowRight, ChevronDown } from "lucide-react"
import { DropdownMenu as DropdownMenuPrimitive } from "radix-ui"
import { Fragment, useId } from "react"

import { SmartLink } from "@/components/site/smart-link"
import {
  DropdownMenu,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import type { NavGroup, NavLink } from "@/content/navigation"
import { cn } from "@/lib/utils"

import { HeaderMenuContent, menuRowClass, useHeaderMenuFocus } from "./header-menu"
import { ExternalMark, groupLabelClass } from "./nav-marks"

/**
 * Secondary "Digital services" menu in the utility bar: customer and partner
 * portals. The links come in as props from the server-rendered UtilityBar, so
 * the navigation content stays out of the client bundle.
 */
export function DigitalServicesMenu({ groups, footer }: { groups: NavGroup[]; footer: NavLink }) {
  const id = useId()
  const { triggerRef, goingToSectionRef, contentProps } = useHeaderMenuFocus()

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger
        ref={triggerRef}
        className="group/digital inline-flex h-11 items-center gap-1.5 rounded-full px-3 font-medium text-ink-soft transition-colors hover:text-ink data-[state=open]:text-brand"
      >
        Digital services
        <ChevronDown
          aria-hidden="true"
          strokeWidth={1.75}
          className="size-3.5 transition-transform duration-200 group-data-[state=open]/digital:rotate-180 motion-reduce:transition-none"
        />
      </DropdownMenuTrigger>
      <HeaderMenuContent
        align="start"
        sideOffset={2}
        // The utility bar scrolls away; don't leave the menu floating on its own
        hideWhenDetached
        {...contentProps}
      >
        {groups.map((group, index) => (
          <Fragment key={group.title}>
            {index > 0 && <DropdownMenuSeparator className="mx-2 my-1.5 bg-line" />}
            <DropdownMenuGroup aria-labelledby={`${id}-${index}`}>
              <DropdownMenuLabel id={`${id}-${index}`} className={cn(groupLabelClass, "px-3 pt-3 pb-2")}>
                {group.title}
              </DropdownMenuLabel>
              {group.links.map((link) => (
                <DropdownMenuPrimitive.Item
                  key={link.href}
                  asChild
                  onSelect={() => {
                    goingToSectionRef.current = link.href.startsWith("#")
                  }}
                  // The page scrolls under the pointer after an in-page jump; stop Radix
                  // from pulling focus back into the closing menu on pointer leave
                  onPointerLeave={(event) => {
                    if (goingToSectionRef.current) event.preventDefault()
                  }}
                >
                  <SmartLink
                    href={link.href}
                    className={cn(menuRowClass, "group/row min-h-11 flex-col justify-center gap-0.5 py-2.5")}
                  >
                    <span className="flex items-center gap-1.5 text-[0.9375rem] font-semibold text-ink transition-colors group-data-[highlighted]/row:text-brand">
                      {link.label}
                      <ExternalMark href={link.href} className="text-ink-muted" />
                    </span>
                    {link.description && (
                      <span className="text-[0.8125rem] leading-snug text-ink-muted">{link.description}</span>
                    )}
                  </SmartLink>
                </DropdownMenuPrimitive.Item>
              ))}
            </DropdownMenuGroup>
          </Fragment>
        ))}
        <DropdownMenuSeparator className="mx-2 my-1.5 bg-line" />
        <DropdownMenuPrimitive.Item asChild>
          <SmartLink
            href={footer.href}
            className={cn(
              menuRowClass,
              "group/row min-h-11 items-center justify-between text-[0.9375rem] font-semibold text-brand"
            )}
          >
            {footer.label}
            <ArrowRight
              aria-hidden="true"
              strokeWidth={1.75}
              className="size-4 transition-transform group-data-[highlighted]/row:translate-x-0.5 motion-reduce:transition-none"
            />
          </SmartLink>
        </DropdownMenuPrimitive.Item>
      </HeaderMenuContent>
    </DropdownMenu>
  )
}
