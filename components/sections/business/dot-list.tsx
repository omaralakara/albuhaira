import { Fragment } from "react"

/**
 * Short lists shown with quiet middle dots ("Property · Engineering") that
 * screen readers hear as a comma-separated list instead of "dot". Items never
 * break internally, so lines only wrap between them.
 */
export function DotList({ items, className }: { items: readonly string[]; className?: string }) {
  return (
    <span className={className}>
      {items.map((item, index) => (
        <Fragment key={item}>
          {index > 0 && (
            <>
              <span className="sr-only">,</span>{" "}
              <span aria-hidden="true" className="mx-[0.12em] opacity-60">
                ·
              </span>{" "}
            </>
          )}
          <span className="whitespace-nowrap">{item}</span>
        </Fragment>
      ))}
    </span>
  )
}

/** Splits a content kicker such as "Group Medical · Group Life" into its items. */
export const kickerItems = (kicker: string) => kicker.split("·").map((item) => item.trim())
