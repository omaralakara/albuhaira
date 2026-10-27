import type { LucideIcon } from "lucide-react"
import { Car, CarFront, FileText, HeartPulse, House, Plane, Receipt, Sailboat, Stethoscope, Waves } from "lucide-react"

import { site } from "@/content/links"
import { personalProducts, type PersonalProduct } from "@/content/personal"

// Re-exported for the server-rendered menus; client components import nav-marks directly
export { ExternalMark, groupLabelClass, groupNumber } from "./nav-marks"

const productIcons: Record<PersonalProduct["id"], LucideIcon> = {
  motor: Car,
  medical: HeartPulse,
  travel: Plane,
  home: House,
  yacht: Sailboat,
  "jet-ski": Waves,
}

/** Visual markers for the menu links that benefit from one, keyed by destination. */
const linkIcons = new Map<string, LucideIcon>([
  ...personalProducts.map((p): [string, LucideIcon] => [p.href, productIcons[p.id]]),
  [site("/motor-claims"), CarFront],
  [site("/medical-reimbursement-form"), Receipt],
  [site("/non-motor-claim"), FileText],
  ["#medical-network", Stethoscope],
])

export function iconFor(href: string) {
  return linkIcons.get(href)
}
