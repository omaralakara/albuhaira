import { Info } from "lucide-react"

import type { ClaimRoute } from "@/content/claims"
import { cn } from "@/lib/utils"

/**
 * What to prepare for a claim route: a short list under the hedged label
 * "Documents may include", the site's own qualifier underneath, then the
 * route's note (e.g. reimbursement is not guaranteed), so nothing reads as a
 * guarantee or a complete checklist.
 */
export function PrepareBox({
  prepare,
  note,
  className,
}: {
  prepare: ClaimRoute["prepare"]
  note?: string
  className?: string
}) {
  return (
    <div className={cn("rounded-2xl bg-sky-soft p-5", className)}>
      <h4 className="text-[0.8125rem] font-semibold tracking-[0.12em] text-ink-muted uppercase">Documents may include</h4>
      <ul role="list" className="mt-3 grid gap-1.5 text-[0.9375rem] leading-snug text-ink">
        {prepare.items.map((item) => (
          <li key={item} className="flex gap-2.5">
            <span aria-hidden="true" className="mt-[0.5em] size-1.5 shrink-0 rounded-full bg-brand/50" />
            {item}
          </li>
        ))}
      </ul>
      {prepare.footnote && <p className="mt-3 text-sm leading-relaxed text-ink-muted">{prepare.footnote}</p>}
      {note && (
        <p className="mt-4 flex gap-2.5 border-t border-brand/10 pt-4 text-sm leading-relaxed text-ink-soft">
          <Info aria-hidden="true" strokeWidth={1.75} className="mt-0.5 size-4 shrink-0 text-brand" />
          <span>{note}</span>
        </p>
      )}
    </div>
  )
}
