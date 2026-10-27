"use client"

import Image from "next/image"
import type { CSSProperties, PointerEventHandler } from "react"
import { AnimatePresence, type MotionValue } from "motion/react"
import * as m from "motion/react-m"
import { Pause, Play } from "lucide-react"

import { CurveLine } from "@/components/motif/curve-line"
import { images, type ImageKey } from "@/content/images"
import { cn } from "@/lib/utils"

import { VIEW, WINDOWS, arcadeLinePath, place, rise } from "./arcade-geometry"
import type { Moment } from "./moments"

/** One photo in a window's stack; a new layer rises over the last, then the stack collapses */
export type Layer = { id: number; key: ImageKey; delay: number }

// The line keeps about 12px from the windows on desktop and about 7px in the compact arcade
const LINE_PATH = arcadeLinePath(22)
const COMPACT_LINE_PATH = arcadeLinePath(44)

// Rendered width of each window [main, next, after next] = 54%, 33% and 20% of
// the arcade, which is 10rem wide on phones, 14rem from 640px, 16rem from
// 768px, and fills its column from 1024px (at most ~604px in the 84rem container).
export const WINDOW_SIZES = [
  "(min-width: 1280px) 20.5rem, (min-width: 1024px) 15.25rem, (min-width: 768px) 8.75rem, (min-width: 640px) 7.75rem, 5.5rem",
  "(min-width: 1280px) 12.5rem, (min-width: 1024px) 9.25rem, (min-width: 768px) 5.25rem, (min-width: 640px) 4.75rem, 3.5rem",
  "(min-width: 1280px) 7.5rem, (min-width: 1024px) 5.75rem, (min-width: 768px) 3.25rem, (min-width: 640px) 3rem, 2.25rem",
]

// Some landscape photos need their own crop in the slim 3:5 windows.
const CROPS: Partial<Record<ImageKey, string>> = {
  heroMedical: "40% 50%",
  heroTravel: "58% 50%",
  bizPeople: "52% 50%",
  cardYacht: "50% 55%",
}

const REVEAL_EASE = [0.76, 0, 0.24, 1] as const
const SETTLE_EASE = [0.16, 1, 0.3, 1] as const

const SLOT_STYLE = [
  // Main window: in front, lifted off the canvas by a ring and a long, soft shadow
  "z-30 [--arch-foot:1.25rem] max-lg:[--arch-foot:0.625rem] shadow-[0_0_0_3px_var(--canvas),0_18px_30px_-18px_rgb(20_22_42/0.5)] lg:shadow-[0_0_0_7px_var(--canvas),0_40px_70px_-34px_rgb(20_22_42/0.55)]",
  "z-20 [--arch-foot:1rem] max-lg:[--arch-foot:0.5rem] shadow-[0_0_0_3px_var(--canvas)] lg:shadow-[0_0_0_6px_var(--canvas),0_28px_50px_-30px_rgb(20_22_42/0.45)]",
  "z-10 [--arch-foot:0.75rem] max-lg:[--arch-foot:0.375rem] shadow-[0_0_0_2px_var(--canvas)] lg:shadow-[0_0_0_5px_var(--canvas),0_20px_40px_-26px_rgb(20_22_42/0.4)]",
]

type ArcadeProps = {
  stacks: Layer[][]
  /** Photos to fetch ahead for each window, rendered invisibly at that window's size */
  warm: ImageKey[][]
  moment: Moment
  progress: MotionValue<number>
  /** Auto-flip state: "off" once the visitor has chosen (with reduced motion the control is hidden by CSS) */
  rotation: "playing" | "paused" | "off"
  onTogglePause: () => void
  onSettled: (slot: number, layerId: number) => void
  /** A window's photo has loaded (or failed), so a flip waiting for it can go ahead */
  onLoaded: (slot: number, key: ImageKey) => void
  reduced: boolean
  onPointerEnter?: PointerEventHandler
  onPointerLeave?: PointerEventHandler
  className?: string
}

/**
 * Three arched windows on a dome of sky, echoing the arched windows of the
 * building in the Al Buhaira emblem. Each window shows a moment of life; on
 * every flip the moments step forward one window, so life appears to move
 * through the arcade towards you. The brand line traces the arcade's skyline.
 */
export function Arcade({
  stacks,
  warm,
  moment,
  progress,
  rotation,
  onTogglePause,
  onSettled,
  onLoaded,
  reduced,
  onPointerEnter,
  onPointerLeave,
  className,
}: ArcadeProps) {
  return (
    <div
      className={cn("@container/arcade relative", className)}
      style={{ aspectRatio: `${VIEW.w} / ${VIEW.h}` }}
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
    >
      {/* A dome of sky behind the windows, fading into the canvas at its foot */}
      <div
        aria-hidden="true"
        className="arch absolute"
        style={
          {
            left: "4%",
            right: "3%",
            top: "13%",
            bottom: "4%",
            "--arch-rise": "56%",
            "--arch-foot": "0px",
            background:
              "linear-gradient(180deg, color-mix(in oklab, var(--sky) 66%, var(--canvas)) 0%, color-mix(in oklab, var(--sky) 30%, var(--canvas)) 45%, var(--sky-soft) 70%)",
            maskImage: "linear-gradient(180deg, #000 55%, transparent 97%)",
          } as CSSProperties
        }
      />

      {/* The line scales with the arcade, so its stroke is set per size to stay about 1px wide */}
      <CurveLine
        d={COMPACT_LINE_PATH}
        viewBox={`0 0 ${VIEW.w} ${VIEW.h}`}
        draw="load"
        className="absolute inset-0 z-[5] h-full w-full text-brand/50 [stroke-width:6] sm:[stroke-width:4.5] lg:hidden"
      />
      <CurveLine
        d={LINE_PATH}
        viewBox={`0 0 ${VIEW.w} ${VIEW.h}`}
        draw="load"
        className="absolute inset-0 z-[5] hidden h-full w-full text-brand/50 [stroke-width:2.2] lg:block"
      />

      {[2, 1, 0].map((slot) => (
        <ArchWindow
          key={slot}
          slot={slot}
          stack={stacks[slot]}
          warm={warm[slot]}
          reduced={reduced}
          onSettled={onSettled}
          onLoaded={onLoaded}
        />
      ))}

      <Caption
        moment={moment}
        progress={progress}
        rotation={rotation}
        reduced={reduced}
        onTogglePause={onTogglePause}
      />

      {/* Phones and tablets: the caption is hidden, so the control sits on the arcade */}
      {rotation !== "off" && (
        <PauseButton
          rotation={rotation}
          onToggle={onTogglePause}
          className="absolute top-0 left-0 z-40 size-11 border border-line bg-surface text-ink shadow-soft lg:hidden"
        />
      )}
    </div>
  )
}

function ArchWindow({
  slot,
  stack,
  warm,
  reduced,
  onSettled,
  onLoaded,
}: {
  slot: number
  stack: Layer[]
  warm: ImageKey[]
  reduced: boolean
  onSettled: (slot: number, layerId: number) => void
  onLoaded: (slot: number, key: ImageKey) => void
}) {
  const box = WINDOWS[slot]
  const sizes = WINDOW_SIZES[slot]
  const duration = slot === 0 ? 1.25 : 1.05
  // The photo being covered eases back a little as the new one rises over it
  const cover = { duration, delay: stack[stack.length - 1].delay, ease: REVEAL_EASE }

  return (
    <div
      className={cn("arch absolute isolate overflow-hidden bg-canvas-deep", SLOT_STYLE[slot])}
      style={{ ...place(box), "--arch-rise": rise(box) } as CSSProperties}
    >
      {warm
        .filter((key) => !stack.some((layer) => layer.key === key))
        .map((key) => (
          <Image
            key={`warm-${key}`}
            src={images[key].src}
            alt=""
            aria-hidden="true"
            fill
            sizes={sizes}
            // A failed fetch counts as done too, so the flips never stall waiting for it
            onLoad={() => onLoaded(slot, key)}
            onError={() => onLoaded(slot, key)}
            className="pointer-events-none object-cover opacity-0"
          />
        ))}

      {stack.map((layer, index) => {
        const image = images[layer.key]
        const isTop = index === stack.length - 1
        const first = layer.id === 0
        const reveal = { duration, delay: layer.delay, ease: REVEAL_EASE }
        return (
          // The new photo rises into the window inside an arch of its own; the
          // photo counter-moves so it stays put while the arch sweeps up over it.
          <m.div
            key={layer.id}
            className={cn(
              "arch absolute inset-0 overflow-hidden",
              !first && !reduced && "shadow-[0_-18px_36px_-22px_rgb(20_22_42/0.4)]"
            )}
            // The resting state is the same with or without reduced motion, so server and client markup match
            initial={first ? false : reduced ? { opacity: 0 } : { y: "101%" }}
            animate={{ y: "0%", opacity: 1 }}
            transition={reduced ? { duration: 0.2, ease: "linear" } : reveal}
            onAnimationComplete={() => {
              if (isTop) onSettled(slot, layer.id)
            }}
          >
            <m.div
              className="absolute inset-0"
              initial={first || reduced ? false : { y: "-101%", scale: 1.16 }}
              // Covered: up 4% and 8% larger, so its foot stays put while it recedes
              animate={isTop || reduced ? { y: "0%", scale: 1 } : { y: "-4%", scale: 1.08 }}
              transition={
                isTop
                  ? { y: reveal, scale: { duration: duration + 0.7, delay: layer.delay, ease: SETTLE_EASE } }
                  : cover
              }
            >
              <Image
                src={image.src}
                alt={slot === 0 && isTop ? image.alt : ""}
                fill
                sizes={sizes}
                placeholder="blur"
                preload={slot === 0 && first}
                onLoad={() => onLoaded(slot, layer.key)}
                onError={() => onLoaded(slot, layer.key)}
                className="object-cover"
                style={{ objectPosition: CROPS[layer.key] ?? image.position }}
              />
            </m.div>
          </m.div>
        )
      })}
    </div>
  )
}

/** The main window's label: the moment and its cover, with the slideshow's progress and control */
function Caption({
  moment,
  progress,
  rotation,
  reduced,
  onTogglePause,
}: {
  moment: Moment
  progress: MotionValue<number>
  rotation: ArcadeProps["rotation"]
  reduced: boolean
  onTogglePause: () => void
}) {
  // The words change as the new photo passes the middle of the window
  const enter = reduced ? { duration: 0.2 } : { duration: 0.45, delay: 0.5, ease: SETTLE_EASE }
  const leave = reduced ? { duration: 0.15 } : { duration: 0.25, delay: 0.2, ease: "easeIn" as const }

  return (
    // Sized by the arcade (a container), so the longest cover fits on short screens too
    <div className="absolute bottom-[3%] left-[36%] z-40 hidden w-[min(22.5rem,66%)] items-center gap-3 overflow-hidden rounded-2xl bg-surface py-3 pr-3 pl-4 shadow-lift lg:flex @min-[34rem]/arcade:pl-3.5">
      <div aria-hidden="true" className="grid min-w-0 flex-1">
        <AnimatePresence initial={false}>
          <m.div
            key={moment.id}
            className="flex min-w-0 items-center gap-3 [grid-area:1/1]"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0, transition: enter }}
            exit={{ opacity: 0, y: -8, transition: leave }}
          >
            <span className="hidden size-10 shrink-0 items-center justify-center rounded-full bg-brand-tint text-brand @min-[34rem]/arcade:inline-flex">
              <moment.icon strokeWidth={1.75} className="size-5" />
            </span>
            <span className="min-w-0">
              <span className="block truncate text-[0.6875rem] font-semibold tracking-[0.14em] text-brand uppercase">
                {moment.label}
              </span>
              <span className="mt-0.5 block truncate font-display text-[1.125rem] leading-tight text-ink @min-[34rem]/arcade:text-[1.3125rem]">
                {moment.cover}
              </span>
            </span>
          </m.div>
        </AnimatePresence>
      </div>

      {rotation !== "off" && (
        <>
          <PauseButton
            rotation={rotation}
            onToggle={onTogglePause}
            className="size-10 border border-ink/15 text-ink hover:border-ink/40 hover:bg-ink/[0.03]"
          />
          {/* Time left on this moment */}
          <m.span
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-[3px] origin-left bg-brand motion-reduce:hidden"
            style={{ scaleX: progress }}
          />
        </>
      )}
    </div>
  )
}

function PauseButton({
  rotation,
  onToggle,
  className,
}: {
  rotation: "playing" | "paused"
  onToggle: () => void
  className?: string
}) {
  const paused = rotation === "paused"
  const label = paused ? "Play the photo slideshow" : "Pause the photo slideshow"
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={label}
      title={label}
      data-rotation-control=""
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-full transition-colors duration-200 motion-reduce:hidden",
        className
      )}
    >
      {paused ? (
        <Play aria-hidden="true" strokeWidth={1.75} className="size-4 translate-x-px fill-current" />
      ) : (
        <Pause aria-hidden="true" strokeWidth={1.75} className="size-4 fill-current" />
      )}
    </button>
  )
}
