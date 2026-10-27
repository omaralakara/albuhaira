import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

/**
 * Tiny, simplified brand glyphs for the social links (Lucide v1 ships no
 * brand icons). Decorative: the link text names the network.
 */
const glyphs: Record<string, ReactNode> = {
  facebook: (
    <path d="M12 2a10 10 0 0 0-1.56 19.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 12 2Z" />
  ),
  instagram: (
    <>
      <rect x="3.25" y="3.25" width="17.5" height="17.5" rx="5" fill="none" stroke="currentColor" strokeWidth="1.75" />
      <circle cx="12" cy="12" r="4.1" fill="none" stroke="currentColor" strokeWidth="1.75" />
      <circle cx="17.3" cy="6.7" r="1.15" />
    </>
  ),
  linkedin: (
    <path
      fillRule="evenodd"
      d="M4.5 2h15A2.5 2.5 0 0 1 22 4.5v15a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 19.5v-15A2.5 2.5 0 0 1 4.5 2Zm1.6 7.6v8.6h2.7V9.6H6.1Zm1.35-4.3a1.57 1.57 0 1 0 0 3.14 1.57 1.57 0 0 0 0-3.14Zm3.45 4.3v8.6h2.7v-4.3c0-1.13.22-2.23 1.62-2.23 1.38 0 1.4 1.29 1.4 2.3v4.23h2.7v-4.74c0-2.33-.5-4.12-3.23-4.12-1.31 0-2.19.72-2.55 1.4h-.04V9.6H10.9Z"
    />
  ),
  x: (
    <path d="M17.75 3h3.07l-6.7 7.66L22 21h-6.17l-4.83-6.32L5.47 21H2.4l7.17-8.2L2 3h6.33l4.37 5.77L17.75 3Zm-1.08 16.18h1.7L7.4 4.73H5.58l11.09 14.45Z" />
  ),
}

function keyFor(label: string) {
  const name = label.toLowerCase()
  if (name.startsWith("x")) return "x"
  return name.replace(/[^a-z]/g, "")
}

export function SocialGlyph({ label, className }: { label: string; className?: string }) {
  const glyph = glyphs[keyFor(label)]
  if (!glyph) return null

  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={cn("size-[1.125rem] shrink-0", className)}
    >
      {glyph}
    </svg>
  )
}
