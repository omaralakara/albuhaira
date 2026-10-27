"use client"

import { Menu, X } from "lucide-react"
import { useEffect, useRef, useState, type ReactNode } from "react"

import { Logo } from "@/components/site/logo"
import { Button } from "@/components/ui/button"
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

/**
 * Reduced-motion guard for the tw-animate sheet: keeps the short opacity fade
 * but drops the slide for visitors who ask for less motion.
 */
const calmPopoverMotion =
  "motion-reduce:[--tw-enter-scale:1]! motion-reduce:[--tw-exit-scale:1]! motion-reduce:[--tw-enter-translate-x:0px]! motion-reduce:[--tw-exit-translate-x:0px]! motion-reduce:[--tw-enter-translate-y:0px]! motion-reduce:[--tw-exit-translate-y:0px]!"

/**
 * Compact navigation below 1280px: a Menu button that opens a right-hand
 * sheet (full width on phones, max-w-md on tablets). The sheet body and its
 * pinned footer are server-rendered and passed in. Choosing any link closes
 * the sheet; in-page links leave keyboard focus at their section.
 */
export function MobileNav({
  children,
  footer,
  className,
}: {
  children: ReactNode
  footer: ReactNode
  className?: string
}) {
  const [open, setOpen] = useState(false)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const goingToSection = useRef(false)

  // The sheet belongs to the compact header: close it if the window widens to the desktop bar
  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 80rem)")
    const onChange = (event: MediaQueryListEvent) => {
      if (event.matches) setOpen(false)
    }
    desktop.addEventListener("change", onChange)
    return () => desktop.removeEventListener("change", onChange)
  }, [])

  // Radix hides the rest of the page from assistive tech but leaves live regions
  // (and so the whole of <main>) exposed. Make the page behind the sheet inert.
  useEffect(() => {
    if (!open) return
    const behind = document.querySelectorAll<HTMLElement>("body > main, body > footer")
    behind.forEach((el) => (el.inert = true))
    return () => behind.forEach((el) => (el.inert = false))
  }, [open])

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger ref={triggerRef} asChild>
        <Button
          variant="ghost"
          size="icon"
          aria-label="Open menu"
          className={cn("[&_svg:not([class*='size-'])]:size-6", className)}
        >
          <Menu aria-hidden="true" strokeWidth={1.75} />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        showCloseButton={false}
        aria-modal="true"
        aria-describedby={undefined}
        onClick={(event) => {
          const link = (event.target as HTMLElement).closest("a")
          if (!link) return
          goingToSection.current = link.getAttribute("href")?.startsWith("#") ?? false
          setOpen(false)
        }}
        // Back to the Menu button without scrolling the page under the sticky header
        onCloseAutoFocus={(event) => {
          event.preventDefault()
          if (!goingToSection.current) triggerRef.current?.focus({ preventScroll: true })
          goingToSection.current = false
        }}
        className={cn(
          "gap-0 bg-canvas p-0 text-ink shadow-lift data-[side=right]:w-full data-[side=right]:sm:max-w-md",
          calmPopoverMotion
        )}
      >
        <div className="flex h-(--header-height) shrink-0 items-center justify-between gap-4 border-b border-line px-5 sm:px-6">
          <Logo className="h-8" />
          <SheetClose asChild>
            <Button
              variant="ghost"
              size="icon"
              aria-label="Close menu"
              className="-mr-2.5 [&_svg:not([class*='size-'])]:size-6"
            >
              <X aria-hidden="true" strokeWidth={1.75} />
            </Button>
          </SheetClose>
        </div>
        <SheetTitle className="sr-only">Menu</SheetTitle>
        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain">{children}</div>
        {footer}
      </SheetContent>
    </Sheet>
  )
}
