import { Sun, Users, type LucideIcon } from "lucide-react"

import {
  audienceDefaults,
  businessOptions,
  personalOptions,
  type Audience,
  type HeroOption,
} from "./hero-options"
import type { ImageKey } from "@/content/images"

/**
 * A moment of life seen through the arched windows: where it happens and the
 * cover that protects it ("On the road · Motor insurance").
 */
export type Moment = {
  id: string
  image: ImageKey
  label: string
  cover: string
  icon: LucideIcon
  audience: Audience
  /** The selector option this moment stands for (none for the two openers) */
  optionId?: string
}

export const OPTIONS: Record<Audience, HeroOption[]> = { personal: personalOptions, business: businessOptions }

// Where each cover lives. Business lines share their group's photograph.
const LABELS: Record<string, string> = {
  motor: "On the road",
  medical: "At the clinic",
  travel: "On your travels",
  home: "At home",
  yacht: "On the water",
  "jet-ski": "On the waves",
  "group-medical": "At work",
  "motor-fleet": "On the move",
  property: "On site",
  engineering: "On site",
  marine: "At the wharf",
  liability: "Specialist risks",
}

const fromOption = (audience: Audience, option: HeroOption): Moment => ({
  id: option.id,
  image: option.image,
  label: LABELS[option.id] ?? option.label,
  cover: option.name,
  icon: option.icon,
  audience,
  optionId: option.id,
})

/** What each tab shows before anything is chosen */
const OPENERS: Record<Audience, Moment> = {
  personal: {
    id: "everyday",
    image: audienceDefaults.personal.image,
    label: "Every day",
    cover: "Personal insurance",
    icon: Sun,
    audience: "personal",
  },
  business: {
    id: "business",
    image: audienceDefaults.business.image,
    label: "At work",
    cover: "Business insurance",
    icon: Users,
    audience: "business",
  },
}

const option = (audience: Audience, id: string) => {
  const found = OPTIONS[audience].find((o) => o.id === id)
  if (!found) throw new Error(`Unknown ${audience} option: ${id}`)
  return fromOption(audience, found)
}

/** The moment shown for a tab and its selected option (or the tab's opener) */
export function momentFor(audience: Audience, optionId: string | null): Moment {
  const found = OPTIONS[audience].find((o) => o.id === optionId)
  return found ? fromOption(audience, found) : OPENERS[audience]
}

/**
 * The auto-flip: life's moments in turn, everyday life first, then the car,
 * health, travel and home, with work, the water, building sites and the wharf
 * woven in so business is part of the story. About 45 seconds a cycle.
 */
export const SEQUENCE: Moment[] = [
  OPENERS.personal,
  option("personal", "motor"),
  option("personal", "medical"),
  option("personal", "travel"),
  option("personal", "home"),
  option("business", "group-medical"),
  option("personal", "yacht"),
  option("business", "engineering"),
  option("business", "marine"),
]

export const momentAt = (step: number) => SEQUENCE[((step % SEQUENCE.length) + SEQUENCE.length) % SEQUENCE.length]

// After a choice the small windows show the next moments from the same world.
const RINGS: Record<Audience, ImageKey[]> = {
  personal: [OPENERS.personal.image, ...personalOptions.map((o) => o.image)],
  business: [...new Set(businessOptions.map((o) => o.image))],
}

/** Photos for the three windows [main, next, after next] while auto-flipping */
export function windowsAt(step: number): ImageKey[] {
  return [momentAt(step).image, momentAt(step + 1).image, momentAt(step + 2).image]
}

/** Photos for the three windows once the visitor has chosen */
export function windowsFor(moment: Moment): ImageKey[] {
  const ring = RINGS[moment.audience]
  const at = Math.max(0, ring.indexOf(moment.image))
  return [moment.image, ring[(at + 1) % ring.length], ring[(at + 2) % ring.length]]
}
