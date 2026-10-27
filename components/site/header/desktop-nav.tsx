"use client"

import { ChevronDown } from "lucide-react"
import { NavigationMenu } from "radix-ui"
import { useState, type ReactNode } from "react"

import { SmartLink } from "@/components/site/smart-link"
import { cn } from "@/lib/utils"

export type DesktopNavEntry = {
  id: string
  label: string
  /** Plain link (e.g. Contact) when there is no panel */
  href?: string
  /** Server-rendered mega menu panel */
  panel?: ReactNode
}

const itemClass = cn(
  // Labels sit on one line at normal text settings; with wider user text spacing (WCAG 1.4.12)
  // they wrap to two lines inside the 44px item instead of pushing the bar off screen
  "relative inline-flex h-11 items-center gap-1 rounded-full px-3 text-[0.875rem] leading-tight font-medium text-ink-soft transition-colors hover:text-ink",
  // Brand underline marks the open menu
  "after:pointer-events-none after:absolute after:inset-x-3 after:bottom-2 after:h-px after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 after:ease-out-quart motion-reduce:after:transition-none",
  "data-[state=open]:text-brand data-[state=open]:after:scale-x-100"
)

/**
 * Desktop main navigation (≥ 1280px): four mega menus and the Contact link.
 * Radix NavigationMenu provides the keyboard model (arrow keys between items,
 * Enter/Space to open, ArrowDown or Tab into the panel, Esc to close) and
 * hover intent. The single viewport spans the page container under the bar,
 * so every panel lines up with the page grid.
 */
export function DesktopNav({ entries, className }: { entries: DesktopNavEntry[]; className?: string }) {
  const [value, setValue] = useState("")

  return (
    <NavigationMenu.Root
      value={value}
      onValueChange={setValue}
      aria-label="Main"
      data-mega-open={value ? "" : undefined}
      className={cn("hidden xl:block", className)}
    >
      <NavigationMenu.List className="flex items-center">
        {entries.map((entry) => (
          <NavigationMenu.Item key={entry.id} value={entry.id}>
            {entry.panel ? (
              <>
                <NavigationMenu.Trigger
                  className={cn(
                    itemClass,
                    "group/trigger",
                    // Hover bridge across the gap between the bar and the panel
                    "before:absolute before:inset-x-0 before:top-full before:h-6 data-[state=closed]:before:hidden"
                  )}
                >
                  {entry.label}
                  <ChevronDown
                    aria-hidden="true"
                    strokeWidth={1.75}
                    className="size-3.5 translate-y-px transition-transform duration-300 ease-out-quart group-data-[state=open]/trigger:rotate-180 motion-reduce:transition-none"
                  />
                </NavigationMenu.Trigger>
                <NavigationMenu.Content
                  className={cn(
                    // Fits short windows even with the utility bar showing (44px bar + 8px gap + margin)
                    "absolute inset-x-0 top-0 max-h-[calc(100dvh-var(--header-height)-4.25rem)] w-full overflow-y-auto overscroll-contain",
                    // Switching menus: a short crossfade, with a slight slide when motion is welcome
                    "animation-duration-200 data-[motion^=from-]:animate-in data-[motion^=from-]:fade-in-0 data-[motion^=to-]:animate-out data-[motion^=to-]:fade-out-0",
                    "motion-safe:data-[motion=from-end]:slide-in-from-right-6 motion-safe:data-[motion=from-start]:slide-in-from-left-6 motion-safe:data-[motion=to-end]:slide-out-to-right-6 motion-safe:data-[motion=to-start]:slide-out-to-left-6"
                  )}
                >
                  {entry.panel}
                </NavigationMenu.Content>
              </>
            ) : entry.href ? (
              <NavigationMenu.Link asChild>
                <SmartLink href={entry.href} className={itemClass}>
                  {entry.label}
                </SmartLink>
              </NavigationMenu.Link>
            ) : null}
          </NavigationMenu.Item>
        ))}
      </NavigationMenu.List>

      <div className="pointer-events-none absolute inset-x-0 top-full">
        <div className="page-container pt-2">
          <NavigationMenu.Viewport
            className={cn(
              "pointer-events-auto relative h-(--radix-navigation-menu-viewport-height) w-full origin-top overflow-hidden rounded-3xl border border-line bg-surface text-ink shadow-soft",
              "transition-[height] duration-300 ease-out-quart motion-reduce:transition-none",
              "animation-duration-200 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0",
              "motion-safe:data-[state=open]:slide-in-from-top-1 motion-safe:data-[state=closed]:slide-out-to-top-1"
            )}
          />
        </div>
      </div>
    </NavigationMenu.Root>
  )
}
