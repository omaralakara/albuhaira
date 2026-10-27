import { emails, phones } from "./contacts"
import { site } from "./links"

/**
 * Helpful answers, written only from verified site content (2026-10-26).
 * Each answer keeps the site's qualifications and avoids promising timing.
 */
export type Faq = {
  id: string
  question: string
  answer: string[]
  links?: { label: string; href: string }[]
}

export const faqs: Faq[] = [
  {
    id: "choosing",
    question: "How do I choose the right insurance?",
    answer: [
      "Start with what you want to protect: your car, your health, a trip, your home, your yacht or Jet Ski, or your business. Each product page explains what the cover can include and the conditions that apply.",
      "Benefits always depend on the policy and plan you choose, so check the policy terms before you buy. If you'd rather talk it through, call the team for that product.",
    ],
    links: [
      { label: "Personal insurance", href: "#personal" },
      { label: "Business insurance", href: "#business" },
    ],
  },
  {
    id: "quote",
    question: "How do I get a quote?",
    answer: [
      // Register §10 Q2: only motor and travel describe buying online; medical and home show a quotation, yacht and Jet Ski take a request
      "For motor, medical, travel, home, yacht and Jet Ski insurance, start online at online.albuhaira.com. You enter your details, then review the available quotation or request cover; eligible motor and travel customers can complete their purchase online. More documents may be needed before a policy is issued.",
      "For business insurance and personal accident cover, send a short quotation request and a customer service representative will contact you. For motorcycle insurance, use our enquiry form. A quotation does not confirm that insurance has started.",
    ],
    links: [
      { label: "Get a quote online", href: "https://online.albuhaira.com/" },
      { label: "Send an enquiry", href: site("/enquiry") },
    ],
  },
  {
    id: "claim",
    question: "How do I start a claim?",
    answer: [
      `For a motor claim, first report the accident to the relevant authority and get the accident report. Then use the online motor claim form, call ${phones.motorClaims.display} or email ${emails.motorClaims.address}.`,
      `For medical reimbursement, send the completed claim form and supporting documents to ${emails.medicalClaims.address} or use the online form. Paying a medical bill does not automatically guarantee reimbursement. For home, travel, property, marine and other claims, use the non-motor claim form.`,
    ],
    links: [{ label: "Claims options", href: "#claims" }],
  },
  {
    id: "provider",
    question: "How do I find a medical provider in my network?",
    answer: [
      "Search Al Buhaira's in-house medical network by emirate, provider type and the network shown on your medical insurance card. The network assigned to your policy determines which providers may be available to you, so confirm before non-emergency treatment.",
      "Some plans, such as the Essential Benefits Plan (EBP) in Dubai, are administered by a third-party administrator (TPA) with its own network. Your medical insurance card shows which network applies.",
    ],
    links: [
      { label: "Find a medical provider", href: "#medical-network" },
      { label: "Networks of appointed TPAs", href: site("/medical-network-tpa") },
    ],
  },
  {
    id: "contact",
    question: "Who should I contact?",
    answer: [
      `Motor: ${phones.motorSales.display} (claims ${phones.motorClaims.display}). Medical: ${phones.medical.display}. Home & travel: ${phones.homeTravel.display}. Marine: ${phones.marine.display} (claims ${phones.marineClaims.display}).`,
      `For anything else, call the head office on ${phones.headOffice.display} or email ${emails.care.address}. Our head office is open Monday to Thursday, 8:00 a.m. to 5:00 p.m. (lunch break 1:30 to 2:00 p.m.), and Friday, 8:00 a.m. to 12:00 noon; closed Saturday and Sunday.`,
    ],
    links: [
      { label: "All contact details", href: "#contact" },
      { label: "Branches", href: site("/branches") },
    ],
  },
]
