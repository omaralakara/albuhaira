import { company } from "@/content/company"
import { cn } from "@/lib/utils"

/**
 * "Our values form our shield": the six values as a quiet typographic row.
 * Each value's initial is set large in brand blue above the word, so the row
 * reads S H I E L D at a glance (S H I / E L D on phones). The initials are
 * decorative (aria-hidden); screen readers hear the words.
 */
export function ValuesRow({ className }: { className?: string }) {
  return (
    <div className={className}>
      <h3 id="about-values-title" className="kicker text-ink-muted">
        Our values form our shield
      </h3>
      <ul
        role="list"
        aria-labelledby="about-values-title"
        className="mt-8 grid grid-cols-3 gap-y-8 md:grid-cols-6 md:gap-y-0 lg:mt-10"
      >
        {company.values.map(({ letter, word }, index) => (
          <li
            key={word}
            className={cn(
              "min-w-0 border-line",
              // Hairlines between letters: within each row of three on phones, between all six from md
              index % 3 !== 0 && "border-l pl-3 min-[400px]:pl-4",
              "md:border-l md:pl-4 md:first:border-l-0 md:first:pl-0 lg:pl-6 xl:pl-8"
            )}
          >
            <span aria-hidden="true" className="block font-display text-[3rem] leading-none text-brand sm:text-[3.5rem]">
              {letter}
            </span>
            <span className="mt-3 block text-[0.875rem] leading-snug font-medium text-ink sm:text-[0.9375rem]">
              {word}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
