import { site } from "./links"

/**
 * Digital services, verified 2026-10-26 against /digital-services and the
 * App Store / Google Play listings. Capabilities are limited to what those
 * sources state explicitly.
 */
export const app = {
  name: "ABNIC Health Vault",
  intro: "The official Al Buhaira National Insurance health insurance app.",
  // Shown under the capabilities. /medical-network-tpa lists separate apps for TPA-administered
  // plans; "Paying a medical bill does not automatically guarantee reimbursement" (/medical-reimbursement)
  availability:
    "Features depend on your medical plan, and reimbursement remains subject to your policy. If a third-party administrator (TPA) manages your plan, your TPA may provide its own app.",
  capabilities: [
    {
      id: "card",
      title: "Your digital insurance card",
      // /digital-services; the store listings don't mention the card, and /nas-third-party-administrator-tpa says "where applicable"
      body: "Where applicable, show your digital insurance card at the provider, with your Emirates ID.",
      source: site("/digital-services"),
    },
    {
      id: "network",
      title: "Medical network information",
      body: "Find nearby network providers on the map.",
      source: "App Store and Google Play listings",
    },
    {
      id: "claims",
      title: "Reimbursement claims on your phone",
      body: "Submit reimbursement claims, upload and view claim documents, and see the status of your claims.",
      source: "App Store and Google Play listings",
    },
    {
      id: "uaepass",
      title: "Sign in with UAE PASS",
      body: "Sign in or sign up using UAE PASS.",
      source: "Release notes, version 2.1.1 (24 July 2026)",
    },
  ],
  stores: {
    apple: { label: "Download on the App Store", href: "https://apps.apple.com/ae/app/abnic-health-vault/id1491122963" },
    google: {
      label: "Get it on Google Play",
      href: "https://play.google.com/store/apps/details?id=abnic.albuhairainsurance.net&hl=en",
    },
  },
}

/** Customer-facing online service */
export const onlinePortal = {
  label: "Buy insurance online",
  // Only the motor and travel pages describe paying and issuing online; yacht and jet ski are online requests
  description: "Get a quote for six personal products. Eligible motor and travel customers can buy online.",
  href: "https://online.albuhaira.com",
}

/**
 * Specialist portals from /digital-services. Only the provider portal is
 * linked directly (it answers, with 403 from outside the UAE). On 2026-10-26
 * broker.albuhaira.com had no DNS record and homeins.albuhaira.com refused
 * connections, so brokers are sent to the page that lists their portals;
 * see docs/prototype-notes.md.
 */
export const partnerPortals = [
  {
    audience: "Medical providers",
    label: "Medical provider portal",
    description: "For network providers to review and validate member information.",
    href: "https://provider.albuhaira.com/",
  },
  {
    audience: "Brokers",
    label: "Broker portals",
    description: "The motor and home insurance broker portals are listed on our digital services page.",
    href: site("/digital-services"),
  },
] as const

export const digitalServicesPage = { label: "All digital services", href: site("/digital-services") }
