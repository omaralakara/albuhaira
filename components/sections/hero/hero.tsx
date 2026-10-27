import SplitText from "@/components/react-bits/split-text"

import { ArchesExperience } from "./arches-experience"

/**
 * Hero, "Arched windows":"Life moves. Stay protected." beside an
 * arcade of three arched windows (after the arched windows of the building in
 * the Al Buhaira emblem) through which life's moments flip on their own.
 * On desktop the whole hero fits one screen below the header: type, spacing
 * and the arcade scale with the viewport height (svh). The headline is
 * server-rendered and rises once with the SplitText port.
 *
 * --arches-chrome is everything above the hero: --chrome-height (with the
 * same values as fallbacks, so the sizing holds even if the token is missing)
 * plus the 1px bottom border of the main bar and of the utility bar.
 */
export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative flex items-center overflow-x-clip py-6 [--arches-chrome:calc(var(--chrome-height,4.25rem)+1px)] sm:py-8 lg:min-h-[calc(100svh-var(--arches-chrome))] lg:py-[clamp(0.75rem,2.4svh,2.5rem)] xl:[--arches-chrome:calc(var(--chrome-height,7rem)+2px)] max-sm:[@media(max-height:700px)]:pt-4"
    >
      <ArchesExperience
        heading={
          <>
            <p className="eyebrow [@media(max-height:700px)]:hidden">
              <span>
                <span className="hidden sm:inline">Al Buhaira National Insurance · </span>Since 1978
              </span>
            </p>
            <h1
              id="hero-title"
              className="mt-4 font-display text-[clamp(2.75rem,min(7vw,9.2svh),6.5rem)] leading-[0.96] font-normal tracking-[-0.025em] text-ink lg:mt-[clamp(0.75rem,2svh,1.5rem)]"
            >
              <SplitText tag="span" text="Life moves." className="block" delay={55} />{" "}
              <SplitText
                tag="span"
                text="Stay protected."
                className="block italic text-brand"
                delay={55}
                startIndex={2}
              />
            </h1>
          </>
        }
        lead={
          <p className="text-[1.0625rem] leading-relaxed text-ink-soft sm:text-lead lg:max-w-[34rem] lg:text-[clamp(1rem,2.5svh,1.25rem)]">
            Explore insurance for your everyday life, your family, and your business.
          </p>
        }
      />
    </section>
  )
}
