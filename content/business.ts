import { phones } from "./contacts"
import { site } from "./links"

/**
 * Business insurance, regrouped for the homepage (verified 2026-10-26).
 * Summaries are plain-English paraphrases of each line's page; qualifications
 * are the site's own wording. Quote links open each line's existing
 * quotation-request form (a short lead form, not an instant price).
 */
export type BusinessLine = {
  id: string
  name: string
  summary: string
  /** One-line description for the header menus (55 characters or fewer, never truncated) */
  short: string
  qualifier?: string
  href: string
  quoteHref: string
  includes?: string[]
}

export type BusinessGroup = {
  id: "people" | "property" | "transport" | "specialist"
  name: string
  kicker: string
  explanation: string
  lines: BusinessLine[]
  image: "bizPeople" | "bizProperty" | "bizTransport" | "bizSpecialist"
}

export const businessGroups: BusinessGroup[] = [
  {
    id: "people",
    name: "People",
    kicker: "Group Medical · Group Life · Credit Life",
    explanation:
      "Cover for the people connected to your business: group medical and group life plans for your employees, and credit life for lenders and their borrowers.",
    image: "bizPeople",
    lines: [
      {
        id: "group-medical",
        name: "Group Medical",
        short: "Medical plans for employees and eligible dependants",
        summary: "Medical cover for your employees and their eligible dependants, with plans structured around your company's needs.",
        qualifier: "Subject to the selected plan and policy terms.",
        href: site("/group-medical-insurance"),
        quoteHref: site("/group-medical-insurance-quotation"),
      },
      {
        id: "group-life",
        name: "Group Life",
        short: "Life cover for employees, for groups of 10 or more",
        summary: "Life cover for your employees under one group policy, with optional disability and illness benefits.",
        qualifier: "All employees must be covered, with a minimum of 10. Age limits apply.",
        href: site("/group-life-insurance"),
        quoteHref: site("/group-life-insurance-quotation"),
      },
      {
        id: "credit-life",
        name: "Credit Life",
        short: "For lenders: cover on borrowers' outstanding loans",
        summary:
          "Pays the lender the outstanding principal if an eligible borrower dies or, where included, becomes disabled. For personal loans, credit cards and home finance.",
        qualifier: "Borrowers should be UAE residents. Policy terms and conditions apply.",
        href: site("/credit-life-insurance"),
        quoteHref: site("/credit-insurance-quotation"),
      },
    ],
  },
  {
    id: "property",
    name: "Property & Projects",
    kicker: "Property · Engineering",
    explanation:
      "Protection for the places you work and the projects you build: buildings, contents, stock and machinery, plus construction and installation works.",
    image: "bizProperty",
    lines: [
      {
        id: "property",
        name: "Property",
        short: "Buildings, contents and stock against insured events",
        summary:
          "Cover for eligible accidental loss or damage to buildings, contents, machinery and stock, from fire and flood to burglary. Business interruption cover is available as a separate policy.",
        qualifier: "\"All risk\" does not mean every incident is insured. The sum insured must reflect the reinstatement or replacement value.",
        href: site("/property-insurance"),
        quoteHref: site("/property-insurance-quotation"),
        includes: ["Property All Risk", "Business Interruption"],
      },
      {
        id: "engineering",
        name: "Engineering",
        short: "Construction, installation, plant and machinery",
        summary:
          "Cover for construction and erection projects against sudden and unforeseen physical loss or damage, with separate policies for contractors' plant, machinery and electronic equipment.",
        qualifier: "Covers loss or damage not specifically excluded under the policy.",
        href: site("/engineering-insurance"),
        quoteHref: site("/engineering-insurance-quotation"),
        includes: [
          "Contractors' All Risks",
          "Erection All Risks",
          "Machinery Breakdown",
          "Electronic Equipment",
          "Contractors' Plant & Machinery",
          "Machinery Loss of Profits",
        ],
      },
    ],
  },
  {
    id: "transport",
    name: "Transport",
    kicker: "Motor Fleet · Marine · Aviation",
    explanation:
      "Cover that keeps goods and people on the move: company vehicles, cargo in transit, vessels and marine operations, and aircraft.",
    image: "bizTransport",
    lines: [
      {
        id: "motor-fleet",
        name: "Motor Fleet",
        short: "One policy for your business's eligible vehicles",
        summary: "One policy for your eligible company cars, vans and trucks, with third-party or comprehensive fleet cover.",
        qualifier: "Subject to underwriting approval and policy terms.",
        href: site("/motor-fleet-insurance"),
        quoteHref: site("/motor-fleet-insurance-quotation"),
      },
      {
        id: "marine",
        name: "Marine",
        short: "Cover for cargo, vessels and marine businesses",
        summary:
          "Cover for cargo by sea, air, road or rail, and for vessels and marine businesses such as freight forwarders, marina operators and ship repairers.",
        qualifier: "Subject to underwriting requirements and policy terms.",
        href: site("/marine-insurance"),
        quoteHref: site("/marine-insurance-quotation"),
      },
      {
        id: "aviation",
        name: "Aviation",
        short: "Hull and liability cover for aircraft operators",
        summary:
          "Hull and liability cover for airlines and businesses with special-purpose aircraft fleets, including passenger and third-party liability.",
        qualifier: "Subject to underwriting and policy terms.",
        href: site("/aviation-insurance"),
        quoteHref: site("/aviation-insurance-quotation"),
      },
    ],
  },
  {
    id: "specialist",
    name: "Specialist Risks",
    kicker: "Liability · Energy · Miscellaneous",
    explanation:
      "Cover for risks that need specialist handling: legal liabilities, energy operations, and specific exposures such as money, burglary and employee dishonesty.",
    image: "bizSpecialist",
    lines: [
      {
        id: "liability",
        name: "Liability",
        short: "Cover for your business's eligible legal liabilities",
        summary:
          "Protects your business against eligible legal claims from customers, the public and employees, including professional and product liability.",
        qualifier: "Subject to policy terms, conditions, exclusions, deductibles and limits of liability.",
        href: site("/liability-insurance"),
        quoteHref: site("/liability-insurance-quotation"),
        includes: ["Public & Product", "Workers' Compensation", "Professional Indemnity", "Medical Malpractice"],
      },
      {
        id: "energy",
        name: "Energy",
        short: "Oil and gas, petrochemical and utility operations",
        summary:
          "Specialist cover for oil and gas, petrochemical and electric utility operations, including material damage, business interruption and downstream liabilities.",
        qualifier: "Subject to policy terms.",
        href: site("/energy-insurance"),
        quoteHref: site("/energy-insurance-quotation"),
      },
      {
        id: "miscellaneous",
        name: "Miscellaneous",
        short: "Burglary, money, fidelity, plate glass and more",
        summary:
          "Cover for specific business risks such as money, burglary, employee dishonesty and plate glass, with solutions for banks, exchange houses and jewellers.",
        qualifier: "Each cover has its own conditions. Burglary cover, for example, applies to violent and forcible entry or exit.",
        href: site("/miscellaneous-insurance"),
        // No line-level quotation form exists; the general enquiry form is used.
        quoteHref: site("/enquiry"),
        includes: ["Burglary", "Money", "Fidelity Guarantee", "Plate Glass", "Bankers Blanket", "Jeweller's Block"],
      },
    ],
  },
]

export const businessLinks = {
  hub: { label: "Explore business insurance", href: site("/business-insurance") },
  talk: { label: "Send an enquiry", href: site("/enquiry") },
  phone: phones.headOffice,
}
