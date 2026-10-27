"use client"

import { LazyMotion, MotionConfig } from "motion/react"

const loadFeatures = () => import("@/lib/motion-features").then((mod) => mod.default)

/**
 * One animation library for the whole site: Motion, with the small
 * `domAnimation` feature set (animate, exit, in-view, hover/tap/focus)
 * lazy-loaded after hydration. `strict` keeps components on the lightweight
 * `m` from "motion/react-m". `reducedMotion="user"` honours the visitor's OS
 * setting: transforms are dropped and only gentle opacity changes remain.
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={loadFeatures} strict>
      <MotionConfig reducedMotion="user" transition={{ duration: 0.45, ease: [0.25, 1, 0.5, 1] }}>
        {children}
      </MotionConfig>
    </LazyMotion>
  )
}
