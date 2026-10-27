import Image from "next/image"
import {
  ArrowRight,
  ArrowUpRight,
  CarFront,
  HeartPulse,
  House,
  Plane,
  Sailboat,
  Waves,
  type LucideIcon,
} from "lucide-react"

import SpotlightCard from "@/components/react-bits/spotlight-card"
import { IconBadge } from "@/components/site/icon-badge"
import { SectionHeading } from "@/components/site/section-heading"
import { SmartLink } from "@/components/site/smart-link"
import { phones } from "@/content/contacts"
import { images } from "@/content/images"
import { site } from "@/content/links"
import { morePersonalCover, personalById, personalHub, type PersonalProduct } from "@/content/personal"
import { cn } from "@/lib/utils"

const icons: Record<PersonalProduct["id"], LucideIcon> = {
  motor: CarFront,
  medical: HeartPulse,
  travel: Plane,
  home: House,
  yacht: Sailboat,
  "jet-ski": Waves,
}

const spotlight = {
  theme: "light" as const,
  spotlightColor: "var(--brand)",
  intensity: 0.55,
  borderGlow: 0.85,
  spotlightSize: 320,
  style: {
    "--spotlight-card-surface": "var(--surface)",
    "--spotlight-card-border": "var(--line)",
    "--spotlight-card-shadow": "none",
  } as React.CSSProperties,
}

/** Text links with a trailing arrow, at least 44px tall for touch */
const textLink = "text-link inline-flex min-h-11 items-center gap-1.5"
/** Small uppercase label for a group inside the section */
const kicker = "text-[0.8125rem] font-semibold tracking-[0.12em] text-ink-muted uppercase"

/** "Cover for the life you live." An asymmetric editorial grid of personal products. */
export function PersonalInsurance() {
  const { motor, medical, travel, home, yacht } = personalById
  const jetSki = personalById["jet-ski"]

  return (
    <section id="personal" aria-labelledby="personal-title" className="py-14 md:py-20 lg:py-24">
      <div className="page-container">
        <SectionHeading
          id="personal-title"
          eyebrow="Personal insurance"
          title={
            <>
              Cover for the life <em className="text-brand">you live.</em>
            </>
          }
          intro="Protection for the car you drive, your family's health, your travels and your home, with an online quote for each."
          aside={
            <SmartLink href={personalHub.href} className={cn(textLink, "-my-2.5 justify-self-start")}>
              {personalHub.label}
              <ArrowRight aria-hidden="true" className="size-4 shrink-0" />
            </SmartLink>
          }
          align="split"
          // Same column gap as the cards, so the intro starts on the Medical card's edge
          className="lg:gap-x-6"
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:mt-12 lg:grid-cols-12 lg:gap-6">
          {/* Motor: image-led, the widest card */}
          <SpotlightCard {...spotlight} className="flex flex-col rounded-3xl p-0 md:col-span-2 lg:col-span-7">
            <div className="relative aspect-[16/10] overflow-hidden sm:aspect-[2/1] lg:aspect-auto lg:min-h-[18rem] lg:flex-1">
              <Image
                src={images[motor.image].src}
                alt={images[motor.image].alt}
                fill
                sizes="(min-width: 1344px) 718px, (min-width: 1024px) calc(58.3vw - 66px), (min-width: 640px) calc(100vw - 64px), calc(100vw - 40px)"
                placeholder="blur"
                className="object-cover"
                style={{ objectPosition: images[motor.image].position }}
              />
            </div>
            <FeatureBody product={motor} icon={icons.motor} grow={false} />
          </SpotlightCard>

          {/* Medical: text-led, the photo rises into an arch (beside the text on tablets, leading the card on phones) */}
          <SpotlightCard
            {...spotlight}
            className="flex flex-col rounded-3xl p-0 md:col-span-2 md:flex-row md:items-end lg:col-span-5 lg:flex-col lg:items-stretch"
          >
            <FeatureBody product={medical} icon={icons.medical} />
            <div className="order-first md:order-none md:w-[42%] md:shrink-0 md:py-7 md:pr-7 lg:mt-auto lg:w-auto lg:px-9 lg:pt-0 lg:pb-9">
              <div
                className="arch relative aspect-[16/10] overflow-hidden bg-canvas-deep max-md:rounded-none sm:aspect-[2/1] md:aspect-[5/4]"
                style={{ "--arch-rise": "62.5%", "--arch-foot": "1.25rem" } as React.CSSProperties}
              >
                <Image
                  src={images[medical.image].src}
                  alt={images[medical.image].alt}
                  fill
                  sizes="(min-width: 1344px) 434px, (min-width: 1024px) calc(41.7vw - 126px), (min-width: 768px) calc(42vw - 55px), (min-width: 640px) calc(100vw - 64px), calc(100vw - 40px)"
                  placeholder="blur"
                  className="object-cover"
                  style={{ objectPosition: images[medical.image].position }}
                />
              </div>
            </div>
          </SpotlightCard>

          {/* Travel and Home: supporting cards, stacked beside the guidance panel on desktop */}
          <div className="grid gap-5 md:col-span-2 md:grid-cols-2 lg:col-span-8 lg:grid-cols-1 lg:gap-6">
            {[travel, home].map((product) => (
              <SupportingCard key={product.id} product={product} icon={icons[product.id]} />
            ))}
          </div>

          {/* Guidance panel */}
          <div className="flex flex-col justify-between gap-8 rounded-3xl bg-brand-tint p-7 md:col-span-2 md:flex-row md:items-start md:gap-10 lg:col-span-4 lg:flex-col lg:items-stretch lg:gap-8 lg:p-8">
            <div className="md:flex-1 lg:flex-none">
              <h3 className="font-display text-[1.625rem] leading-tight text-ink">Not sure which cover fits?</h3>
              <p className="mt-3 text-ink-soft">
                We&rsquo;re here to help you understand your risks and how insurance can protect you.
              </p>
            </div>
            <div className="md:flex-1 lg:flex-none">
              <p className={kicker}>Talk to the right team</p>
              <ul className="mt-3 divide-y divide-brand/10 border-y border-brand/10">
                {[phones.motorSales, phones.medical, phones.homeTravel].map((phone) => (
                  <li key={phone.tel}>
                    <a
                      href={phone.tel}
                      className="flex min-h-11 items-center justify-between gap-4 py-2 text-[0.9375rem] leading-snug text-ink-soft hover:text-brand"
                    >
                      <span className="min-w-0">{phone.label}</span>
                      <span className="shrink-0 font-semibold whitespace-nowrap text-ink tabular-nums">
                        {phone.display}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
              <SmartLink href={site("/enquiry")} className={cn(textLink, "mt-3")}>
                Send an enquiry
                <ArrowRight aria-hidden="true" className="size-4 shrink-0" />
              </SmartLink>
            </div>
          </div>
        </div>

        {/* A quieter row: cover on the water, and other personal cover. Three columns only from xl. */}
        <div className="mt-5 grid gap-8 rounded-3xl border border-line p-6 sm:p-8 lg:mt-6 xl:grid-cols-12 xl:gap-10">
          <div className="xl:col-span-3">
            <h3 className="font-display text-[1.625rem] leading-tight text-ink">On the water</h3>
            <p className="mt-2 text-[0.9375rem] text-ink-soft">Cover for your yacht or Jet Ski. Request a quote online.</p>
            <p className="mt-2 text-[0.8125rem] leading-relaxed text-ink-muted">
              Cover depends on the policy you choose and remains subject to its limits, exclusions and conditions.
            </p>
          </div>
          <ul className="grid gap-6 md:grid-cols-2 xl:col-span-5 xl:grid-cols-1">
            {[yacht, jetSki].map((product) => (
              <WaterItem key={product.id} product={product} icon={icons[product.id]} />
            ))}
          </ul>
          <div className="border-t border-line pt-6 xl:col-span-4 xl:border-t-0 xl:border-l xl:pt-0 xl:pl-8">
            <h3 className={kicker}>More personal cover</h3>
            <ul className="mt-2 md:grid md:grid-cols-2 md:gap-x-8 xl:grid-cols-1">
              {morePersonalCover.map((item) => (
                <li key={item.href}>
                  <SmartLink
                    href={item.href}
                    className="group flex min-h-11 items-center justify-between gap-3 py-2 text-[0.9375rem] leading-snug text-ink-soft hover:text-brand"
                  >
                    {item.label}
                    <ArrowRight
                      aria-hidden="true"
                      strokeWidth={1.75}
                      className="size-4 shrink-0 text-ink-muted transition-transform group-hover:translate-x-0.5 group-hover:text-brand"
                    />
                  </SmartLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

function ProductLinks({ product, small, className }: { product: PersonalProduct; small?: boolean; className?: string }) {
  const link = cn(textLink, small && "text-[0.9375rem]")
  return (
    <div className={cn("flex flex-wrap items-center", small ? "gap-x-5" : "gap-x-6", className)}>
      <SmartLink href={product.href} className={link}>
        Explore {product.name.toLowerCase()}
        <ArrowRight aria-hidden="true" className="size-4 shrink-0" />
      </SmartLink>
      <SmartLink href={product.quote.href} className={link}>
        {product.quote.label}
        <ArrowUpRight aria-hidden="true" className="size-4 shrink-0" />
      </SmartLink>
    </div>
  )
}

/** Motor and Medical: one plain sentence, the qualifier, and the two next steps (benefit lists live on the product pages) */
function FeatureBody({ product, icon, grow = true }: { product: PersonalProduct; icon: LucideIcon; grow?: boolean }) {
  return (
    <div className={cn("flex flex-col p-7 lg:p-9", grow && "flex-1")}>
      <div className="flex items-center gap-4">
        <IconBadge icon={icon} />
        <h3 className="font-display text-display-3 text-ink">{product.name}</h3>
      </div>
      <p className="mt-5 text-lead text-ink-soft">{product.summary}</p>
      <p className="mt-4 text-[0.8125rem] leading-relaxed text-ink-muted">{product.qualifier}</p>
      <ProductLinks product={product} className="mt-3" />
    </div>
  )
}

/** Travel and Home: image on top, or on the left beside the text from lg (narrower up to xl, so both links fit on one line) */
function SupportingCard({ product, icon }: { product: PersonalProduct; icon: LucideIcon }) {
  const image = images[product.image]
  return (
    <article className="flex flex-col overflow-hidden rounded-3xl border border-line bg-surface lg:flex-row">
      <div className="relative aspect-[3/2] overflow-hidden bg-canvas-deep sm:max-md:aspect-[2/1] lg:aspect-auto lg:w-[30%] lg:shrink-0 xl:w-2/5">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          // From lg the photo fills the card height, so a landscape photo needs more width than its slot
          sizes="(min-width: 1024px) 340px, (min-width: 768px) calc(50vw - 42px), (min-width: 640px) calc(100vw - 64px), calc(100vw - 40px)"
          placeholder="blur"
          className="object-cover"
          style={{ objectPosition: image.position }}
        />
      </div>
      <div className="flex flex-1 flex-col p-6 lg:p-7">
        <div className="flex items-center gap-3">
          <IconBadge icon={icon} size="sm" />
          <h3 className="font-display text-[1.625rem] leading-tight text-ink">{product.name}</h3>
        </div>
        <p className="mt-4 text-ink-soft">{product.summary}</p>
        <p className="mt-3 text-[0.8125rem] leading-relaxed text-ink-muted">{product.qualifier}</p>
        <ProductLinks product={product} small className="mt-auto pt-3" />
      </div>
    </article>
  )
}

/** Yacht and Jet Ski: a small arched photo, the name, one sentence and both next steps */
function WaterItem({ product, icon: Icon }: { product: PersonalProduct; icon: LucideIcon }) {
  const image = images[product.image]
  return (
    <li className="flex gap-4">
      <div
        className="arch relative h-[5.625rem] w-[4.5rem] shrink-0 overflow-hidden bg-canvas-deep sm:h-[7.5rem] sm:w-24"
        style={{ "--arch-rise": "40%", "--arch-foot": "0.75rem" } as React.CSSProperties}
      >
        <Image
          src={image.src}
          alt=""
          fill
          sizes="(min-width: 640px) 6rem, 4.5rem"
          placeholder="blur"
          className="object-cover"
          style={{ objectPosition: image.position }}
        />
      </div>
      <div className="min-w-0">
        <h4 className="flex items-center gap-2 font-semibold text-ink">
          <Icon aria-hidden="true" strokeWidth={1.75} className="size-4 shrink-0 text-brand" />
          {product.name}
        </h4>
        <p className="mt-1 text-[0.9375rem] leading-snug text-ink-soft">{product.summary}</p>
        {/* Inline-block links in a narrow column: a label that wraps keeps its arrow after the last word */}
        <div className="mt-1 flex flex-wrap gap-x-5">
          <SmartLink href={product.href} className="text-link inline-block py-2.5 text-[0.9375rem] leading-6">
            <span className="whitespace-nowrap">
              Explore
              <ArrowRight aria-hidden="true" className="ml-1.5 inline size-4 align-[-0.1875em]" />
            </span>
            <span className="sr-only"> {product.name.toLowerCase()}</span>
          </SmartLink>
          <SmartLink href={product.quote.href} className="text-link inline-block py-2.5 text-[0.9375rem] leading-6">
            <LabelWithArrow label={product.quote.label} icon={ArrowUpRight} />
          </SmartLink>
        </div>
      </div>
    </li>
  )
}

/** Keeps a trailing arrow on the same line as the label's last word */
function LabelWithArrow({ label, icon: Icon }: { label: string; icon: LucideIcon }) {
  const at = label.lastIndexOf(" ") + 1
  return (
    <>
      {label.slice(0, at)}
      <span className="whitespace-nowrap">
        {label.slice(at)}
        <Icon aria-hidden="true" className="ml-1.5 inline size-4 align-[-0.1875em]" />
      </span>
    </>
  )
}
