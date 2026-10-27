"use client"

import {
  useEffect,
  useEffectEvent,
  useRef,
  useState,
  type FocusEvent,
  type PointerEvent,
  type ReactNode,
} from "react"
import { animate, useInView, useMotionValue, useReducedMotion } from "motion/react"

import type { Audience } from "./hero-options"
import type { ImageKey } from "@/content/images"

import { Arcade, type Layer } from "./arcade"
import { momentAt, momentFor, windowsAt, windowsFor } from "./moments"
import { ArchesSelector } from "./selector"

/** Seconds each moment stays in the main window */
const DWELL = 5
/** Seconds between the windows of one flip: the main window first, then the next two */
const STAGGER = { auto: 0.34, user: 0.12 } as const

type Zone = "arcade" | "selector"

/**
 * "Arched windows": the hero's interactive half. Life's moments flip through
 * an arcade of three arched windows on their own; the selector beside it is
 * the visitor's. The model:
 *  - While nothing is chosen, a moment moves forward one window every 5s and
 *    its product chip is outlined; the description and quote button keep their
 *    defaults, so nothing the visitor might click changes on its own.
 *  - Choosing a tab or a product stops the flipping for good and puts that
 *    choice in the main window.
 *  - The flipping pauses while the pointer is over the arcade or the selector,
 *    while keyboard focus is in the hero, when the hero is scrolled away or the
 *    tab is hidden, and whenever the visitor presses Pause. It never starts for
 *    visitors who prefer reduced motion.
 */
export function ArchesExperience({ heading, lead }: { heading: ReactNode; lead: ReactNode }) {
  const reduced = useReducedMotion() === true
  const rootRef = useRef<HTMLDivElement>(null)
  const inView = useInView(rootRef, { amount: 0.35 })
  // Share of the current moment's time that has passed (drives the caption's progress line)
  const progress = useMotionValue(0)

  const [audience, setAudience] = useState<Audience>("personal")
  const [selected, setSelected] = useState<Record<Audience, string | null>>({ personal: null, business: null })
  const [chosen, setChosen] = useState(false)
  const [step, setStep] = useState(0)
  const [stacks, setStacks] = useState<Layer[][]>(() => windowsAt(0).map((key) => [{ id: 0, key, delay: 0 }]))

  const [paused, setPaused] = useState(false)
  const [hovering, setHovering] = useState<Record<Zone, boolean>>({ arcade: false, selector: false })
  const [focused, setFocused] = useState(false)
  const [hidden, setHidden] = useState(false)

  // Photos are fetched ahead: the next flip's once the page is idle, and a choice's on hover or focus
  const [idle, setIdle] = useState(false)
  const [intent, setIntent] = useState<ImageKey[]>([])
  const [loaded, setLoaded] = useState<ReadonlySet<string>>(() => new Set())
  const [waiting, setWaiting] = useState(false)

  const moment = chosen ? momentFor(audience, selected[audience]) : momentAt(step)
  const running =
    !chosen && !reduced && !paused && !hovering.arcade && !hovering.selector && !focused && !hidden && inView
  const nextMain = windowsAt(step + 1)[0]

  useEffect(() => {
    const ready = () => setIdle(true)
    if ("requestIdleCallback" in window) {
      const id = window.requestIdleCallback(ready, { timeout: 2500 })
      return () => window.cancelIdleCallback(id)
    }
    const id = setTimeout(ready, 2000)
    return () => clearTimeout(id)
  }, [])

  useEffect(() => {
    const onChange = () => setHidden(document.visibilityState === "hidden")
    document.addEventListener("visibilitychange", onChange)
    return () => document.removeEventListener("visibilitychange", onChange)
  }, [])

  /** Push new photos onto the windows' stacks; each changed window starts a beat after the last */
  const present = (keys: ImageKey[], pace: keyof typeof STAGGER) =>
    setStacks((current) => {
      let order = 0
      return current.map((stack, slot) => {
        const top = stack[stack.length - 1]
        if (top.key === keys[slot]) return stack
        return [...stack, { id: top.id + 1, key: keys[slot], delay: STAGGER[pace] * order++ }]
      })
    })

  const advance = () => {
    progress.set(0)
    setWaiting(false)
    setStep(step + 1)
    present(windowsAt(step + 1), "auto")
  }

  // The flip waits for the main window's next photo, so it never rises in blurred
  const onDwellEnd = useEffectEvent(() => {
    if (loaded.has(`0:${nextMain}`)) advance()
    else setWaiting(true)
  })

  useEffect(() => {
    if (!running) return
    const controls = animate(progress, 1, {
      duration: DWELL * (1 - progress.get()),
      ease: "linear",
      onComplete: () => onDwellEnd(),
    })
    return () => controls.stop()
  }, [running, step, progress])

  const markLoaded = (slot: number, key: ImageKey) => {
    const id = `${slot}:${key}`
    if (!loaded.has(id)) setLoaded((current) => new Set(current).add(id))
    if (waiting && running && slot === 0 && key === nextMain) advance()
  }

  const settle = (slot: number, layerId: number) =>
    setStacks((current) =>
      current.map((stack, i) =>
        i === slot && stack.length > 1 && stack[stack.length - 1].id === layerId ? stack.slice(-1) : stack
      )
    )

  const stop = () => {
    setChosen(true)
    setWaiting(false)
  }

  const choose = (a: Audience, id: string) => {
    setSelected((s) => ({ ...s, [a]: id }))
    stop()
    present(windowsFor(momentFor(a, id)), "user")
  }

  const changeAudience = (next: Audience) => {
    setAudience(next)
    stop()
    present(windowsFor(momentFor(next, selected[next])), "user")
  }

  const hover = (zone: Zone, on: boolean) => (event: PointerEvent) => {
    if (event.pointerType !== "mouse") return
    setHovering((h) => (h[zone] === on ? h : { ...h, [zone]: on }))
  }

  // Keyboard focus anywhere in the hero holds the photos still, except on the
  // Pause/Play control itself, so pressing Play always plays.
  const onFocus = (event: FocusEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement
    setFocused(!target.closest("[data-rotation-control]") && target.matches(":focus-visible"))
  }
  const onBlur = (event: FocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setFocused(false)
  }

  const upcoming = !chosen && idle ? windowsAt(step + 1) : []
  const warm = [0, 1, 2].map((slot) => [...new Set([upcoming[slot], intent[slot]].filter(Boolean))] as ImageKey[])

  return (
    <div
      ref={rootRef}
      onFocus={onFocus}
      onBlur={onBlur}
      className="page-container grid w-full grid-cols-[minmax(0,1fr)_auto] gap-x-4 sm:gap-x-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.04fr)] lg:grid-rows-[1fr_auto_auto_auto_1fr] lg:gap-x-12 xl:gap-x-16"
    >
      {/* Phones: the arcade sits beside the intro. Tablets: beside the headline and intro. Desktop: its own column. */}
      <div className="col-span-2 sm:col-span-1 lg:col-start-1 lg:row-start-2">{heading}</div>

      <div className="col-start-1 row-start-2 mt-4 self-center sm:self-start lg:row-start-3 lg:mt-[clamp(0.75rem,2svh,1.5rem)]">
        {lead}
      </div>

      <Arcade
        stacks={stacks}
        warm={warm}
        moment={moment}
        progress={progress}
        rotation={chosen ? "off" : paused ? "paused" : "playing"}
        onTogglePause={() => setPaused((p) => !p)}
        onSettled={settle}
        onLoaded={markLoaded}
        reduced={reduced}
        onPointerEnter={hover("arcade", true)}
        onPointerLeave={hover("arcade", false)}
        className="col-start-2 row-start-2 mt-4 w-[10rem] self-center max-sm:[@media(max-height:700px)]:w-[8.25rem] sm:row-span-2 sm:row-start-1 sm:mt-0 sm:w-[14rem] md:w-[16rem] lg:row-span-5 lg:row-start-1 lg:w-[min(100%,calc((100svh-var(--arches-chrome)-3.5rem)*0.9615))] lg:justify-self-end"
      />

      <ArchesSelector
        audience={audience}
        selected={selected}
        showingId={!chosen && moment.audience === audience ? (moment.optionId ?? null) : null}
        onAudienceChange={changeAudience}
        onChoose={choose}
        onIntent={(a, id) => setIntent(windowsFor(momentFor(a, id)))}
        onPointerEnter={hover("selector", true)}
        onPointerLeave={hover("selector", false)}
        className="col-span-2 row-start-3 mt-4 sm:mt-6 lg:col-span-1 lg:row-start-4 lg:mt-[clamp(1rem,3svh,2.25rem)] lg:max-w-[38rem]"
      />
    </div>
  )
}
