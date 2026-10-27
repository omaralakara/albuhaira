import Image from "next/image"
import { ArrowUpRight, Fingerprint, IdCard, Laptop, MapPinned, ReceiptText, type LucideIcon } from "lucide-react"

import AnimatedContent from "@/components/react-bits/animated-content"
import { IconBadge } from "@/components/site/icon-badge"
import { SectionHeading } from "@/components/site/section-heading"
import { SmartLink } from "@/components/site/smart-link"
import { app, onlinePortal } from "@/content/digital"

import { PartnerPortals } from "./digital/partner-portals"
import { PhoneMockup } from "./digital/phone-mockup"

const capabilityIcons: Record<(typeof app.capabilities)[number]["id"], LucideIcon> = {
  card: IdCard,
  network: MapPinned,
  claims: ReceiptText,
  uaepass: Fingerprint,
}

const stores = [
  { ...app.stores.apple, badge: "/brand/app-store-badge.svg" },
  { ...app.stores.google, badge: "/brand/google-play-badge.svg" },
]

/**
 * Section 9, Digital services: "Everyday access, made easier."
 * The page's one dark band. Customers first (the ABNIC Health Vault app and
 * buying online), then a clearly separated area for partners. The phone is
 * an illustration: it enters once and then stays still.
 */
export function DigitalServices() {
  return (
    <section
      id="digital-services"
      aria-labelledby="digital-services-title"
      className="relative isolate overflow-hidden bg-brand-deep py-14 text-white md:py-20 lg:py-24"
    >
      {/* Quiet depth: a soft sky glow behind the phone (decorative) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-radial-[52rem_36rem_at_78%_34%] from-sky/9 to-transparent to-70%"
      />

      <div className="page-container">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-12 lg:items-center lg:gap-x-12 xl:gap-x-16">
          <div className="lg:col-span-6 xl:col-span-7">
            <SectionHeading
              id="digital-services-title"
              eyebrow="Digital services"
              tone="dark"
              title={
                <>
                  Everyday access, <em className="italic text-sky">made easier.</em>
                </>
              }
            />

            <div className="mt-10 md:mt-12">
              <h3 className="font-display text-display-3 font-normal text-white">{app.name}</h3>
              <p className="mt-2 max-w-[34rem] text-lead text-white/80">{app.intro}</p>
            </div>

            <ul role="list" className="mt-9 grid gap-x-10 gap-y-7 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {app.capabilities.map((capability) => (
                <li key={capability.id} className="flex gap-4">
                  <IconBadge icon={capabilityIcons[capability.id]} tone="inverse" />
                  <div className="min-w-0 pt-0.5">
                    <h4 className="leading-snug font-semibold text-balance text-white">{capability.title}</h4>
                    <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-white/75">{capability.body}</p>
                  </div>
                </li>
              ))}
            </ul>
            {/* Who can use which features, and the reimbursement caveat: kept beside the list */}
            <p className="mt-8 max-w-[34rem] text-sm leading-relaxed text-white/75">{app.availability}</p>

            {/* Official badges: 40px tall on phones so both fit on one line (the link keeps a 44px target) */}
            <ul role="list" aria-label={`Get the ${app.name} app`} className="mt-10 flex flex-wrap gap-x-2 gap-y-1 min-[400px]:gap-x-3 sm:gap-3">
              {stores.map((store) => (
                <li key={store.href}>
                  <SmartLink
                    href={store.href}
                    className="block rounded-[0.6rem] py-0.5 transition-opacity hover:opacity-85 focus-visible:outline-sky sm:py-0"
                  >
                    <Image src={store.badge} alt={store.label} width={156} height={40} className="h-10 w-auto sm:h-12" />
                  </SmartLink>
                </li>
              ))}
            </ul>

            <div className="mt-10 max-w-[34rem] border-t border-white/15 pt-6">
              <SmartLink
                href={onlinePortal.href}
                className="group flex items-start gap-4 rounded-2xl focus-visible:outline-sky"
              >
                <IconBadge icon={Laptop} tone="inverse" />
                <span className="min-w-0 pt-0.5">
                  <span className="flex items-center gap-1.5 leading-snug font-semibold text-white underline decoration-white/35 underline-offset-[0.3em] transition-colors group-hover:decoration-sky">
                    {onlinePortal.label}
                    <ArrowUpRight aria-hidden="true" strokeWidth={2} className="size-4 shrink-0 text-sky" />
                  </span>
                  <span className="mt-1.5 block text-[0.9375rem] leading-relaxed text-white/75">
                    {onlinePortal.description}
                  </span>
                </span>
              </SmartLink>
            </div>
          </div>

          <figure className="flex flex-col items-center lg:col-span-6 xl:col-span-5">
            {/* Stage: the arch motif as a quiet window behind the phone. A full top radius
                always resolves to a true semicircle, whatever the stage's size. On phones the
                stage shows only the top of the screen and fades out, so the illustration
                stays short after the text. */}
            <div className="relative px-5 pt-12 max-sm:max-h-[24rem] max-sm:overflow-hidden max-sm:[mask-image:linear-gradient(to_bottom,#000_72%,transparent)] min-[384px]:px-8 sm:px-14">
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 bottom-[8%] rounded-t-full border border-white/12 bg-linear-to-b from-sky/11 to-sky/2 to-75% [mask-image:linear-gradient(to_bottom,#000_55%,transparent_96%)]"
              />
              <AnimatedContent
                distance={60}
                duration={0.9}
                role="img"
                aria-label={`Illustration of the ${app.name} app showing a digital medical insurance card`}
                className="relative"
              >
                <PhoneMockup />
              </AnimatedContent>
            </div>
            <figcaption className="mt-6 text-center text-sm text-white/70">Illustrative screen</figcaption>
          </figure>
        </div>

        <PartnerPortals className="mt-14 border-t border-white/15 pt-10 md:mt-16 md:pt-12" />
      </div>
    </section>
  )
}
