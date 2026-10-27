"use client"

import Image from "next/image"
import { useState, type ReactNode } from "react"
import { stagger, type Variants } from "motion/react"
import * as m from "motion/react-m"
import { ArrowRight } from "lucide-react"
import { Tabs as TabsPrimitive } from "radix-ui"

import { TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import type { SiteImage } from "@/content/images"
import { cn } from "@/lib/utils"

import { DotList } from "./dot-list"

export type ExplorerGroup = {
  id: string
  /** "01" to "04" */
  number: string
  name: string
  kicker: string[]
  explanation: string
  /** Resolved on the server, so the client bundle carries only these four photos */
  image: SiteImage
  /** Server-rendered line entries (see LineEntry) */
  lines: { id: string; content: ReactNode }[]
}

type Layer = { id: number; image: SiteImage }

const EASE = [0.25, 1, 0.5, 1] as const
// The photo spans 7 of 12 columns: about 701px inside the 84rem container, ~52vw below it.
const STAGE_SIZES = "(min-width: 1440px) 701px, (min-width: 1024px) 52vw, 100vw"

const panelVariants: Variants = {
  hidden: {},
  shown: { transition: { delayChildren: stagger(0.06) } },
}
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  shown: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE } },
}

/**
 * Desktop business explorer: the four groups as vertical tabs (arrow keys
 * move and select, from Radix) beside a photograph that crossfades to the
 * chosen group. The group's introduction and lines sit full width below, so
 * the two columns always balance and switching groups barely moves the page.
 * Only the change animates: the brand rule hands over between tabs (CSS), the
 * photo crossfades and the new panel rises in once.
 */
export function BusinessExplorer({ groups, className }: { groups: ExplorerGroup[]; className?: string }) {
  const [active, setActive] = useState(groups[0].id)
  // Which way the selection moved, so the rule appears to travel between tabs
  const [direction, setDirection] = useState<"down" | "up">("down")
  // Panels only animate after the first change, never on page load
  const [changed, setChanged] = useState(false)
  // Photos stack: a new layer fades in over the previous one, then older layers are dropped
  const [layers, setLayers] = useState<Layer[]>([{ id: 0, image: groups[0].image }])
  // Fetch the other photos only once someone reaches for the tabs, so the crossfade is instant
  const [warm, setWarm] = useState(false)
  // Radix focuses a tab on mousedown, which Chrome treats as :focus-visible. The
  // active styles already show a clicked choice, so the ring is kept for keyboard use only.
  const [pointer, setPointer] = useState(false)

  const select = (value: string) => {
    const from = groups.findIndex((g) => g.id === active)
    const to = groups.findIndex((g) => g.id === value)
    if (to < 0 || to === from) return
    setDirection(to > from ? "down" : "up")
    setActive(value)
    setChanged(true)
    setWarm(true)
    const image = groups[to].image
    setLayers((current) => {
      const top = current[current.length - 1]
      return top.image.src.src === image.src.src ? current : [...current, { id: top.id + 1, image }]
    })
  }

  return (
    // The Radix root is used directly: the shared shadcn <Tabs> does not pass
    // `orientation` on, and vertical tabs need it for arrow up/down and aria-orientation.
    <TabsPrimitive.Root
      data-slot="tabs"
      value={active}
      onValueChange={select}
      orientation="vertical"
      className={cn("group/tabs grid-cols-12 gap-x-10 xl:gap-x-16", className)}
    >
      <TabsList
        aria-label="Areas of business cover"
        data-direction={direction}
        data-pointer={pointer || undefined}
        onPointerEnter={() => setWarm(true)}
        onFocus={() => setWarm(true)}
        onPointerDown={() => setPointer(true)}
        onKeyDown={() => setPointer(false)}
        onBlur={(event) => {
          // Leaving the list resets it, so returning by keyboard always shows the ring
          if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setPointer(false)
        }}
        className="relative col-span-5 h-auto w-full items-stretch justify-start gap-1.5 self-start rounded-none border-l border-line bg-transparent p-0"
      >
        {groups.map((group) => (
          <TabsTrigger
            key={group.id}
            value={group.id}
            className={cn(
              "group/trigger grid h-auto w-full flex-none grid-cols-[2.25rem_minmax(0,1fr)_1.25rem] items-baseline gap-x-3 rounded-none rounded-r-2xl border-0 py-5 pr-5 pl-6 text-left text-base font-normal whitespace-normal",
              "text-ink-muted transition-[color,background-color] duration-300 ease-out-quart",
              "data-[state=inactive]:hover:bg-canvas/60 data-[state=inactive]:hover:text-ink-soft",
              "data-active:bg-canvas data-active:text-ink group-data-[variant=default]/tabs-list:data-active:shadow-none",
              // The brand rule sits on the list's left border and hands over between tabs.
              "before:absolute before:inset-y-0 before:left-[-2px] before:w-[3px] before:scale-y-0 before:rounded-full before:bg-brand before:transition-transform before:duration-500 before:ease-out-quart data-active:before:scale-y-100",
              "group-data-[direction=down]/tabs-list:data-active:before:origin-top group-data-[direction=down]/tabs-list:data-[state=inactive]:before:origin-bottom",
              "group-data-[direction=up]/tabs-list:data-active:before:origin-bottom group-data-[direction=up]/tabs-list:data-[state=inactive]:before:origin-top",
              "motion-reduce:transition-none motion-reduce:before:transition-none",
              "after:hidden",
              // The focus outline comes from the primitive; no ring after a pointer press (see `pointer`)
              "group-data-pointer/tabs-list:focus-visible:outline-transparent"
            )}
          >
            <span
              aria-hidden="true"
              className="col-start-1 row-start-1 text-sm font-semibold tracking-[0.08em] tabular-nums transition-colors duration-300 group-data-active/trigger:text-brand"
            >
              {group.number}
            </span>
            <span className="col-start-2 row-start-1 min-w-0 font-display text-[1.75rem] leading-[1.15] tracking-[-0.01em] xl:text-[2rem]">
              {group.name}
            </span>
            <span className="sr-only">: </span>
            {/* The kicker may run under the arrow column, so it stays on one line from 1024px */}
            <DotList
              items={group.kicker}
              className="col-span-2 col-start-2 row-start-2 mt-1.5 text-sm leading-snug text-ink-muted transition-colors duration-300 group-data-active/trigger:text-ink-soft xl:text-[0.9375rem]"
            />
            <ArrowRight
              aria-hidden="true"
              strokeWidth={1.75}
              className="col-start-3 row-start-1 size-5 -translate-x-1 self-center text-brand opacity-0 transition-[opacity,translate] duration-300 ease-out-quart group-data-active/trigger:translate-x-0 group-data-active/trigger:opacity-100 motion-reduce:transition-none"
            />
          </TabsTrigger>
        ))}
      </TabsList>

      {/* No intrinsic height: the photo fills the row the tab list sets, so the two always line up */}
      <div className="relative isolate col-span-7 overflow-hidden rounded-3xl bg-canvas-deep">
        {warm && (
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 opacity-0">
            {groups
              .filter((group) => group.image.src.src !== groups[0].image.src.src)
              .map((group) => (
                <Image
                  key={group.id}
                  src={group.image.src}
                  alt=""
                  fill
                  sizes={STAGE_SIZES}
                  fetchPriority="low"
                  className="object-cover"
                />
              ))}
          </div>
        )}

        {layers.map((layer, index) => {
          const isTop = index === layers.length - 1
          return (
            <m.div
              key={layer.id}
              className="absolute inset-0"
              initial={layer.id === 0 ? false : { opacity: 0, scale: 1.035 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.65, ease: EASE }}
              onAnimationComplete={() => {
                if (isTop) setLayers((ls) => (ls.length > 1 ? ls.slice(-1) : ls))
              }}
            >
              <Image
                src={layer.image.src}
                alt={isTop ? layer.image.alt : ""}
                fill
                sizes={STAGE_SIZES}
                placeholder="blur"
                className="object-cover"
                style={{ objectPosition: layer.image.position }}
              />
            </m.div>
          )
        })}

        <div aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-ink/5 ring-inset" />
      </div>

      {/* Follows the tab list in the DOM, so Tab moves from the chosen tab straight into its panel.
          The minimum height is the typical panel's, so switching groups moves the page by well under 100px. */}
      {groups.map((group) => (
        <TabsContent
          key={group.id}
          value={group.id}
          className="col-span-12 mt-10 min-h-[26.5rem] rounded-xl text-base focus-visible:outline-offset-[10px] xl:mt-12 xl:min-h-[24rem]"
        >
          <h3 className="sr-only">{group.name}</h3>
          <m.div variants={panelVariants} initial={changed ? "hidden" : false} animate="shown">
            <m.p variants={itemVariants} className="max-w-[48rem] text-lead text-ink">
              {group.explanation}
            </m.p>
            <ul
              role="list"
              className={cn(
                "mt-8 grid gap-x-10 gap-y-10 xl:gap-x-16",
                group.lines.length > 2 ? "grid-cols-3" : "grid-cols-2"
              )}
            >
              {group.lines.map((line) => (
                <m.li key={line.id} variants={itemVariants} className="flex flex-col border-t border-line pt-6 *:flex-1">
                  {line.content}
                </m.li>
              ))}
            </ul>
          </m.div>
        </TabsContent>
      ))}
    </TabsPrimitive.Root>
  )
}
