/**
 * Contact channels, verified on the live site on 2026-10-26.
 * Numbers keep the published digits (tel: hrefs are exact); display text is
 * spaced for readability. No hours or "24/7" claims are attached to helplines
 * because the site states none.
 */
export type Phone = {
  label: string
  display: string
  tel: string
  /** What the line is for, in plain words */
  purpose: string
  /** Policy qualification, shown next to the number where it matters */
  qualifier?: string
}

export const phones = {
  roadside: {
    label: "Roadside assistance",
    display: "800 8181",
    tel: "tel:8008181",
    purpose: "Breakdown help on the road",
    // /motor-insurance, /car-insurance, /comprehensive-insurance
    qualifier: "Where roadside assistance is included in your motor policy",
  },
  motorClaims: {
    label: "Motor claims",
    display: "600 545457",
    tel: "tel:600545457",
    purpose: "Report and follow up a motor claim",
  },
  motorSales: {
    label: "Motor insurance",
    display: "600 535357",
    tel: "tel:600535357",
    purpose: "New motor policies and renewals",
  },
  // Listed in the live helpline pop-up as "Motor Insurance Mobile"; the site states no further purpose
  motorMobile: {
    label: "Motor insurance (mobile)",
    display: "050 751 0074",
    tel: "tel:0507510074",
    purpose: "Another number for motor insurance",
  },
  // The Medical & Life Department page gives "Timing: 8:00am to 5:00pm"
  medical: {
    label: "Medical insurance",
    display: "06 511 7500",
    tel: "tel:065117500",
    purpose: "Medical policies and customer service, during office hours",
  },
  medicalReimbursement: {
    label: "Medical reimbursement",
    display: "600 545459",
    tel: "tel:600545459",
    purpose: "Guidance on reimbursement claims",
  },
  homeTravel: {
    label: "Home & travel insurance",
    display: "600 548283",
    tel: "tel:600548283",
    purpose: "Home and travel policies",
  },
  marine: {
    label: "Marine insurance",
    display: "06 517 4487",
    tel: "tel:065174487",
    purpose: "Marine policies and quotations",
  },
  marineClaims: {
    label: "Marine claims",
    display: "06 517 4486",
    tel: "tel:065174486",
    purpose: "Marine and cargo claims",
  },
  headOffice: {
    label: "Head office",
    display: "06 517 4444",
    tel: "tel:065174444",
    purpose: "Motor, marine, fire and general accident",
  },
} satisfies Record<string, Phone>

export const emails = {
  care: { label: "General enquiries", address: "care@albuhaira.com" },
  motorClaims: { label: "Motor claims", address: "motorclaims@albuhaira.com" },
  medicalClaims: { label: "Medical reimbursement claims", address: "claims@albuhaira.com" },
  medicalCustomerService: { label: "Medical customer service", address: "customerservice@albuhaira.com" },
} as const

export const headOffice = {
  name: "Head office",
  lines: ["6th Floor, Buhaira Insurance Towers", "Khalid Lagoon, Buhaira Corniche", "Sharjah, United Arab Emirates"],
  poBox: "P.O. Box 6000",
  fax: "06 574 8855",
  mapLabel: "Al Buhaira Insurance, Head Office, Sharjah",
} as const

/**
 * Office hours as published on the head office and department pages.
 * Non-breaking spaces keep each time on one line ("5:00 p.m.") in narrow columns.
 */
export const officeHours = [
  { days: "Monday to Thursday", hours: "8:00\u00a0a.m. to 5:00\u00a0p.m.", note: "Lunch break 1:30 to 2:00\u00a0p.m." },
  { days: "Friday", hours: "8:00\u00a0a.m. to 12:00\u00a0noon" },
  { days: "Saturday and Sunday", hours: "Closed" },
] as const

/**
 * Helplines for the header's "Urgent help" menu (desktop and the mobile sheet).
 * The medical line answers during office hours only, so it is listed with the
 * other helplines in Contact instead.
 */
export const urgentLines: Phone[] = [phones.roadside, phones.motorClaims, phones.marineClaims]

/**
 * Every published helpline, for the Contact area: the eight in the live
 * site's helpline pop-up, plus reimbursement guidance and the head office.
 */
export const allHelplines: Phone[] = [
  phones.roadside,
  phones.motorClaims,
  phones.motorSales,
  phones.motorMobile,
  phones.medical,
  phones.medicalReimbursement,
  phones.homeTravel,
  phones.marine,
  phones.marineClaims,
  phones.headOffice,
]
