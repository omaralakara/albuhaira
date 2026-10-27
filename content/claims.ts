import { emails, phones, type Phone } from "./contacts"
import { site } from "./links"

/**
 * Claims journeys, taken from the live claims pages (verified 2026-10-26).
 * Steps are the site's own ordered lists, so any progress illustration
 * reflects the real process. The site states no approval or settlement
 * times, so none are given here.
 */
export type ClaimRoute = {
  id: "motor" | "medical" | "other"
  title: string
  /** Where this route leads, in one or two short sentences (20 words or fewer) */
  summary: string
  /** Only where the site publishes an ordered process */
  steps?: { title: string; detail: string }[]
  /** Documents to prepare, shown under "Documents may include", with the site's own hedging kept */
  prepare: {
    items: string[]
    /** Scope or "more may be requested" qualifier, shown under the list */
    footnote?: string
  }
  /** Qualification shown with the documents (every route has one, so the cards stay level) */
  note?: string
  action: { label: string; href: string }
  /** A download listed with the route's contacts (e.g. the PDF claim form) */
  secondary?: { label: string; href: string }
  /** The route's own line first; any further line is named on the card */
  phones: Phone[]
  email?: string
  source: string
}

export const claimRoutes: ClaimRoute[] = [
  {
    id: "motor",
    title: "Motor claims",
    summary:
      "For accidents and damage involving your insured vehicle. Claim online, by phone or by email.",
    steps: [
      { title: "Report the accident", detail: "Obtain the official accident report from the relevant authority." },
      { title: "Submit your motor claim", detail: "Provide the accident, driver and vehicle information to Al Buhaira." },
      {
        title: "Provide supporting documents",
        detail: "These may include the accident report, driving licence, vehicle registration and insurance information.",
      },
      {
        title: "Follow the claims instructions",
        detail: "Follow the assessment or repair instructions from the Al Buhaira Motor Claims team.",
      },
    ],
    // /motor-insurance: "Documents may include … Additional documents may be requested depending on the circumstances of the claim."
    prepare: {
      items: ["Official accident report", "Driving licence", "Vehicle registration card", "Applicable insurance information"],
      footnote: "Additional documents may be requested, depending on the claim.",
    },
    // /motor-insurance: "report the incident to the relevant authority and obtain the required accident report before submitting"
    note: "Report the accident to the relevant authority and get the accident report before you claim.",
    action: { label: "Start a motor claim", href: site("/motor-claims") },
    phones: [phones.motorClaims],
    email: emails.motorClaims.address,
    source: site("/motor-insurance"),
  },
  {
    id: "medical",
    title: "Medical reimbursement",
    summary:
      "For eligible treatment you paid for yourself. Send the reimbursement form with your invoices and reports to request repayment.",
    steps: [
      { title: "Download the claim form", detail: "Complete the Al Buhaira Medical Reimbursement Form." },
      {
        title: "Complete all required fields",
        detail: "Patient, policy, treatment, diagnosis, healthcare provider and bank details.",
      },
      {
        title: "Ask your doctor to complete the medical section",
        detail: "The treating physician adds the clinical details, then signs and stamps the form.",
      },
      {
        title: "Attach the supporting documents",
        detail: "Itemised invoices, proof of payment, prescriptions, test results, medical reports and other applicable documents.",
      },
      {
        title: "Submit the claim",
        detail: "Email everything to claims@albuhaira.com or use the online reimbursement form.",
      },
      {
        title: "Keep your claim reference",
        detail: "Keep the email confirmation, claim reference or batch number for status and payment enquiries.",
      },
    ],
    // /medical-reimbursement: the list for treatment inside the UAE; inpatient care, treatment
    // outside the UAE, physiotherapy and speech therapy each add documents or translations
    prepare: {
      items: [
        "Completed reimbursement form",
        "Itemised invoices and proof of payment",
        "Prescriptions and test results",
        "Emirates ID and insurance details",
        "UAE bank account and IBAN details",
      ],
      footnote: "For treatment in the UAE. Inpatient, overseas and some therapy claims need more.",
    },
    // /medical-reimbursement: eligible treatment, and prior authorisation "where required by the policy"
    note: "Paying a medical bill does not automatically guarantee reimbursement. Eligibility and any prior approval depend on your policy.",
    action: { label: "Start a reimbursement claim", href: site("/medical-reimbursement-form") },
    // Non-breaking space keeps "(PDF)" with the word before it
    secondary: { label: "Download the claim form\u00a0(PDF)", href: site("/assets/pdfs/downloads/reimbursement-form.pdf") },
    phones: [phones.medicalReimbursement],
    email: emails.medicalClaims.address,
    source: site("/medical-reimbursement"),
  },
  {
    id: "other",
    title: "Other insurance claims",
    summary:
      "For home, travel, property, marine and other non-motor policies. Send the claim form and our team will guide you.",
    // The site publishes no step list for non-motor claims, so none is shown.
    // Home and travel pages: "Depending on the claim, … may include …"; "as soon as reasonably possible"
    prepare: {
      items: [
        "Photographs, invoices and receipts",
        "Repair estimates",
        "Medical reports or airline confirmations",
        "Reports from the relevant authorities",
      ],
      footnote: "What applies depends on the claim.",
    },
    // /travel-insurance, /home-insurance: notify "as soon as reasonably possible" and keep the supporting documents
    note: "Tell us as soon as reasonably possible and keep the documents related to the event.",
    action: { label: "Start a non-motor claim", href: site("/non-motor-claim") },
    // /non-motor-claim gives no contact, so the head office is the fallback; marine claims have their own line
    phones: [phones.headOffice, phones.marineClaims],
    email: emails.care.address,
    source: site("/non-motor-claim"),
  },
]

export const claimsHub = {
  href: site("/claims"),
  medicalStatus: { label: "Request a medical claim status update", href: site("/claim-status") },
}
