import { credentials } from "@/content/company"
import { cn } from "@/lib/utils"

/** The dated awards, grouped by year, oldest first: one stop per year. */
const stops = [...new Set(credentials.map((credential) => credential.year))]
  .sort()
  .map((year) => ({ year, awards: credentials.filter((credential) => credential.year === year) }))

/**
 * "Recognition": a restrained vertical timeline of the dated awards, each
 * with its awarding body. The founding year is left to the statement above.
 * When the column is wide enough the year sits beside its awards. Static on
 * purpose.
 */
export function MilestoneTimeline({ className }: { className?: string }) {
  return (
    <div className={cn("@container", className)}>
      <h3 id="about-recognition-title" className="kicker text-ink-muted">
        Recognition
      </h3>

      <ol role="list" aria-labelledby="about-recognition-title" className="mt-8">
        {stops.map((stop, index) => {
          const last = index === stops.length - 1
          return (
            <li
              key={stop.year}
              className={cn("relative grid pl-9 @md:grid-cols-[7.5rem_1fr] @md:items-baseline", !last && "pb-10")}
            >
              {/* The rule between stops */}
              {!last && <span aria-hidden="true" className="absolute top-4 bottom-0 left-[5px] w-px bg-brand/25" />}
              <span
                aria-hidden="true"
                className="absolute top-[0.45rem] left-0 size-[11px] rounded-full border-2 border-brand bg-canvas"
              />
              <p className="font-display text-[2.5rem] leading-none text-brand lining-nums tabular-nums md:text-[2.75rem]">
                {stop.year}
              </p>
              <ul role="list" className="mt-4 grid gap-4 @md:mt-0">
                {stop.awards.map((award) => (
                  <li key={award.title} className="max-w-[24rem]">
                    <p className="leading-snug font-semibold text-ink">{award.title}</p>
                    <p className="mt-1 text-[0.9375rem] leading-relaxed text-ink-muted">{award.body}</p>
                  </li>
                ))}
              </ul>
            </li>
          )
        })}
      </ol>
    </div>
  )
}
