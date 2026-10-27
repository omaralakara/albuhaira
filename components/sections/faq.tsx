import { Mail, Phone, Plus } from "lucide-react"

import { AnchoredAccordion } from "@/components/sections/business/anchored-accordion"
import { ArrowLink } from "@/components/sections/closing/arrow-link"
import { linkifyContacts } from "@/components/sections/closing/linkify"
import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { emails, phones } from "@/content/contacts"
import { faqs } from "@/content/faq"

/**
 * Section 10 — FAQ. Split layout: heading on the left, answers on the right
 * (one open at a time), and a contact nudge under the heading on desktop.
 * Phone numbers and emails inside answers become tel:/mailto: links.
 * AnchoredAccordion keeps the tapped question in place and flags its own
 * scrolling, so the hide-on-scroll header doesn't take it for the reader's.
 */
export function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="pt-14 pb-14 md:pt-20 md:pb-12">
      {/*
        Three grid items in reading order: heading, answers, contact nudge.
        Phones read them top to bottom (the nudge follows the questions);
        from lg the nudge sits under the heading (row 2 is 1fr, so it
        absorbs the accordion's height).
      */}
      <div className="page-container grid gap-12 lg:grid-cols-12 lg:grid-rows-[auto_1fr] lg:gap-x-10 lg:gap-y-10">
        <div className="lg:col-span-4 lg:row-start-1">
          <p className="eyebrow mb-5">Helpful answers</p>
          <h2 id="faq-title" className="font-display text-display-2 font-normal text-ink">
            Questions, answered.
          </h2>
          <p className="mt-6 max-w-sm text-lead text-ink-soft">
            Choosing cover, getting a quote, making a claim and finding care, in plain words.
          </p>
        </div>

        {/* From lg the first rule lines up with the eyebrow's dash */}
        <div className="lg:col-span-8 lg:col-start-5 lg:row-span-2 lg:row-start-1 lg:mt-4.5">
          <AnchoredAccordion defaultValue={faqs[0]?.id ?? ""} className="border-t border-line">
            {faqs.map((faq, index) => (
              <AccordionItem key={faq.id} value={faq.id} data-value={faq.id} className="border-b border-line">
                <AccordionTrigger className="items-baseline gap-4 rounded-xl border-0 py-6 text-base transition-none after:hidden hover:no-underline md:gap-6 md:py-7 [&>svg[data-slot=accordion-trigger-icon]]:hidden">
                  <span
                    aria-hidden="true"
                    className="w-7 shrink-0 text-sm font-semibold tracking-wide text-ink-muted tabular-nums md:w-9"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 font-display text-[1.375rem] leading-[1.25] font-normal text-ink transition-colors group-hover/accordion-trigger:text-brand md:text-[1.625rem]">
                    {faq.question}
                  </span>
                  <span
                    aria-hidden="true"
                    className="-mt-1.5 grid size-10 shrink-0 place-items-center self-start rounded-full border border-line-strong text-ink transition-[background-color,border-color,color] duration-300 group-hover/accordion-trigger:border-brand group-aria-expanded/accordion-trigger:border-brand group-aria-expanded/accordion-trigger:bg-brand group-aria-expanded/accordion-trigger:text-white motion-reduce:transition-none md:size-11"
                  >
                    <Plus
                      strokeWidth={1.75}
                      className="size-[1.125rem] transition-transform duration-300 ease-out-quart group-aria-expanded/accordion-trigger:rotate-45 motion-reduce:transition-none"
                    />
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pt-0 pr-0 pb-8 pl-11 text-[1.0625rem] leading-[1.65] text-ink-soft md:pr-16 md:pb-9 md:pl-15 [&_a]:no-underline [&_a]:hover:text-brand-strong [&_p:not(:last-child)]:mb-4">
                  <div className="max-w-[62ch]">
                    {faq.answer.map((paragraph, i) => (
                      <p key={i}>{linkifyContacts(paragraph)}</p>
                    ))}
                  </div>
                  {faq.links && faq.links.length > 0 && (
                    <ul className="mt-4 flex flex-wrap gap-x-7">
                      {faq.links.map((link) => (
                        <li key={link.href}>
                          <ArrowLink href={link.href}>{link.label}</ArrowLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </AnchoredAccordion>
        </div>

        <div className="lg:col-span-4 lg:col-start-1 lg:row-start-2">
          <ContactNudge />
        </div>
      </div>
    </section>
  )
}

/** A quiet route to a person, for questions the list doesn't cover. */
function ContactNudge() {
  return (
    <div className="max-w-sm rounded-3xl border border-line bg-surface p-6 sm:p-7">
      <p className="font-semibold text-ink">Still have a question?</p>
      <p className="mt-1 text-[0.9375rem] text-ink-soft">Call the head office or email our team.</p>
      <ul className="mt-4 grid gap-1">
        <li>
          <a
            href={phones.headOffice.tel}
            className="group/nudge inline-flex min-h-11 items-center gap-3 font-semibold text-ink tabular-nums"
          >
            <span
              aria-hidden="true"
              className="grid size-9 shrink-0 place-items-center rounded-full bg-brand-tint text-brand transition-colors group-hover/nudge:bg-brand group-hover/nudge:text-white"
            >
              <Phone strokeWidth={1.75} className="size-4" />
            </span>
            <span className="underline decoration-ink/20 decoration-1 underline-offset-[0.3em] group-hover/nudge:decoration-brand group-hover/nudge:text-brand">
              {phones.headOffice.display}
            </span>
          </a>
        </li>
        <li>
          <a
            href={`mailto:${emails.care.address}`}
            className="group/nudge inline-flex min-h-11 items-center gap-3 font-semibold [overflow-wrap:anywhere] text-ink"
          >
            <span
              aria-hidden="true"
              className="grid size-9 shrink-0 place-items-center rounded-full bg-brand-tint text-brand transition-colors group-hover/nudge:bg-brand group-hover/nudge:text-white"
            >
              <Mail strokeWidth={1.75} className="size-4" />
            </span>
            <span className="underline decoration-ink/20 decoration-1 underline-offset-[0.3em] group-hover/nudge:decoration-brand group-hover/nudge:text-brand">
              {emails.care.address}
            </span>
          </a>
        </li>
      </ul>
      <ArrowLink href="#contact" className="mt-3">
        All contact details
      </ArrowLink>
    </div>
  )
}
