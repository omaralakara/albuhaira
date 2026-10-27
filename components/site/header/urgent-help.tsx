"use client"

import { ArrowRight, PhoneCall } from "lucide-react"
import { DropdownMenu as DropdownMenuPrimitive } from "radix-ui"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { urgentLines } from "@/content/contacts"
import { cn } from "@/lib/utils"

import { HeaderMenuContent, menuRowClass, useHeaderMenuFocus } from "./header-menu"
import { groupLabelClass } from "./nav-marks"
import { isRoadside, UrgentLineContent } from "./urgent-lines"

/**
 * "Urgent help": the helplines people need in a hurry, one tap from anywhere
 * on the page. Icon-only below 1440px; the accessible name stays "Urgent help".
 * Non-modal (menu-button pattern): no page-wide aria-hidden or scroll lock;
 * Radix still moves focus into the menu and closes it on Esc or outside click.
 */
export function UrgentHelp({ className }: { className?: string }) {
  const { triggerRef, goingToSectionRef, contentProps } = useHeaderMenuFocus()

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger ref={triggerRef} asChild>
        <Button
          variant="outline"
          className={cn(
            "size-11 px-0 min-[1440px]:w-auto min-[1440px]:px-4 aria-expanded:bg-ink/[0.03]",
            className
          )}
        >
          <PhoneCall aria-hidden="true" strokeWidth={1.75} className="size-[1.125rem] text-brand" />
          <span className="sr-only min-[1440px]:not-sr-only">Urgent help</span>
        </Button>
      </DropdownMenuTrigger>
      <HeaderMenuContent
        align="end"
        // Lands 8px below the 68px bar, like the mega menu panels
        sideOffset={20}
        className="w-[23rem]"
        {...contentProps}
      >
        <DropdownMenuLabel className={cn(groupLabelClass, "px-3 pt-3 pb-2.5")}>Urgent help</DropdownMenuLabel>
        {urgentLines.map((line) => (
          <DropdownMenuPrimitive.Item key={line.tel} asChild>
            <a
              href={line.tel}
              className={cn(
                menuRowClass,
                "items-start gap-3.5 py-3",
                isRoadside(line) && "mb-1 bg-gold-soft/70 focus:bg-gold-soft data-[highlighted]:bg-gold-soft"
              )}
            >
              <UrgentLineContent line={line} />
            </a>
          </DropdownMenuPrimitive.Item>
        ))}
        <DropdownMenuSeparator className="mx-2 my-1.5 bg-line" />
        <DropdownMenuPrimitive.Item
          asChild
          onSelect={() => {
            goingToSectionRef.current = true
          }}
          // The page scrolls under the pointer after the jump; stop Radix from
          // pulling focus back into the closing menu on pointer leave
          onPointerLeave={(event) => {
            if (goingToSectionRef.current) event.preventDefault()
          }}
        >
          <a
            href="#claims"
            className={cn(
              menuRowClass,
              "group/row min-h-11 items-center justify-between text-[0.9375rem] font-semibold text-brand"
            )}
          >
            All claim options
            <ArrowRight
              aria-hidden="true"
              strokeWidth={1.75}
              className="size-4 transition-transform group-data-[highlighted]/row:translate-x-0.5 motion-reduce:transition-none"
            />
          </a>
        </DropdownMenuPrimitive.Item>
      </HeaderMenuContent>
    </DropdownMenu>
  )
}
