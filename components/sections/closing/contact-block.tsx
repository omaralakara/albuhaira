import type { CSSProperties } from "react"
import { Mail, Phone, Printer } from "lucide-react"

import { ArrowLink } from "@/components/sections/closing/arrow-link"
import { allHelplines, emails, headOffice, officeHours, phones, type Phone as PhoneLine } from "@/content/contacts"
import { site } from "@/content/links"
import { networkLinks } from "@/content/medical-network"
import { cn } from "@/lib/utils"

const kicker = "kicker text-ink-muted"

/** Lines shown as a second number on another line's row */
const sharedRows = new Map<string, PhoneLine>([[phones.motorSales.tel, phones.motorMobile]])

/**
 * The #contact target: head office, every published helpline and head office
 * hours. Contact information never moves, so nothing here animates.
 * The head office number is shown with the address (with its purpose), and
 * the motor mobile number, which has no purpose of its own on the site, shares
 * the Motor insurance row, so the directory falls into two even columns.
 */
export function ContactBlock() {
  const helplines = allHelplines.filter(
    (line) => line.tel !== phones.headOffice.tel && line.tel !== phones.motorMobile.tel
  )
  const rows = Math.ceil(helplines.length / 2)

  return (
    // A lighter top padding: this continues the closing invitation above
    <section id="contact" aria-labelledby="contact-title" className="pt-10 pb-14 md:pt-12 md:pb-20">
      <div className="page-container">
        <div className="mb-10 grid gap-5 md:mb-12 lg:grid-cols-12 lg:items-end lg:gap-10">
          <div className="lg:col-span-7">
            <p className="eyebrow mb-5">Contact us</p>
            <h2 id="contact-title" className="font-display text-display-2 font-normal text-ink">
              We&rsquo;re here to help.
            </h2>
          </div>
          <p className="max-w-md text-lead text-ink-soft lg:col-span-5 lg:justify-self-end">
            Call the line for your policy, or reach our head office in Sharjah.
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl border border-line bg-surface">
          <div className="grid xl:grid-cols-12">
            {/* Head office */}
            <div className="border-b border-line p-6 sm:p-10 xl:col-span-4 xl:border-r xl:border-b-0 xl:p-12">
              <h3 className={kicker}>{headOffice.name}</h3>
              <div className="mt-4 grid gap-7 md:grid-cols-2 md:gap-10 xl:grid-cols-1 xl:gap-7">
                <address className="text-[1.0625rem] leading-relaxed text-ink not-italic">
                  {headOffice.lines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                  <span className="block text-ink-muted">{headOffice.poBox}</span>
                </address>

                <ul className="grid content-start gap-3">
                  <li className="flex items-start gap-3.5">
                    <Well icon={Phone} />
                    <div className="min-w-0">
                      <a
                        href={phones.headOffice.tel}
                        className="inline-flex min-h-11 items-center text-[1.0625rem] font-semibold text-ink tabular-nums underline decoration-ink/20 decoration-1 underline-offset-[0.3em] transition-colors hover:text-brand hover:decoration-brand"
                      >
                        {phones.headOffice.display}
                      </a>
                      <p className="-mt-1.5 text-sm text-ink-muted">{phones.headOffice.purpose}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3.5">
                    <Well icon={Mail} />
                    <div className="min-w-0">
                      <a
                        href={`mailto:${emails.care.address}`}
                        className="inline-flex min-h-11 items-center text-[1.0625rem] font-semibold [overflow-wrap:anywhere] text-ink underline decoration-ink/20 decoration-1 underline-offset-[0.3em] transition-colors hover:text-brand hover:decoration-brand"
                      >
                        {emails.care.address}
                      </a>
                      <p className="-mt-1.5 text-sm text-ink-muted">{emails.care.label}</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-3.5">
                    <Well icon={Printer} />
                    <p className="text-[1.0625rem] text-ink-soft tabular-nums">
                      <span className="text-ink-muted">Fax</span> {headOffice.fax}
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            {/* Helplines: one column until the rows have room for two */}
            <div className="min-w-0 p-6 sm:p-10 xl:col-span-8 xl:p-12">
              <h3 className={kicker}>Helplines</h3>
              <ul
                className="mt-3 grid lg:grid-flow-col lg:grid-cols-2 lg:grid-rows-[repeat(var(--rows),auto)] lg:gap-x-10"
                style={{ "--rows": rows } as CSSProperties}
              >
                {helplines.map((line, index) => (
                  <HelplineRow
                    key={line.tel}
                    line={line}
                    shared={sharedRows.get(line.tel)}
                    className={cn(index === 0 && "border-t", index === rows && "lg:border-t")}
                  />
                ))}
              </ul>
            </div>
          </div>

          {/* Head office hours and further help */}
          <div className="grid gap-6 border-t border-line bg-canvas/70 p-6 sm:p-10 xl:grid-cols-12 xl:gap-10 xl:px-12 xl:py-10">
            <div className="xl:col-span-9">
              <h3 className={kicker}>Head office hours</h3>
              <dl className="mt-4 grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
                {officeHours.map((row) => (
                  <div key={row.days} className="border-l-2 border-brand/15 pl-4">
                    <dt className="text-sm text-ink-muted">{row.days}</dt>
                    <dd className="mt-1 font-semibold text-ink">{row.hours}</dd>
                    {"note" in row && <dd className="mt-0.5 text-sm text-ink-muted">{row.note}</dd>}
                  </div>
                ))}
              </dl>
            </div>
            <ul className="flex flex-wrap gap-x-8 xl:col-span-3 xl:flex-col xl:items-end xl:pt-6">
              <li>
                <ArrowLink href={site("/branches")}>Branches</ArrowLink>
              </li>
              <li>
                <ArrowLink href={networkLinks.medicalTeam.href}>{networkLinks.medicalTeam.label}</ArrowLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

const number =
  "shrink-0 text-[1.0625rem] font-semibold text-brand tabular-nums underline decoration-brand/0 decoration-1 underline-offset-[0.3em] transition-colors group-hover/line:decoration-brand sm:whitespace-nowrap"

function HelplineRow({ line, shared, className }: { line: PhoneLine; shared?: PhoneLine; className?: string }) {
  const roadside = line.tel === phones.roadside.tel

  return (
    <li className={cn("min-w-0 border-b border-line", className)}>
      <a href={line.tel} className="group/line flex min-h-[4.5rem] items-center justify-between gap-4 py-3.5">
        <span className="min-w-0">
          <span className="flex items-center gap-2 font-semibold text-ink">
            {roadside && (
              <span aria-hidden="true" className="size-2.5 shrink-0 rounded-full bg-gold ring-[3px] ring-gold-soft" />
            )}
            {line.label}
          </span>
          <span className="mt-0.5 block text-sm leading-snug text-ink-muted">{line.purpose}</span>
          {line.qualifier && (
            <span className="mt-1 block text-[0.8125rem] leading-snug text-gold-ink">{line.qualifier}</span>
          )}
        </span>
        <span className={number}>{line.display}</span>
      </a>
      {/* A second number for the same line, as its own 44px link */}
      {shared && (
        <a href={shared.tel} className="group/line -mt-2 mb-1.5 flex min-h-11 items-center justify-between gap-4">
          <span className="text-sm text-ink-muted">
            <span className="sr-only">{line.label}, </span>Mobile line
          </span>
          <span className={number}>{shared.display}</span>
        </a>
      )}
    </li>
  )
}

function Well({ icon: Icon }: { icon: typeof Phone }) {
  return (
    <span
      aria-hidden="true"
      className="mt-0.5 grid size-11 shrink-0 place-items-center rounded-full bg-brand-tint text-brand"
    >
      <Icon strokeWidth={1.75} className="size-[1.125rem]" />
    </span>
  )
}
