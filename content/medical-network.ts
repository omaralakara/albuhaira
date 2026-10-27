import { site } from "./links"

/**
 * The live provider finder at /medical-network is a plain GET form, so the
 * homepage entry point submits the same field names and opens real results
 * (deep link verified 2026-10-26, e.g. ?networkType=STANDARD&emirate=SHARJAH).
 * Option values are the site's own; labels are tidied for reading.
 */
export const finder = {
  action: site("/medical-network"),
  fields: {
    emirate: {
      name: "emirate",
      label: "Emirate",
      placeholder: "All emirates",
      options: [
        { value: "ABU DHABI", label: "Abu Dhabi" },
        { value: "AJMAN", label: "Ajman" },
        { value: "AL AIN", label: "Al Ain" },
        { value: "DUBAI", label: "Dubai" },
        { value: "FUJAIRAH", label: "Fujairah" },
        { value: "RAK", label: "Ras Al Khaimah" },
        { value: "SHARJAH", label: "Sharjah" },
        { value: "UAQ", label: "Umm Al Quwain" },
      ],
    },
    providerType: {
      name: "providerType",
      label: "Provider type",
      placeholder: "All provider types",
      options: [
        { value: "HOSPITAL", label: "Hospital" },
        { value: "MEDICAL CENTER", label: "Medical centre" },
        { value: "PHARMACY", label: "Pharmacy" },
        { value: "DENTAL", label: "Dental" },
        { value: "LAB & DIAGNOSTIC", label: "Lab & diagnostic" },
        { value: "OPTICAL CENTER", label: "Optical centre" },
        { value: "DAY SURGERY CENTER", label: "Day surgery centre" },
        { value: "REHABILITATION", label: "Rehabilitation" },
      ],
    },
    networkType: {
      name: "networkType",
      label: "Your network",
      hint: "As shown on your medical insurance card",
      placeholder: "All networks",
      options: [
        { value: "COMPREHENSIVE", label: "Comprehensive" },
        { value: "COMPREHENSIVE PLUS", label: "Comprehensive Plus" },
        { value: "STANDARD", label: "Standard" },
        { value: "LIMITED", label: "Limited" },
        { value: "RESTRICTED", label: "Restricted" },
      ],
    },
    keyword: {
      name: "keyword",
      label: "Name or area",
      hint: "Optional: a provider, doctor or location",
      placeholder: "e.g. clinic, doctor or area",
    },
  },
  // The live form also filters by speciality; the homepage keeps to the essentials.
  hiddenDefaults: { speciality: "" },
} as const

/** Policy-dependence wording, from /nas-third-party-administrator-tpa and /essential-benefits-plans-ebp-medical-insurance */
export const networkNotice = {
  // The finder covers Al Buhaira's in-house networks (footer label "Medical Network (Inhouse)")
  scope:
    "This search covers Al Buhaira's in-house medical networks. If a third-party administrator (TPA) manages your plan, use your TPA's network.",
  lead: "The network assigned to your medical insurance policy determines which hospitals, clinics, pharmacies, diagnostic centres and other providers may be available to you.",
  check: "Before non-emergency treatment, confirm the provider is included in the network stated on your medical insurance card.",
}

export const networkLinks = {
  inHouse: { label: "Open the full medical network search", href: site("/medical-network") },
  tpa: {
    label: "Networks of appointed TPAs",
    // /medical-network-tpa: "Appointed networks of TPA for essential benefits plans."
    description:
      "Some plans, such as the Essential Benefits Plan (EBP), use a third-party administrator. Your card shows which.",
    href: site("/medical-network-tpa"),
  },
  medicalTeam: { label: "Contact the medical team", href: site("/contact-medical-team") },
}
