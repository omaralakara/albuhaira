"use client"

import { DropdownMenu as DropdownMenuPrimitive } from "radix-ui"
import { useRef, type ComponentProps, type KeyboardEvent } from "react"

import { cn } from "@/lib/utils"

import { useHeaderElement } from "./header-shell"

/** Shared look for rows in the header dropdowns (Radix menu items rendered as links). */
export const menuRowClass =
  "flex w-full cursor-pointer rounded-2xl px-3 text-left transition-colors outline-offset-0 select-none focus:bg-canvas data-[highlighted]:bg-canvas"

/**
 * Focus handling for the header dropdowns: put `triggerRef` on the trigger and
 * spread `contentProps` on HeaderMenuContent.
 * - Tab and Shift+Tab close the menu and carry on from the trigger (APG menu
 *   button); Radix menus would otherwise swallow the key.
 * - Closing returns focus to the trigger without scrolling the page.
 * - Focus stays put after an in-page jump (set `goingToSectionRef` when one is
 *   chosen) or after a click elsewhere on the page.
 */
export function useHeaderMenuFocus() {
  const triggerRef = useRef<HTMLButtonElement>(null)
  const goingToSectionRef = useRef(false)
  const leftMenuRef = useRef(false)

  const contentProps = {
    onKeyDownCapture: (event: KeyboardEvent) => {
      if (event.key !== "Tab" || event.altKey || event.ctrlKey || event.metaKey) return
      // Keep the key from Radix, and focus the trigger so the browser's own Tab moves
      // on from there. Focus leaving the menu closes it.
      event.stopPropagation()
      triggerRef.current?.focus({ preventScroll: true })
    },
    onInteractOutside: () => {
      leftMenuRef.current = true
    },
    onCloseAutoFocus: (event: Event) => {
      event.preventDefault()
      if (!goingToSectionRef.current && !leftMenuRef.current) triggerRef.current?.focus({ preventScroll: true })
      goingToSectionRef.current = false
      leftMenuRef.current = false
    },
  }

  return { triggerRef, goingToSectionRef, contentProps }
}

/**
 * Surface for the header dropdowns (Urgent help, Digital services). Portalled
 * into the <header> so it stays inside the banner landmark. Fades for
 * everyone; the small zoom and slide only play when motion is welcome.
 */
export function HeaderMenuContent({
  className,
  sideOffset = 8,
  collisionPadding = 16,
  ...props
}: ComponentProps<typeof DropdownMenuPrimitive.Content>) {
  const header = useHeaderElement()

  return (
    <DropdownMenuPrimitive.Portal container={header}>
      <DropdownMenuPrimitive.Content
        sideOffset={sideOffset}
        collisionPadding={collisionPadding}
        className={cn(
          "z-50 max-h-(--radix-dropdown-menu-content-available-height) w-[22rem] max-w-[calc(100vw-2rem)] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-3xl border border-line bg-surface p-2 text-ink shadow-soft outline-none",
          "animation-duration-150 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0",
          "motion-safe:data-[state=open]:zoom-in-95 motion-safe:data-[state=closed]:zoom-out-95 motion-safe:data-[side=bottom]:slide-in-from-top-2",
          className
        )}
        {...props}
      />
    </DropdownMenuPrimitive.Portal>
  )
}
