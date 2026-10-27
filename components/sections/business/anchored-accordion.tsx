"use client"

import { useEffect, useRef, type MouseEvent, type ReactNode } from "react"

import { Accordion } from "@/components/ui/accordion"
import { cn } from "@/lib/utils"

/** Ends a follow loop and clears the marker. */
function release(frame: { current: number }) {
  cancelAnimationFrame(frame.current)
  document.documentElement.removeAttribute("data-programmatic-scroll")
}

/**
 * Single, collapsible accordion that keeps the header you tap where it is.
 * Opening an item closes the one above it; without this the page would jump
 * by the height of the closing panel (browser scroll anchoring can't help,
 * because it anchors to content inside the closing panel). Items need a
 * `data-value` matching their value.
 *
 * While it compensates, <html> carries `data-programmatic-scroll`, so the
 * hide-on-scroll header can tell this upward scroll from the reader's own.
 */
export function AnchoredAccordion({
  defaultValue,
  className,
  children,
}: {
  defaultValue: string
  className?: string
  children: ReactNode
}) {
  const root = useRef<HTMLDivElement>(null)
  const frame = useRef(0)
  // Where the tapped trigger was at the moment of the tap
  const pressed = useRef<{ trigger: Element; top: number } | null>(null)

  // Stop following if the accordion unmounts mid-animation (e.g. resized past lg)
  useEffect(() => () => release(frame), [])

  // Radix reports the change after the DOM updates, when a panel that was still
  // opening above may already have jumped, so the position is taken on the tap itself.
  const recordTap = (event: MouseEvent<HTMLDivElement>) => {
    const trigger = (event.target as Element).closest('[data-slot="accordion-trigger"]')
    if (!trigger) return
    // A second tap replaces the first follow loop instead of fighting it
    release(frame)
    pressed.current = { trigger, top: trigger.getBoundingClientRect().top }
  }

  const keepInPlace = (value: string) => {
    release(frame)
    const trigger = value
      ? root.current?.querySelector<HTMLElement>(`[data-value="${value}"] [data-slot="accordion-trigger"]`)
      : null
    if (!trigger) return
    const start = pressed.current?.trigger === trigger ? pressed.current.top : trigger.getBoundingClientRect().top
    pressed.current = null
    // Follow the trigger for the length of the close animation (instant with reduced motion)
    const until = performance.now() + 450
    document.documentElement.setAttribute("data-programmatic-scroll", "")
    const follow = () => {
      const drift = trigger.getBoundingClientRect().top - start
      if (Math.abs(drift) >= 1) window.scrollBy({ top: drift, behavior: "instant" })
      if (performance.now() < until) frame.current = requestAnimationFrame(follow)
      // Clear the marker two frames later: the last scroll event is only handled in the next frame
      else frame.current = requestAnimationFrame(() => (frame.current = requestAnimationFrame(() => release(frame))))
    }
    frame.current = requestAnimationFrame(follow)
  }

  return (
    <Accordion
      ref={root}
      type="single"
      collapsible
      defaultValue={defaultValue}
      onClickCapture={recordTap}
      onValueChange={keepInPlace}
      className={cn("[overflow-anchor:none]", className)}
    >
      {children}
    </Accordion>
  )
}
