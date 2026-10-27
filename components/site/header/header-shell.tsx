"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"

import { cn } from "@/lib/utils"

const HeaderElementContext = createContext<HTMLElement | null>(null)

/** The <header> element, so header popovers can portal into the banner landmark. */
export function useHeaderElement() {
  return useContext(HeaderElementContext)
}

/** Keys that scroll the page when nothing else handles them. */
const SCROLL_KEYS = new Set(["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End", " "])

const TABBABLE =
  'a[href], button:not(:disabled), input:not(:disabled):not([type="hidden"]), select:not(:disabled), textarea:not(:disabled), [tabindex]:not([tabindex="-1"])'

/** Whether Tab (or Shift+Tab) from the focused element will land inside `header`. */
function tabLandsIn(header: HTMLElement, backwards: boolean) {
  const stops = [...document.querySelectorAll<HTMLElement>(TABBABLE)].filter(
    (el) => el.tabIndex >= 0 && el.getClientRects().length > 0 && !el.closest("[inert]")
  )
  const index = stops.indexOf(document.activeElement as HTMLElement)
  if (index < 0) return false
  const next = stops[backwards ? index - 1 : index + 1]
  return next !== undefined && header.contains(next)
}

/** Shows the header in this frame, skipping the slide. */
function showNow(header: HTMLElement) {
  header.style.transitionDuration = "0s"
  header.removeAttribute("data-hidden")
  requestAnimationFrame(() => requestAnimationFrame(() => (header.style.transitionDuration = "")))
}

/**
 * Client wrapper for the <header> element; its children stay server-rendered.
 * The header gets out of the way while you read: it slides up when you scroll
 * down and comes back as soon as you scroll up. It stays put near the top of
 * the page, while a menu is open, and whenever keyboard focus is inside it.
 */
export function HeaderShell({ className, children }: { className?: string; children: ReactNode }) {
  const [element, setElement] = useState<HTMLElement | null>(null)
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    if (!element) return
    let lastY = window.scrollY
    let frame = 0
    // When the reader last scrolled on purpose: wheel, touch, scroll keys or the scrollbar
    let intentAt = -Infinity
    let draggingScrollbar = false

    const markIntent = () => {
      intentAt = performance.now()
    }
    const onKeyDown = (event: KeyboardEvent) => {
      // Listens after the page: keys a widget used (arrows in tabs, Space on a button) don't count
      if (event.defaultPrevented || !SCROLL_KEYS.has(event.key)) return
      const target = event.target as Element
      if (target.closest("input, textarea, select, [contenteditable]")) return
      if (event.key === " " && target.closest("button, a, summary, [role=button]")) return
      markIntent()
    }
    // Keyboard focus about to move into the hidden header: show it before the browser
    // picks a scroll position, or the page jumps up to the off-screen control
    const onTab = (event: KeyboardEvent) => {
      if (event.key !== "Tab" || !element.hasAttribute("data-hidden")) return
      if (!tabLandsIn(element, event.shiftKey)) return
      showNow(element)
      setHidden(false)
    }
    const onPointerDown = (event: PointerEvent) => {
      // The page scrollbar sits outside the root's client area
      const root = document.documentElement
      if (event.target === root && event.clientX >= root.clientWidth) draggingScrollbar = true
    }
    const onPointerUp = () => {
      if (!draggingScrollbar) return
      draggingScrollbar = false
      markIntent()
    }

    const update = () => {
      frame = 0
      const y = window.scrollY
      const delta = y - lastY
      if (Math.abs(delta) < 6) return
      lastY = y
      const nearTop = y <= element.offsetHeight + 80
      // Only the reader's own scroll brings the header back. An accordion keeping its row
      // in place, or scroll anchoring, also scrolls up, and the header would cover that row.
      const intended = draggingScrollbar || performance.now() - intentAt < 300
      if (delta < 0 && !nearTop && !intended) return
      const busy =
        element.matches(":focus-within") || element.querySelector('[data-state="open"], [data-mega-open]') !== null
      setHidden(delta > 0 && !nearTop && !busy)
    }

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    const passive = { passive: true }
    window.addEventListener("scroll", onScroll, passive)
    window.addEventListener("wheel", markIntent, passive)
    window.addEventListener("touchmove", markIntent, passive)
    window.addEventListener("keydown", onKeyDown)
    window.addEventListener("keydown", onTab, true)
    window.addEventListener("pointerdown", onPointerDown, passive)
    window.addEventListener("pointerup", onPointerUp, passive)
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("wheel", markIntent)
      window.removeEventListener("touchmove", markIntent)
      window.removeEventListener("keydown", onKeyDown)
      window.removeEventListener("keydown", onTab, true)
      window.removeEventListener("pointerdown", onPointerDown)
      window.removeEventListener("pointerup", onPointerUp)
      cancelAnimationFrame(frame)
    }
  }, [element])

  return (
    <HeaderElementContext value={element}>
      <header
        ref={setElement}
        data-hidden={hidden || undefined}
        // Any other way in (a script moving focus): make sure the header shows
        onFocus={(event) => {
          if (!event.currentTarget.hasAttribute("data-hidden")) return
          showNow(event.currentTarget)
          setHidden(false)
        }}
        className={cn(
          className,
          // No will-change here: it would trap the fixed menu scrim inside the header.
          "transition-transform duration-300 ease-out-quart data-hidden:-translate-y-full motion-reduce:transition-none"
        )}
      >
        {children}
      </header>
    </HeaderElementContext>
  )
}
