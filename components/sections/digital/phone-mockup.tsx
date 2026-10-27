import Image from "next/image"
import { BatteryFull, ChevronRight, MapPin, ReceiptText, Signal, Wifi } from "lucide-react"

import { cn } from "@/lib/utils"

/**
 * An illustrative app screen built in CSS (no real screenshots exist): a
 * digital medical insurance card with the official emblem on a light card,
 * then a stylised network map and a claims shortcut. Small structural labels
 * ("Member", "Valid to") make it read as an app, while placeholder bars stand
 * in for every piece of personal data, so nothing here can be mistaken for a
 * real member's details or a real provider. The caller wraps it in a
 * labelled role="img" element, which keeps its contents out of the
 * accessibility tree.
 */
export function PhoneMockup({ className }: { className?: string }) {
  return (
    <div className={cn("relative w-[17.5rem] sm:w-[18.75rem]", className)}>
      {/* Hardware buttons */}
      <span className="absolute top-[19%] -left-[3px] h-[6%] w-[3px] rounded-l-[2px] bg-[#1b2357]" />
      <span className="absolute top-[28%] -left-[3px] h-[9%] w-[3px] rounded-l-[2px] bg-[#1b2357]" />
      <span className="absolute top-[24%] -right-[3px] h-[13%] w-[3px] rounded-r-[2px] bg-[#1b2357]" />

      {/* Device body */}
      <div className="rounded-[2.85rem] bg-[#04081f] p-[0.55rem] shadow-[0_0_0_1px_rgb(255_255_255/0.16),inset_0_0_0_1px_rgb(255_255_255/0.07),0_48px_90px_-36px_rgb(0_0_0/0.7)]">
        {/* Screen */}
        <div className="relative flex aspect-[9/19.5] flex-col overflow-hidden rounded-[2.3rem] bg-canvas">
          {/* Status bar */}
          <div className="relative flex h-11 shrink-0 items-center justify-between px-6 pt-1 text-ink">
            <span className="h-[0.4rem] w-7 rounded-full bg-ink/70" />
            <span className="absolute top-2.5 left-1/2 h-[1.4rem] w-[5.25rem] -translate-x-1/2 rounded-full bg-[#04081f]" />
            <span className="flex items-center gap-1 [&_svg]:size-3">
              <Signal strokeWidth={2.25} />
              <Wifi strokeWidth={2.25} />
              <BatteryFull strokeWidth={2} />
            </span>
          </div>

          {/* App bar */}
          <div className="mt-3 flex items-center justify-between px-5">
            <span className="grid gap-1.5">
              <MiniLabel>Welcome back</MiniLabel>
              <span className="h-[0.6rem] w-24 rounded-full bg-ink/30" />
            </span>
            <span className="size-8 rounded-full bg-brand-tint ring-1 ring-brand/10" />
          </div>

          <ScreenLabel className="mt-6">Digital insurance card</ScreenLabel>

          {/* The card */}
          <div className="relative mx-4 mt-3 aspect-[1.586] shrink-0 overflow-hidden rounded-[1.1rem] border border-brand/10 bg-linear-140 from-white from-38% via-brand-tint via-72% to-sky-soft shadow-[0_14px_28px_-18px_rgb(16_38_148/0.55)]">
            <svg
              viewBox="0 0 240 150"
              fill="none"
              preserveAspectRatio="none"
              className="absolute inset-0 h-full w-full text-brand/20"
            >
              <path d="M -10 128 C 60 126 96 96 132 64 S 206 14 252 18" stroke="currentColor" strokeWidth="1" />
            </svg>
            <div className="relative flex h-full flex-col p-3.5">
              <div className="flex items-start justify-between">
                <Image src="/brand/al-buhaira-emblem.svg" alt="" width={125} height={125} className="size-11" />
                <span className="flex h-5 items-center rounded-full bg-brand/10 px-2">
                  <span className="h-[0.3rem] w-9 rounded-full bg-brand/40" />
                </span>
              </div>
              <div className="mt-auto grid gap-2.5">
                <span className="grid gap-1">
                  <MiniLabel>Member</MiniLabel>
                  <span className="h-[0.55rem] w-[58%] rounded-full bg-ink/30" />
                </span>
                <span className="flex items-end justify-between gap-3">
                  <span className="grid flex-1 gap-1">
                    <MiniLabel>Policy no.</MiniLabel>
                    <span className="h-[0.45rem] w-[64%] rounded-full bg-ink/15" />
                  </span>
                  <span className="grid justify-items-end gap-1">
                    <MiniLabel>Valid to</MiniLabel>
                    <span className="h-[0.45rem] w-10 rounded-full bg-ink/15" />
                  </span>
                </span>
              </div>
            </div>
          </div>

          {/* Medical network: a stylised map, no real places or providers */}
          <div className="mt-6 flex items-center justify-between pr-5">
            <ScreenLabel>Medical network</ScreenLabel>
            <span className="text-[0.625rem] leading-none font-semibold text-brand">Nearby</span>
          </div>
          <div className="relative mx-4 mt-3 h-[8.5rem] shrink-0 overflow-hidden rounded-[0.9rem] border border-line bg-[#eaf3f6]">
            <svg viewBox="0 0 260 124" fill="none" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
              <path d="M -10 96 C 30 86 50 108 92 104 S 150 84 176 98 S 236 124 270 112 L 270 140 L -10 140 Z" fillOpacity="0.55" className="fill-sky" />
              <g stroke="#ffffff" strokeLinecap="round">
                <path d="M -10 58 C 60 50 120 66 170 50 S 240 30 270 34" strokeWidth="7" />
                <path d="M 84 -10 L 102 92" strokeWidth="5" />
                <path d="M 196 -10 L 182 90" strokeWidth="5" />
                <path d="M -10 22 L 270 12" strokeWidth="3.5" />
                <path d="M 140 56 L 150 92" strokeWidth="3.5" />
              </g>
            </svg>
            <span className="absolute top-[20%] left-[20%] size-2.5 rounded-full bg-brand/70 ring-2 ring-white" />
            <span className="absolute top-[26%] left-[82%] size-2.5 rounded-full bg-brand/70 ring-2 ring-white" />
            <span className="absolute top-[60%] left-[34%] size-2.5 rounded-full bg-brand/70 ring-2 ring-white" />
            <MapPin
              strokeWidth={1.75}
              fill="currentColor"
              stroke="#ffffff"
              className="absolute top-[22%] left-[55%] size-7 -translate-x-1/2 text-brand drop-shadow-[0_4px_6px_rgb(16_38_148/0.35)]"
            />
          </div>

          {/* Claims shortcut */}
          <span className="mx-4 mt-3 flex shrink-0 items-center gap-3 rounded-[0.9rem] border border-line bg-surface px-3 py-2.5">
            <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-brand-tint text-brand">
              <ReceiptText strokeWidth={1.75} className="size-4" />
            </span>
            <span className="grid min-w-0 flex-1 gap-1.5">
              <span className="text-[0.75rem] leading-none font-semibold text-ink">Claims</span>
              <MiniLabel>Reimbursement claims</MiniLabel>
            </span>
            <ChevronRight strokeWidth={2} className="size-3.5 shrink-0 text-ink-muted" />
          </span>

          {/* Home indicator */}
          <span className="mx-auto mt-auto mb-2 h-1 w-[6.5rem] shrink-0 rounded-full bg-ink/80" />
        </div>
      </div>
    </div>
  )
}

function ScreenLabel({ children, className }: { children: string; className?: string }) {
  return (
    <span className={cn("block px-5 text-[0.8125rem] leading-none font-semibold text-ink", className)}>{children}</span>
  )
}

/** A tiny static field label, never data */
function MiniLabel({ children }: { children: string }) {
  return <span className="block text-[0.625rem] leading-none text-ink-muted">{children}</span>
}
