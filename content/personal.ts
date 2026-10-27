import { phones, type Phone } from "./contacts"
import { site } from "./links"

/**
 * Personal insurance (verified 2026-10-26). Every product has a live online
 * quote journey on online.albuhaira.com. Benefits keep the site's hedging
 * ("may include", "where included", "depending on the selected policy").
 */
export const ONLINE_PORTAL = "https://online.albuhaira.com/"

export type PersonalProduct = {
  id: "motor" | "medical" | "travel" | "home" | "yacht" | "jet-ski"
  name: string
  short: string
  /** One plain-English sentence */
  summary: string
  /** Key covers, each already carrying its qualification (for product pages; the homepage shows the summary only) */
  highlights: string[]
  /** General qualification, shown with the summary */
  qualifier: string
  href: string
  quote: { href: string; label: string }
  phone?: Phone
  image: "heroMotor" | "heroMedical" | "heroTravel" | "heroHome" | "cardYacht" | "cardJetski"
}

export const personalProducts: PersonalProduct[] = [
  {
    id: "motor",
    name: "Motor insurance",
    short: "Motor",
    summary: "Comprehensive or third-party cover for your car on UAE roads.",
    highlights: [
      "Comprehensive cover may include eligible damage to your own car, theft and fire, alongside third-party liability",
      "Roadside assistance and personal accident benefit for eligible private vehicles, depending on the policy you choose",
      "Agency repair may be available for eligible vehicles under selected policies",
    ],
    qualifier: "Benefits remain subject to the selected policy, eligibility, limits, exclusions and policy conditions.",
    href: site("/motor-insurance"),
    quote: { href: "https://online.albuhaira.com/car-insurance/quote-car-insurance", label: "Get a motor quote" },
    phone: phones.motorSales,
    image: "heroMotor",
  },
  {
    id: "medical",
    name: "Medical insurance",
    short: "Medical",
    summary: "Health cover for you and your family, with access to the provider network assigned to your plan.",
    highlights: [
      "Inpatient and outpatient treatment, consultations, tests and medicines, depending on your plan",
      "Maternity where included, with optional dental and optical cover",
      "Optional worldwide cover on selected plans",
    ],
    qualifier: "Available options vary depending on the selected plan and network.",
    href: site("/medical-insurance"),
    quote: { href: "https://online.albuhaira.com/medical-insurance/quote-medical-insurance", label: "Get a medical quote" },
    phone: phones.medical,
    image: "heroMedical",
  },
  {
    id: "travel",
    name: "Travel insurance",
    short: "Travel",
    summary: "Cover for eligible medical emergencies, baggage and other travel risks when you travel from the UAE.",
    highlights: [
      "Emergency medical expenses, and evacuation where covered",
      "Trip cancellation, lost or delayed baggage and travel delays",
      "Worldwide and Schengen cover options",
    ],
    qualifier: "Subject to the selected plan, destination and policy conditions.",
    href: site("/travel-insurance"),
    quote: { href: "https://online.albuhaira.com/travel-insurance/quote-travel-insurance", label: "Get a travel quote" },
    phone: phones.homeTravel,
    image: "heroTravel",
  },
  {
    id: "home",
    name: "Home insurance",
    short: "Home",
    summary: "Protection for your villa or apartment, your contents and personal belongings, whether you own or rent.",
    highlights: [
      "Building and contents cover for homeowners, landlords and tenants",
      "Personal belongings and liability cover",
      "Alternative accommodation where covered",
    ],
    qualifier: "Cover applies to eligible risks under the policy you choose.",
    href: site("/home-insurance"),
    quote: { href: "https://online.albuhaira.com/home-insurance/quote-home-insurance", label: "Get a home quote" },
    phone: phones.homeTravel,
    image: "heroHome",
  },
  {
    id: "yacht",
    name: "Yacht insurance",
    short: "Yacht",
    summary: "Cover for your yacht's hull, machinery, equipment and third-party liability, depending on your policy.",
    highlights: ["Emergency towing and assistance, and wreck removal", "Personal effects where covered"],
    qualifier: "Sailing beyond your stated cruising area may need additional approval.",
    href: site("/yacht-insurance"),
    quote: { href: "https://online.albuhaira.com/yacht-insurance/quote-yacht-insurance", label: "Request a yacht quote" },
    image: "cardYacht",
  },
  {
    id: "jet-ski",
    name: "Jet Ski insurance",
    short: "Jet Ski",
    summary: "Personal watercraft cover for eligible physical damage and third-party liability.",
    highlights: [
      "Comprehensive or liability-only cover, depending on your Jet Ski",
      "Theft and fire where covered, and personal accident where included",
    ],
    qualifier: "Recreational, open-water, towing or competitive use may have different requirements.",
    href: site("/jet-ski-insurance"),
    quote: { href: "https://online.albuhaira.com/jet-ski-insurance/quote-jet-ski-insurance", label: "Request a Jet Ski quote" },
    image: "cardJetski",
  },
]

export const personalById = Object.fromEntries(personalProducts.map((p) => [p.id, p])) as Record<
  PersonalProduct["id"],
  PersonalProduct
>

/** Other personal cover, for menus and the footer */
export const morePersonalCover = [
  { label: "Motorcycle insurance", href: site("/motorcycle-insurance") },
  { label: "Personal accident insurance", href: site("/personal-accident-insurance") },
  { label: "Domestic helper medical insurance", href: site("/domestic-helper-medical-insurance") },
  { label: "Essential Benefits Plan (Dubai)", href: site("/essential-benefits-plans-ebp-medical-insurance") },
]

export const personalHub = { label: "All personal insurance", href: site("/personal-insurance") }
