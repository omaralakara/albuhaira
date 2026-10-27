import Image from "next/image"
import type { CSSProperties } from "react"

import { CurveLine } from "@/components/motif/curve-line"
import { images } from "@/content/images"
import { cn } from "@/lib/utils"

// A true semicircular arch (the rise is half the width) on a 4:3 frame:
// wide enough to keep most of the panoramic skyline in view.
const frame = { w: 400, h: 300, rise: 200, offset: 15 }

/**
 * The line that embraces the arch (cf. archEmbracePath in ArchFrame): it
 * swoops in from below on the left, rises beside the frame, follows the crown
 * at a constant offset and flows out to the right. The tails are short, so
 * the line ends inside the page margins at every width.
 */
function embracePath({ w, h, rise, offset: o }: typeof frame) {
  const start = -o
  const end = w + o
  const exitY = rise + (h - rise) * 0.45

  return [
    `M ${start - 24} ${h + 28}`,
    `C ${start - 6} ${h + 18} ${start} ${h - 4} ${start} ${h - 44}`,
    `L ${start} ${rise}`,
    `A ${w / 2 + o} ${rise + o} 0 0 1 ${end} ${rise}`,
    `L ${end} ${exitY}`,
    `C ${end} ${exitY + 34} ${end + 6} ${exitY + 52} ${end + 24} ${exitY + 62}`,
  ].join(" ")
}

/**
 * The Sharjah skyline over Khalid Lagoon in an arched window. The arch is a
 * CSS mask (`.arch`), so it stays crisp at any width; the brand line traces it
 * once when it scrolls into view. Server component; only the line draw-on
 * runs on the client.
 */
export function SkylineArch({ className }: { className?: string }) {
  const image = images.trustArchitecture

  return (
    <figure className={cn("relative", className)}>
      <div className="relative aspect-[4/3]">
        <div
          className="arch absolute inset-0 isolate overflow-hidden bg-canvas-deep"
          style={{ "--arch-rise": `${((frame.rise / frame.h) * 100).toFixed(3)}%` } as CSSProperties}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(min-width: 1344px) 490px, (min-width: 1024px) 38vw, (min-width: 768px) 45vw, (min-width: 640px) calc(100vw - 64px), calc(100vw - 40px)"
            placeholder="blur"
            className="object-cover"
            style={{ objectPosition: image.position }}
          />
        </div>
        {/* The frame grows from about 330px to 490px wide, so the stroke steps down to stay near 1px */}
        <CurveLine
          d={embracePath(frame)}
          viewBox={`0 0 ${frame.w} ${frame.h}`}
          className="absolute inset-0 h-full w-full text-brand/45 [stroke-width:1.25] lg:[stroke-width:1.2] xl:[stroke-width:1]"
        />
      </div>
      <figcaption className="mt-5 flex items-center gap-3 text-sm text-ink-muted md:mt-6">
        <span aria-hidden="true" className="h-px w-6 bg-line-strong" />
        Khalid Lagoon, Sharjah
      </figcaption>
    </figure>
  )
}
