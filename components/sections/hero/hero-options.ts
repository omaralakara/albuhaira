import {
  Building2,
  CarFront,
  HardHat,
  HeartPulse,
  House,
  Plane,
  Sailboat,
  Scale,
  Ship,
  Truck,
  Users,
  Waves,
  type LucideIcon,
} from "lucide-react"

import { businessGroups, businessLinks } from "@/content/business"
import type { ImageKey } from "@/content/images"
import { ONLINE_PORTAL, personalProducts } from "@/content/personal"

export type Audience = "personal" | "business"

export type HeroOption = {
  id: string
  label: string
  name: string
  icon: LucideIcon
  summary: string
  qualifier?: string
  learnHref: string
  quoteHref: string
  quoteLabel: string
  image: ImageKey
}

const personalIcons: Record<string, LucideIcon> = {
  motor: CarFront,
  medical: HeartPulse,
  travel: Plane,
  home: House,
  yacht: Sailboat,
  "jet-ski": Waves,
}

export const personalOptions: HeroOption[] = personalProducts.map((p) => ({
  id: p.id,
  label: p.short,
  name: p.name,
  icon: personalIcons[p.id],
  summary: p.summary,
  learnHref: p.href,
  quoteHref: p.quote.href,
  quoteLabel: p.quote.label,
  image: p.image,
}))

// Six business lines that cover the four groups; the rest live in the business section.
const businessPicks: { line: string; label: string; icon: LucideIcon }[] = [
  { line: "group-medical", label: "Group Medical", icon: Users },
  { line: "motor-fleet", label: "Motor Fleet", icon: Truck },
  { line: "property", label: "Property", icon: Building2 },
  { line: "engineering", label: "Engineering", icon: HardHat },
  { line: "marine", label: "Marine", icon: Ship },
  { line: "liability", label: "Liability", icon: Scale },
]

export const businessOptions: HeroOption[] = businessPicks.map(({ line, label, icon }) => {
  const group = businessGroups.find((g) => g.lines.some((l) => l.id === line))!
  const item = group.lines.find((l) => l.id === line)!
  return {
    id: item.id,
    label,
    name: `${item.name} insurance`,
    icon,
    summary: item.summary,
    qualifier: item.qualifier,
    learnHref: item.href,
    quoteHref: item.quoteHref,
    quoteLabel: "Request a quote",
    image: group.image,
  }
})

export const audienceDefaults: Record<
  Audience,
  { prompt: string; quoteHref: string; quoteLabel: string; exploreHref: string; image: ImageKey }
> = {
  personal: {
    prompt: "Choose what you'd like to protect to see the right next step.",
    quoteHref: ONLINE_PORTAL,
    quoteLabel: "Get a quote",
    exploreHref: "#personal",
    image: "heroEveryday",
  },
  business: {
    prompt: "Choose a type of cover and we'll take you to the right quotation request.",
    quoteHref: businessLinks.talk.href,
    quoteLabel: "Request a quote",
    exploreHref: "#business",
    image: "bizPeople",
  },
}
