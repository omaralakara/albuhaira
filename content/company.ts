import { site } from "./links"

/**
 * Company facts for the trust section (verified 2026-10-26). Deliberately
 * excludes ratings, financial-strength claims, customer counts, headcount,
 * branch counts and executive names: the site states no rating, several
 * figures conflict, and leadership is changing. See docs/content-register.md.
 */
export const company = {
  legalName: "Al Buhaira National Insurance Company (P.S.C.)",
  founded: "1978",
  // /financial-marketing and FY2025 audited statements
  foundingStatement:
    "Incorporated in Sharjah on 16 May 1978 as a public shareholding company, by Emiri Decree issued by His Highness the Ruler of Sharjah.",
  // Listed 16 February 2005 (FY2020 Sustainability Report); /financial-marketing wrongly shows the incorporation date
  listing: "Listed on the Abu Dhabi Securities Exchange (symbol ABNIC) since February 2005.",
  membership: "Member of the Emirates Insurance Association.",
  // /mission-and-vision: "Our values are integrated in our shield"
  values: [
    { letter: "S", word: "Security" },
    { letter: "H", word: "Honesty" },
    { letter: "I", word: "Integrity" },
    { letter: "E", word: "Excellence" },
    { letter: "L", word: "Leadership" },
    { letter: "D", word: "Dependability" },
  ],
}

/**
 * Awards, each with its date and awarding body: the 2020 awards from
 * /about-us, the 2023 award from the /news item of 24 February 2023.
 */
export const credentials = [
  { year: "2023", title: "Health Insurer of the Year", body: "8th InsureTek Golden Shield Excellence Awards" },
  { year: "2020", title: "Customer Happiness Medal", body: "Insurance Authority" },
  // VERBATIM: "The most distinguished company in the percentage of domestic investments inside the Country"
  { year: "2020", title: "Recognised for domestic investment in the UAE", body: "Insurance Authority" },
]

export const companyLinks = {
  about: { label: "About Al Buhaira", href: site("/about-us") },
  mission: { label: "Mission & vision", href: site("/mission-and-vision") },
  investors: { label: "Investor relations", href: site("/investor-relations") },
  governance: { label: "Corporate governance", href: site("/corporate-governance") },
  profile: { label: "Company profile (PDF, 7.3 MB)", href: site("/assets/pdfs/abnic-profile-english-2025.pdf") },
}
