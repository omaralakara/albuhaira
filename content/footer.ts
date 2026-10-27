import { businessLinks } from "./business"
import { claimsHub } from "./claims"
import { companyLinks } from "./company"
import { phones } from "./contacts"
import { onlinePortal } from "./digital"
import { site } from "./links"
import { personalProducts } from "./personal"

/**
 * Footer information architecture. Every link was checked live on
 * 2026-10-26. The live footer's 105 keyword links and the guide links are
 * left out for this stage, as the client asked.
 */
export type FooterLink = { label: string; href: string }
export type FooterColumn = { title: string; links: FooterLink[] }

export const footerColumns: FooterColumn[] = [
  {
    title: "Insurance",
    links: [
      ...personalProducts.map((p) => ({ label: p.name, href: p.href })),
      { label: "Business insurance", href: businessLinks.hub.href },
      { label: onlinePortal.label, href: onlinePortal.href },
    ],
  },
  {
    title: "Customer support",
    links: [
      { label: "All claim options", href: claimsHub.href },
      // "Where included" travels with every roadside mention (claims.roadside.4)
      { label: `Roadside assistance, where included (${phones.roadside.display})`, href: phones.roadside.tel },
      { label: "Find a medical provider", href: "#medical-network" },
      { label: "Networks of appointed TPAs", href: site("/medical-network-tpa") },
      { label: "Contact the medical team", href: site("/contact-medical-team") },
      { label: "Branches", href: site("/branches") },
      { label: "Send an enquiry", href: site("/enquiry") },
      { label: "Register a complaint", href: site("/register-complaint") },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About us", href: companyLinks.about.href },
      companyLinks.mission,
      { label: "Board members", href: site("/board-members") },
      { label: "News & media", href: site("/news") },
      { label: "Careers", href: site("/career") },
      { label: "Human resources", href: site("/human-resources") },
      { label: "Emiratization", href: site("/emiratization") },
      // The page heading; its browser title says "Affinity Programs"
      { label: "Affinity schemes", href: site("/affinity") },
      companyLinks.profile,
    ],
  },
  {
    title: "Investors",
    links: [
      companyLinks.investors,
      { label: "Financial reports & disclosures", href: site("/financial-reports") },
      { label: "Annual reports", href: site("/annual-reports") },
      companyLinks.governance,
      { label: "Sustainability report", href: site("/sustainability-report") },
      { label: "Financial market listing", href: site("/financial-marketing") },
    ],
  },
  {
    title: "Legal",
    // The data subject request form is left out until ABNIC fills in where to send it
    links: [
      { label: "Terms & conditions", href: site("/terms-and-conditions") },
      { label: "Privacy policy", href: site("/privacy-policy") },
      { label: "Data privacy consent form (PDF)", href: site("/assets/pdfs/data-security/data-privacy-consent-form.pdf") },
      { label: "Sitemap", href: site("/sitemap.xml") },
    ],
  },
]

export const social = [
  { label: "Facebook", href: "https://www.facebook.com/AlBuhairaInsurance/" },
  { label: "Instagram", href: "https://www.instagram.com/albuhaira_insurance/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/al-buhaira-national-insurance-co./" },
  // twitter.com redirects here
  { label: "X (Twitter)", href: "https://x.com/albuhairauae" },
]
