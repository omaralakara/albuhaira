"use client"

import { ChevronDown } from "lucide-react"
import { useId, useState, type ReactNode } from "react"

import { cn } from "@/lib/utils"

/**
 * One footer link column, rendered once for every screen size. On phones the
 * heading is a disclosure button (aria-expanded/aria-controls) that folds the
 * list away; from md up the button is hidden and the list is always shown
 * under a plain heading. The links arrive as server-rendered children.
 */
export function FooterColumn({
  title,
  headingClassName,
  className,
  children,
}: {
  title: string
  /** Heading style from md up */
  headingClassName?: string
  className?: string
  children: ReactNode
}) {
  const [open, setOpen] = useState(false)
  const panelId = useId()

  return (
    <div className={cn("border-b border-line-strong/70 last:border-b-0 md:border-b-0", className)}>
      <h3>
        <button
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((value) => !value)}
          className="flex min-h-14 w-full items-center justify-between gap-4 rounded-lg py-3 text-left text-base font-semibold text-ink md:hidden"
        >
          {title}
          <ChevronDown
            aria-hidden="true"
            strokeWidth={2}
            className={cn(
              "size-5 shrink-0 text-ink-muted transition-transform duration-300 ease-out-quart motion-reduce:transition-none",
              open && "rotate-180"
            )}
          />
        </button>
        <span className={cn("hidden md:block", headingClassName)}>{title}</span>
      </h3>
      {/* Closed panels collapse to 0fr and are invisible, so their links leave the tab order */}
      <div
        id={panelId}
        className={cn(
          "grid transition-[grid-template-rows,visibility] duration-300 ease-out-quart motion-reduce:transition-none md:visible md:grid-rows-[1fr]",
          open ? "visible grid-rows-[1fr]" : "invisible grid-rows-[0fr]"
        )}
      >
        {/* The side padding keeps focus outlines clear of the clipping edge */}
        <div className="-mx-1.5 min-h-0 overflow-hidden px-1.5 md:mx-0 md:overflow-visible md:px-0">
          <div className="pt-1.5 pb-5 md:pt-4 md:pb-0">{children}</div>
        </div>
      </div>
    </div>
  )
}
