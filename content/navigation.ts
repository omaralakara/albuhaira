import { businessGroups, businessLinks } from "./business"
import { claimsHub } from "./claims"
import { phones } from "./contacts"
import { app, digitalServicesPage, onlinePortal, partnerPortals } from "./digital"
import { site } from "./links"
import { ONLINE_PORTAL, morePersonalCover, personalHub, personalProducts } from "./personal"

export type NavLink = { label: string; href: string; description?: string }
export type NavGroup = { title: string; links: NavLink[] }
export type NavItem = {
  id: "personal" | "business" | "claims" | "about" | "contact"
  label: string
  /** Plain link when there is no menu */
  href?: string
  groups?: NavGroup[]
  /** Highlighted action at the bottom or side of the menu */
  feature?: { title: string; body: string; link: NavLink }
  footerLinks?: NavLink[]
}

const short = (id: string) => personalProducts.find((p) => p.id === id)!

export const mainNav: NavItem[] = [
  {
    id: "personal",
    label: "Personal Insurance",
    groups: [
      {
        title: "Everyday cover",
        links: ["motor", "medical", "travel", "home"].map((id) => ({
          label: short(id).name,
          href: short(id).href,
          description: short(id).summary,
        })),
      },
      {
        title: "On the water",
        links: ["yacht", "jet-ski"].map((id) => ({
          label: short(id).name,
          href: short(id).href,
          description: short(id).summary,
        })),
      },
      { title: "More personal cover", links: morePersonalCover },
    ],
    feature: {
      title: "Buy online",
      body: "Start an online quote for motor, medical, travel, home, yacht or Jet Ski cover.",
      link: { label: "Get a quote", href: ONLINE_PORTAL },
    },
    footerLinks: [personalHub],
  },
  {
    id: "business",
    label: "Business Insurance",
    groups: businessGroups.map((g) => ({
      title: g.name,
      links: g.lines.map((l) => ({ label: l.name, href: l.href, description: l.short })),
    })),
    footerLinks: [businessLinks.hub, businessLinks.talk],
  },
  {
    id: "claims",
    label: "Claims & Support",
    groups: [
      {
        title: "Make a claim",
        links: [
          { label: "Motor claims", href: site("/motor-claims"), description: "Report an accident and submit your claim" },
          {
            label: "Medical reimbursement",
            href: site("/medical-reimbursement-form"),
            description: "Request repayment for eligible treatment you paid for",
          },
          {
            label: "Other insurance claims",
            href: site("/non-motor-claim"),
            description: "Home, travel, property, marine and more",
          },
          { label: "All claim options", href: claimsHub.href },
        ],
      },
      {
        title: "Get help",
        links: [
          { label: `Roadside assistance ${phones.roadside.display}`, href: phones.roadside.tel, description: phones.roadside.qualifier },
          { label: "Find a medical provider", href: "#medical-network", description: "Search the provider network by emirate and type" },
          { label: "Contact the medical team", href: site("/contact-medical-team") },
          { label: "Branches", href: site("/branches") },
        ],
      },
      {
        title: "Feedback",
        links: [
          { label: "Register a complaint", href: site("/register-complaint") },
          { label: "Send an enquiry", href: site("/enquiry") },
        ],
      },
    ],
  },
  {
    id: "about",
    label: "About Al Buhaira",
    groups: [
      {
        title: "Company",
        links: [
          { label: "About us", href: site("/about-us") },
          { label: "Mission & vision", href: site("/mission-and-vision") },
          { label: "Strategic partnership", href: site("/strategic-partnership") },
          { label: "Board members", href: site("/board-members") },
          { label: "News & media", href: site("/news") },
        ],
      },
      {
        title: "Investors",
        links: [
          { label: "Investor relations", href: site("/investor-relations") },
          { label: "Financial reports & disclosures", href: site("/financial-reports") },
          { label: "Annual reports", href: site("/annual-reports") },
          { label: "Corporate governance", href: site("/corporate-governance") },
          { label: "Sustainability report", href: site("/sustainability-report") },
        ],
      },
      {
        title: "Careers",
        links: [
          { label: "Careers", href: site("/career") },
          { label: "Human resources", href: site("/human-resources") },
          { label: "Emiratization", href: site("/emiratization") },
        ],
      },
    ],
  },
  { id: "contact", label: "Contact", href: "#contact" },
]

/** Secondary "Digital services" menu (portals live here, away from the main nav). */
export const digitalNav: NavGroup[] = [
  {
    title: "For customers",
    links: [
      { label: onlinePortal.label, href: onlinePortal.href, description: onlinePortal.description },
      { label: `${app.name} app`, href: "#digital-services", description: "For medical members: network map and reimbursement claims" },
      { label: "Medical network search", href: site("/medical-network") },
    ],
  },
  {
    title: "For partners",
    links: partnerPortals.map((p) => ({ label: p.label, href: p.href, description: p.audience })),
  },
]

export const digitalNavFooter: NavLink = digitalServicesPage
