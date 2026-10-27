# ABNIC homepage redesign: verified content register

| | |
|---|---|
| Site | Al Buhaira National Insurance Company (ABNIC), https://www.albuhaira.com |
| Scope | English-only homepage redesign. Arabic (`/ar/`) pages were not researched. |
| Compiled | 26 October 2026 |
| Built from | Six research areas: personal products, business lines, claims, medical network and digital services, trust, and contact/support/footer. An adversarial fact-checker re-fetched every area from the live site on 26 October 2026: 722 facts checked (699 confirmed, 22 corrected, 1 refuted) plus 176 facts the checkers added. |
| Authority | This register is the only source for homepage copy, links and contacts. Anything not in it needs a new verified source before it goes on the page. |

**Contents:** Copy guardrails · 1 Navigation · 2 Hero and quote selector · 3 Quick access · 4 Personal insurance · 5 Business insurance · 6 Claims · 7 Medical network · 8 Trust · 9 Digital services · 10 FAQ · 11 Final call to action and footer · Appendix A Link status table · Appendix B Contacts table · Appendix C Gaps and prototype-only interactions · Appendix D Excluded and unverified claims

## How to read this register

- **What's in:** facts with the verdict *confirmed* or *corrected* (the corrected wording is used), plus the fact-checkers' *missed facts*. The refuted fact, the superseded wordings and the site claims that are true but unsafe are in **Appendix D**, so nobody puts them back.
- **URLs:** a path that starts with `/` is on `https://www.albuhaira.com`, so `/motor-insurance` means `https://www.albuhaira.com/motor-insurance`. Other hosts are written in full. Every URL's HTTP status (checked 26 Oct 2026) is in **Appendix A**.
- **Citations:** `[fact-id · page]`. Fact IDs refer to the research and fact-check data gathered on 26 October 2026, which is kept outside this repository. IDs containing `.missed.`, or starting `missed.` or `mf.`, are facts the fact-checkers added.
- **Labels**
  - **VERBATIM**: exact site wording. Keep it, except typos we flag.
  - **Suggested copy**: our wording, built only from the cited facts. Shorten it if needed, but keep every qualifier.
  - **GAP**: the brief needs it, but the site does not support it. ABNIC must supply it.
  - **PROTOTYPE-ONLY**: an interaction we can mock, but must not connect to a live ABNIC system.
  - **CONFLICT**: the site contradicts itself. ABNIC must confirm before launch.
  - **DO NOT USE**: true on the site, but unsafe or unsupported on the homepage.

## Copy guardrails (apply to every section)

1. **No timing or outcome promises.** No ABNIC page states a quote, approval, settlement, payment or response time. Don't write "fast", "instant", "in minutes", "guaranteed", "same day" or "approved" about quotes, cover or claims. Where a caution helps, use the site's own words: "A quotation does not confirm that insurance has started." [personal.pa.5 · `/personal-accident-insurance`; business.enquiry.3 · `/burglary-insurance`] and "Paying a medical bill does not automatically guarantee reimbursement." [claims.medical.2 · `/medical-reimbursement`]
2. **Keep the qualifier next to the benefit.** Use the site's hedges: "may include", "depending on the selected policy" (or "plan"), "where covered", "where included", "eligible", "subject to policy terms". When a benefit is shown as a chip or icon, the qualifier goes on the chip, not only in a footnote.
3. **No numbers that conflict or date quickly:** no medical-provider counts (2,400 against 1,500), no branch counts (9, 11, 8 or 24), no headcount (346 against 505), no Google rating, no "over 40 years". "Since 1978" is safe.
4. **No financial-strength language** ("financially stable", "strong balance sheet", "high credit rating", "financial strength"). No rating agency rates ABNIC in any source checked, and the FY2025 audited statements disclose a Solvency Capital Requirement breach. [about.ratings.1; about.caution.1]
5. **Product guardrails**
   - Online is not "cheaper": "Buying online does not automatically mean a lower premium." [personal.motor.29 · `/car-insurance-online`]
   - Flood damage is not automatically included under every comprehensive motor policy. [personal.motor.20 · `/comprehensive-insurance`]
   - Agency repair only "where available". [personal.motor.19, personal.motor.21 · `/comprehensive-insurance`]
   - Never call yacht or jet ski insurance mandatory. [personal.yacht.8 · `/yacht-insurance`; personal.missed.jetski-no-blanket-requirement · `/jet-ski-insurance`]
   - The Essential Benefits Plan (EBP) is Dubai only. [personal.medical.24 · `/essential-benefits-plans-ebp-medical-insurance`]
   - Worldwide medical cover is optional, on selected plans. [personal.medical.9 · `/medical-insurance`]
   - Roadside assistance is a motor benefit "where included". [claims.roadside.2, claims.roadside.4 · `/motor-insurance`]
6. **"24/7" never sits next to a phone number.** No published number is labelled 24/7, and no helpline has published hours. [claims.247.1–claims.247.5; claims.missed.3]
7. **No individual staff mailboxes or executive names on the homepage.** Leadership is changing: a new CEO had been appointed but had not started as of 28 Sep 2026. [about.missed.4; contact.medical.3]
8. **The prototype never submits anything to ABNIC.** Every live form posts to a POST-only endpoint (Appendix A.13). Link to the real pages instead.
9. **Match the CTA to the route:** "Get a quote online" where the online portal handles it; "Request a quote" where a form leads to a call-back or an enquiry.

---

## 1. Navigation

**Live-site defects not to carry over**
- The mobile "Claims" menu item is a dead link (`javascript: void(0)`, no submenu), so phone users cannot reach claims from the menu. [business.missed.8; missed.nav.mobile_claims_dead · `/`]
- Mobile "Group Life" opens `/group-medical-insurance`. [business.nav.4; footer.nav.1 · `/`]
- "Management Team" (`/management-team`) returns 404. [about.leadership.3; footer.status.1]
- "Contact Medical Team" is only in the mobile menu. [medteam.7 · `/`]
- The helpline list opens only from an unlabelled footer icon that is hidden on screens narrower than 576px. [claims.helpline.1 (corrected); claims.missed.1 · `/`]
- Typos in live labels: "Anuual Reports", "Register a complaints", "Sustainibility Report". [footer.nav.2; footer.ia.3 · `/`]

### 1.1 Personal

The live "Personal" parent links `/personal-insurance`, a text-only overview with no call to action and older, unhedged copy. Don't reuse that page's copy. The live menu lists exactly six products. [personal.overview.1; personal.missed.overview-unhedged · `/personal-insurance`]

| Menu item | One-line description | Page | Quote route | Sources |
|---|---|---|---|---|
| Motor Insurance | VERBATIM: "Comprehensive and third-party motor insurance solutions in the UAE." | `/motor-insurance` | Online | personal.motor.1 · `/motor-insurance` |
| Medical Insurance | Suggested copy: "Medical insurance for individuals and families, with access to the provider network assigned to your plan." | `/medical-insurance` | Online | personal.medical.3, personal.medical.6 · `/medical-insurance` |
| Travel Insurance | VERBATIM: "Travel insurance for eligible medical emergencies, baggage and other covered travel risks." | `/travel-insurance` | Online | personal.travel.2 · `/travel-insurance` |
| Home Insurance | VERBATIM: "Home insurance for eligible villas, apartments, household contents, personal belongings and liability risks." | `/home-insurance` | Online | personal.home.2 · `/home-insurance` |
| Yacht Insurance | VERBATIM: "Yacht insurance for eligible hull, machinery, personal effects and third-party liability risks." | `/yacht-insurance` | Online request | personal.yacht.2 · `/yacht-insurance` |
| Jet Ski Insurance | Suggested copy: "Personal watercraft insurance for eligible physical damage and third-party liability, with theft cover where your policy includes it." (The live hero lists theft with no qualifier.) | `/jet-ski-insurance` | Online request | personal.jetski.2, personal.jetski.5, personal.jetski.12 · `/jet-ski-insurance` |

**Sub-links (all HTTP 200)**
- Motor: Comprehensive car insurance `/comprehensive-insurance` · Third-party car insurance `/third-party-insurance` · Renew your car insurance `/car-insurance-renewal` · How to buy car insurance online `/how-to-buy-car-insurance-online` · Motor claims `/motor-claims` [personal.motor.16, personal.motor.23, personal.motor.32; claims.motor.5]
- Medical: Individual `/individual-health-insurance` · Family `/family-health-insurance` · Domestic helper `/domestic-helper-medical-insurance` · Essential Benefits Plan (Dubai) `/essential-benefits-plans-ebp-medical-insurance` [personal.medical.14, personal.medical.18, personal.medical.30, personal.medical.22]

**Also available (not in the live Personal menu)**
- **Motorcycle** `/motorcycle-insurance`. VERBATIM: "Al Buhaira provides motorcycle insurance options for eligible motorcycles and riders, subject to usage, underwriting requirements and applicable policy terms." Quote by enquiry form. [personal.motorcycle.1; personal.motorcycle.5 (corrected)]
- **Personal Accident** `/personal-accident-insurance`. The site files it under Miscellaneous (business). Quote by call-back form. [personal.pa.1; personal.pa.6]
- **Life insurance: don't list under Personal.** `/life-insurance` offers only "Group Life Insurance and Credit Life Insurance solutions for eligible organisations and financial arrangements." [personal.overview.5 (corrected); personal.missed.life-business-only · `/life-insurance`] CONFLICT: `/insurance-product` still lists "Individual Life Insurance" under personal lines. [missed.products.list · `/insurance-product`]

### 1.2 Business

The live "Business" parent links `/business-insurance`, a hub with no "Get a quote" button. The live header lists 12 items, including "Vehicle Export Certificate". [business.hub.1; business.missed.15; business.nav.1 · `/`] The four groups below follow the brief.

| Group | Menu item | One-line description (Suggested copy unless marked) | Page | Sources |
|---|---|---|---|---|
| People | Group Medical | "Medical cover for employees and their eligible dependants under one corporate policy, subject to the selected plan and policy terms." | `/group-medical-insurance` | business.groupmedical.13 |
| People | Group Life | "Life cover for your employees under one group policy, with optional disability and illness benefits, for groups of 10 or more." | `/group-life-insurance` | business.grouplife.1, business.grouplife.3, business.grouplife.4; business.missed.4 |
| People | Credit Life | "For lenders: cover that pays the outstanding loan balance if an eligible UAE-resident borrower dies or, where included, becomes disabled." | `/credit-life-insurance` | business.creditlife.1, business.creditlife.3; business.missed.23 |
| Property & Projects | Property | "Cover may be arranged for buildings, contents, machinery and stock against insured events such as fire, flood and burglary with forcible entry." | `/property-insurance` | business.property.2, business.property.5, business.property.9 |
| Property & Projects | Engineering | "Separate covers may be arranged for construction and installation projects, contractors' plant, and machinery breakdown." | `/engineering-insurance` | business.engineering.3, business.engineering.6, business.engineering.8, business.engineering.9, business.engineering.11 |
| Transport | Motor Fleet | "One policy for your business's eligible vehicles, with third-party or comprehensive fleet cover, subject to underwriting approval." | `/motor-fleet-insurance` | business.motorfleet.4, business.motorfleet.6, business.motorfleet.12 |
| Transport | Marine | "Cover for cargo, commercial vessels and marine businesses such as freight forwarders, marina operators and ship repairers, subject to underwriting." | `/marine-insurance` | business.marine.2, business.marine.4, business.marine.5, business.marine.8 |
| Transport | Aviation | "Hull and liability cover for airlines and businesses with special purpose aircraft fleets." | `/aviation-insurance` | business.aviation.1, business.aviation.2 |
| Specialist Risks | Liability | VERBATIM: "Protect your business against eligible legal liabilities arising from third-party claims, professional services, employees and other business risks." | `/liability-insurance` | business.liability.1 |
| Specialist Risks | Energy | "Cover for oil and gas, petrochemical, power and utility businesses that may include property damage, business interruption and liability, subject to policy terms." | `/energy-insurance` | business.energy.2, business.energy.5 |
| Specialist Risks | Miscellaneous | "Cover for specific business risks such as burglary with forcible entry, money, employee dishonesty, plate glass and stock deterioration, plus packages for banks, exchange houses and jewellers." | `/miscellaneous-insurance` | business.misc.1, business.misc.2, business.misc.4, business.misc.10 |

- "View all business insurance" goes to `/business-insurance`. [business.hub.1]
- **Leave out "Vehicle Export Certificate".** `/vehicle-export-certificate` returns 200 but serves the Motor Fleet page, and the site says nothing about the certificate. GAP. [business.vec.1, business.vec.2]

### 1.3 Claims & Support

| Menu item | One-line description (Suggested copy) | Destination | Notes | Sources |
|---|---|---|---|---|
| Make a claim | "Start a motor, non-motor or medical reimbursement claim." | `/claims` | Hub with three cards: "Motor Claim", "Non-Motor Claim", "Medical reimbursement Claim". | claims.hub.2 |
| Motor claim | "Claim online, by phone, by WhatsApp or by email." | `/motor-claims` | Get the accident report from the relevant authority first. | claims.motor.1, claims.motor.3 |
| Non-motor claim | "Send a claim request for a non-motor policy." | `/non-motor-claim` | Online form only. | claims.nonmotor.1 |
| Medical reimbursement | "Request repayment of eligible medical costs you paid to a provider." | `/medical-reimbursement-form` (form); `/medical-reimbursement` (how-to guide) | Not guaranteed; reviewed against your policy. | claims.medical.1, claims.medical.2 |
| Medical claim status | "Ask about a medical claim. A representative will contact you." | `/claim-status` | Call-back request, not live tracking. | claims.status.1 |
| Reimbursement payment | "Ask about a reimbursement payment using your batch or claim reference number." | `/payment-status` | Call-back request. | claims.status.2 |
| Find a medical provider | "Search our in-house medical network." | `/medical-network` | See section 7. | network.finder.1, network.finder.14 |
| TPA networks | "Network and app links for plans administered by a third-party administrator (TPA)." | `/medical-network-tpa` | Some outbound links are broken (section 7.5). | tpa.page.1, tpa.page.2 |
| Medical service requests | "Insurance certificates, insurance e-card copy, website and app help, other enquiries." | `/insurance-certificates`, `/insurance-card-copy`, `/website-mobile-app-assistance`, `/other-inquiries` | Call-back request forms. | eservices.1, eservices.2, eservices.3, eservices.4 |
| Register a complaint | "Fill out our complaint form and we will be in touch with you." | `/register-complaint` | The page gives no steps or timelines. | complaints.process.1 |
| Customer feedback | "Tell us how we handled your complaint." | `/customer-satisfaction-survey` | Standalone survey page with no site header or footer. | complaints.feedback.1 |
| Enquiry | "Ask us a question or request a quote." | `/enquiry` | General enquiry form. | enquiry.page.1 |

### 1.4 About

| Menu item | Page | Notes | Sources |
|---|---|---|---|
| About us | `/about-us` | | about.founding.1 |
| Mission & Vision | `/mission-and-vision` | | about.mission.1 |
| Board Members | `/board-members` | Shows a General Manager; leadership is changing, so keep names off the homepage. | about.board.1, about.board.3 |
| Strategic Partnership | `/strategic-partnership` | Names no partners; has the typo "pro b vide". | about.partnership.1, about.partnership.2 |
| Investor Relations | `/investor-relations` | | about.ir.2 |
| Financial Reports & Disclosures | `/financial-reports` | 131 dated disclosures, 13 Feb 2020 to 30 Sep 2026. | about.ir.5 |
| Financial Statements | `/annual-reports` | Page title "Annual Reports". Fix the mobile label "Anuual Reports". | about.ir.6, about.ir.7 |
| Financial Market Listing | `/financial-marketing` | CONFLICT: shows "Date of listing 16/05/1978" (the incorporation date) and "Auditor Grant Thornton" (the FY2025 auditor is KPMG Lower Gulf Limited). | about.listing.3, about.governance.4, about.governance.5 |
| Corporate Governance | `/corporate-governance` | | about.governance.1 |
| Sustainability Reports | `/sustainability-report` | Reports for 2020 to 2025. | about.sustainability.1 |
| Emiratization | `/emiratization` | | about.emiratization.1 |
| News & Media | `/news` | Page 1 is nine copies of one item; don't auto-feed "latest news". | about.news.1 |
| Careers | `/career` | | careers.form.1 |
| Human Resources | `/human-resources` | Its "Get a quote" button wrongly opens the travel quotation; don't copy. | careers.hr.1, careers.hr.5 |
| Digital Services | `/digital-services` | | digital.page.1 |
| Management Team | `/management-team` | Returns 404: drop it. | about.leadership.3 |

### 1.5 Contact

| Menu item | Page | What it gives | Sources |
|---|---|---|---|
| Head Office | `/head-office` | 06 517 4444 (motor, marine, FGA), 06 511 7500 (medical), care@albuhaira.com, P.O. Box 6000, fax, hours, map | contact.headoffice.1–contact.headoffice.5; contact.hours.1 |
| Medical Department | `/medical-insurance-department` | 06 511 7500, Rolla office, medical service directory | contact.medical.1, contact.medical.2 |
| Contact Medical Team | `/contact-medical-team` | Medical service directory. CONFLICT: four numbers differ from the Medical Department page. | contact.medical.4 |
| Motor Department | `/motor-insurance-department` | Sales 600535357, claims 600545457 | contact.motor.1, contact.motor.2 |
| Fire & General Accident (FGA) Department | `/fire-and-general-accident-insurance-department` | 06 517 4444, care@albuhaira.com | contact.fga.1 |
| Marine Department | `/marine-insurance-department` | 06 517 4444, care@albuhaira.com | contact.marine.1 |
| Branches | `/branches` | 24 branch links in 12 location groups | branches.list.2 (corrected) |
| Enquiry | `/enquiry` | General enquiry form | enquiry.form.1 |

### 1.6 Digital services

| Service (site title) | Audience | Destination | Status 26 Oct 2026 | Homepage use | Sources |
|---|---|---|---|---|---|
| Online Portal (Buy Insurance) | Customers | https://online.albuhaira.com | 200 | Yes | digital.svc.10, digital.online.1 |
| Medical Network | Medical members | `/medical-network` | 200 | Yes | digital.svc.4 |
| ABNIC Health Vault app | Medical members | App Store and Google Play (section 9.1) | 200 | Yes | app.ios.1, app.android.1 |
| Appointed TPA networks | Members of TPA-administered plans | `/medical-network-tpa` | 200 (some outbound links 404) | Link only | tpa.page.1 |
| Medical provider Portal | Network providers (hospitals, clinics) | https://provider.albuhaira.com/ | 403 (access restricted) | Only in a "for healthcare providers" area, and only if ABNIC confirms | digital.svc.2 |
| Motor Brokers portal | Broker partners | https://broker.albuhaira.com/ABNIC_PROD/ | No DNS record | DO NOT LINK | digital.svc.1 |
| Home Insurance Broker Portal | Brokers | https://homeins.albuhaira.com | Could not connect | DO NOT LINK | digital.svc.9 |
| Rental Portal | People renting ABNIC's Sharjah properties | https://property.albuhaira.com | Connection reset | DO NOT LINK | digital.svc.6 |
| Medical Brokers portal; Tenant Portal – Real Estate Department; Employee self-services | Brokers; ABNIC staff | No URL on the site | n/a | DO NOT LINK | digital.svc.3, digital.svc.5, digital.svc.7 |

The checks ran from outside the UAE, so some portal failures may be geo or IP restrictions (research note). GAP: ABNIC to confirm which portals are live and public.

### 1.7 Urgent-assistance numbers (helpline strip)

The live site keeps these eight numbers in a "Dedicated helpline numbers" pop-up that only an unlabelled footer icon opens, and that icon is hidden on phones. **Design requirement: show them on every screen size.** No hours are published for any of them. [claims.helpline.1 (corrected); contact.helpline.1 (corrected) · `/`]

| Site label (VERBATIM) | Display | tel href | Purpose (Suggested label) | Qualifier | Sources |
|---|---|---|---|---|---|
| Motor Insurance Toll: | 600535357 | `tel:600535357` | Buy or renew motor insurance | The Motor Department lists it as "Motor Insurance Sales". | contact.helpline.2; contact.motor.1 |
| Motor Insurance Mobile: | 0507510074 | `tel:0507510074` | Motor insurance (mobile line) | The site does not describe its purpose further. | contact.helpline.3 |
| Road Side Assistance: | 8008181 | `tel:8008181` | Roadside assistance | Only "where included" in a motor policy. No hours, provider or scope published. | contact.helpline.4; claims.roadside.2, claims.roadside.4, claims.roadside.5 |
| Motor Claims Toll: | 600545457 | `tel:600545457` | Motor and fleet claims | | contact.helpline.5; business.motorfleet.3 |
| Medical Insurance: | 06 5117500 | `tel:065117500` | Medical insurance and customer service | Same number as "Medical Call: 06 511 7500" on `/head-office`. Not labelled 24/7, so don't present it as one. | contact.helpline.6; contact.headoffice.3 |
| Home & Travel Insurance: | 600548283 | `tel:600548283` | Home and travel insurance | Not labelled as a claims or travel-emergency line. | contact.helpline.7 |
| Marine Insurance: | 06 5174487 | `tel:065174487` | Marine insurance | The site does not say it serves yacht or jet ski customers. | contact.helpline.8; personal.contact.8 |
| Marine Claims: | 06 5174486 | `tel:065174486` | Marine claims | | contact.helpline.9 |

Optional ninth number, not in the live pop-up: **medical reimbursement guidance, 600 545459**. It is shown without a link on `/medical-reimbursement` ("600 545459") and `/medical-reimbursement-form` ("600545459"). The derived link `tel:600545459` is PROTOTYPE-ONLY until ABNIC confirms. The Company Profile labels this number "Life & Medical Claims". [claims.medical.9; claims.medical.11; claims.missed.2]

---

## 2. Hero and quote selector

### 2.1 Hero copy

- **H1 (Suggested copy):** "Insurance for you, your family and your business."
- **Sub-line (Suggested copy):** "Get a quote online for motor, medical, travel, home, yacht and jet ski insurance, or request a quote for your business. Serving the UAE since 1978."
- **Primary CTA:** "Get a quote" (opens the selector). **Secondary CTA:** "Make a claim" to `/claims`.
- **Selector headings (VERBATIM, current homepage):** personal tab "What do you want to insure?"; business tab "What would you like to protect today?" [personal.overview.2; business.nav.3 (corrected) · `/`]
- Grounding: online quotes for six products [personal.portal.1 (corrected) · https://online.albuhaira.com/]; business quotation request forms [business.enquiry.1 · `/property-insurance-quotation`]; "Excellent service since 1978." [about.founding.6 · `/`]; "Established in May 1978" [about.founding.1 · `/about-us`]; the company "is domiciled and operates in the UAE" [about.listing.4 · Integrated Report PDF].

### 2.2 Personal quote selector

On the live product pages, the hero "Get a quote" button opens in the same tab and the in-page "Get a … Quote Online" links open a new tab. The portal has no `<form action>`; it runs on Livewire. Deep-link to it, and never embed or rebuild its forms. [personal.motor-quote.1; personal.portal.3]

| Product | Selector description (Suggested copy) | Best verified destination | How quoting works (as the site states it) | Phone / email alternative | Sources |
|---|---|---|---|---|---|
| Motor | "Third-party or comprehensive car insurance for eligible vehicles, with extra benefits depending on the policy you choose." | https://online.albuhaira.com/car-insurance/quote-car-insurance (200) | **Online.** 15-step wizard. First screen "Driver Details": Full Name, Email, Mobile (+971). Site steps: "Enter your details … Enter vehicle information … Review the quotation … Complete the process: Provide the requested documents and complete the applicable payment and policy issuance steps." Renewals use the same URL. "Additional documents may be required before final policy issuance." | Motor Insurance Sales 600535357 (`tel:600535357`); care@albuhaira.com | personal.motor-quote.1, personal.motor-quote.3, personal.motor-quote.4; personal.motor.3, personal.motor.28, personal.motor.31, personal.motor.33; contact.motor.1 |
| Medical | "Medical insurance for you, your family or a domestic worker. Benefits and network depend on the plan you choose." | https://online.albuhaira.com/medical-insurance/quote-medical-insurance (200) | **Online.** 4-step wizard. First screen "Personal Information": Full Name, Email, Mobile (+971). Later options include "Only me", "Only family", "Me and Family" and "Domestic worker", and all seven emirates. Site: "Customers can use Al Buhaira's online medical insurance quotation service to submit their details and review available options." | New Enquiries 06-5117446; med.quotation@albuhaira.com (plain text on the site) | personal.medical-quote.1, personal.medical-quote.2, personal.medical-quote.6, personal.medical-quote.8, personal.medical-quote.9; personal.medical.10 |
| Travel | "Travel insurance for eligible travellers from the UAE, for medical emergencies, baggage and other covered travel risks." | https://online.albuhaira.com/travel-insurance/quote-travel-insurance (200) | **Online purchase.** 6-step wizard. First screen "Personal Information". Site: "Al Buhaira's online travel insurance journey allows eligible customers to enter their travel and traveller information, review the available quotation and complete the applicable purchase process online." | Home & Travel Insurance 600548283 (`tel:600548283`) | personal.travel.2, personal.travel.3, personal.travel.7; personal.travel-quote.1, personal.travel-quote.2; personal.contact.7 |
| Home | "Building, contents, belongings and liability cover for eligible villas and apartments, for owners, landlords and tenants." | https://online.albuhaira.com/home-insurance/quote-home-insurance (200) | **Online.** 4-step wizard. First screen "Your Details". Site: "Eligible customers can use Al Buhaira's online home insurance quotation journey to provide their property details, select applicable coverage and review the available quotation." | Home & Travel Insurance 600548283 | personal.home.3, personal.home.4, personal.home.10; personal.home-quote.1, personal.home-quote.2 |
| Yacht | "Hull, machinery, personal effects and third-party liability cover for eligible yachts and pleasure craft." | https://online.albuhaira.com/yacht-insurance/quote-yacht-insurance (200) | **Online request.** 9-step wizard. First screen "Your Details". Site: "Eligible yacht owners can use Al Buhaira's online quotation journey to provide vessel information and request yacht insurance coverage." | GAP: no line is mapped to yacht. Use head office 06 517 4444; the yacht proposal form prints "Tel: 06 5174444". | personal.yacht.2, personal.yacht.9; personal.yacht-quote.1, personal.yacht-quote.2; personal.yacht.13 |
| Jet Ski | "Comprehensive or liability-only cover for eligible personal watercraft, depending on the Jet Ski and underwriting." | https://online.albuhaira.com/jet-ski-insurance/quote-jet-ski-insurance (200) | **Online request.** 9-step wizard. First screen "Your Details". Site: "Eligible customers can use Al Buhaira's online Jet Ski insurance quotation journey to provide their watercraft details and request available coverage." | GAP, as for yacht | personal.jetski.7, personal.jetski.10; personal.jetski-quote.1, personal.jetski-quote.2 |
| Not sure / all products | "See all products you can quote online." | https://online.albuhaira.com/ (200) | Product picker headed "Choose Your Insurance Product" (VERBATIM): Motor, Medical, Travel, Home, Jet Ski, Yacht. DO NOT USE its sub-line "Fast, simple, and secure — get your quote in minutes." | Head office 06 517 4444 | personal.portal.1 (corrected) |
| Motorcycle (secondary) | "Comprehensive or third-party cover for eligible motorcycles and riders." | `/enquiry` (200) | **Enquiry form:** Full Name, Mobile (+971), Email, Message. No product field, so users must name the product in the message. The page promises a quote but states no call-back or response time. | GAP: no line is stated for motorcycles | personal.motorcycle.2, personal.motorcycle.5 (corrected) |
| Personal Accident (secondary) | "Cover for specified benefits after accidental death or bodily injury, for individuals or groups." | `/personal-accident-insurance-quotation` (200) | **Call-back form:** Full name, Email, Mobile (+971), Insurance Product (pre-filled, read-only), Message. VERBATIM: "Kindly leave us your details below and one of our customer service representatives will contact you shortly." | GAP: no line stated | personal.pa.2, personal.pa.6 |

### 2.3 Business quote selector

Every business line's "Get a quote" opens the same short **"Quotation Request"** lead form: Full name, Email, Mobile (+971), a read-only pre-filled Insurance Product field, and Message. It has no file upload and no risk questions. VERBATIM page text: "Kindly leave us your details below and one of our customer service representatives will contact you shortly." The forms post to `/travel-form` (a shared POST-only handler); the prototype must not post to it. [business.enquiry.1 · `/property-insurance-quotation`; personal.pa.6]

| Line | Selector description (Suggested copy) | Best verified destination | Extra materials | Phone / email alternative | Sources |
|---|---|---|---|---|---|
| Group Medical | "Medical cover for employees and eligible dependants under one corporate policy." | `/group-medical-insurance-quotation` (200) | "Group Medical Quotation" PDF (200) | New Enquiries 06-5117446; med.quotation@albuhaira.com (the Medical Department's general new-enquiries row, not a group-specific line) | business.groupmedical.10, business.groupmedical.11, business.groupmedical.13; business.enquiry.1 |
| Group Life | "Life cover for your employees under one group policy, for groups of 10 or more." | `/group-life-insurance-quotation` (200) | "Group Life Quotation" DOCX (200) | Life Department lines printed in the DOCX only; confirm before use (Appendix B.2) | business.grouplife.3, business.grouplife.8; business.missed.4 |
| Credit Life | "Cover for lenders on borrowers' outstanding loan balances." | `/credit-insurance-quotation` (200; the form pre-fills "Credit Insurance") | | GAP: no line stated | business.creditlife.1 |
| Property | "Cover for buildings, contents, machinery and stock against insured events." | `/property-insurance-quotation` (200) | Sub-forms: `/property-all-risk-quotation` (200), `/business-interruption-quotation` (200) | GAP: no department stated. Head office 06 517 4444 | business.property.9, business.property.12; business.enquiry.1 |
| Engineering | "Separate covers for construction and installation projects, contractors' plant and machinery." | `/engineering-insurance-quotation` (200) | Sub-form: `/contractor-all-risks-quotation` (200) | GAP. Head office 06 517 4444 | business.engineering.1, business.engineering.6 |
| Motor Fleet | "One policy for your business's eligible vehicles." | `/motor-fleet-insurance-quotation` (200) | | GAP for quotes (the fleet page mentions "A dedicated team" but gives no number). Fleet claims: 600545457 | business.motorfleet.3, business.motorfleet.4, business.motorfleet.8 |
| Marine | "Cover for cargo, vessels and marine businesses." | `/marine-insurance-quotation` (200) | Five proposal forms (PDF, all 200) | Marine Insurance 06 5174487 (`tel:065174487`) | business.marine.7, business.marine.8; contact.helpline.8 |
| Aviation | "Hull and liability cover for aircraft operators." | `/aviation-insurance-quotation` (200) | Two aircraft proposal forms (PDF, 200) | GAP | business.aviation.1, business.aviation.4 |
| Liability | "Cover for eligible legal liabilities to customers, the public, employees and clients." | `/liability-insurance-quotation` (200; also used for Directors & Officers) | | GAP | business.liability.7, business.liability.13 |
| Energy | "Cover for oil and gas, petrochemical, power and utility businesses." | `/energy-insurance-quotation` (200) | | GAP | business.energy.5 |
| Miscellaneous | "Burglary, money, fidelity, plate glass, stock deterioration and more." | `/enquiry` (200): the line page has no quote button | Sub-product form verified: `/personal-accident-insurance-quotation` (200). Other sub-product forms were not status-checked (Appendix D.4). | GAP | business.misc.3; personal.pa.6 |

- **Business helper text (Suggested copy):** "Tell us what you need to protect. Leave your details and one of our customer service representatives will contact you." [business.enquiry.1]
- **Business fine print (VERBATIM):** "A quotation does not confirm that insurance has started. Cover begins only after the required information has been reviewed, the offered terms have been accepted and the applicable policy documents have been issued." [business.enquiry.3 · `/burglary-insurance`]

### 2.4 Selector behaviour

- **PROTOTYPE-ONLY:** the selector only routes to the destinations above. No pre-fill (the site exposes no supported parameters for the portal; GAP), no embedded portal, no form posting.
- Put "Personal" and "Business" in separate tabs, matching the site's two headings.
- Wording per route: "Get a quote online" for Motor, Medical, Travel and Home; "Request a quote online" for Yacht and Jet Ski (the site says owners "request" cover); "Request a quote" for business lines, Motorcycle and Personal Accident.
- Personal fine print (VERBATIM, under the selector): "A quotation does not confirm that insurance has started." [personal.pa.5 · `/personal-accident-insurance`]

---

## 3. Quick access

| Tile | Suggested copy | Destination | Numbers and links | Must keep | Sources |
|---|---|---|---|---|---|
| Make a claim | "Make a claim. Motor, non-motor or medical reimbursement." | `/claims` | Motor claims 600545457 (`tel:600545457`); motorclaims@albuhaira.com (`mailto:motorclaims@albuhaira.com`) | No speed claims. Motor claims need the accident report first. | claims.hub.2; claims.helpline.3; claims.motor.1, claims.motor.3 |
| Find a medical provider | "Find a provider. Search our in-house network by network type, emirate, provider type, speciality or keyword." | `/medical-network`, or the GET deep link in section 7.3 | Network enquiries 06-5117423; network@albuhaira.com | "Check the network on your medical insurance card before non-emergency treatment." (Suggested copy from the site's wording) | network.finder.1–network.finder.6; medteam.2; network.access.4, network.access.5 |
| Roadside assistance | "Roadside assistance. Call 8008181 if it's included in your motor policy." | `tel:8008181` | 8008181 | "where included". No hours or scope are published, so add none. | contact.helpline.4; claims.roadside.2, claims.roadside.4, claims.roadside.5 |
| Contact support | "Contact us. Call 06 517 4444 or email care@albuhaira.com. Medical: 06 511 7500." | `/head-office` | `tel:065174444`; `tel:065117500`; `mailto:care@albuhaira.com` | Label the hours as head-office hours: "Monday to Thursday, 8:00 a.m. to 5:00 p.m. (lunch break 1:30 to 2:00 p.m.); Friday, 8:00 a.m. to 12:00 noon; closed Saturday and Sunday." | contact.headoffice.1, contact.headoffice.2, contact.headoffice.3; contact.hours.1 |

Optional fifth tile: "Get a quote" to https://online.albuhaira.com/ (200). [personal.portal.1 (corrected)]

---

## 4. Personal insurance

- **Section heading (VERBATIM, current homepage):** "What do you want to insure?" [personal.overview.2 · `/`]
- **Section footnote (Suggested copy, merging the site's own qualifiers):** "Cover and benefits depend on the plan or policy you choose and remain subject to its limits, exclusions and conditions." [personal.motor.8; personal.medical.4; personal.travel.5; personal.home.6; personal.yacht.6; personal.jetski.6]

### 4.1 Card grid

| Card | Title (VERBATIM page H1) | Plain-English sentence (Suggested copy) | Benefit chips (Suggested copy; the qualifier stays on the chip) | Page | Sources |
|---|---|---|---|---|---|
| Motor | "Motor Insurance" | "UAE vehicle owners must keep valid motor insurance. Choose third-party cover for eligible claims from others, or comprehensive cover that may also pay for eligible damage to your own car." | Roadside assistance, where included · Personal accident benefit for eligible private vehicles, depending on policy · Online quote for eligible vehicles | `/motor-insurance` | personal.motor.2, personal.motor.4, personal.motor.5, personal.motor.6, personal.motor.27 |
| Medical | "Medical Insurance for You and Your Family" | "Medical insurance for individuals and families. What's covered, and which hospitals and clinics you can use, depend on your plan and its network." | Inpatient and outpatient options, depending on plan · Maternity where included in your plan · Optional worldwide cover on selected plans | `/medical-insurance` | personal.medical.1, personal.medical.3, personal.medical.5, personal.medical.6 |
| Travel | "Travel with Greater Confidence" | "Cover for eligible individuals and families travelling from the UAE, for medical emergencies, baggage and other covered travel risks. Best arranged before you leave." | Emergency medical expenses, depending on policy · Lost or delayed baggage, depending on policy · Trip cancellation or interruption, depending on policy | `/travel-insurance` | personal.travel.1, personal.travel.3, personal.travel.4; personal.missed.travel-buy-before-departure |
| Home | "Protect Your Home and Belongings" | "Cover for eligible villas and apartments in the UAE. Owners can protect the building and contents; tenants mainly need contents, belongings and tenant's liability cover." | Building and contents, depending on policy · Tenant's liability · Alternative accommodation where covered | `/home-insurance` | personal.home.1, personal.home.4, personal.home.5, personal.home.7 |
| Yacht | "Protect Your Yacht and Enjoy the Water" | "Cover for eligible yachts and pleasure craft while in use, stored or moored, chosen to suit your vessel, how you use it and where you cruise." | Hull, machinery and equipment, depending on policy · Third-party liability · Emergency towing and assistance, depending on policy | `/yacht-insurance` | personal.yacht.1, personal.yacht.3, personal.yacht.4, personal.yacht.5 |
| Jet Ski | "Protect Your Jet Ski on the Water" | "Comprehensive or liability-only cover for eligible personal watercraft owners in the UAE, depending on the Jet Ski and underwriting." | Accidental loss or damage, depending on policy · Theft and fire where covered · Third-party liability | `/jet-ski-insurance` | personal.jetski.1, personal.jetski.4, personal.jetski.5, personal.jetski.7 |

Each card's CTA and phone line come from section 2.2. Note: the live hero sub-titles render in Title Case through CSS, but the source text is sentence case. [personal notes, "Hero casing"]

### 4.2 Motor (`/motor-insurance`)

- **Hero (VERBATIM):** "Comprehensive and third-party motor insurance solutions in the UAE." [personal.motor.1]
- **Cover types (VERBATIM)**
  - Comprehensive: "Comprehensive motor insurance may provide coverage for eligible damage to your own vehicle together with third-party liability, theft, fire and other insured risks, subject to the policy terms and exclusions." [personal.motor.4]
  - Third-party: "Third-party liability insurance mainly provides protection against eligible legal liability for injury or property damage caused to third parties. It generally does not cover accidental damage to your own vehicle." [personal.motor.5]
  - Legal minimum: "At minimum, the applicable third-party liability insurance requirements must be met for vehicle registration and use." [personal.motor.14]
- **Benefits (VERBATIM; keep the framing)**
  - Standard: "Depending on the selected policy, additional benefits may include: Personal Accident Benefit for eligible private vehicles; Roadside Assistance" [personal.motor.6]
  - Gold: "Gold policy benefits may include: Personal Accident Benefit; Third Party Property Damage; Roadside Assistance; Natural Disaster, Storm and Flood; Strike, Riot and Civil Commotion; Personal Belongings; Emergency Medical Expenses; Windscreen Damage without Excess; Replacement of Locks; Valet Parking Theft; Car Replacement; Geographical Extension" [personal.motor.7]
  - Comprehensive extras: "Depending on the vehicle and selected package, additional benefits may include: Agency repair where available; Roadside assistance; Personal accident benefits; Natural-event coverage where included; Geographical extension; Replacement vehicle benefit where available" [personal.motor.19 · `/comprehensive-insurance`]
  - **Must sit with any motor benefit (VERBATIM):** "Benefits remain subject to the selected policy, eligibility, applicable limits, exclusions and policy conditions." [personal.motor.8]
  - The site only has the headings "Standard" and "Gold": no tier comparison and no prices (GAP).
- **What to know (VERBATIM)**
  - "Flood, storm or other natural-event damage is not automatically included under every comprehensive policy. Coverage may depend on the selected insurance package or an applicable extension." [personal.motor.20 · `/comprehensive-insurance`]
  - "Agency repair may be available for eligible vehicles under selected policies." [personal.motor.21]
  - "Available coverage depends on the vehicle, selected policy, underwriting requirements, excess, limits and applicable exclusions." [personal.motor.17]
  - Unified third-party policy wording: "This Policy does not apply outside the State." [personal.motor.35 · third-party policy PDF]
  - "Buying online does not automatically mean a lower premium." [personal.motor.29 · `/car-insurance-online`]
  - No registration yet: "a car insurance quotation may still be possible using available vehicle information such as the chassis number, make, model, year and vehicle value" [personal.motor.30 · `/how-to-buy-car-insurance-online`]
  - "Additional documents may be required before final policy issuance." [personal.motor.31]
- **Documents commonly requested (VERBATIM):** "Emirates ID or applicable identification documents; Valid UAE driving licence; Vehicle registration card; Previous insurance information where available; Vehicle make, model and year; Vehicle chassis number and other required vehicle details" [personal.motor.11]
- **Renewal (VERBATIM):** "Eligible customers can provide their vehicle and driver information online, review the available renewal coverage and premium, and complete the applicable insurance process digitally." The renewal CTA uses the same online motor quote URL. [personal.motor.33 · `/car-insurance-renewal`]
- **Offers (keep each qualifier with its offer)**
  - Promo code (VERBATIM): "Customers may request a special car insurance price from Al Buhaira Insurance by entering the promo code MOTOR during the applicable online purchase process." Qualifier (VERBATIM, required): "The offer is subject to eligibility, availability and current promotional terms. The final premium will depend on the driver, vehicle, selected coverage and underwriting assessment." [personal.missed.promo-code-motor; personal.missed.promo-qualifier · `/car-insurance-offer`]
  - Homat Al Watan (Suggested copy): "Eligible Homat Al Watan card holders can get 10% off the car insurance premium on an eligible policy. Eligibility is confirmed before the policy is issued. Subject to offer and policy terms." The page speaks only of purchases, so don't extend it to renewals. [affinity.homat.2; affinity.homat.3; missed.offers.homat_qualifiers · `/homat-al-watan-card-holders`]
  - Esaad and Fazaa (Suggested copy): "Eligible Esaad and Fazaa card holders can request a special rate when buying or renewing car insurance. Subject to eligibility and offer terms." No percentage is published. [affinity.esaad.2 · `/esaad-card`; affinity.fazaa.1 · `/fazaa-card-holders`]
  - Website terms, offers clause (VERBATIM): "Such promotional offers may only be applicable to certain select customers and by virtue of such offer being posted or being available on the Website does not entitle you to be eligible to claim/redeem such offer." [legal.terms.3 · `/terms-and-conditions`]
- **Quote:** online (section 2.2). **Calls:** Motor Insurance Sales 600535357; Motor Claims 600545457; Road Side Assistance 8008181 (where included).
- **Learn more (all 200):** `/comprehensive-insurance`, `/third-party-insurance`, `/car-insurance-renewal`, `/how-to-buy-car-insurance-online`, `/car-insurance-online`, `/compare-car-insurance`, and `/car-insurance-calculator`, which has no calculator: its button opens the online motor quote. [personal.missed.calculator-no-calculator] Policy wordings: "Motor Vehicle Insurance Policy Against Third Party" and "Motor Vehicle Insurance Policy Against Loss and Damage" (PDFs, 200). [personal.motor.15; claims.motor.22]

### 4.3 Medical (`/medical-insurance`)

- **Hero (VERBATIM):** "Medical Insurance for You and Your Family" / "Choose medical insurance solutions designed to support your healthcare needs with access to an extensive network of medical providers." [personal.medical.1, personal.medical.2]
- **Benefits (VERBATIM framing, provider count removed):** "Benefits vary depending on the selected medical insurance plan. Available options may include: Inpatient and outpatient treatment options; GP and specialist consultations; Radiology, laboratory tests and medicines; Maternity benefits where included in the selected plan; Optional dental, optical and other additional benefits; Optional worldwide treatment coverage on selected plans; 24/7 medical support services" [personal.medical.5 (corrected)]
  - Leave out the list's first item, "Access to more than 2,400 medical providers": it conflicts with "over 1500" on `/group-medical-insurance`. DO NOT USE. [personal.medical.5 (corrected); network.size.1 (corrected)]
  - "24/7 medical support services" is a plan-dependent option. Keep it inside this "may include" list and never next to a phone number. [mf.medins.qualifier]
- **Must sit with medical benefits (VERBATIM):** "Depending on the selected plan, medical insurance may provide access to inpatient and outpatient treatment, consultations, diagnostic services, medicines, maternity benefits and other healthcare services, subject to the applicable policy terms, limits and exclusions." [personal.medical.4]
- **What to know (VERBATIM)**
  - "Access generally depends on the medical provider network assigned to the selected plan. Check the applicable network before receiving non-emergency treatment." [personal.missed.network-dependency · `/individual-health-insurance`]
  - "Dental, optical and other additional benefits may be available as optional benefits on selected medical insurance plans." [personal.medical.8]
  - "Selected plans may provide optional worldwide coverage, subject to the applicable policy terms, geographical limits, reimbursement conditions and direct billing arrangements." [personal.medical.9]
  - "Maternity benefits may be available under selected plans, subject to applicable limits, waiting periods, co-payments and policy conditions." [personal.medical.20 · `/family-health-insurance`]

**Who it's for**

| Sub-page | Definition (VERBATIM) | Key qualifier (VERBATIM) | Sources |
|---|---|---|---|
| Individual `/individual-health-insurance` | "Individual health insurance provides medical coverage for one eligible person and helps the insured member access covered healthcare services through the medical network assigned to the selected plan." | "Coverage remains subject to the selected plan, medical necessity, provider network, limits, co-payments, exclusions and approval requirements." | personal.medical.14, personal.medical.16 |
| Family `/family-health-insurance` | "Al Buhaira provides medical insurance options for eligible spouses, children and other dependants, subject to residency, age, medical information and applicable plan requirements." | Who: "Spouse; Dependent children; Eligible parents where available; Other eligible dependants where permitted" | personal.medical.18, personal.medical.19 |
| Domestic helper `/domestic-helper-medical-insurance` | "Domestic helper medical insurance provides eligible household workers with access to covered healthcare services through an approved medical network. The sponsor or employer is generally responsible for arranging and maintaining the required medical insurance." | "In Dubai, residents must have health insurance that meets the applicable minimum-benefit requirements." | personal.medical.30, personal.medical.31 |
| Essential Benefits Plan `/essential-benefits-plans-ebp-medical-insurance` | "The Essential Benefits Plan, commonly known as EBP, is the minimum medical-insurance standard established for eligible residents in Dubai." | "EBP benefits are not unlimited." · "Members should use healthcare providers included in the specific medical network assigned to their policy. Out-of-network treatment may be restricted." | personal.medical.22, personal.medical.23; personal.missed.ebp-out-of-network |

- **EBP microcopy (Suggested copy):** "Essential Benefits Plan (EBP): the minimum medical-insurance standard for eligible residents in Dubai. EBP benefits are not unlimited, and other emirates may apply different rules." [personal.medical.22, personal.medical.23, personal.medical.24]
- **Quote:** online (section 2.2), or New Enquiries 06-5117446 / med.quotation@albuhaira.com. **Call:** Medical Insurance 06 5117500. [personal.medical-quote.9; contact.helpline.6]
- **Existing customers:** six "medical insurance service requests" (Insurance Certificates, Insurance Card Copy, Claim Status, Payment Status, Website & Mobile App Technical Assistance, Other Inquiries). Each is a call-back form: "Please submit your request, and one of our representatives will contact you soon." [eservices.1, eservices.2 · `/medical-insurance`]
- **Downloads (all 200):** Medical Application Form (individual; needs a passport copy with valid visa page, both sides of the Emirates ID and a Certificate of Continuity; valid for 30 days), Request for Confirmation of Cover, Medical Expenses Claim Form, Complaint Handling Procedure. [personal.medical.13, personal.medical.35; personal.missed.medical-form-validity]
  - DO NOT USE the plan names on the legacy "Application Form for Family Package Medical Insurance" scan (Plan A/B/C). [personal.medical.36]
- **Dubai feedback route:** "The iPROMeS interactive platform allows members to provide feedback, complaints, suggestions or compliments relating to healthcare service providers and relevant services in Dubai." Link https://www.isahd.ae/Home/Ipromes (200). [personal.medical.11; eservices.5]
- **GAP:** the plan names "Basic Plans", "Flexi Plans" and "Enhanced Plans" exist only in the online wizard's data, not on any main-site page; keep them off the homepage. [personal.medical-quote.3, personal.medical-quote.4, personal.medical-quote.5]

### 4.4 Travel (`/travel-insurance`)

- **Hero (VERBATIM):** "Travel with Greater Confidence" / "Travel insurance for eligible medical emergencies, baggage and other covered travel risks." [personal.travel.1, personal.travel.2]
- **Who (VERBATIM):** "Al Buhaira provides travel insurance options for eligible individuals and families travelling from the UAE, subject to the selected plan, destination and policy conditions." [personal.travel.3]
- **Benefits (VERBATIM):** "Depending on the selected policy, travel insurance may include: Emergency medical expenses; Emergency medical evacuation where covered; Trip cancellation or interruption; Lost or delayed baggage; Loss of passport or travel documents; Travel or flight delays; Personal liability where included; Other benefits based on the selected plan" [personal.travel.4]
- **Must sit with travel benefits (VERBATIM):** "Benefits remain subject to the applicable limits, exclusions, deductibles and conditions stated in the policy." [personal.travel.5]
- **What to know (VERBATIM)**
  - "Travel insurance is generally best arranged before departure. The applicable coverage start date and eligibility for events occurring before travel depend on the selected policy terms." [personal.missed.travel-buy-before-departure]
  - "If you are travelling to a Schengen country, appropriate travel medical insurance may be required as part of your visa application, depending on your nationality, visa type and applicable requirements." [personal.travel.6]
  - "The premium depends on factors such as destination, trip duration, traveller age, number of travellers and selected coverage." [personal.travel.9]
- **Quote:** online purchase (section 2.2). **Call:** Home & Travel Insurance 600548283. The travel and home proposal forms also print personallines@albuhaira.com (PDF only, not linked on the site). [personal.travel.15]
- **GAP:** no overseas emergency-assistance number or provider is published; 600548283 is not labelled an emergency line. [claims.nonmotor.3; contact.helpline.7]
- **GAP:** the plan tiers (Gold, Silver, Bronze), territorial limits and 7–90 day periods appear only on the proposal-form PDF; don't present them as current. The page title says "Worldwide & Schengen Cover" but the body never mentions worldwide cover, so don't claim it. [personal.travel.10, personal.travel.11, personal.travel.12, personal.travel.13]

### 4.5 Home (`/home-insurance`)

- **Hero (VERBATIM):** "Protect Your Home and Belongings" / "Home insurance for eligible villas, apartments, household contents, personal belongings and liability risks." [personal.home.1, personal.home.2]
- **Who (VERBATIM):** "Coverage can be suitable for homeowners, landlords and tenants, depending on the selected policy." [personal.home.3] · "Homeowners may require protection for both the residential building and its contents, while tenants may mainly require cover for household contents, personal belongings and tenant liability." [personal.home.7]
- **Benefits (VERBATIM):** "Depending on the selected policy, home insurance may include: Building protection; Home contents and household belongings; Personal belongings; Owner's or occupier's liability; Tenant's liability; Alternative accommodation where covered" [personal.home.5]
- **Must sit with home benefits (VERBATIM):** "Coverage remains subject to the applicable limits, exclusions, deductibles and conditions of the selected policy." [personal.home.6]
- **What to know (VERBATIM)**
  - "For tenants, coverage may also be available for eligible damage to the landlord's property for which the tenant is legally responsible." [personal.home.8]
  - "Certain policies may also provide protection for specified personal belongings outside the home, subject to the applicable policy terms and limits." [personal.home.9]
- **Home Shield proposal-form detail (product page only, not the homepage):** cover options Contents only, Contents and Buildings, or Buildings only; personal belongings "ONLY AVAILABLE WITH CONTENTS COVER"; tenant's liability defaults to up to AED 100,000, with upgrades to 250,000, 500,000 or 1 million; optional accidental damage carries a 20% loading on the basic rate or basic premium (not necessarily the total premium); single-article limits of AED 25,000 (contents) and AED 10,000 (personal belongings) unless items are specified; valuables capped at one third of the sum insured unless the schedule says otherwise; "Our liability does not commence until this Proposal has been accepted"; ABNIC may "ask for special terms or decline". [personal.home.13, personal.home.14, personal.home.15, personal.home.16 (corrected), personal.home.18; personal.missed.homeshield-belongings-limit, personal.missed.homeshield-valuables-cap, personal.missed.homeshield-acceptance]
- **Quote:** online (section 2.2). **Call:** Home & Travel Insurance 600548283.

### 4.6 Yacht (`/yacht-insurance`)

- **Hero (VERBATIM):** "Protect Your Yacht and Enjoy the Water" / "Yacht insurance for eligible hull, machinery, personal effects and third-party liability risks." [personal.yacht.1, personal.yacht.2]
- **What it does (VERBATIM):** "Yacht insurance helps protect your vessel against eligible physical damage and liability risks while it is being used, stored or moored, subject to the selected policy terms." [personal.yacht.3]
- **Benefits (VERBATIM):** "Depending on the selected policy, yacht insurance may include: Hull, machinery and equipment; Third-party liability; Personal effects where covered; Emergency towing and assistance; Wreck removal expenses; Medical payments where included; Pollution liability where applicable; Additional benefits subject to policy terms" [personal.yacht.5]
- **Must sit with yacht benefits (VERBATIM):** "Coverage remains subject to applicable limits, deductibles, exclusions, territorial limits and policy conditions." [personal.yacht.6]
- **What to know (VERBATIM)**
  - "If you plan to sail beyond the cruising area stated in the policy, additional approval or coverage may be required." [personal.yacht.7]
  - "Insurance requirements may vary according to the type of vessel, registration authority, marina requirements and intended use." Never call it mandatory. [personal.yacht.8]
  - Premium factors: "Type and size of yacht; Vessel value and age; Intended use; Cruising area; Mooring location; Previous claims history" [personal.yacht.11]
  - From the Marine section's yacht page: "Commercial charter, passenger transport, hire, reward or other business use is not automatically covered." and "Fire, theft, collision, grounding, storm or accidental damage are not automatically covered merely because the policy insures a yacht." [personal.missed.marine-yacht-private-use, personal.missed.marine-yacht-perils · `/yachts-and-pleasure-crafts`]
- **Quote:** online request (section 2.2). A second route exists in the Marine section: `/yachts-and-pleasure-crafts` with a call-back form at `/yachts-and-pleasure-crafts-quotation` (200). Use the Personal route on the homepage. Shared proposal form: "Yachts, Jet Ski and Pleasure Craft Proposal Form" (PDF, 200). [personal.jetski-quote.3]
- **Call:** GAP. No line is mapped to yacht; the site never says Marine Insurance 06 5174487 serves yacht owners. Use head office 06 517 4444. [personal.contact.8]

### 4.7 Jet Ski (`/jet-ski-insurance`)

- **Hero:** "Protect Your Jet Ski on the Water" (VERBATIM H1). The live sub-title lists theft without a qualifier, so use the Suggested copy in section 1.1 instead. [personal.jetski.1, personal.jetski.2]
- **What it is (VERBATIM):** "Jet Ski insurance, also known as personal watercraft insurance, helps protect your Jet Ski against eligible loss or damage and liability arising from its use." [personal.jetski.3]
- **Cover types (VERBATIM):** "Comprehensive Jet Ski insurance may provide eligible protection against physical damage to your personal watercraft together with third-party liability." · "Liability-only cover focuses primarily on eligible injury or property damage caused to third parties. The available option depends on the Jet Ski and underwriting requirements." [personal.jetski.8, personal.jetski.7]
- **Benefits (VERBATIM):** "Depending on the selected policy, coverage may include: Accidental loss or damage to the Jet Ski; Theft and fire where covered; Third-party liability; Personal accident benefits where included; Transit cover where applicable; Emergency assistance where included" [personal.jetski.5]
- **Must sit with jet ski benefits (VERBATIM):** "Coverage remains subject to policy limits, deductibles, exclusions, geographical limits and applicable conditions." [personal.jetski.6]
- **What to know (VERBATIM)**
  - "Theft may be covered under an applicable comprehensive Jet Ski insurance policy, subject to the policy conditions, exclusions and security requirements." [personal.jetski.12]
  - "Recreational use, open-water use, towing activities or competitive use may have different insurance requirements." [personal.jetski.9]
  - "Insurance requirements may depend on the applicable registration authority, location and intended use of the personal watercraft." Never call it mandatory. [personal.missed.jetski-no-blanket-requirement]
- **Quote:** online request (section 2.2). **Call:** GAP, as for yacht.

### 4.8 Also available

- **Motorcycle** (`/motorcycle-insurance`)
  - VERBATIM: "The main motorcycle insurance options in the UAE include comprehensive and third-party liability coverage for eligible motorcycles and riders." [personal.motorcycle.2]
  - VERBATIM: "Motorcycles require valid motor insurance as part of the applicable registration and road-use requirements in the UAE." [personal.missed.motorcycle-required]
  - Benefits (VERBATIM): "Depending on the selected policy, motorcycle insurance may include: Accidental damage to the insured motorcycle; Third-party bodily injury and property damage; Fire and theft where covered; Personal accident benefits where available; Natural-event coverage where included; Optional benefits subject to policy terms" [personal.motorcycle.3]
  - VERBATIM: "Modifications and accessories are not automatically covered." [personal.motorcycle.4]
  - Quote: enquiry form `/enquiry` (section 2.2). [personal.motorcycle.5 (corrected)]
- **Personal Accident** (`/personal-accident-insurance`)
  - VERBATIM: "Cover may be arranged for specified benefits following accidental death or bodily injury to insured individuals or group members." [personal.pa.2]
  - Qualifiers (VERBATIM): "A benefit is not automatically payable whenever an insured person is injured." · "Worldwide or 24-hour protection should not be assumed unless it is expressly stated." · "Personal Accident Insurance is not the same as Health Insurance." · "Cover begins only after the required information has been reviewed, the terms have been accepted and the applicable policy documents have been issued." [personal.pa.3, personal.pa.4, personal.pa.7; personal.missed.pa-cover-start]
  - Quote: call-back form `/personal-accident-insurance-quotation` (section 2.2). [personal.pa.6]

---

## 5. Business insurance

- **Section heading (VERBATIM, current homepage):** "What would you like to protect today?" On the live homepage the business area is a static wrapping card grid, not a carousel. [business.nav.3 (corrected) · `/`]
- **Section intro (Suggested copy):** "Insurance for businesses of every size, from your people and premises to your fleet, cargo and specialist risks." [business.hub.3 ("businesses of all sizes and industries"); business.motorfleet.1; business.marine.1]
- **Section fine print (Suggested copy, condensed from the site's wording):** "Cover is subject to underwriting and the issued policy terms, conditions and exclusions. A quotation does not confirm that cover has started." [business.enquiry.3; business.liability.5; business.motorfleet.12]
- **How to quote any line:** the "Quotation Request" call-back form (section 2.3).
- **Who to call:** the site names a team only for Group Medical (Medical Department), Group Life (Life Department, in a DOCX), Marine (marine team) and, by inference from the shared claims number, Motor Fleet (Motor Department). For every other line, use the head office line 06 517 4444 until ABNIC confirms. GAP. [business.groupmedical.3; business.missed.4; business.marine.6; business.motorfleet.3]

### 5.1 People

**Group Medical** (`/group-medical-insurance`)
- Live hero (VERBATIM, but don't reuse: it is a fragment with a stray comma): "Offers specially structured Group, Medical Insurance plans complying with specific needs of the leading corporate organizations in the UAE" [business.groupmedical.1]
- **Suggested copy:** "Medical cover for your employees and their eligible dependants under one corporate policy, with plans structured around your group's needs and budget, subject to the selected plan and policy terms." [business.groupmedical.6, business.groupmedical.13]
- Features (VERBATIM): "Inpatient and outpatient treatments including laboratory, radiology, drugs & medicine and surgical dressing services. Extended benefits in the UAE. Optional world-wide cover Emergency treatment while travelling for business and pleasure Wide spectrum of plans to suit your group budget" [business.groupmedical.6]
- Direct billing (VERBATIM): "Each member is issued a personalized membership card enabling him/her to secure the best medical care and the payment will be made by us directly to the medical provider." Pair it with (VERBATIM): "The member remains responsible for applicable co-payments, deductibles and expenses that are not covered by the policy." [business.groupmedical.9; claims.missed.6 · `/nas-third-party-administrator-tpa`]
- Larger groups (VERBATIM): "Groups of 50 or more employees can “mix and match” cover and have different levels of coverage within a group based upon the employee rank or business role" [business.groupmedical.8]
- Changing members (VERBATIM, FAQ): "staff and eligible dependents can usually be added or removed from a group medical policy as employees join or leave the organization, subject to the insurer’s procedures and policy conditions." [business.groupmedical.7 (corrected)]
- In-house team (VERBATIM): "Our full-fledged Medical Department consists of qualified Underwriters, Medical Doctors, Nurses/Pharmacist and Assistance staffs. We are catering our clients with our own Medical service provider Networks and as well as with different TPA Services." [business.groupmedical.3]
- Quote: `/group-medical-insurance-quotation` and the "Group Medical Quotation" PDF. Don't reuse the PDF's undated plan limits. [business.groupmedical.10; business.missed.20]
- Team: Medical Department, 06 511 7500, care@albuhaira.com; "New Enquiries 06-5117446 med.quotation@albuhaira.com"; the Medical & Life Department branch page gives 06 5117500, customerservice@albuhaira.com, "Timing: 8:00am to 5:00pm". [contact.medical.1; business.groupmedical.11; business.missed.5; claims.247.5]
- DO NOT USE: the network and staffing figures ("over 1500 medical providers … around 20 doctors, 5 pharmacists", "63 … hospitals", "593 accredited clinics", "51 Diagnostic Centre’s", "989 Pharmacies") or the outdated regulator name "HAAD". [business.groupmedical.2, business.groupmedical.4, business.groupmedical.5]

**Group Life** (`/group-life-insurance`)
- Live hero (VERBATIM): "Provides cover to group of people. Namely employees of a business organization, members of an association or any group under a single contract" [business.grouplife.1]
- **Suggested copy:** "Life cover for your employees under one group policy. Death due to any cause is the core benefit; disability and illness benefits are optional. For groups of 10 or more, with all eligible employees covered." [business.grouplife.3, business.grouplife.4; business.missed.4]
- Key rules (VERBATIM): "Under the Group Life Insurance Policy, it is mandatory that all the employees are required to be covered. In order to cover members in a Group Life, there will be always a requirement of minimum number of members at 10 employees." [business.grouplife.3] · FAQ: "A minimum number of members may be required, and eligibility is subject to underwriting and policy conditions." [business.missed.21]
- Ages (VERBATIM): entry "Minimum of age 18 years and maximum of age 64 years." Cover "18 to 65 years. Members above 65 years up to 70 years can be covered subject to policy terms and conditions." [business.grouplife.7]
- Benefits: Death due to Any Cause; Permanent Total Disability (sickness); Permanent Partial and Temporary Total Disability (accident or sickness); Medical Expenses due to Accident; Repatriation Expenses; Terminal Illness; Critical Illness. Conditions apply, for example "with the waiting period of 120/90 days and survival period is 30/60 days" for critical illness. The quotation form says "DAC is mandatory". [business.grouplife.4; business.missed.21; business.missed.4]
- Scope (VERBATIM): "Group Life Policy covers varied benefits on a worldwide & 24 hours basis." Pair with "depending on the selected cover" (the page's FAQ wording). [business.grouplife.2; business.grouplife.4]
- Quote: `/group-life-insurance-quotation` and the "Group Life Quotation" DOCX (required attachments: list of employees, claims experience, existing table of benefits). [business.grouplife.8; business.missed.4]
- Claims: "Life Insurance Claim Form" (PDF), "TO BE COMPLETED BY THE EMPLOYER". The page's "Personal Accident Claim Form" link is a dead `#`. [business.grouplife.8; business.missed.22]
- Team: Life Department lines printed in the DOCX only (Appendix B.2); confirm before publishing. [business.missed.4]

**Credit Life** (`/credit-life-insurance`)
- Live hero (VERBATIM): "Offers coverage to the lender to its borrowers, usually a bank or finance company, where the payout is the outstanding principal amount in the event of the death/disability of the debtor." [business.creditlife.1]
- **Suggested copy:** "For banks and finance companies: credit life cover on personal loans, credit cards and home finance that pays the outstanding loan balance if an eligible UAE-resident borrower dies or, where included, becomes disabled. Policy terms apply." [business.creditlife.1, business.creditlife.2, business.creditlife.3; business.missed.23]
- Products (VERBATIM): "Personal Finance/ Personal Loans; Credit Shield for Credit Card Holders; Mortgage Shield/Home Finance" [business.creditlife.2]
- Key features (VERBATIM): "Annually renewable contract; Coverage is on Outstanding loan balance at the time of assured’s death and/or disability; Life and disability protection; Borrower should be residents in UAE; Policy terms and conditions will apply." [business.creditlife.3]
- Disability (VERBATIM FAQ): "credit life insurance may include disability protection in addition to life coverage, subject to the policy wording, eligibility criteria, exclusions and terms and conditions." [business.missed.23]
- Quote: `/credit-insurance-quotation` (the form says "Credit Insurance"). Claims: Credit Life claim form and Credit Shield (ILOE) claim form, both DOCX. [business.creditlife.4]
- Team: GAP. CONFLICT: the page body also frames credit life as an employee benefit; ABNIC to confirm the target buyer. [business research gaps]

### 5.2 Property & Projects

**Property** (`/property-insurance`)
- Live hero (VERBATIM): "Provide a broader coverage including accidental physical loss of or damage to the Property." [business.property.1]
- **Suggested copy:** "Cover may be arranged for your buildings, contents, machinery and stock against insured events such as fire, flood and burglary with forcible entry. Business interruption cover for lost income is a separate policy." [business.property.2, business.property.9, business.property.11, business.property.12]
- What can be covered (VERBATIM): "Commercial / Residential Building / Tower; Hotel, Hospital, School; Industrial units including plant, machinery & stock; Shopping Complex / Mall" [business.property.5]

| Sub-product | Page | Description (VERBATIM) | Quote form | Sources |
|---|---|---|---|---|
| Property All Risk | `/property-all-risk` | "Cover may be arranged for eligible sudden and accidental physical loss or damage to declared buildings, contents and equipment." | `/property-all-risk-quotation` (200) | business.property.9 |
| Business Interruption | `/business-interruption` | "Cover may be arranged for eligible loss of gross profit and increased cost of working following physical damage insured under the related property policy." | `/business-interruption-quotation` (200) | business.property.12 |
| Hotel Comprehensive | Section on `/property-insurance` only | "This is a package solution for Hotel business owners." | `/property-insurance-quotation` | business.property.7; business.missed.3 |
| Terrorism & Sabotage | Section on `/property-insurance` | "Real and Personal Property of every kind, nature and description cover under this insurance against Terrorism and Sabotage which is normally an exclusion under all property insurance policies." | `/property-insurance-quotation` | business.property.8 |

- **Don't link** `/hotel-comprehensive`, `/fire-and-allied-perils` or `/fire-and-lightning`: all three return 200 but serve Business Interruption copy. GAP. [business.missed.1, business.missed.2]
- **Qualifiers (VERBATIM)**
  - "The value / sum insured must represent the reinstatement /replacement value of the property." [business.property.3]
  - "The term “all risk” does not mean that every incident or type of damage is insured." [business.property.10]
  - Property All Risk "does not automatically cover loss of revenue, gross profit, rental income, standing charges or additional operating expenses caused by an interruption." [business.property.11]
  - "The policy does not respond simply because a business cannot operate." [business.property.13]
  - Loss of Profit applies only after damage insured under a Property All Risks or Fire & Allied Perils policy. [business.property.6 (corrected)]
  - "Underinsurance: If declared values are lower than the value required by the policy, an average or underinsurance condition may reduce an otherwise eligible claim." [business.missed.17]
- After a loss (VERBATIM): "Notify Al Buhaira Insurance as soon as reasonably possible. ... Do not approve major repairs or disposal without prior agreement, except for urgent safety measures." [business.missed.18 · `/property-all-risk`]
- Quote: `/property-insurance-quotation`. Team: GAP.

**Engineering** (`/engineering-insurance`)
- Live hero (VERBATIM): "Covers unforeseen and sudden physical loss of or damage to insured items." [business.engineering.1]
- **Suggested copy:** "Separate covers may be arranged for construction and installation projects, contractors' plant and machinery breakdown, against sudden and unforeseen physical loss or damage not excluded by the policy." [business.engineering.2, business.engineering.3]

| Sub-product | Page | Description (VERBATIM) | Sources |
|---|---|---|---|
| Contractors' All Risks | `/contractor-all-risks` | "Cover may be arranged for principals, main contractors, subcontractors and other declared parties involved in construction projects." Quote: `/contractor-all-risks-quotation` (200). | business.engineering.6 |
| Erection All Risks | `/erection-all-risk` | "Cover may be arranged for principals, main contractors, subcontractors and other insured parties involved in eligible erection and installation projects." | business.engineering.8 |
| Machinery Breakdown | `/machinery-breakdown` | "Cover may be arranged for eligible sudden and accidental internal physical loss or damage to declared machinery and equipment." | business.engineering.9 |
| Electronic Equipment | `/electronic-equipment` | "Cover may be arranged for eligible electronic equipment, external data media and increased cost of working, subject to the issued policy." | business.engineering.10 |
| Contractors' Plant and Machinery | `/contractors-plant-and-machinery-all-risks` | "Cover may be arranged for declared cranes, lifting equipment, earthmoving machinery, road-construction equipment and other contractor plant." | business.engineering.11 |
| Machinery Loss of Profits | `/machinery-loss-of-profits` | "Protect Your Business Income After Machinery Breakdown" / "Cover eligible loss of gross profit and increased operating costs following an insured machinery breakdown." | business.engineering.12 |

- **Qualifiers (VERBATIM)**
  - "CAR Insurance is not necessarily compulsory for every construction project in the UAE. However, it may be required by a project contract, tender, client, lender, government authority, free zone or other relevant party." [business.engineering.7]
  - "Third-party liability is separate from material-damage cover." and "Cranes, excavators, loaders, generators and other contractor-owned or hired machinery are not automatically covered as contract works under every CAR policy." [business.missed.19]
  - "Each & every item must be declared for insurance with the current new replacement value, including all installation costs and customs duties." [business.engineering.13]
  - Deterioration of stock requires that "the cold storage facility in which the perishable goods are to be kept should be insured under a Machinery Breakdown Policy." [business.engineering.14]
- Quote: `/engineering-insurance-quotation`. Team: GAP.

### 5.3 Transport

**Motor Fleet** (`/motor-fleet-insurance`, the nav URL)
- Live hero (VERBATIM): "Offers flexible insurance solutions for a wide variety of fleet operators, ranging from small fleets up to large corporate clients." [business.motorfleet.1]
- **Suggested copy:** "One policy for your business's eligible vehicles, from company cars and vans to trucks and staff transport, with third-party or comprehensive fleet cover, subject to underwriting approval and policy terms." [business.motorfleet.4, business.motorfleet.5, business.motorfleet.6, business.motorfleet.12]
- Vehicles (VERBATIM): "Company cars; Delivery vans; Light commercial vehicles; Trucks and lorries; Employee transport vehicles; Other eligible vehicles used for business purposes" [business.motorfleet.5]
- Cover types: "Third-Party Liability Fleet Insurance" and "Comprehensive Fleet Insurance". Third-party fleet cover (VERBATIM) "does not usually cover damage to the insured fleet vehicles." [business.motorfleet.6; business.missed.13]
- Changes (VERBATIM): "Vehicles may be added to or removed from an existing fleet policy after the required details are submitted and approved by the insurer." · "Additional premium and policy conditions may apply." [business.motorfleet.7; business.missed.13]
- Documents (VERBATIM): "Valid company trade licence; Complete fleet vehicle list; Vehicle registration cards; Emirates ID of the authorised representative", plus driving licences and inspection certificates if required, and previous fleet insurance and claims history if available. [business.motorfleet.9]
- How to get it (site steps): Provide Fleet Details, Select Your Coverage, Submit the Documents, Review the Quotation, Complete the Payment ("Pay the applicable premium to complete the policy issuance process."). [business.missed.12 · `/motor-fleet`]
- Quote: `/motor-fleet-insurance-quotation`. Claims (VERBATIM): "In case of a Claim Call: 600545457"; claims follow the motor route `/motor-claims`. [business.motorfleet.3]
- Team: Motor Department (inferred from the shared claims number): sales 600535357 / care@albuhaira.com; claims 600545457 / motorclaims@albuhaira.com. The fleet page says "A dedicated team is available to assist with quotations, documentation, policy amendments, vehicle additions, and renewal enquiries." but gives no number (GAP). [business.motorfleet.8, business.motorfleet.10]
- CONFLICT: four fleet pages exist (`/motor-fleet-insurance`, `/motor-fleet`, `/fleet-insurance`, `/company-fleet-insurance`; all 200; the last three send "Get a Quote" to `/enquiry`). Link `/motor-fleet-insurance` from the homepage; ABNIC to choose a canonical page. [business.missed.14]
- DO NOT USE: "online services, including policy renewal, claims submission, and tracking" for fleets; "Fast claims settlement". [business.motorfleet.11; claims.timing.3]

**Marine** (`/marine-insurance`)
- Live hero (VERBATIM): "Marine Insurance for Cargo, Vessels and Marine Businesses" / "Protect your cargo, vessels and marine operations with insurance solutions designed for businesses and marine activities across the UAE." [business.marine.1]
- **Suggested copy:** "Cover for cargo in transit, commercial vessels and marine businesses such as freight forwarders, marina operators and ship repairers, tailored to your operation and subject to underwriting." [business.marine.2, business.marine.4, business.marine.5, business.marine.17]
- Who (VERBATIM): "cargo owners, importers, exporters, vessel owners, logistics companies, freight forwarders and other businesses involved in marine and transportation activities." [business.marine.2]
- Cargo (VERBATIM): "Depending on the nature and frequency of shipments, marine cargo insurance may be arranged for individual shipments or ongoing cargo movements, subject to underwriting requirements and policy terms." Marine Cargo has no page of its own. [business.marine.4]

| Sub-product | Page | Description (VERBATIM) | Sources |
|---|---|---|---|
| Marine Hull | `/marine-hull` | "Cover may be arranged for eligible physical loss or damage to declared commercial vessels, their machinery and specified collision liabilities." | business.marine.16 |
| Builder's Risks Hull | `/builder-risks-hull-insurance` | "Cover may be arranged for eligible physical loss or damage to vessels during construction, launching, testing and approved trial trips." | business.marine.13 |
| Freight Forwarders' Legal Liability | `/freight-forwarders-legal-liability` | "Cover may be arranged for eligible legal liabilities arising from declared freight forwarding, logistics and transport-related services." | business.marine.12 |
| Marine Liabilities (marina operators, boat dealers, ship repairers) | `/marine-liabilities` | "Cover may be arranged for eligible legal liabilities arising from declared marina, boat-dealing and vessel-repair operations." | business.marine.11 |
| Ship Repairers' Liability | `/ship-repairers-liability` | "Cover may be arranged for eligible legal liability arising from damage to customers’ vessels and third-party incidents during declared repair operations." | business.marine.15 |
| Yacht & Pleasure Craft | `/yachts-and-pleasure-crafts` | "Cover may be arranged on an agreed-value or current-market-value basis for eligible privately used yachts and pleasure craft." | business.marine.14 |

- Qualifier (VERBATIM): "Coverage can be tailored according to the nature of the business, type of cargo or vessel, operating requirements and applicable policy terms." [business.marine.17]
- How to quote (VERBATIM FAQ): "You can request a marine insurance quotation from Al Buhaira by providing details about the cargo, vessel or marine operation requiring coverage. Our team can review the information and advise on suitable insurance options, subject to underwriting." [business.marine.8]
- Quote: `/marine-insurance-quotation`, plus five proposal forms (PDF). [business.marine.7]
- Team: Marine Insurance 06 5174487 and Marine Claims 06 5174486 (helpline pop-up); the Marine Department page lists 06 517 4444 and care@albuhaira.com; the proposal and claim forms give marinedept@albuhaira.com. [business.marine.9 (corrected); business.enquiry.7; business.missed.10, business.missed.11]

**Aviation** (`/aviation-insurance`)
- Live hero (VERBATIM): "Provides coverage for hull losses as well as liability for passenger injuries, environmental and third-party damage caused by aircraft accidents." [business.aviation.1]
- **Suggested copy:** "Hull and liability cover for airlines and businesses that have special purpose aircraft fleets, with airport owners' and operators' liability also available." [business.aviation.2, business.aviation.3]
- Covers (VERBATIM): "Loss/Damage to the hull of the aircraft; Third party aviation liabilities; Personal accident cover for the third parties and passengers; Airport owners’ and operators’ liability; Aviation products liabilities; Hull war risk" [business.aviation.3]
- Proposal-form caveat (VERBATIM): "The completion of this Proposal Form in no way binds the Proposer to complete an Insurance. Insurers reserve to themselves the right to decline any proposal without assigning a reason." [business.missed.24]
- Quote: `/aviation-insurance-quotation`, plus two aircraft proposal forms (PDF). The "Pleasure craft form" on this page is misplaced. [business.aviation.4]
- Team: GAP.
- DO NOT USE: "It is a mandatory requirement for all aircraft owners and operators to have insurance coverage before operating any aircraft in the UAE airspace." (needs a legal check) and "over 40 years of experience". [business.aviation.5, business.aviation.6]

### 5.4 Specialist Risks

**Liability** (`/liability-insurance`)
- Live hero (VERBATIM): "Liability Insurance for UAE Businesses" / "Protect your business against eligible legal liabilities arising from third-party claims, professional services, employees and other business risks." [business.liability.1]
- Which cover fits (VERBATIM): "Customers or visitors – Public Liability Insurance; Products manufactured or supplied – Product Liability Insurance; Professional advice or services – Professional Indemnity Insurance; Employees and workplace risks – Workers' Compensation & Employers' Liability; Healthcare professionals – Medical Malpractice Insurance; Directors and senior management – Directors & Officers Liability" [business.liability.4]

| Sub-product | Page | Description (VERBATIM) | Sources |
|---|---|---|---|
| Public and Product Liability | `/public-and-product-liability` | "Protect your business against eligible third-party bodily injury and property damage claims arising from your operations or premises." | business.liability.8 |
| Workers' Compensation & Employers' Liability | `/workmen-compensation` | "Cover eligible liabilities arising from occupational injuries and diseases, subject to the issued policy." | business.liability.12 |
| Professional Indemnity | `/professional-indemnity` | "Protect engineers, consultants and other professionals against eligible claims arising from professional negligence, errors or omissions." | business.liability.10 |
| Medical Malpractice | `/medical-malpractice` | "Cover eligible claims arising from professional healthcare duties, subject to the issued policy." | business.liability.11 |
| Directors & Officers | `/directors-and-officers-liability-insurance` | "Directors & Officers Liability Insurance helps protect eligible directors and officers against claims arising from alleged wrongful acts while performing their management duties." (Page is not in sitemap.xml.) | business.liability.13 |

- **Qualifiers (VERBATIM)**
  - "Coverage is subject to the applicable policy terms, conditions, exclusions, deductibles and limits of liability." [business.liability.5]
  - "Liability Insurance requirements vary depending on the business, profession and activity involved. Certain types of cover may be required under UAE regulations, licensing conditions, contracts, tenders, leases or client requirements." [business.liability.6]
  - "Public Liability Insurance is not universally mandatory for every business in the UAE." [business.liability.9]
  - Workers' compensation: "UAE labour law establishes employer obligations for occupational injuries and diseases. A separate insurance requirement may also arise from licensing, free-zone, contractual, tender or other applicable requirements." [business.missed.29]
- Quote (VERBATIM): "Businesses can submit their details through Al Buhaira's Liability Insurance quotation page for review based on their activities and insurance requirements." `/liability-insurance-quotation`. [business.liability.7]
- Team: GAP.

**Energy** (`/energy-insurance`)
- Live hero (VERBATIM, contains a superlative; prefer the Suggested copy): "Offer bespoke insurance products and the highest levels of service across the upstream and midstream sectors of the oil and gas industry." [business.energy.1]
- **Suggested copy:** "Cover for oil and gas, petrochemical, power and utility businesses that may include property damage, business interruption and liability, subject to policy terms." [business.energy.2, business.energy.5]
- Coverages (VERBATIM): "material damage, business interruption, contingent business interruption, and downstream liabilities." [business.energy.2]
- Qualifier (VERBATIM FAQ): "Energy insurance provides protection for businesses operating in sectors such as oil and gas, petrochemicals, power generation, utilities and renewable energy. Coverage may include property damage, business interruption, liability and other industry-specific risks, subject to policy terms." [business.energy.5]
- Quote: `/energy-insurance-quotation`. Team: GAP.
- DO NOT COPY the live H1 "Energy Insurance in the Insurance" or the list of competitor insurers on the page. [business.energy.4]

**Miscellaneous** (`/miscellaneous-insurance`)
- Site description (VERBATIM): "Our Miscellaneous insurance solutions safeguard your company from loss or damage caused by employee fraud or dishonesty (Fidelity Guarantee), money loss (Money), accidental breakage of glass (Plate Glass) at your location, or accidental death or disablement of staff (Personal Accident)." · "We also have complete solutions for Bankers & Exchange Houses, as well as Bullion Trades like Jewellers & Gold Merchants." [business.misc.1, business.misc.2]
- **Suggested copy:** "Cover for specific business risks: burglary with forcible entry, money, employee dishonesty, plate glass, stock deterioration after an insured refrigeration breakdown and staff personal accident, plus packages for banks, exchange houses and jewellers." [business.misc.1, business.misc.2, business.misc.4, business.misc.10]

| Sub-product | Page | Description (VERBATIM) | Sources |
|---|---|---|---|
| Burglary | `/burglary-insurance` | "Cover may be arranged for eligible loss of or damage to declared property following burglary involving violent and forcible entry into or exit from insured premises." | business.misc.4 |
| Money | `/money-insurance` | "Cover may be arranged for eligible loss of declared money while in transit, on business premises or secured in an approved safe." | business.misc.5 |
| Fidelity Guarantee | `/fidelity-guarantee` | "Cover may be arranged for eligible direct financial loss caused by specified dishonest or fraudulent acts of insured employees." | business.misc.6 |
| Bankers Blanket | `/bankers-blanket` | "A package policy for eligible banks and financial institutions covering specified financial-crime, money and securities risks." | business.misc.7 |
| Jewellers Block | `/jewellers-block` | "Cover may be arranged for eligible loss or damage to declared gold, jewellery, precious stones and other property used in the jewellery trade." | business.misc.8 |
| Plate Glass | `/plate-glass` | "Cover may be arranged for eligible accidental breakage of declared fixed glass at showrooms, offices, shops and other insured premises." | business.misc.9 |
| Deterioration of Stock | `/deterioration-of-stock` | "Cover may be arranged for eligible deterioration of declared temperature-sensitive stock following an insured breakdown of refrigeration or cold-storage machinery." | business.misc.10 |
| Personal Accident | `/personal-accident-insurance` | "Cover may be arranged for specified benefits following accidental death or bodily injury to insured individuals or group members." | personal.pa.2 |

- Qualifier (VERBATIM FAQ): "These policies can help protect businesses and individuals against specific losses, liabilities or damages, subject to the policy terms and conditions." [business.misc.11]
- Quote: the line page has no quote button; use `/enquiry` or the sub-product forms (section 2.3). Live card typos to fix: "burgalry Insurance", "Deteriation Of Stock". [business.misc.3]
- Team: GAP.

### 5.5 Business team contacts

| Team (site wording) | Phone | Email | Address | Hours | Lines it serves (as stated) | Sources |
|---|---|---|---|---|---|---|
| Head Office | "Motor, Marine and FGA Call: 06 517 4444" (`tel:065174444`); "Medical Call: 06 511 7500" (`tel:065117500`) | care@albuhaira.com | 6th Floor, Buhaira Insurance Towers, Khalid Lagoon, Buhaira Corniche, Sharjah; P.O. Box 6000 | Mon–Thu 8:00 a.m.–5:00 p.m. (lunch 1:30–2:00 p.m.); Fri 8:00 a.m.–12:00 noon; Sat–Sun closed | General; default for lines with no named team | business.enquiry.4, business.enquiry.5 |
| Fire And General Accident Insurance Department | 06 517 4444 | care@albuhaira.com | 6th Floor, Al Buhaira Tower, Buhaira Corniche, Sharjah Near Al Noor Mosque; P.O. Box 6000; Fax 06 574 8855 | Same | GAP: the page lists no products | business.enquiry.6 |
| Marine Insurance Department | 06 517 4444 (page); helplines 06 5174487 (insurance) and 06 5174486 (claims) | care@albuhaira.com; marinedept@albuhaira.com (forms only) | Same building | Same | Marine | business.enquiry.7; business.marine.9 (corrected); business.missed.11 |
| Motor Insurance Department | Sales 600535357; Claims 600545457 | care@albuhaira.com; motorclaims@albuhaira.com | Motor Insurance Underwriting, Ground Floor, Al Buhaira Tower; Motor Claims Department, Rolla | Same | Motor; fleet claims | business.motorfleet.10 |
| Medical Insurance Department | 06 511 7500; New Enquiries 06-5117446 | care@albuhaira.com; med.quotation@albuhaira.com | 3rd Floor, Al Buhaira Building, Rolla, Sharjah | Same | Group Medical | contact.medical.1; business.groupmedical.3, business.groupmedical.11 |
| Medical & Life Department (branch page) | 06 5117500 | customerservice@albuhaira.com | 3rd Floor, Al Buhaira Building, Rolla Branch, Near Sharjah Fort (Al Hisn), Sharjah | "Timing: 8:00am to 5:00pm" | Medical and life (by name) | business.missed.5; claims.247.5 |
| Life Department (Group Life Quotation DOCX) | Head of Life +971 6 5117407; Life Underwriting Supervisor +971 6 5117465; Life Underwriter +971 6 5117427 | | | | Group Life. Printed in the DOCX only; confirm before use. | business.missed.4 |
| Abu Dhabi Branch – Motor & Non-Motor Insurance | 02 622 6200; WhatsApp 054 792 6321 (the site wires it as `tel:0547926321`) | adbbranch@albuhaira.com | 5th Floor, Sultan International Tower, Corniche Street, Abu Dhabi | "Timing: 8:00am to 5:00pm" | Motor and non-motor, Abu Dhabi | business.missed.6; missed.branch.abu_dhabi |

---

## 6. Claims

- **Live hub (VERBATIM):** heading "Make a Claim"; intro "Making a claim on your motor, medical, or other insurance policy is simple and easy, and we'll guide you through the process." [claims.hub.1 · `/claims`]
- **Section intro (Suggested copy, preferred because it drops the unquantified "simple and easy"):** "Make a claim. Choose your claim type and we'll guide you through the process." [claims.hub.1, claims.hub.2]
- **Section fine print (VERBATIM):** "Claims are assessed according to the policy terms and conditions." [personal.missed.travel-claims-assessed · `/travel-insurance`; claims.nonmotor.3]
- **Show steps as a static explainer only.** No motor or non-motor claim can be tracked online, and medical "Claim Status" is a call-back request, so a progress bar or "current step" design would imply tracking that doesn't exist. [claims.status.1; claims.status.8]

| Route | Card label (VERBATIM) | Where it leads | What happens next (site wording) | Main contacts | Sources |
|---|---|---|---|---|---|
| Motor | "Motor Claim" | `/motor-claims`: online form plus phone, WhatsApp and email | "one of our customer service representatives will guide you through your claim." | 600545457; motorclaims@albuhaira.com | claims.hub.2; claims.motor.1 |
| Medical reimbursement | "Medical reimbursement Claim" | `/medical-reimbursement-form`: online form, PDF form, email | ABNIC reviews the claim "before confirming whether the claim is payable." | 600 545459 (guidance); claims@albuhaira.com | claims.hub.2; claims.medical.3, claims.medical.11 |
| Non-motor | "Non-Motor Claim" | `/non-motor-claim`: online claim request form | "one of our customer service representatives will guide you through your claim." | None on the page (GAP); head office 06 517 4444 | claims.hub.2; claims.nonmotor.1 |

### 6.1 Motor claim (`/motor-claims`)

- **Before you start (VERBATIM):** "If your vehicle is involved in an accident, report the incident to the relevant authority and obtain the required accident report before submitting your motor insurance claim." [claims.motor.3 · `/motor-insurance`]
- **Steps as the site states them (VERBATIM, `/motor-insurance`)**
  1. "Report the accident: Obtain the official accident report from the relevant authority."
  2. "Submit your motor claim: Provide the required accident, driver and vehicle information to Al Buhaira."
  3. "Provide supporting documents: These may include the accident report, driving licence, vehicle registration and insurance information."
  4. "Follow the claims instructions: Follow the assessment or repair instructions provided by the Al Buhaira Motor Claims team."
  [claims.motor.4]
- **Documents (VERBATIM):** "Documents may include the official accident report, driving licence, vehicle registration card and applicable insurance information. Additional documents may be requested depending on the circumstances of the claim." [claims.motor.6]
- **Theft (VERBATIM, policy wording):** "In case of theft or any other criminal act which may give rise to a claim according to this Policy, the Insured shall notify the police and the Company promptly and as soon as practically possible and cooperate with the Company in this respect." [claims.motor.19 · loss and damage policy PDF]
- **Where it leads (VERBATIM, `/motor-claims`):** "For claims requests: Fill out below online form Call: 600545457 Whatsapp: 50 107 9830 Email: motorclaims@albuhaira.com and one of our customer service representatives will guide you through your claim." On the live page only the email is a link; the phone and WhatsApp numbers are plain text. [claims.motor.1]
- **Online form fields (VERBATIM labels):** Full Name; Email; Mobile No. (+971, placeholder "5x xxx xxxx"); Policy No.; Choose File (several files allowed); Message; Submit. It posts to `/motor-claim` (POST-only); the prototype must not submit. [claims.motor.2]
- **Follow-up (VERBATIM):** "To submit or follow up on a claim, visit our Motor Insurance Claims page." There is no online tracker (GAP). [claims.motor.5]
- **Contacts:** Motor Claims Toll 600545457 (`tel:600545457`); motorclaims@albuhaira.com; WhatsApp "50 107 9830" (hold until ABNIC confirms the international format; Appendix B); walk-in offices: Motor Claims (Main) – Rolla, 06 568 4000, "Timing: 8:00am to 5:00pm"; Abu Dhabi – Motor Claims & Accounts, 02 622 6200. CONFLICT: the Rolla office is on the "Ground Floor" per `/motor-insurance-department` and the "2nd Floor" per `/motor-claims-rolla` and `/insurance-sharjah`. [claims.motor.11, claims.motor.13, claims.motor.14; claims.issue.2]
- **Fleet claims** use the same route: "In case of a Claim Call: 600545457". [business.motorfleet.3]
- **Not a claims service:** `/adnoc-vehicle-inspection-centers` describes ADNOC Distribution's roadworthiness testing for registration and renewal. Don't present it as an ABNIC claims or inspection step. [claims.inspection.1, claims.inspection.2, claims.inspection.4]

### 6.2 Medical reimbursement (`/medical-reimbursement-form`; guide `/medical-reimbursement`)

- **What it is (VERBATIM):** "Medical reimbursement allows an insured member to request repayment of eligible medical expenses that were paid directly to a healthcare provider." [claims.medical.1]
- **Must appear on this route (VERBATIM):** "Reimbursement is subject to the member’s medical insurance coverage, provider network rules, benefit limits, co-payments, exclusions and claim requirements. Paying a medical bill does not automatically guarantee reimbursement." and "Al Buhaira Insurance will review the completed claim form, supporting documents and policy benefits before confirming whether the claim is payable." [claims.medical.2, claims.medical.3]
- **When a request may be considered (VERBATIM):** "You Paid for Treatment: The insured member received medical treatment and paid the healthcare provider directly." · "The Treatment Is Eligible: The medical service falls within the selected policy’s benefits, limits and geographical coverage." · "Required Approval Was Obtained: Prior authorisation was received where required by the policy." · "Supporting Documents Are Available: The member can provide the required invoices, receipts, prescriptions, medical reports and investigation results." [claims.medical.4]
- **Steps as the site states them (VERBATIM)**
  1. "Download the Claim Form: Download and complete the Al Buhaira Medical Reimbursement Form."
  2. "Complete All Required Fields: Provide the patient, policy, treatment, diagnosis, healthcare provider and bank details requested in the form."
  3. "Ask the Doctor to Complete the Medical Section: The treating physician should complete the clinical information, diagnosis and treatment details, then sign and stamp the form."
  4. "Attach the Supporting Documents: Include the itemised invoices, payment receipts, prescriptions, medical reports and other applicable documents."
  5. "Submit the Claim: Send the completed form and supporting documents to claims@albuhaira.com or submit them through the online medical reimbursement form."
  6. "Keep the Claim Reference: Retain the email confirmation, claim reference or batch number for future claim-status and payment enquiries."
  [claims.medical.5]
- **Documents for treatment inside the UAE (VERBATIM):** "Completed Medical Reimbursement Form; Itemised medical invoices; Receipt or other proof of payment; Applicable prescriptions; Diagnostic investigation results; Patient’s Emirates ID and insurance details; UAE bank account and IBAN details" [claims.medical.6]
- **Extra documents (VERBATIM):** "Inpatient Treatment: Submit the discharge summary and operation-theatre notes, where applicable." · "Treatment Outside the UAE: Submit the same supporting documents in Arabic or English. Documents in another language should be translated into English." · "Physiotherapy: Include a referral from an orthopaedic specialist or neurologist." · "Speech Therapy: Include a referral from the treating doctor." [claims.medical.7]
- **Deadline (VERBATIM):** "Submission Deadline: Submit the claim within the period stated in the policy terms." No number is published. [claims.medical.8]
- **Also (VERBATIM FAQ):** "Is every medical expense reimbursable? Ans: No. Reimbursement depends on policy coverage, medical necessity, provider-network rules, benefit limits, exclusions and applicable approval requirements." [claims.missed.7]
- **Where it leads (VERBATIM, `/medical-reimbursement-form`):** "For Medical Reimbursement: Fill out below form or call 600545459 and one of our customer service representatives will guide you through your claim." [claims.medical.11]
- **Online form fields (VERBATIM labels):** Patient’s Name; Patient’s Insurance ID No; Patient’s Emirates ID; Date of Treatment; Place of Treatment; Requested Claim Amount; Principal Bank Details (Principal Bank Name, Principal Emirates ID, Principal Bank Account No., Principal IBAN No.); Principal Mobile No. (+971); Principal Email; Choose File (several files allowed); Message; Submit. It posts to `/medical-reimbursement` (POST). Two live field names don't match their labels, so don't copy the field names. [claims.medical.12; claims.missed.22]
- **PDF form:** `/assets/pdfs/downloads/reimbursement-form.pdf` (200), "(All Fields Mandatory)", with a section to be completed by the physician. [claims.medical.13]
- **Next step:** keep the claim reference, then use the status and payment request forms (section 6.4). [claims.medical.5; claims.status.3]
- **Contacts:** guidance line 600 545459 (no link on the site); Claims Reimbursement 06-5117470, claims@albuhaira.com (plain text on the site). [claims.medical.9, claims.medical.14]
- **Direct billing:** group medical members show a membership card and "the payment will be made by us directly to the medical provider", but "The member remains responsible for applicable co-payments, deductibles and expenses that are not covered by the policy." For plans run by NAS: "Does NAS approval guarantee full claim payment? Ans: No." [business.groupmedical.9; claims.missed.6; claims.medical.19]
- **Don't copy:** the "Get a Quote" button on `/medical-reimbursement`, which opens the reimbursement claim form. [claims.issue.6]

### 6.3 Non-motor claim (`/non-motor-claim`)

- **The only step the page gives (VERBATIM):** "For Non-motor claims requests: Fill out below form and one of our customer service representatives will guide you through your claim." [claims.nonmotor.1]
- **Online form fields (VERBATIM labels):** Full Name; Email; Mobile No. (+971); Insurance (pre-filled "Non Motor Claims"); Policy No.; Choose File (several files allowed); Message; Submit. It posts back to `/non-motor-claim`. [claims.nonmotor.2]
- **Documents by product (VERBATIM)**
  - Travel: "If an insured event occurs during your trip, notify the appropriate assistance or claims channel as soon as reasonably possible and keep the supporting documents related to the event. Depending on the claim, documents may include medical reports, invoices, receipts, airline confirmations, police reports or evidence of baggage loss or delay." [claims.nonmotor.3]
  - Home: "If your home or belongings suffer an insured loss or damage, notify the appropriate claims channel as soon as reasonably possible and retain supporting information relating to the incident. Depending on the claim, supporting documents may include photographs, invoices, receipts, repair estimates or reports from the relevant authorities." [claims.nonmotor.4]
  - Property (FAQ): "contact your insurer as soon as possible and provide them with all the necessary information about the incident. They will guide you through the claims process and may require you to provide additional information or documentation to support your claim." [claims.nonmotor.5]
  - Jet Ski (FAQ): "Notify the appropriate claims channel as soon as reasonably possible and provide the required information and supporting documents. Claims are assessed according to the applicable policy terms and conditions." [claims.nonmotor.6]
- **Marine:** the cargo and hull claim forms (PDF, 200) say "Please complete this form and return together with attachments to marinedept@albuhaira.com" (they also name an individual's mailbox; don't publish it). The cargo form lists 9 documents (original policy or certificate, bill of lading or waybill, invoices, police report for theft or traffic accident, photographs and more); the hull form lists 14. VERBATIM caveat: "This form is issued 'without prejudice' and admission of any liabilities subject to the terms, conditions and warranties of relevant policy." Marine Claims line: 06 5174486. [claims.nonmotor.7, claims.nonmotor.8, claims.nonmotor.9; business.missed.10; claims.missed.18; contact.helpline.9]
- **Group Life and Credit Life:** "Life Insurance Claim Form" (PDF; "THIS FORM IS TO BE COMPLETED BY THE EMPLOYER"); Credit Life and Credit Shield (ILOE) claim forms (DOCX). [business.grouplife.8; business.missed.22; business.creditlife.4]
- **Contacts:** GAP: the page gives no phone or email. Use the head office: "Motor, Marine and FGA Call: 06 517 4444", care@albuhaira.com. [claims.nonmotor.1; claims.nonmotor.11]

### 6.4 Status and follow-up

| Need | Destination | How it works (VERBATIM) | Fields | Sources |
|---|---|---|---|---|
| Medical claim status | `/claim-status` | "Medical Claims Status: Please submit your request, and one of our representatives will contact you soon." | Patient’s Name; Patient Emirates ID; Principal Email; Principal Mobile Number (+971); Details (no claim-reference field) | claims.status.1 |
| Reimbursement payment | `/payment-status` | "Medical Claims - Reimbursement Payment Inquiries: Please submit your request, and one of our representatives will contact you soon." | As above, plus "Batch No. / Claim Reference Number" | claims.status.2 |
| Motor follow-up | `/motor-claims` | "To submit or follow up on a claim, visit our Motor Insurance Claims page." | Phone, email, form | claims.motor.5 |
| Non-motor follow-up | GAP | No status route is published. | | claims.status.8 |

- Hours on the medical request forms (VERBATIM): "Monday to Thursday: 8:00 A.M. to 5:00 P.M. Friday: 8:00 A.M. to 12:00 P.M. Saturday and Sunday: Closed" [claims.status.1]
- The live `/claims` hub doesn't link the status forms (only `/medical-insurance` does). Add them to the redesigned claims area. [claims.hub.3; claims.missed.8]
- The ABNIC Health Vault store listing claims "Know the status of your claims" for medical members; see section 9.1. [claims.status.4]

### 6.5 If something goes wrong: complaints

- **Form (VERBATIM):** "Please simply fill out the form here below and we will be in touch with you as soon as possible." Fields: Full Name, Email, Mobile No. (+971), Policy Number, Type of Policy (free text), Complaint. [complaints.process.1, complaints.form.1 · `/register-complaint`]
- **Printed contact:** "Phone: 06-511 7281 Working Hours: Monday to Friday, 8.30 am to 5 pm." It sits beside an individual's mailbox, so confirm before publishing either. [complaints.process.1, complaints.hours.1]
- **Procedure:** the "Complaint Handling Procedure" PDF (200) is a one-page flowchart: receive by landline, toll free or email; register; analyse; investigate and monitor; communicate; resolve; if the customer is not satisfied, "Escalate to higher management". It gives no timelines. [missed.complaints.procedure_pdf]
- **Dubai healthcare providers:** iPROMeS (section 4.3). [missed.complaints.ipromes]
- **After resolution:** `/customer-satisfaction-survey` ("Customer Satisfaction Feedback After Complaint Resolution"). [complaints.feedback.1]
- **GAP:** no regulator escalation route is linked. The 2025 Sustainability Report names the Sanadak website for regulatory escalation and says ABNIC provides "clear guidelines and direct links to the appropriate authorities", but `/register-complaint` has no such link. Medical complaint numbers also conflict (Appendix B.2). [about.missed.24; contact.medical.4]

### 6.6 Timing statements found on the site (all flagged)

| Statement (VERBATIM) | Where | Type | Homepage use |
|---|---|---|---|
| "Fast & Hassle-free Claim process." | `/` | Unquantified speed claim | DO NOT USE |
| "Al Buhaira Insurance has a fast and efficient claims processing system that aims to provide prompt and fair compensation to the policyholder." | `/property-insurance` | Marketing | DO NOT USE |
| "Fast claims settlement: In the event of an accident, Al Buhaira insurance has a fast and efficient claims settlement process, ensuring that you get the compensation you need as quickly as possible." | `/motor-fleet-insurance` | Marketing | DO NOT USE |
| "It also means providing them with fast and effective online claims handling." | `/digital-services` | Marketing | DO NOT USE |
| "Efficiency in handling claims" | `/group-medical-insurance` | Marketing | DO NOT USE |
| "Fast, simple, and secure — get your quote in minutes." | https://online.albuhaira.com/ | Quote speed | DO NOT USE |
| "24/7 Medical claims support center." | `/` | Availability claim with no number or channel | DO NOT USE until ABNIC supplies the channel |
| "we will get back to you regarding your request." | `/medical-reimbursement-form` | Response, no timeframe | Acceptable |
| "one of our representatives will contact you soon." | `/claim-status`, `/payment-status`, other request forms | Response, no timeframe | Prefer "will contact you" |
| "one of our customer service representatives will contact you shortly." | Quotation request forms | Response, no timeframe | Prefer "will contact you" |
| "we will be in touch with you as soon as possible." | `/register-complaint` | Response, no timeframe | Prefer "we will be in touch with you" |
| "notify … as soon as reasonably possible" | `/travel-insurance`, `/home-insurance`, `/jet-ski-insurance` | Customer obligation | Acceptable in claims guidance |
| "Submit the claim within the period stated in the policy terms." | `/medical-reimbursement` | Customer obligation, no number | Acceptable |
| "No lawsuit arising from this Policy may be filed after the elapse of three years …" | Loss and damage policy PDF | Legal time bar | Detail pages only |
| "The standard vehicle test may take approximately 10 minutes …" | `/adnoc-vehicle-inspection-centers` | ADNOC's test time, not a claim time | DO NOT USE |
| "ABNIC will respond to your request within the time limits set by the UAE PDPL (usually within 30 days)." | Data Subject Request Form PDF | Data-request response | Legal pages only |

[claims.timing.1–claims.timing.10; claims.247.1; personal.portal.1 (corrected); business.enquiry.1; complaints.process.1; missed.privacy.dsr_placeholder]

### 6.7 Unified motor policy points (FAQ or detail pages only, never as homepage promises)

- Late notice: "the Insurance Company may not refuse to compensate the Insured as a result of late notification of the accident, if the delay is attributed to an acceptable excuse." [claims.missed.9 · loss and damage policy PDF]
- Third-party claimants "may submit a claim to the Company for compensation", and "The Company may not apply any deductible from the Injured Third Party compensation." [claims.missed.11 · third-party policy PDF]
- "Neither the Insured nor any person acting on their behalf may declare acceptance of liability, offer, promise or payment of any amount without the written consent of the Company." [claims.missed.10]
- At-fault deductibles under Schedule 3 range from a maximum of AED 350 to AED 4,500 per accident, with additional deductibles in some cases (for example drivers under 25). [claims.missed.12]
- Valuation disputes: the Authority appoints a licensed loss assessor "at the expense of the company". [claims.missed.15]
- After an accident or breakdown, take precautions; damage made worse by driving before repair "will not be the responsibility of the Company". [claims.missed.14]
- If the vehicle is unroadworthy after insured damage, "the Company will bear the necessary costs of safeguarding and transporting the Motor Vehicle to the nearest repair shop". [claims.motor.20]

---

## 7. Medical network

### 7.1 Homepage finder block (Suggested copy)

- **Heading:** "Find a provider in our medical network"
- **Body:** "Search our in-house network for hospitals, medical centres, pharmacies, dental and optical centres, labs and doctors by network type, emirate, provider type, speciality or keyword." [network.finder.2–network.finder.6; network.finder.10 (corrected); network.finder.14 ("Medical Network (Inhouse)")]
- **Disclaimer (built from the site's wording):** "The network assigned to your policy decides which providers you can use. Check the network on your medical insurance card before non-emergency treatment." [network.access.2, network.access.4, network.access.5]
- **TPA line:** "Is your plan administered by a third-party administrator (TPA)? Check your card, then use your TPA's network. Not sure? Call ABNIC Network on 06-5117423 or email network@albuhaira.com." [network.access.1; tpa.page.1; medteam.2]
- **Button:** "Search the network" (submits the GET request in 7.3).

### 7.2 Controls the live finder supports

The live finder at `/medical-network` is a plain server-rendered GET form, `<form method="get" action="https://www.albuhaira.com/medical-network">`, with these five controls and a "Submit" button (the live "Reset" link returns to `/medical-network`). [network.finder.1, network.finder.6]

| Control (live label) | Parameter | Submit values, exactly as on the site | Suggested display label | Sources |
|---|---|---|---|---|
| Network Type | `networkType` | (empty = any), `COMPREHENSIVE`, `COMPREHENSIVE PLUS`, `LIMITED`, `RESTRICTED`, `STANDARD` | Network type | network.finder.2 |
| Emirates | `emirate` | (empty), `ABU DHABI`, `AJMAN`, `AL AIN`, `DUBAI`, `FUJAIRAH`, `RAK`, `SHARJAH`, `UAQ` | Emirate (show "Ras Al Khaimah" for RAK and "Umm Al Quwain" for UAQ, but submit the site values) | network.finder.3 |
| Provider Type | `providerType` | (empty), `DAY SURGERY CENTER`, `DENTAL`, `HOSPITAL`, `LAB & DIAGNOSTIC` (encode as `LAB+%26+DIAGNOSTIC`), `MEDICAL CENTER`, `OPTICAL CENTER`, `PHARMACY`, `REHABILITATION` | Provider type | network.finder.4; mf.finder.encoding |
| Speciality | `speciality` | (empty), `E.N.T. SPECIALIST`, `AYURVEDIC`, `CARDIOLOGIST`, `CUPPING THERAPIST`, `DENTIST`, `DERMATOLOGIST`, `ENDOCRINOLOGIST`, `FAMILY MEDICINE`, `GASTROENTOLOGIST`, `GENERAL PRACTITIONER`, `GENERAL SURGERY`, `GYNAECOLOGIST`, `HOMEOPHATHIC MEDICINE`, `INTERNAL MEDICINE`, `NEPHROLOGIST`, `NEUROLOGIST`, `OPHTHALMOLOGIST`, `ORTHOPEDICIAN`, `PAEDIATRICIAN`, `PHYSIOTHERAPIST`, `PSYCHIATRIST`, `RHEUMATOLOGIST`, `SURGEON`, `SPEECH THERAPIST`, `UROLOGIST` (25; misspellings are the site's and must be submitted as-is) | Speciality (display labels may correct spelling; submitted values must not change) | network.finder.5 |
| Keyword | `keyword` | Free text. Matches provider names, doctor names, location text and phone numbers. | Hospital, clinic, doctor or area | network.finder.6; network.finder.10 (corrected); mf.finder.keyword |

- Values tested live: `STANDARD`, `COMPREHENSIVE`, `SHARJAH`, `DUBAI`, `PHARMACY`, `LAB & DIAGNOSTIC`, `CARDIOLOGIST`, `DENTIST`, and keywords `AHALIA`, `KAZRAGI`, `TRIVENI`, `06-5614751`. The other values are copied from the live option list; check them once during the build. [network.finder.9; network.finder.10 (corrected); mf.finder.duplicates; mf.finder.encoding; mf.finder.doctors]

### 7.3 Deep-link pattern (supported)

- Pattern: `https://www.albuhaira.com/medical-network?networkType=&emirate=&providerType=&speciality=&keyword=`
- Verified examples (all 200, selections kept on the results page):
  - `https://www.albuhaira.com/medical-network?networkType=STANDARD&emirate=SHARJAH&providerType=PHARMACY&speciality=&keyword=`
  - `https://www.albuhaira.com/medical-network?networkType=&emirate=&providerType=&speciality=&keyword=AHALIA`
  - `https://www.albuhaira.com/medical-network?networkType=&emirate=&providerType=&speciality=CARDIOLOGIST&keyword=`
  - `https://www.albuhaira.com/medical-network?networkType=&emirate=DUBAI&providerType=LAB+%26+DIAGNOSTIC&speciality=&keyword=`
- Results paginate 10 rows per page with `?page=N`, and the page links keep the filters. [network.finder.8 (corrected), network.finder.9]

### 7.4 What the results show, and what the finder can't do

- Result columns: Sr., Network, Emirate, Speciality, Doctor, Provider, Tel-No., Location. Provider type is a filter, not a column. Speciality and Doctor are blank on facility rows but filled on doctor rows (a speciality filter returns named doctors and their clinic). [network.finder.7 (corrected); mf.finder.doctors]
- Each row is a provider-per-network or doctor entry, so the same provider appears once per network (BADAR PHARMACY appears five times). The page shows no result count. Never turn page or row totals into a provider count. [network.finder.8 (corrected); mf.finder.duplicates]
- No data API or JSON endpoint; no map, distance, geolocation, export or "last updated" date. [network.finder.11 (corrected); network.finder.6]
- The page has no H1 (only an H2 "Medical Network"), and its labels point to ids the controls don't have. Fix both in the redesign. [mf.finder.a11y]
- GAP: the site never explains the network types or says which plans or cards use which network.
- PROTOTYPE-ONLY: any autocomplete, "near me", map, result preview or count on the homepage.

### 7.5 TPA route (`/medical-network-tpa`)

- VERBATIM intro: "Appointed networks of TPA for essential benefits plans." The page is a static table of four TPAs, with app badges and a "View Network" button each. [tpa.page.1, tpa.page.2]

| TPA | Android app | iOS app | Network link | Status and note | Sources |
|---|---|---|---|---|---|
| NextCare | https://play.google.com/store/apps/details?id=com.nextcare.app (200; app now named "Lumi by Nextcare") | https://apps.apple.com/ae/app/mynextcare/id1039800748 (200 after redirect to the "Lumi by Nextcare" listing) | https://www.nextcarehealth.com/network-updates/?country=uae (200) | Working | tpa.nextcare.1, tpa.nextcare.2 |
| FMC | https://play.google.com/store/apps/details?id=com.fmc.app (404) | https://apps.apple.com/ae/app/fmc-network/id1575177329 (200, "FMC NETWORK") | https://www.fmcnetwork.net/provider-network (200) | Android link broken | tpa.fmc.1 |
| Aafiya | https://play.google.com/store/apps/details?id=com.aafia (404) | https://apps.apple.com/ae/app/aafiya/id1294022513 (404) | https://aafiya.ae/aafiya-network.php (404) | All three broken | tpa.aafiya.1 |
| NAS | https://play.google.com/store/apps/details?id=nas.logicbeanzs.com.mynas&hl=en&pli=1 (200, "myNAS") | https://apps.apple.com/ae/app/mynas-app/id1185831667 (200, "myNAS App") | https://www.nas.ae/ (200; the NAS homepage, not a search) | No network search; NAS's own https://www.nas.ae/provider-networks/ (200) is informational only and ABNIC doesn't link it | tpa.nas.1, tpa.nas.2 |

- Keep Aafiya listed by name (it is still an appointed TPA), but don't link its three broken links; show the fallback contact instead ("Call ABNIC Network on 06-5117423"). Don't link the FMC Android app either. [tpa.aafiya.1; tpa.fmc.1; medteam.2; copy problem noted by the fact-checker]
- NAS explainer page: `/nas-third-party-administrator-tpa`. VERBATIM: "NAS is a Third Party Administrator (TPA), rather than the insurance company itself." · "For eligible Al Buhaira medical insurance policies assigned to NAS, Al Buhaira remains the insurer while NAS may support services such as medical provider network access, prior approvals, claims administration and member assistance." · "Check your medical insurance card: Look for the NAS name or logo and the assigned medical network." [nas.page.1, nas.page.2, nas.page.4]

### 7.6 Policy-dependence wording bank (VERBATIM; use one line near any network feature)

- "The network assigned to your medical insurance policy determines which hospitals, clinics, pharmacies, diagnostic centres and other healthcare providers may be available to you." [network.access.2 · `/nas-third-party-administrator-tpa`]
- "A healthcare provider appearing within one NAS network does not necessarily mean that it is available under every NAS-administered insurance plan." [network.access.3]
- "Before receiving non-emergency treatment, confirm the network assigned to your policy." [network.access.4]
- "Not every Al Buhaira medical policy uses NAS. Members should check their medical insurance card, policy schedule or applicable member information to confirm the assigned TPA and medical network." [network.access.1]
- "Confirm that the hospital, clinic, pharmacy or specialist is included in the network stated on your medical insurance card." [network.access.5 · `/essential-benefits-plans-ebp-medical-insurance`]
- "Al Buhaira customers can access an extensive network of hospitals, clinics, diagnostic centres and pharmacies, depending on the selected medical insurance plan and network." [network.access.7 · `/medical-insurance`]
- "Network access may differ according to the selected plan and geographical coverage." [network.access.8 · `/individual-health-insurance`]
- "Access generally depends on the healthcare provider network assigned to the selected plan. Emergency and out-of-network provisions depend on the applicable policy." [mf.family.outofnetwork · `/family-health-insurance`]
- "Out-of-network treatment may be restricted." [mf.ebp.limits · `/essential-benefits-plans-ebp-medical-insurance`]

### 7.7 Network contacts

| Need | Number | Email | Sources |
|---|---|---|---|
| Network enquiries | 06-5117423 | network@albuhaira.com | medteam.2 |
| Pre-authorisation | CONFLICT: 06-5117510 (`/contact-medical-team`) against 06-5117500 (`/medical-insurance-department`) | approvals@albuhaira.com | medteam.3; mf.contact.conflict |
| Medical customer service | 06-5117500 | customerservice@albuhaira.com | medteam.1 |

---

## 8. Trust

### 8.1 Founding statement

- **Live statement (VERBATIM, `/about-us`):** "Established in May 1978, Al Buhaira National Insurance Company (ABNIC) has grown into one of the leading insurance providers in the UAE and a name synonymous with reliability, quality, and outstanding customer service." It contains an unsupported superlative ("one of the leading"); use only if ABNIC approves it. [about.founding.1]
- **Suggested copy (safer):** "Established in May 1978 in Sharjah, Al Buhaira National Insurance Company (ABNIC) is a public shareholding company listed on the Abu Dhabi Securities Exchange." [about.founding.1, about.founding.3; about.legal.1; about.listing.1, about.listing.4]
- **Heritage line (Suggested copy):** "Incorporated in Sharjah on 16 May 1978 by Emiri Decree of His Highness the Ruler of Sharjah." [about.founding.3, about.founding.4]
- **Short form:** "Since 1978" (the homepage card reads "Excellent service since 1978."). [about.founding.6]

### 8.2 Intro paragraph (Suggested copy)

"We insure individuals, families and businesses across the UAE, from motor, medical, travel and home cover to property, engineering, marine, aviation, energy and liability insurance." [about.missed.28 (audited statements: "property, engineering, motor, marine and aviation, miscellaneous, accidents, group life and medical"); about.presence.1 (product list only); personal.overview.1]

### 8.3 Credentials, with dates

| Credential | Wording to use (Suggested copy unless marked) | Date | Status | Sources |
|---|---|---|---|---|
| Stock exchange listing | "Listed on the Abu Dhabi Securities Exchange (ADX), symbol ABNIC" | Listed 16 February 2005 | Safe. CONFLICT on `/financial-marketing`, which shows "Date of listing 16/05/1978" (the incorporation date). | about.listing.1, about.listing.2; about.missed.1; about.listing.3 |
| Regulator registration | "Registered in the Insurance Companies Register of the Central Bank of the UAE (registration number 15)" | As stated in the FY2025 audited statements (published 31 Mar 2026) | Appears only in the Integrated Report PDF, not on any HTML page. ABNIC to confirm the exact footer wording (GAP). The FY2020 report shows the same number 15 under the former Insurance Authority. | about.regulator.1; about.missed.1 |
| Legal form | "Al Buhaira National Insurance Company (P.S.C.)" | Public shareholding company since 16 May 1978 | Safe | about.legal.1; about.founding.3 |
| Industry membership | "Member of the Emirates Insurance Association" | UNDATED (stated on `/about-us` and in the 2025 Sustainability Report) | Safe; no date given | about.membership.1, about.membership.2 |
| Governance record | VERBATIM: "no material violations were recorded, nor were any regulatory sanctions imposed on the Company during the financial year ended 31 December 2025." | FY2025 | Investor pages only, not the homepage (the same year's statements carry a qualified opinion and a solvency breach) | about.missed.10; about.caution.1, about.caution.2 |
| Financial-strength rating | None | n/a | GAP: no rating agency, grade or date in any source | about.ratings.1 |
| ISO or similar certification | None | n/a | GAP | trust research gaps |

### 8.4 Awards, with dates

| Year | Award (wording to use) | Awarding body | Status | Sources |
|---|---|---|---|---|
| 2020 | "Customer Happiness Medal, Insurance Authority (2020)" | Insurance Authority | Safe. The homepage card is undated ("Customer Happiness Medal awarded by the Insurance Authority."), so always add the year. | about.awards.2, about.awards.5, about.awards.7 |
| 2020 | "Recognised by the Insurance Authority for domestic investments (2020)". VERBATIM on `/about-us`: "The most distinguished company in the percentage of domestic investments inside the Country by the Insurance Authority 2020" | Insurance Authority | Safe | about.awards.3, about.awards.7 |
| 2023 (CONFLICT) | "Health Insurer of the Year, 8th InsureTek Golden Shield Excellence Awards 2023" (news item published 24 Feb 2023) | InsureTek | ABNIC to confirm: `/about-us` says "Health Insurer of the year - Insuretek 2022"; the company profile says "Health Insurer of Excellence by the Insuretek 2022 & 2023". | about.awards.6, about.awards.8; about.awards.1; about.awards.7 |
| 2022–2023 season | "Honoured by Sharjah Sports Club for sponsoring the 2022–2023 season" (news item published 22 Jun 2023) | Sharjah Sports Club | Community recognition; past tense only | about.awards.9, about.awards.13 |
| UNDATED | "Recognized and awarded by the insurance Authority" (2025 Sustainability Report) | Insurance Authority | Undated; don't use on its own | about.awards.10 |

Not awards: the 30th GIMIC Annual Insurance Dinner (attendance only), DWIC participation and the Public Art Abu Dhabi Biennial location. [about.awards.11, about.awards.12]

### 8.5 Dated milestones (timeline)

| Date | Milestone (Suggested copy) | Sources |
|---|---|---|
| 16 May 1978 | Incorporated in Sharjah as a public shareholding company by Emiri Decree of His Highness the Ruler of Sharjah | about.founding.3, about.founding.4 |
| 16 Feb 2005 | Listed on the Abu Dhabi Securities Exchange | about.missed.1; about.listing.1 |
| 2020 | Customer Happiness Medal and domestic-investments recognition from the Insurance Authority | about.awards.2, about.awards.3 |
| June 2021 | First Sustainability Report published, covering FY2020 (not "2020": the report says "This report has been issued in June 2021") | about.missed.2; about.milestones.1 |
| Feb 2023 | Health Insurer of the Year, InsureTek Golden Shield Excellence Awards 2023 (year to be confirmed, see 8.4) | about.awards.6, about.awards.8 |
| Jun 2023 | Honoured by Sharjah Sports Club for the 2022–2023 season | about.awards.9, about.awards.13 |
| Aug 2023 | New branch opened in Ras Al Khaimah. Use the current address from `/car-insurance-rak`; the 2023 news item's address and phone are out of date. | about.milestones.2, about.milestones.3; about.missed.19; missed.branch.rak |
| Nov 2023 | Sponsor of the Sharjah International Book Fair 2023 | about.news.5 |
| 31 Mar 2026 | 2025 Integrated Report and Sustainability Report published (sustainability reports now cover 2020 to 2025) | about.ir.5; about.sustainability.1 |

- UNDATED, don't use: operations started "in November" (the profile prints no year). [about.founding.5]
- Leave off the timeline: "returning to profitability" in 2025, board nominations and executive changes. [about.milestones.4, about.milestones.5; about.missed.4, about.missed.5]

### 8.6 Mission, vision, values

- **Vision (VERBATIM, consistent across sources):** "To be the preferred insurance provider in the region." [about.vision.1]
- **Mission (VERBATIM, website and 2025 Sustainability Report):** "To provide the right insurance services coupled with integrated solutions that meet customer needs." CONFLICT: the 2026 company profile uses a different mission; two sources back the website wording. [about.mission.1; about.missed.11; about.mission.2]
- **Values (VERBATIM):** "Our values are integrated in our shield: S – Security H – Honesty I – Integrity E – Excellence L – Leadership D – Dependability" [about.values.1]
- **Values line (Suggested copy):** "Our values form our SHIELD: Security, Honesty, Integrity, Excellence, Leadership, Dependability."

### 8.7 "Why choose us" items

| Live homepage card (VERBATIM) | Decision | Sources |
|---|---|---|
| "Excellent service since 1978." | Use | about.founding.6 |
| "Customer Happiness Medal awarded by the Insurance Authority." | Use, with "(2020)" added | about.awards.5, about.awards.2 |
| "Provides a wide range of covers to suit clients’ insurance needs." | Use | about.why.4 |
| "Digital services to make your life easy." | Use | about.why.5 |
| "Fast & Hassle-free Claim process." | DO NOT USE (unquantified speed claim) | about.why.2; claims.timing.1 |
| "24/7 Medical claims support center." | DO NOT USE until ABNIC supplies the 24/7 channel (GAP) | about.why.3; claims.missed.3 |

- **Suggested replacements:** "Listed on the Abu Dhabi Securities Exchange" [about.listing.1] and "Member of the Emirates Insurance Association" [about.membership.1].
- **Intro line (VERBATIM):** "Why choose us? We're here to help you better understand your risk exposures and how insurance can protect you." [about.why.1]

### 8.8 Partnerships and community

- **Partners line (Suggested copy):** "Built on long-standing relationships with strategic partners, including international reinsurers." No partner or reinsurer is named in text; the profile shows logos only. [about.partnership.3, about.partnership.4]
- **Affinity schemes:** Homat Al Watan and Esaad partnerships, plus a Fazaa offer page (section 4.2 and 11.3). [affinity.page.1; affinity.fazaa.1]
- **Community (Suggested copy, past tense):** "Sponsor of Sharjah Sports Club for the 2022–2023 season." [about.news.4; about.awards.9]
- **Emiratization (Suggested copy, site spelling):** "We take part in Tawteen, the national Emiratization program run by the Ministry of Human Resources and Emiratization (MoHRE)." [about.emiratization.2] Percentages (16% in 2023, 19% in 2024, 29.72% in 2025) change yearly; investor pages only. [about.emiratization.4]

---

## 9. Digital services

### 9.1 App: ABNIC Health Vault

- **Name and maker:** "ABNIC Health Vault" (App Store subtitle "Insurance Application"), by Al Buhaira National Insurance Co. It is ABNIC's only app on either store. [app.ios.1; app.android.1; app.dev.1]
- **Store links (both 200):**
  - Google Play: https://play.google.com/store/apps/details?id=abnic.albuhairainsurance.net&hl=en
  - App Store: https://apps.apple.com/ae/app/abnic-health-vault/id1491122963
  [home.app.2, home.app.3; app.links.1]
- **Capabilities stated in both store listings (VERBATIM):** "Find nearby network providers on the map." · "Electronic Reimbursement Claims Deposit Through Mobile" · "Feature to upload and view claim documents." · "Know the status of your claims" [app.features.1]
- **Latest release (VERBATIM, v2.1.1, 24 Jul 2026):** "Added UAE PASS support for sign in and sign up." [app.features.2]
- **Stated on the website only:** "They no longer need to bring their actual health insurance cards to the medical providers; instead, they can simply display their digital insurance card and access benefits." The store listings don't list a digital card, and the NAS page says to present "your valid Emirates ID and medical insurance card or digital card where applicable". [digital.svc.8; nas.page.5]
- **Suggested copy:**
  - Heading: "ABNIC Health Vault"
  - Body: "Our health insurance app. Find nearby network providers on the map, submit reimbursement claims, upload claim documents and check the status of your claims. Sign in with UAE PASS."
  - Digital card line: "Where applicable, show your digital insurance card with your Emirates ID."
  - Footnote: "Features as described in the app store listings. Reimbursement remains subject to your policy."
  [app.features.1, app.features.2; digital.svc.8; nas.page.5; claims.medical.2]
- **Badge alt text (Suggested copy; the live badges have none):** "Get ABNIC Health Vault on Google Play" and "Download ABNIC Health Vault on the App Store". [home.app.2, home.app.3, home.app.4]
- **Support:** in-site help form `/website-mobile-app-assistance` (call-back). CONFLICT: the store description gives "+ 97165117500 or customerservice@albuhaira.com", while the Google Play support panel gives "+97165117555". [eservices.4; app.support.1, app.support.2]
- **GAPs:** the site never says which members can use the app (plans run by a TPA have their own apps, section 7.5); the App Store privacy-policy link goes to a 404; the two stores' privacy declarations conflict; the release-note feature "Dawaa" is never explained. [app.support.3; mf.app.privacy; app.features.4]

### 9.2 Online portal (https://online.albuhaira.com)

- **Live heading (VERBATIM):** "Choose Your Insurance Product"; products Motor, Medical, Travel, Home, Jet Ski, Yacht. Page title on all portal pages: "Buy Insurance Online - Al Buhaira Insurance". [personal.portal.1 (corrected); personal.portal.2]
- **Digital Services description (VERBATIM, written in the future tense):** "The online portal will allow ABNIC website users to quickly and easily enter information, choose an insurance policy package, receive a price quote, process an online payment, and get an insurance policy." [digital.svc.10]
- **Suggested copy:** "Get a quote online for motor, medical, travel, home, yacht and jet ski insurance. Eligible motor and travel customers can complete their purchase online." Only the motor and travel pages describe completing payment and issuance online; medical and home describe reviewing a quotation; yacht and jet ski describe requesting cover. [personal.motor.28; personal.travel.7; personal.medical.10; personal.home.10; personal.yacht.9; personal.jetski.10]
- DO NOT USE: "Fast, simple, and secure — get your quote in minutes." [personal.portal.1 (corrected)]

### 9.3 Medical service requests (call-back forms, not self-service)

| Request (site name) | Page | Sources |
|---|---|---|
| Insurance Certificates | `/insurance-certificates` | eservices.1 |
| Insurance Card Copy (form heading "Insurance E-Card Copy:") | `/insurance-card-copy` | eservices.1, eservices.3 |
| Claim Status | `/claim-status` | eservices.1; claims.status.1 |
| Payment Status | `/payment-status` | eservices.1; claims.status.2 |
| Website & Mobile App Technical Assistance | `/website-mobile-app-assistance` | eservices.1, eservices.4 |
| Other Inquiries | `/other-inquiries` | eservices.1 |

- How they work (VERBATIM): "Please submit your request, and one of our representatives will contact you soon." Hours on five of the forms: "Monday to Thursday: 8:00 A.M. to 5:00 P.M. Friday: 8:00 A.M. to 12:00 P.M. Saturday and Sunday: Closed". CONFLICT: `/other-inquiries` says "Our office hours are from 8:30 A.M. to 5:00 P.M., Monday to Friday." [eservices.2; mf.eservices.otherhours]
- Label them "Medical service requests", never "self-service". [eservices.2]

### 9.4 Portals by audience

| Audience | Portal | Status | Use | Sources |
|---|---|---|---|---|
| Customers | Online portal, https://online.albuhaira.com | 200 | Homepage | digital.svc.10 |
| Medical members | `/medical-network`; ABNIC Health Vault | 200 | Homepage | digital.svc.4; app.links.1 |
| Members of TPA-run plans | `/medical-network-tpa` and TPA apps | 200 (some links 404) | Link | tpa.page.1 |
| Healthcare providers | https://provider.albuhaira.com/ | 403 | Partner area only, if ABNIC confirms | digital.svc.2 |
| Brokers | Motor Brokers portal; Home Insurance Broker Portal; Medical Brokers portal | Unreachable or no URL | GAP | digital.svc.1, digital.svc.3, digital.svc.9 |
| Tenants of ABNIC property | Rental Portal; Tenant Portal | Unreachable or no URL | GAP | digital.svc.5, digital.svc.6 |
| ABNIC employees | Employee self-services | No URL | Don't show | digital.svc.7 |

### 9.5 Digital claims to avoid

- The Digital Services meta description promises "complete policy renewals, and track claims seamlessly from anywhere". Medical claim status is a call-back form, and motor and non-motor claims can't be tracked. (Online renewal does exist for car insurance, and the app listing claims claim status.) [digital.meta.1 (corrected)]
- The fleet page's "online services, including policy renewal, claims submission, and tracking" is unsupported. [business.motorfleet.11]
- The company profile's "ABNIC Smart App" and "WhatsApp Business" have no details anywhere. [digital.profile.1]

---

## 10. FAQ

All five answers are Suggested copy built only from the cited facts. Keep the qualifiers if you shorten them.

**1. How do I choose the right insurance?**
Start with what you want to protect. For your car, UAE vehicle owners must keep valid motor insurance: third-party cover protects you against eligible claims from others, while comprehensive cover may also pay for eligible damage to your own vehicle. For your health, what's covered and which hospitals you can use depend on your plan and the network assigned to it. For your home, owners may need cover for the building and its contents, while tenants mainly need contents, personal belongings and tenant's liability cover. Whatever you choose, benefits depend on the policy and remain subject to its limits, exclusions and conditions. If you're unsure, send us an enquiry and we'll help you understand your risks and how insurance can protect you.
*Sources:* personal.motor.2, personal.motor.4, personal.motor.5 · `/motor-insurance`; personal.medical.4, personal.medical.6 · `/medical-insurance`; personal.home.7 · `/home-insurance`; personal.motor.8; enquiry.page.1 · `/enquiry`

**2. How do I get a quote?**
For motor, medical, travel, home, yacht and jet ski insurance, start online at online.albuhaira.com. You enter your details, then review the available quotation or request cover; eligible motor and travel customers can complete their purchase online. More documents may be needed before a policy is issued. For business insurance and personal accident cover, fill in a short quotation request and one of our customer service representatives will contact you. For motorcycle insurance, use our enquiry form. A quotation does not confirm that insurance has started.
*Sources:* personal.portal.1 (corrected) · https://online.albuhaira.com/; personal.motor.28, personal.motor.31 · `/car-insurance-online`, `/how-to-buy-car-insurance-online`; personal.travel.7; personal.medical.10; personal.home.10; personal.yacht.9; personal.jetski.10; business.enquiry.1 · `/property-insurance-quotation`; personal.pa.6 · `/personal-accident-insurance-quotation`; personal.motorcycle.5 (corrected) · `/enquiry`; personal.pa.5; business.enquiry.3

**3. How do I start a claim?**
Go to Make a claim and choose your claim type. **Motor:** report the accident to the relevant authority and get the accident report first, then submit your claim online, call 600545457 or email motorclaims@albuhaira.com. **Medical reimbursement:** complete the reimbursement form, ask your doctor to complete the medical section, attach your invoices, receipts and reports, then submit online or email claims@albuhaira.com, and keep your claim reference. Paying a medical bill does not automatically guarantee reimbursement. **Other policies:** use the non-motor claim form. A customer service representative will guide you through your claim, which is assessed according to your policy terms.
*Sources:* claims.hub.2 · `/claims`; claims.motor.1, claims.motor.3, claims.motor.4 · `/motor-claims`, `/motor-insurance`; claims.medical.2, claims.medical.5 · `/medical-reimbursement`; claims.nonmotor.1 · `/non-motor-claim`; personal.missed.travel-claims-assessed

**4. How do I find a hospital or clinic in my network?**
First check the network shown on your medical insurance card: the network assigned to your policy decides which providers you can use. Then search our in-house medical network by network type, emirate, provider type, speciality or keyword. If your card shows a third-party administrator such as NAS, NextCare, FMC or Aafiya, use that administrator's network. Confirm your network before non-emergency treatment. Need help? Call ABNIC Network on 06-5117423 or email network@albuhaira.com.
*Sources:* network.access.1, network.access.2, network.access.4 · `/nas-third-party-administrator-tpa`; network.access.5 · `/essential-benefits-plans-ebp-medical-insurance`; network.finder.1–network.finder.6 · `/medical-network`; tpa.page.2 · `/medical-network-tpa`; medteam.2 · `/contact-medical-team`

**5. Who should I contact?**
Buying or renewing motor insurance: 600535357. Motor claims: 600545457. Roadside assistance, if it's included in your motor policy: 8008181. Medical insurance: 06 5117500. Medical reimbursement guidance: 600 545459. Home and travel insurance: 600548283. Marine insurance: 06 5174487; marine claims: 06 5174486. For anything else, call 06 517 4444 or email care@albuhaira.com. Our head office is open Monday to Thursday, 8:00 a.m. to 5:00 p.m. (lunch break 1:30 to 2:00 p.m.), and Friday, 8:00 a.m. to 12:00 noon; it is closed on Saturday and Sunday. To make a complaint, use our complaint form.
*Sources:* contact.helpline.2–contact.helpline.9 · `/`; contact.motor.1 · `/motor-insurance-department`; claims.roadside.4 · `/motor-insurance`; claims.medical.9 · `/medical-reimbursement`; contact.headoffice.1, contact.headoffice.2 · `/head-office`; contact.hours.1; complaints.process.1 · `/register-complaint`

---

## 11. Final call to action and footer

### 11.1 Final call to action

- **Live strapline (VERBATIM):** "A COMPANY YOU CAN TRUST." / "Let us provide you with an insurance quote. We're here to help you better understand your risk exposures and how insurance can protect you." [footer.ia.1; about.why.6; enquiry.page.1 · `/`]
- **Suggested copy**
  - Heading: "A company you can trust."
  - Body: "Let us provide you with an insurance quote. We're here to help you understand your risks and how insurance can protect you."
  - Buttons: "Get a quote online" to https://online.albuhaira.com/ · "Send an enquiry" to `/enquiry`
  - Small print: "Or call 06 517 4444. Head office hours: Monday to Thursday, 8:00 a.m. to 5:00 p.m.; Friday, 8:00 a.m. to 12:00 noon."
  [personal.portal.1 (corrected); enquiry.page.1; contact.headoffice.2; contact.hours.1]

### 11.2 Footer groups

The live footer mixes service and corporate links (for example, Corporate Governance sits under "Support"). Regroup as below. [footer.ia.2, footer.ia.3]

**Insurance**
- Personal: Motor `/motor-insurance` · Medical `/medical-insurance` · Travel `/travel-insurance` · Home `/home-insurance` · Yacht `/yacht-insurance` · Jet Ski `/jet-ski-insurance` · Motorcycle `/motorcycle-insurance` · Personal Accident `/personal-accident-insurance`
- Business: All business insurance `/business-insurance` · Group Medical `/group-medical-insurance` · Group Life `/group-life-insurance` · Credit Life `/credit-life-insurance` · Property `/property-insurance` · Engineering `/engineering-insurance` · Motor Fleet `/motor-fleet-insurance` · Marine `/marine-insurance` · Aviation `/aviation-insurance` · Liability `/liability-insurance` · Energy `/energy-insurance` · Miscellaneous `/miscellaneous-insurance`
- Leave out the live "Insurance products" link (`/insurance-product`, 200) until ABNIC confirms it. CONFLICT: it lists "Individual Life Insurance" as a personal line and says the Essential Benefits Plan is for "residents earning AED 4,000 per month or less", which the EBP page doesn't say. [missed.products.list]

**Customer Support**
- Make a claim `/claims` · Medical reimbursement `/medical-reimbursement` · Medical claim status `/claim-status` · Reimbursement payment `/payment-status` · Find a medical provider `/medical-network` · TPA networks `/medical-network-tpa` · Website & app help `/website-mobile-app-assistance` · Register a complaint `/register-complaint` · Customer feedback `/customer-satisfaction-survey` · Enquiry `/enquiry` · Branches `/branches` · Contact Medical Team `/contact-medical-team` · Head office `/head-office`

**Company**
- About us `/about-us` · Mission & Vision `/mission-and-vision` · Board Members `/board-members` · Strategic Partnership `/strategic-partnership` · Investor Relations `/investor-relations` · Financial Reports & Disclosures `/financial-reports` · Financial Statements `/annual-reports` · Corporate Governance `/corporate-governance` · Sustainability Reports `/sustainability-report` · Emiratization `/emiratization` · News & Media `/news` · Careers `/career` · Human Resources `/human-resources` · Digital Services `/digital-services` · Affinity Schemes `/affinity` · Company Profile (PDF) `/assets/pdfs/abnic-profile-english-2025.pdf` (the cover reads "ABNIC CORPORATE PROFILE 2026") [about.founding.7]
- Drop "Management Team" (404). [about.leadership.3]

**Legal**

| Link label | URL | Status | Note | Sources |
|---|---|---|---|---|
| Terms & Conditions | `/terms-and-conditions` | 200 | Website terms of use (UAE law; UAE courts) | legal.terms.1 |
| Privacy Policy | `/privacy-policy` | 200 | GAP: its body is the same "Web Site Terms and Conditions of Use" text as `/terms-and-conditions` | legal.privacy.1 (corrected) |
| Data Privacy Policy (PDF) | `/assets/pdfs/data-security/data-privacy-policy.pdf` | 200 | Internal ISMS policy marked "Classification: Restricted", written for a healthcare setting, with no customer contact. Keep the live label; don't present it as the customer privacy notice. | legal.datasecurity.1; missed.privacy.policy_internal |
| Data Privacy Consent Form (PDF) | `/assets/pdfs/data-security/data-privacy-consent-form.pdf` | 200 | Holds the public privacy-notice text and the only privacy contact, privacy@albuhaira.com. Marked "Classification: Confidential". | missed.privacy.consent_notice |
| Data Subject Request Form (PDF) | `/assets/pdfs/data-security/Data_Subject_Request_Form_v1.0.pdf` | 200 | GAP: the submission address is an unfilled placeholder. | missed.privacy.dsr_placeholder |
| Sitemap | `/sitemap.xml` | 200 | Raw XML; 573 URLs on the non-www host | footer.sitemap.1 |

- **Never link** the commented-out "Data Subject Request Form" target `/assets/pdfs/data-security/abnic-afz-enrolment-api-spec.pdf` (404). [legal.datasecurity.2]
- Keep the three Data Security PDFs under their live labels until ABNIC supplies a proper public privacy notice and a working request route (GAP). The consent PDF mentions an "Accept" step, but no consent control was found on the homepage. [missed.privacy.consent_notice]
- **Optional footer disclaimer (Suggested copy):** "Product descriptions on this website are not offers to sell, and not every product is available at every office at all times." From the VERBATIM terms: "Any product or service description on the Website is not intended to constitute offers to sell or solicitations in connection with such products or services. The Company does not represent or warrant that all of its products or services shall be available at all of its offices, at all times." [missed.terms.not_offers · `/terms-and-conditions`]

### 11.3 Guide categories

All guide pages returned 200 on 26 Oct 2026. Each guide's own "Get a Quote" button goes to a different place, so don't assume they all go to the motor quote. [guides.status.1–guides.status.5; missed.quote.guide_ctas]

| Category | Guide (Suggested label) | Page | Its "Get a Quote" goes to | Sources |
|---|---|---|---|---|
| Car insurance | How to buy car insurance online | `/how-to-buy-car-insurance-online` | Online motor quote | guides.status.1; personal.motor-quote.6 |
| Car insurance | Comprehensive car insurance | `/comprehensive-insurance` | Online motor quote | guides.status.1; personal.motor-quote.6 |
| Car insurance | Third-party car insurance | `/third-party-insurance` | Online motor quote | guides.status.1; personal.motor-quote.6 |
| Car insurance | Car insurance renewal | `/car-insurance-renewal` | Online motor quote | guides.status.1; personal.motor.33 |
| Car insurance | Vehicle registration (Mulkiya) renewal | `/vehicle-registration-renewal` | Online motor quote | guides.status.1; guides.vrr.2 |
| Car insurance | ADNOC vehicle inspection centres | `/adnoc-vehicle-inspection-centers` | Not recorded. Information about ADNOC Distribution's testing, not an ABNIC service. | guides.status.1; claims.inspection.1 |
| Health & medical | Family health insurance | `/family-health-insurance` | Online medical quote | guides.status.2; missed.quote.guide_ctas |
| Health & medical | Individual health insurance | `/individual-health-insurance` | Online medical quote | guides.status.2; personal.medical-quote.1 |
| Health & medical | Domestic helper medical insurance | `/domestic-helper-medical-insurance` | Online medical quote | guides.status.2; personal.medical-quote.1 |
| Health & medical | Essential Benefits Plan (Dubai) | `/essential-benefits-plans-ebp-medical-insurance` | Online medical quote | guides.status.2; personal.medical-quote.1 |
| Health & medical | Medical reimbursement | `/medical-reimbursement` | The reimbursement claim form (mislabelled; don't copy) | guides.status.2; claims.issue.6 |
| Home & property | Home insurance for apartments | `/home-insurance-for-apartments` | Online home quote | guides.status.3; missed.quote.guide_ctas |
| Home & property | Building insurance for rental property | `/building-insurance-for-rental-property` | Online home quote | guides.status.3 |
| Home & property | Property insurance cost | `/property-insurance-cost` | Online home quote | guides.status.3 |
| Home & property | Combined car and home insurance | `/combined-car-and-home-insurance` | Portal home, https://online.albuhaira.com/ | guides.status.3 |
| Motorcycles, trucks & fleets | Motorcycle insurance | `/motorcycle-insurance` | `/enquiry` | guides.status.4; missed.quote.guide_ctas |
| Motorcycles, trucks & fleets | Truck insurance | `/truck-insurance` | `/enquiry` | guides.status.4 |
| Motorcycles, trucks & fleets | Motor fleet insurance | `/motor-fleet` | `/enquiry` | guides.status.4; business.missed.14 |
| Offers | Car insurance offer (promo code MOTOR) | `/car-insurance-offer` | Online motor quote | guides.status.5; personal.missed.promo-code-motor |
| Offers | Homat Al Watan card holders | `/homat-al-watan-card-holders` | Online motor quote | guides.status.5; guides.vrr.2 |
| Offers | Esaad card | `/esaad-card` | Online motor quote | guides.status.5; guides.vrr.2 |
| Offers | Fazaa card holders | `/fazaa-card-holders` | Online motor quote | guides.status.5; guides.vrr.2 |
| Offers | Affinity schemes | `/affinity` | `/enquiry` | affinity.page.1 |

- Call the category "Offers", not "Card-holder offers": the MOTOR promo code is open to anyone eligible. [missed.offers.promo_motor]
- **Guide teaser (Suggested copy from the site's wording):** "Renewing your Mulkiya? Valid motor insurance must be active when your vehicle registration renewal is processed." [guides.vrr.1 · `/vehicle-registration-renewal`]
- **Who the card schemes are for (VERBATIM):** Homat Al Watan: "The Homat Al Watan (or ‘homeland protectors’) discount card provides benefits to personnel and companies affiliated to the Ministry of Defense and UAE Armed Forces, including those currently serving as well as retirees and veterans." Esaad: "The Esaad Card affinity scheme was introduced in 2017 as a community initiative providing offers and privileges for various services to government staff." Fazaa: the site doesn't say who is eligible (GAP). [affinity.homat.1, affinity.esaad.1; affinity.fazaa.1]
- **Documents for card-holder offers:** the valid card or membership details, Emirates ID, a valid UAE driving licence, the vehicle registration card, a vehicle inspection certificate if required, and previous insurance details if available. [affinity.docs.1]
- **SEO keyword rows:** the live footer carries nine rows of 105 keyword links. 103 are in the sitemap; `/motor-insurance-dubai` and `/cheap-car-insurance-dubai` both redirect (301) to `/car-insurance-dubai` (200). If kept, link `/car-insurance-dubai` directly and place the rows under Guides. [footer.ia.5, footer.ia.6; missed.footer.redirects]

### 11.4 Social links and app badges

| Network | URL to use | Status 26 Oct 2026 | Note | Sources |
|---|---|---|---|---|
| LinkedIn | https://www.linkedin.com/company/al-buhaira-national-insurance-co./ | 200 | Page title "Al Buhaira National Insurance Co." on LinkedIn | social.links.1 |
| X (Twitter) | https://x.com/albuhairauae | 200 | The live footer uses https://twitter.com/albuhairauae, which redirects (301) here; use x.com | social.links.1 |
| Instagram | https://www.instagram.com/albuhaira_insurance/ | 200 (login wall) | Profile content not confirmed; check in a browser | social.links.1 |
| Facebook | https://www.facebook.com/AlBuhairaInsurance/ | 400 to a non-browser client | Inconclusive; check in a browser before launch (GAP) | social.links.1 |

- No YouTube, TikTok or WhatsApp social links exist. Every live social icon has the alt text "fax"; give each a proper label (for example "ABNIC on LinkedIn"). [social.links.1]
- App badges: Google Play and App Store links and alt text in section 9.1. [social.apps.1]

### 11.5 Address and company details

- **Legal name (VERBATIM):** "Al Buhaira National Insurance Company (P.S.C.)" [about.legal.1]
- **Address (Suggested copy, cleaned up):** "6th Floor, Buhaira Insurance Towers, Khalid Lagoon, Buhaira Corniche, Sharjah, United Arab Emirates. P.O. Box 6000." The live text ends with the stray digits "65174444" (head office page) or "6000,65174444" (footer); drop them. [contact.headoffice.4; contact.footer.1]
  - CONFLICT (minor): the department pages name the building "Al Buhaira Tower, Buhaira Corniche, Sharjah Near Al Noor Mosque". ABNIC to confirm the preferred building name. [contact.fga.1; contact.motor.1]
- **Phone:** 06 517 4444 (`tel:065174444`). **Email:** care@albuhaira.com (`mailto:care@albuhaira.com`). **Fax:** 06 574 8855, as plain text (the live footer's `fax:` link is non-standard). [contact.footer.1]
- **Hours (label as head office hours):** "Monday to Thursday, 8:00 a.m. to 5:00 p.m. (lunch break 1:30 to 2:00 p.m.); Friday, 8:00 a.m. to 12:00 noon; closed Saturday and Sunday." [contact.hours.1]
- **Map:** the head office page embeds a Google Map labelled "Al Buhaira Insurance - H.O. Sharjah". [contact.headoffice.5]
- **Regulator line:** GAP until ABNIC confirms the wording (draft in section 8.3). [about.regulator.1]
- **Copyright (Suggested copy, fixing the live "All Rights Reserved.."):** "© 2026 Al Buhaira National Insurance Company (P.S.C.). All rights reserved." [legal.copyright.1; about.legal.1]

---

## Appendix A. Link status table

Every URL this register uses, with the status the fact-checkers recorded on 26 Oct 2026. "200" means the page loaded. Paths starting with `/` are on `https://www.albuhaira.com`. The server is slow: several pages and PDFs timed out once and loaded on retry (noted where relevant).

### A.1 Online portal (online.albuhaira.com)

| URL | Status | Used for | Note |
|---|---|---|---|
| https://online.albuhaira.com/ | 200 | Generic "Get a quote"; final CTA | Product picker, six products |
| https://online.albuhaira.com/car-insurance/quote-car-insurance | 200 | Motor quote; car guides and offers | 15-step wizard |
| https://online.albuhaira.com/medical-insurance/quote-medical-insurance | 200 | Medical quote; health guides | 4-step wizard |
| https://online.albuhaira.com/travel-insurance/quote-travel-insurance | 200 | Travel quote | 6-step wizard |
| https://online.albuhaira.com/home-insurance/quote-home-insurance | 200 | Home quote; home guides | 4-step wizard |
| https://online.albuhaira.com/yacht-insurance/quote-yacht-insurance | 200 | Yacht quote | 9-step wizard |
| https://online.albuhaira.com/jet-ski-insurance/quote-jet-ski-insurance | 200 | Jet Ski quote | 9-step wizard |

### A.2 Personal product pages

| URL | Status | Used for | Note |
|---|---|---|---|
| `/` | 200 | Live homepage (current wording) | |
| `/personal-insurance` | 200 | Live "Personal" parent | Text only, older unhedged copy |
| `/motor-insurance` | 200 | Motor | |
| `/comprehensive-insurance` | 200 | Motor sub-link; guide | |
| `/third-party-insurance` | 200 | Motor sub-link; guide | |
| `/car-insurance-renewal` | 200 | Motor sub-link; guide | |
| `/how-to-buy-car-insurance-online` | 200 | Motor sub-link; guide | |
| `/car-insurance-online` | 200 | Motor learn-more | |
| `/compare-car-insurance` | 200 | Motor learn-more | |
| `/car-insurance-calculator` | 200 | Motor learn-more | No calculator; button opens the online motor quote |
| `/medical-insurance` | 200 | Medical | |
| `/individual-health-insurance` | 200 | Medical sub-link; guide | |
| `/family-health-insurance` | 200 | Medical sub-link; guide | Timed out once; 200 on retry |
| `/domestic-helper-medical-insurance` | 200 | Medical sub-link; guide | |
| `/essential-benefits-plans-ebp-medical-insurance` | 200 | Medical sub-link; guide | |
| `/travel-insurance` | 200 | Travel | |
| `/home-insurance` | 200 | Home | |
| `/yacht-insurance` | 200 | Yacht | |
| `/jet-ski-insurance` | 200 | Jet Ski | |
| `/motorcycle-insurance` | 200 | Also available; guide | Quote via `/enquiry` |
| `/personal-accident-insurance` | 200 | Also available; Miscellaneous | |
| `/life-insurance` | 200 | Life is business-only (not linked from the homepage) | |
| `/yachts-and-pleasure-crafts` | 200 | Marine yacht page (second route) | |

### A.3 Quote and enquiry forms

| URL | Status | Used for | Note |
|---|---|---|---|
| `/enquiry` | 200 | Motorcycle, Miscellaneous, final CTA | Posts to `/enquiry-quotation` |
| `/personal-accident-insurance-quotation` | 200 | Personal Accident quote | Posts to `/travel-form` |
| `/yachts-and-pleasure-crafts-quotation` | 200 | Marine-section yacht call-back form | Posts to `/travel-form` |
| `/group-medical-insurance-quotation` | 200 | Group Medical quote | Pre-filled "Group Medical Insurance" |
| `/group-life-insurance-quotation` | 200 | Group Life quote | |
| `/credit-insurance-quotation` | 200 | Credit Life quote | Pre-filled "Credit Insurance" |
| `/property-insurance-quotation` | 200 | Property quote | |
| `/property-all-risk-quotation` | 200 | Property All Risk quote | |
| `/business-interruption-quotation` | 200 | Business Interruption quote | |
| `/engineering-insurance-quotation` | 200 | Engineering quote | |
| `/contractor-all-risks-quotation` | 200 | CAR quote | |
| `/motor-fleet-insurance-quotation` | 200 | Motor Fleet quote | |
| `/marine-insurance-quotation` | 200 | Marine quote | |
| `/aviation-insurance-quotation` | 200 | Aviation quote | |
| `/liability-insurance-quotation` | 200 | Liability and D&O quote | |
| `/energy-insurance-quotation` | 200 | Energy quote | |
| `/travel/travel-insurance-quotation` | 200 | Not used: legacy call-back form, in the sitemap only | Fallback only |
| `/yacht/yacht-insurance-quotation` | 200 | Not used: legacy call-back form, in the sitemap only | Fallback only |

### A.4 Business pages

| URL | Status | Used for | Note |
|---|---|---|---|
| `/business-insurance` | 200 | Business hub | No quote button |
| `/group-medical-insurance` | 200 | Group Medical | |
| `/group-life-insurance` | 200 | Group Life | |
| `/credit-life-insurance` | 200 | Credit Life | |
| `/property-insurance` | 200 | Property | |
| `/property-all-risk` | 200 | Property sub-product | |
| `/business-interruption` | 200 | Property sub-product | |
| `/engineering-insurance` | 200 | Engineering | |
| `/contractor-all-risks` | 200 | Engineering sub-product | |
| `/erection-all-risk` | 200 | Engineering sub-product | |
| `/machinery-breakdown` | 200 | Engineering sub-product | |
| `/electronic-equipment` | 200 | Engineering sub-product | |
| `/contractors-plant-and-machinery-all-risks` | 200 | Engineering sub-product | |
| `/machinery-loss-of-profits` | 200 | Engineering sub-product | |
| `/motor-fleet-insurance` | 200 | Motor Fleet (nav URL) | |
| `/motor-fleet` | 200 | Fleet guide | Duplicate fleet page; quote goes to `/enquiry` |
| `/fleet-insurance` | 200 | Not linked (duplicate) | |
| `/company-fleet-insurance` | 200 | Not linked (duplicate) | |
| `/marine-insurance` | 200 | Marine | |
| `/marine-hull` | 200 | Marine sub-product | |
| `/builder-risks-hull-insurance` | 200 | Marine sub-product | |
| `/freight-forwarders-legal-liability` | 200 | Marine sub-product | |
| `/marine-liabilities` | 200 | Marine sub-product | |
| `/ship-repairers-liability` | 200 | Marine sub-product | |
| `/aviation-insurance` | 200 | Aviation | |
| `/liability-insurance` | 200 | Liability | |
| `/public-and-product-liability` | 200 | Liability sub-product | |
| `/workmen-compensation` | 200 | Liability sub-product | |
| `/professional-indemnity` | 200 | Liability sub-product | |
| `/medical-malpractice` | 200 | Liability sub-product | |
| `/directors-and-officers-liability-insurance` | 200 | Liability sub-product | Not in sitemap.xml |
| `/energy-insurance` | 200 | Energy | |
| `/miscellaneous-insurance` | 200 | Miscellaneous | No quote button |
| `/burglary-insurance` | 200 | Miscellaneous sub-product | |
| `/money-insurance` | 200 | Miscellaneous sub-product | |
| `/fidelity-guarantee` | 200 | Miscellaneous sub-product | |
| `/bankers-blanket` | 200 | Miscellaneous sub-product | |
| `/jewellers-block` | 200 | Miscellaneous sub-product | |
| `/plate-glass` | 200 | Miscellaneous sub-product | |
| `/deterioration-of-stock` | 200 | Miscellaneous sub-product | |

### A.5 Claims, complaints and medical service pages

| URL | Status | Used for | Note |
|---|---|---|---|
| `/claims` | 200 | Claims hub | Three cards |
| `/motor-claims` | 200 | Motor claim | Form posts to `/motor-claim` |
| `/non-motor-claim` | 200 | Non-motor claim | Form posts back to the same URL |
| `/medical-reimbursement-form` | 200 | Medical reimbursement form | Form posts to `/medical-reimbursement` |
| https://albuhaira.com/medical-reimbursement-form | 200 | Not used (bare-domain copy linked by the mislabelled button) | Served without redirect to www |
| `/medical-reimbursement` | 200 | Reimbursement guide | |
| `/claim-status` | 200 | Medical claim status (call-back) | |
| `/payment-status` | 200 | Reimbursement payment (call-back) | |
| `/insurance-certificates` | 200 | Medical service request | |
| `/insurance-card-copy` | 200 | Medical service request | |
| `/website-mobile-app-assistance` | 200 | Medical service request; app help | |
| `/other-inquiries` | 200 | Medical service request | Different hours |
| `/register-complaint` | 200 | Complaints | Form posts to `/complaint` |
| `/customer-satisfaction-survey` | 200 | Feedback after a complaint | Standalone page |
| `/adnoc-vehicle-inspection-centers` | 200 | Car guide (information only) | Failed once; 200 on retry |
| `/nas-third-party-administrator-tpa` | 200 | NAS explainer | |

### A.6 Medical network and TPA

| URL | Status | Used for | Note |
|---|---|---|---|
| `/medical-network` | 200 | In-house provider finder | GET form |
| https://www.albuhaira.com/medical-network?networkType=&emirate=&providerType=&speciality=&keyword= | 200 (pattern) | Deep-link pattern | |
| https://www.albuhaira.com/medical-network?networkType=STANDARD&emirate=SHARJAH&providerType=PHARMACY&speciality=&keyword= | 200 | Verified example | |
| https://www.albuhaira.com/medical-network?networkType=&emirate=&providerType=&speciality=&keyword=AHALIA | 200 | Verified example | |
| https://www.albuhaira.com/medical-network?networkType=&emirate=&providerType=&speciality=CARDIOLOGIST&keyword= | 200 | Verified example | 28 pages of doctor rows |
| https://www.albuhaira.com/medical-network?networkType=&emirate=DUBAI&providerType=LAB+%26+DIAGNOSTIC&speciality=&keyword= | 200 | Verified example | 14 pages |
| `/medical-network-tpa` | 200 | TPA route | |
| https://play.google.com/store/apps/details?id=com.nextcare.app | 200 | NextCare Android | Now "Lumi by Nextcare" |
| https://apps.apple.com/ae/app/mynextcare/id1039800748 | 200 after 1 redirect | NextCare iOS | Redirects to the "Lumi by Nextcare" listing |
| https://www.nextcarehealth.com/network-updates/?country=uae | 200 | NextCare network | |
| https://play.google.com/store/apps/details?id=com.fmc.app | **404** | FMC Android | Broken |
| https://apps.apple.com/ae/app/fmc-network/id1575177329 | 200 | FMC iOS | "FMC NETWORK" |
| https://www.fmcnetwork.net/provider-network | 200 | FMC network | |
| https://play.google.com/store/apps/details?id=com.aafia | **404** | Aafiya Android | Broken |
| https://apps.apple.com/ae/app/aafiya/id1294022513 | **404** | Aafiya iOS | Broken |
| https://aafiya.ae/aafiya-network.php | **404** | Aafiya network | Broken |
| https://play.google.com/store/apps/details?id=nas.logicbeanzs.com.mynas&hl=en&pli=1 | 200 | NAS Android ("myNAS") | |
| https://apps.apple.com/ae/app/mynas-app/id1185831667 | 200 | NAS iOS ("myNAS App") | |
| https://www.nas.ae/ | 200 | NAS "View Network" target | Homepage, not a search |
| https://www.nas.ae/provider-networks/ | 200 | Reference only | Informational; not linked by ABNIC |
| https://www.isahd.ae/Home/Ipromes | 200 | iPROMeS (Dubai feedback) | External |

### A.7 Contact, department and branch pages

| URL | Status | Used for | Note |
|---|---|---|---|
| `/head-office` | 200 | Contact support; footer | |
| `/branches` | 200 | Branch list | 24 branch links, 12 groups |
| `/insurance-sharjah` | 200 | Sharjah addresses | |
| `/motor-insurance-department` | 200 | Motor contacts | Timed out once; 200 on retry |
| `/medical-insurance-department` | 200 | Medical contacts | Timed out once; 200 on retry |
| `/contact-medical-team` | 200 | Medical directory | Numbers conflict with the department page |
| `/fire-and-general-accident-insurance-department` | 200 | FGA contacts | |
| `/marine-insurance-department` | 200 | Marine contacts | |
| `/medical-insurance-head-office` | 200 | Medical & Life Department | |
| `/insurance-head-office` | 200 | Branch page: Head Office | |
| `/motor-insurance-head-office` | 200 | Branch page: Motor Insurance (Main) - Buhaira | |
| `/motor-claims-rolla` | 200 | Branch page: Motor Claims (Main) - Rolla | |
| `/motor-insurance-rolla` | 200 | Branch page: Motor Insurance - Rolla | |
| `/car-insurance-dubai-deria` | 200 | Branch page: Deria | |
| `/car-insurance-dubai-sheikh-zayed` | 200 | Branch page: Sheikh Zayed | |
| `/car-insurance-abu-dhabi-city` | 200 | Branch page: Abu Dhabi Motor & Non Motor | |
| `/car-insurance-claims-abu-dhabi` | 200 | Branch page: Abu Dhabi Motor Claims & Accounts | |
| `/car-insurance-alain` | 200 | Branch page: Al Ain | |
| `/car-insurance-ajman-city` | 200 | Branch page: Ajman | Heading wrongly reads "Ajman Traffic" |
| `/car-insurance-ajman-traffic` | 200 | Branch page: Ajman Traffic | |
| `/car-insurance-ajman-speed-traffic` | 200 | Branch page: Ajman Speed Traffic | Broken tel link |
| `/fujairah-car-insurance` | 200 | Branch page: Fujairah | |
| `/car-insurance-fujairah-traffic` | 200 | Branch page: Fujairah Traffic | |
| `/car-insurance-fujairah-traffic-kalba` | 200 | Branch page: Fujairah Traffic Kalba | |
| `/car-insurance-dubai-hatta-border` | 200 | Branch page: Hatta POS | Needed a retry |
| `/car-insurance-kalba` | 200 | Branch page: Kalba | |
| `/car-insurance-khor-fakkan-city` | 200 | Branch page: Khor Fakkan | |
| `/car-insurance-khor-fakkan-traffic` | 200 | Branch page: Khor Fakkan Traffic | |
| `/car-insurance-khor-fakkan-tasjeel` | 200 | Branch page: Khor Fakkan Tasjeel | |
| `/car-insurance-al-dhaid` | 200 | Branch page: Al Dhaid | |
| `/car-insurance-umm-al-quwain-POS` | 200 | Branch page: Umm Al Quwain POS | |
| `/car-insurance-rak` | 200 | Branch page: Ras Al Khaimah | |

### A.8 Company, investor and news pages

| URL | Status | Used for | Note |
|---|---|---|---|
| `/about-us` | 200 | About; trust | |
| `/mission-and-vision` | 200 | Mission, vision, values | |
| `/strategic-partnership` | 200 | Company menu | |
| `/board-members` | 200 | Company menu | |
| `/investor-relations` | 200 | Company menu | |
| `/financial-reports` | 200 | Company menu | |
| `/annual-reports` | 200 | Company menu ("Financial Statements") | |
| `/financial-marketing` | 200 | Company menu | Outdated listing date and auditor |
| `/corporate-governance` | 200 | Company menu | |
| `/sustainability-report` | 200 | Company menu | |
| `/emiratization` | 200 | Company menu | |
| `/news` | 200 | Company menu | Page 1 duplicates; pages 2–14 also 200 |
| `/news/r/al-buhaira-insurance-health-insurer-of-the-year-at-insuretek-2023/85` | 200 | Award evidence (24 Feb 2023) | |
| `/news/r/al-buhaira-insurance-honored-by-sharjah-sports-club-for-exceptional-sports-sponsorship-and-support/47` | 200 | Community recognition (22 Jun 2023) | |
| `/news/r/grand-opening-al-buhaira-insurance-welcomes-you-to-our-new-branch-in-ras-al-khaimah/65` | 200 | RAK branch milestone (16 Aug 2023) | Address and phone out of date |
| `/career` | 200 | Careers | |
| `/human-resources` | 200 | Company menu | Mislabelled quote button |
| `/digital-services` | 200 | Digital services | |
| `/insurance-product` | 200 | Not linked (conflicts, section 11.2) | |
| `/affinity` | 200 | Offers; company | |

### A.9 Legal and data security

| URL | Status | Used for | Note |
|---|---|---|---|
| `/terms-and-conditions` | 200 | Footer legal | |
| `/privacy-policy` | 200 | Footer legal | Body duplicates the terms (GAP) |
| `/sitemap.xml` | 200 | Footer legal | 573 URLs, non-www host |
| `/assets/pdfs/data-security/data-privacy-policy.pdf` | 200 | Data Security row | Internal "Restricted" policy |
| `/assets/pdfs/data-security/data-privacy-consent-form.pdf` | 200 | Data Security row | Public notice text; privacy@albuhaira.com |
| `/assets/pdfs/data-security/Data_Subject_Request_Form_v1.0.pdf` | 200 | Data Security row | Unfilled submission address |

### A.10 Guides and offers

| URL | Status | Used for | Note |
|---|---|---|---|
| `/vehicle-registration-renewal` | 200 | Car guide | |
| `/home-insurance-for-apartments` | 200 | Home guide | |
| `/building-insurance-for-rental-property` | 200 | Home guide | |
| `/property-insurance-cost` | 200 | Home guide | |
| `/combined-car-and-home-insurance` | 200 | Home guide | |
| `/truck-insurance` | 200 | Fleet guide | |
| `/car-insurance-offer` | 200 | Offers (promo code MOTOR) | |
| `/homat-al-watan-card-holders` | 200 | Offers | |
| `/esaad-card` | 200 | Offers | `/esaad-card-holders`, `/esaad-card-offers` and `/esaad-insurance-companies` also return 200 |
| `/fazaa-card-holders` | 200 | Offers | |
| `/car-insurance-dubai` | 200 | Target of two redirecting footer keyword links | |

### A.11 Downloads (PDF and DOCX)

| URL | Status | Used for | Note |
|---|---|---|---|
| `/assets/pdfs/downloads/Motor%20Vehicle%20Insurance%20Policy%20Against%20Third%20Party.pdf` | 200 | Motor policy wording | Slow; needed three attempts |
| `/assets/pdfs/downloads/Motor%20Vehicle%20Insurance%20Policy%20Against%20Loss%20and%20Damage.pdf` | 200 | Motor policy wording | |
| `/assets/pdfs/downloads/download-form/ABNIC%20Home%20Shield%20-%20Proposal%20Form.pdf` | 200 | Home Shield detail | Timed out once |
| `/assets/pdfs/downloads/download-form/ABNIC%20Travel%20Insurance%20-%20Proposal%20form.pdf` | 200 | Travel detail | Timed out once |
| `/assets/pdfs/downloads/download-form/Hull-Pleasure-Craft-Form-1.pdf` | 200 | Yacht and Jet Ski proposal form | |
| `/assets/pdfs/downloads/download-form/Medical%20Application%20Form.pdf` | 200 | Medical download | |
| `/assets/pdfs/downloads/download-form/ApplicationForm.pdf` | 200 | Not used (legacy scan) | |
| `/assets/pdfs/downloads/download-form/MedicalConfirmation.pdf` | 200 | Medical download | |
| `/assets/pdfs/downloads/download-form/MedicalExpensesNew.pdf` | 200 | Medical download | Header contacts look outdated |
| `/assets/pdfs/downloads/download-form/Complaint%20Handling%20Procedure%20Website.pdf` | 200 | Complaints procedure | Flowchart |
| `/assets/pdfs/downloads/reimbursement-form.pdf` | 200 | Medical reimbursement | |
| `/assets/pdfs/downloads/download-form/GroupMedicalQuotationPDFonline.pdf` | 200 | Group Medical quote | |
| `/assets/pdfs/downloads/download-form/Group%20LifeQuotation-.docx` | 200 | Group Life quote | The on-page link contains a raw space |
| `/assets/pdfs/downloads/download-form/LIFE_INSURANCE_CLAIM_FORM.pdf` | 200 | Group Life claims | |
| `/assets/pdfs/downloads/download-form/CREDIT%20LIFE%20CLAIM%20FORM%201.docx` | 200 | Credit Life claims | |
| `/assets/pdfs/downloads/download-form/CREDIT%20SHIELD%20CLAIM%20FORM%20-%20ILOE.docx` | 200 | Credit Shield claims | |
| `/assets/pdfs/downloads/download-form/Marine%20Cargo%20Proposal%20form-New%202019.pdf` | 200 | Marine proposal | |
| `/assets/pdfs/downloads/download-form/Marine%20Cargo%20Open%20Cover%20Proposal%20form-New.pdf` | 200 | Marine proposal | |
| `/assets/pdfs/downloads/download-form/H-M%20Proposal%20form%20-%20New-2019.pdf` | 200 | Marine proposal | |
| `/assets/pdfs/downloads/download-form/Marina%20Operatior%20Proposal%20Form.pdf` | 200 | Marine proposal | File name misspelt |
| `/assets/pdfs/downloads/download-form/OPEN_COVER-_PROPOSAL_FORM-NEW.pdf` | 200 | Marine proposal | |
| `/assets/pdfs/downloads/download-form/MARINE%20CARGO%20CLAIM%20FORM-ABNIC.pdf` | 200 | Marine claims | |
| `/assets/pdfs/downloads/download-form/MARINE%20HULL%20CLAIM%20FORM-ABNIC.pdf` | 200 | Marine claims | |
| `/assets/pdfs/downloads/download-form/Aircraft_Proposal_Form.pdf` | 200 | Aviation proposal | |
| `/assets/pdfs/downloads/download-form/Aircraft%20Proposal%20form%20AVN.pdf` | 200 | Aviation proposal | |
| `/assets/pdfs/downloads/download-form/PLEASURE%20CRAFT%20FORM%20NEW%20FORMAT-2020.pdf` | 200 | Not used (misplaced on the Aviation page) | |
| `/assets/pdfs/abnic-profile-english-2025.pdf` | 200 | Company Profile link | Cover reads 2026 |
| `/assets/reports/financial-reports/english-integrated-report-abnic.pdf` | 200 | Regulator line, listing, milestones | 226 pages |
| `/assets/pdfs/downloads/corporate-governance-report-31032026.pdf` | 200 | Governance facts | |
| `/assets/pdfs/downloads/ABNIC_Sustainability_Report_2020_Final_30.08.2021.pdf` | 200 | Listing date; first report date | |
| `/assets/pdfs/downloads/HEAD-OFFICE-LIC-2026.pdf` | 200 | Not to be presented as current | Shows expiry 14-09-2026; TLS failed once |
| `/assets/reports/disclosure-reports/5547266.pdf` | 200 | Leadership (CEO appointment) | Scanned |
| `/assets/reports/disclosure-reports/5559479.pdf` | 200 | Leadership (executive change) | Scanned |

### A.12 Apps, social and other external links

| URL | Status | Used for | Note |
|---|---|---|---|
| https://play.google.com/store/apps/details?id=abnic.albuhairainsurance.net&hl=en | 200 | ABNIC Health Vault (Android) | |
| https://apps.apple.com/ae/app/abnic-health-vault/id1491122963 | 200 | ABNIC Health Vault (iOS) | |
| https://www.linkedin.com/company/al-buhaira-national-insurance-co./ | 200 | Footer social | |
| https://x.com/albuhairauae | 200 | Footer social | |
| https://twitter.com/albuhairauae | 301 to x.com | Not used (live footer URL) | |
| https://www.instagram.com/albuhaira_insurance/ | 200 (login wall) | Footer social | Profile not confirmed |
| https://www.facebook.com/AlBuhairaInsurance/ | 400 to a non-browser client | Footer social | Unverified |
| https://provider.albuhaira.com/ | **403** | Provider portal | Access restricted |
| https://broker.albuhaira.com/ABNIC_PROD/ | No response (DNS) | Not linked | |
| https://homeins.albuhaira.com | No response (could not connect) | Not linked | |
| https://property.albuhaira.com | No response (connection reset) | Not linked | |

### A.13 POST-only form endpoints (never link, never submit from the prototype)

| URL | Status | Belongs to |
|---|---|---|
| `/enquiry-quotation` | 405 to HEAD | Enquiry form |
| `/travel-form` | 405 to HEAD | Business quotation, Personal Accident and legacy forms |
| https://online.albuhaira.com/livewire/update | 405 to HEAD | Online portal wizards |
| `/motor-claim` | 405 to GET | Motor claim form |
| `/post-medical-claim-status-form` | 405 to GET | Claim status form |
| `/post-reimbursement-payment-form` | 405 to GET | Payment status form |
| `/medical-reimbursement` (POST) | Page is 200 on GET | Reimbursement form target |
| `/complaint` | Not checked (POST target) | Complaint form |
| `/post-medical-card-copy-form`, `/post-medical-website-mobile-app-form`, `/post-medical-form` | Not checked (POST targets) | Medical service request forms |

### A.14 Broken, wrong-content or redirecting URLs (don't link)

| URL | Status | Problem |
|---|---|---|
| `/management-team` | **404** | Linked from the live mobile menu |
| http://survey.albuhaira.com/ | **404** | Old "Happiness Meter" link (commented out) |
| `/assets/pdfs/data-security/abnic-afz-enrolment-api-spec.pdf` | **404** | Old commented-out footer link |
| `/terms-conditions/` | **404** (after redirect to `/terms-conditions`) | App Store privacy-policy link |
| https://albuhaira.com/terms-and-conditions | 200 | Google Play privacy link; works, but is the website terms page |
| `/vehicle-export-certificate` | 200, wrong content | Serves the Motor Fleet page |
| `/hotel-comprehensive` | 200, wrong content | Serves Business Interruption copy |
| `/fire-and-allied-perils` | 200, wrong content | Serves Business Interruption copy |
| `/fire-and-lightning` | 200, wrong content | Serves Business Interruption copy |
| `/motor-insurance-dubai` | 301 to `/car-insurance-dubai` | Footer keyword link missing from the sitemap |
| `/cheap-car-insurance-dubai` | 301 to `/car-insurance-dubai` | Footer keyword link missing from the sitemap |
| `/ar/` (Arabic site) | Not checked | Out of scope |

### A.15 Mentioned in this register but not status-checked

| URL | Status | Where it's mentioned | Note |
|---|---|---|---|
| `/car-insurance` | Content read by the claims fact-checker (status code not logged) | Appendix D (D-27) | Not used on the homepage |
| `/erection-all-risk-quotation` | Not checked | Appendix D (D-36) | Quote link on `/erection-all-risk` |
| `/burglary-insurance-quotation` | Not checked | Appendix D (D-36) | Quote link on `/burglary-insurance` |
| `/money-insurance-quotation` | Not checked | Appendix D (D-36) | Quote link on `/money-insurance` |
| `/fidelity-insurance-quotation` | Not checked | Appendix D (D-36) | Quote link on `/fidelity-guarantee` |
| `/bankers-blanket-insurance-quotation` | Not checked | Appendix D (D-36) | Quote link on `/bankers-blanket` |
| `/plate-glass-insurance-quotation` | Not checked | Appendix D (D-36) | Quote link on `/plate-glass` |
| `/public-and-product-liability-quotation` | Not checked | Appendix D (D-36) | Quote link on `/public-and-product-liability` |
| `/freight-forwarders-legal-liability-quotation` | Not checked | Appendix D (D-36) | Quote link on `/freight-forwarders-legal-liability` |
| `/car-insurance-sharjah` | Not checked | Appendix D (D-37) | Footer keyword page |
| `/health-insurance-sharjah` | Not checked | Appendix D (D-37) | Footer keyword page |
| `/bus-insurance` | Not checked | Appendix D (D-37) | Footer keyword page |

---

## Appendix B. Contacts table

The site uses domestic-format `tel:` links (for example `tel:065174444`); keep that format. "Derived" means the site shows the number without a link and we built the `tel:` value from its digits (PROTOTYPE-ONLY until ABNIC confirms). No helpline has published hours; where hours appear below, they are the hours printed for that office or form.

### B.1 Helplines and head office

| Contact (site label) | Number as displayed | tel href | Purpose | Hours | Homepage use | Sources |
|---|---|---|---|---|---|---|
| Motor Insurance Toll | 600535357 | `tel:600535357` | Buy or renew motor insurance ("Motor Insurance Sales") | Not stated | Yes | contact.helpline.2; contact.motor.1 |
| Motor Insurance Mobile | 0507510074 | `tel:0507510074` | Motor insurance; purpose not described further | Not stated | Optional | contact.helpline.3 |
| Road Side Assistance | 8008181 | `tel:8008181` | Roadside assistance, where included in a motor policy | Not stated | Yes, with "where included" | contact.helpline.4; claims.roadside.4 |
| Motor Claims Toll | 600545457 | `tel:600545457` | Motor and fleet claims | Not stated | Yes | contact.helpline.5; business.motorfleet.3 |
| Medical Insurance | 06 5117500 | `tel:065117500` | Medical insurance and customer service | Not stated; the Medical & Life Department page says "Timing: 8:00am to 5:00pm" | Yes | contact.helpline.6; claims.247.5 |
| Home & Travel Insurance | 600548283 | `tel:600548283` | Home and travel insurance (not a claims or emergency line) | Not stated | Yes | contact.helpline.7 |
| Marine Insurance | 06 5174487 | `tel:065174487` | Marine insurance | Not stated | Business and marine areas | contact.helpline.8 |
| Marine Claims | 06 5174486 | `tel:065174486` | Marine claims | Not stated | Business and claims areas | contact.helpline.9 |
| Medical reimbursement guidance (not in the helpline list) | 600 545459 (also "600545459") | `tel:600545459` (derived) | Guidance on submitting a reimbursement request | Not stated | Claims area | claims.medical.9, claims.medical.11 |
| Head office: "Motor, Marine and FGA Call" | 06 517 4444 | `tel:065174444` | General enquiries for motor, marine, fire and general accident | Mon–Thu 8:00 a.m.–5:00 p.m. (lunch 1:30–2:00 p.m.); Fri 8:00 a.m.–12:00 noon; Sat–Sun closed | Yes | contact.headoffice.2; contact.hours.1 |
| Head office: "Medical Call" | 06 511 7500 | `tel:065117500` | Medical (same number as "Medical Insurance") | As head office | Yes | contact.headoffice.3 |
| Head office email | care@albuhaira.com | `mailto:care@albuhaira.com` | General enquiries | n/a | Yes | contact.headoffice.1 |
| Head office fax | 06 574 8855 | None (plain text) | Fax | n/a | Footer, plain text | contact.headoffice.4; contact.footer.1 |

### B.2 Department and service contacts

| Contact (site label) | Number as displayed | tel href | Email | Purpose | Hours | Homepage use | Sources |
|---|---|---|---|---|---|---|---|
| Motor Insurance Sales | 600535357 | `tel:600535357` | care@albuhaira.com | Motor sales | Department hours | Yes | contact.motor.1 |
| Motor Insurance Claims | 600545457 | `tel:600545457` | motorclaims@albuhaira.com | Motor claims | Department hours | Yes | contact.motor.2 |
| Motor claims WhatsApp | 50 107 9830 | None on the site | | Motor claims requests | Not stated | Hold: format unconfirmed (GAP) | contact.whatsapp.1 |
| ABNIC Customer Service (medical) | 06-5117500 | `tel:065117500` | customerservice@albuhaira.com | Medical customer service | Not stated | Yes | medteam.1 |
| New Enquiries (medical) | 06-5117446 | `tel:065117446` (derived) | med.quotation@albuhaira.com | New medical quotes | Not stated | Medical and Group Medical | personal.medical-quote.9 |
| Policy Issuance (medical) | 06-5117457 | `tel:065117457` (derived) | med.policy@albuhaira.com | Policy issuance | Not stated | Medical pages only | contact.medical.2 |
| Policy Endorsements (medical) | 06-5117417 / 06-5117481 / 06-5117493 | Derived | med.cards@albuhaira.com | Endorsements | Not stated | Medical pages only | contact.medical.3 |
| ABNIC Network | 06-5117423 | `tel:065117423` (derived) | network@albuhaira.com | Medical network enquiries | Not stated | Yes (network block) | medteam.2 |
| Claims Reimbursement | 06-5117470 | `tel:065117470` (derived) | claims@albuhaira.com | Medical reimbursement claims | Not stated | Claims area | claims.medical.14 |
| Pre-Authorization Request | CONFLICT: 06-5117510 (`/contact-medical-team`) or 06-5117500 (`/medical-insurance-department`) | Hold | approvals@albuhaira.com | Prior approvals | Not stated | Hold until confirmed | medteam.3; mf.contact.conflict |
| PAR request | CONFLICT: 06-5117410 or 06-5117500 | Hold | | | | Hold | medteam.3; mf.contact.conflict |
| PAR request status | CONFLICT: 06-5117418 or 06-5117500 | Hold | | | | Hold | medteam.3; mf.contact.conflict |
| Complaints (medical) | CONFLICT: 050 9785600 or 06-5117500 | Hold | | | | Hold | contact.medical.4 |
| Complaint desk (company) | 06-511 7281 | `tel:065117281` (derived) | (an individual's mailbox; don't publish) | Complaints | "Monday to Friday, 8.30 am to 5 pm." | Prefer the form link; confirm the phone first | complaints.process.1 |
| Medical Insurance Department | 06 511 7500 | `tel:065117500` | care@albuhaira.com | Medical department, Rolla | Department hours | Yes | contact.medical.1 |
| Fire And General Accident Insurance Department | 06 517 4444 | `tel:065174444` | care@albuhaira.com | FGA | Department hours | Via head office | contact.fga.1 |
| Marine Insurance Department | 06 517 4444 | `tel:065174444` | care@albuhaira.com | Marine department | Department hours | Via head office | contact.marine.1 |
| Marine department mailbox | | | marinedept@albuhaira.com | Return marine claim forms; marine quotes | | Marine area (printed on forms only) | business.missed.10, business.missed.11 |
| Life Department (Group Life Quotation DOCX) | Head of Life +971 6 5117407; Life Underwriting Supervisor +971 6 5117465; Life Underwriter +971 6 5117427 | Derived | | Group Life | | Hold: DOCX only; confirm | business.missed.4 |
| Personal lines mailbox | 600 548283 (as printed) | | personallines@albuhaira.com | Home and travel proposals | | Hold: PDF only | personal.travel.15; personal.home.19 |
| Yacht proposal form contact | 06 5174444 (as printed) | | abnicho@albuhaira.com | Yacht and jet ski proposals | | Hold: PDF only; its fax digits differ from the site | personal.yacht.13 |
| Shareholders Relationship Officer | 065174444 (Extn – 503) | | (named person) | Investor relations | | Investor Relations page only | contact.ir.1 |
| App support | + 97165117500 (store description) | | customerservice@albuhaira.com | App problems | | CONFLICT: Google Play support panel shows +97165117555 | app.support.1, app.support.2 |
| Privacy contact | | | privacy@albuhaira.com | Data privacy | | Legal pages; printed in the consent PDF only | missed.privacy.consent_notice |

### B.3 Branches (24 links in 12 location groups)

Every branch page shows "Timing: 8:00am to 5:00pm" with no days, which conflicts with the head-office hours. Most branch pages also carry an empty second `tel:` link hidden from view. Staff mailboxes are not reproduced here. [branches.list.2 (corrected); missed.branch.head_office_timing; claims.issue.3 (refuted)]

| Location group | Branch (site label) | Page | Phone as displayed | tel href | Email to publish | Sources |
|---|---|---|---|---|---|---|
| Sharjah | Head Office | `/insurance-head-office` | 06 517 4444 | `tel:065174444` | care@albuhaira.com | missed.branch.head_office_timing |
| Sharjah | Motor Insurance (Main) - Buhaira | `/motor-insurance-head-office` | 600 53 53 57 | `tel:600535357` (derived) | None (staff mailbox only) | missed.branch.motor_rolla_number |
| Sharjah | Motor Claims (Main) - Rolla | `/motor-claims-rolla` | 06 568 4000 | `tel:065684000` | motorclaims@albuhaira.com | branches.detail.1 |
| Sharjah | Motor Insurance - Rolla | `/motor-insurance-rolla` | 06 568 4000 | `tel:065684000` (derived) | None (staff mailbox only) | missed.branch.motor_rolla_number |
| Sharjah | Medical & Life Department | `/medical-insurance-head-office` | 06 5117500 | `tel:065117500` | customerservice@albuhaira.com | missed.branch.medical_ho |
| Dubai | Deria Branch | `/car-insurance-dubai-deria` | 04 231 9444 | `tel:042319444` | None (staff mailbox only) | missed.branch.deria |
| Dubai | Sheikh Zayed Branch | `/car-insurance-dubai-sheikh-zayed` | 04 343 5995 | `tel:043435995` | None (staff mailbox only) | missed.branch.sheikh_zayed |
| Abu Dhabi | Abu Dhabi Branch - Motor & Non Motor Insurance | `/car-insurance-abu-dhabi-city` | 02 622 6200; WhatsApp 054 792 6321 | `tel:026226200`; the WhatsApp number is wired as `tel:0547926321` | adbbranch@albuhaira.com | missed.branch.abu_dhabi |
| Abu Dhabi | Abu Dhabi - Motor Claims & Accounts | `/car-insurance-claims-abu-dhabi` | 02 622 6200; WhatsApp 056 506 3576 | `tel:026226200`; the WhatsApp number is wired as `tel:0565063576` | adbbranch@albuhaira.com | branches.detail.2 |
| Alain | Alain Branch | `/car-insurance-alain` | 03 764 1960 | `tel:037641960` (derived) | None (staff mailbox only) | missed.branch.al_ain |
| Ajman | Ajman Branch | `/car-insurance-ajman-city` | 06 746 7777 | `tel:067467777` (derived) | None (staff mailbox only) | missed.branch.ajman |
| Ajman | Ajman Traffic | `/car-insurance-ajman-traffic` | Not captured (GAP) | | | branches.list.2 |
| Ajman | Ajamn Speed Traffic (sic) | `/car-insurance-ajman-speed-traffic` | Staff name and mobile only | DO NOT USE (broken tel link) | | missed.branch.data_errors |
| Fujairah | Fujairah Branch | `/fujairah-car-insurance` | 09 222 7288 | `tel:092227288` (derived) | fujbranch@albuhaira.com | missed.branch.fujairah |
| Fujairah | Fujairah Traffic | `/car-insurance-fujairah-traffic` | Not captured (GAP) | | | branches.list.2 |
| Fujairah | Fujairah Traffic Kalba | `/car-insurance-fujairah-traffic-kalba` | Not captured (GAP) | | | branches.list.2 |
| Hatta | Hatta POS | `/car-insurance-dubai-hatta-border` | Staff name and mobile only | DO NOT USE | | missed.branch.data_errors |
| Kalba | Kalba (Khatam Al Malaha) | `/car-insurance-kalba` | Not captured (GAP) | | | branches.list.2 |
| Khor Fakkan | Khor Fakkan Branch | `/car-insurance-khor-fakkan-city` | 09 238 6089 | `tel:092386089` (derived) | khobranch@albuhaira.com | missed.branch.khorfakkan |
| Khor Fakkan | Khor Fakkan Traffic | `/car-insurance-khor-fakkan-traffic` | Not captured (GAP) | | | branches.list.2 |
| Khor Fakkan | Khor Fakkan Tasjeel | `/car-insurance-khor-fakkan-tasjeel` | Not captured (GAP) | | | branches.list.2 |
| Al Dhaid | Al Dhaid (Tasheel) | `/car-insurance-al-dhaid` | Not captured (GAP) | | | branches.list.2 |
| Umm Al Quwain | Umm Al Quwain POS | `/car-insurance-umm-al-quwain-POS` | Not captured (GAP) | | | branches.list.2 |
| Ras Al Khaimah (RAK) | Ras Al Khaimah | `/car-insurance-rak` | 07 2279704 | `tel:072279704` (derived) | care@albuhaira.com | missed.branch.rak |

- Homepage: link "Find a branch" to `/branches`; don't show a branch count (Appendix D). The RAK address to use is "Al Buhaira Insurance RAK Branch, Ground Floor, Next to Khaleej Investment Building, 21A Street, Al Muntasir Road, Ras Al Khaimah, UAE". [about.missed.19; missed.branch.rak]

### B.4 Do not publish

- Individual staff mailboxes: a.sundus@, n.usmani@ (medical renewals and finance), rabie.g@ (complaints), salim@ (marine claim forms), khalid@ (investor relations page only), and the branch staff mailboxes. [contact.medical.3; complaints.process.1; claims.nonmotor.8; contact.ir.1; missed.branch.data_errors]
- Staff names with personal mobiles on the Ajman Speed Traffic and Hatta pages. [missed.branch.data_errors]
- "Life & Medical Insurance: 600 532229" from the company profile: it appears nowhere on the website. [about.profile.3]
- Any number next to "24/7". [claims.missed.3]

---

## Appendix C. Gaps and prototype-only interactions

### C.1 Prototype-only interactions

| ID | Interaction | What's real | What's mocked | Sources |
|---|---|---|---|---|
| P-1 | Quote selector | Routing to the verified destinations in sections 2.2 and 2.3 | Any pre-fill, embedded portal or in-page form submission | personal.portal.3; business.enquiry.1 |
| P-2 | Click-to-call and email | `tel:` and `mailto:` values in Appendix B | Derived `tel:` values for numbers the site shows without a link | claims.medical.9; contact.medical.2 |
| P-3 | Homepage network search | Submitting a GET request to `/medical-network` with the exact values in section 7.2 | Autocomplete, "near me", map, result preview, result count | network.finder.1, network.finder.11 (corrected) |
| P-4 | Helpline panel visible on all screens | The eight numbers in Appendix B.1 | The panel itself (the live trigger is hidden on phones) | claims.helpline.1 (corrected) |
| P-5 | Forms (quote, enquiry, claim, complaint, service requests) | Field lists copied from the live forms | Any submission; link to the live page instead | Appendix A.13 |
| P-6 | Claim route chooser | Links to `/motor-claims`, `/non-motor-claim`, `/medical-reimbursement-form` | Any claim tracker or status lookup (none exists) | claims.status.1, claims.status.8 |
| P-7 | Offers band | Static copy with qualifiers (section 4.2) | Any eligibility checker or discount calculator | affinity.homat.3 |
| P-8 | App promotion | Store links and the stated features (section 9.1) | QR codes, which must encode the store URLs exactly | app.links.1 |
| P-9 | Site search | Nothing verified | Any search box | none |
| P-10 | Chat or WhatsApp widget | No general chat or WhatsApp channel exists | Any chat widget (GAP) | contact.whatsapp.1 |
| P-11 | "My policies" or login | No customer login exists | Any account area (GAP) | medical-digital research gaps; eservices.2 |
| P-12 | Language switch | Arabic `/ar/` pages exist but were not researched | Any Arabic content | sitemap (footer.sitemap.1) |

### C.2 Gaps (ABNIC must supply or confirm)

| ID | Gap | Homepage impact | Sources |
|---|---|---|---|
| G-1 | No prices, premiums or "from AED" figures for any product (only the MOTOR promo and card-holder offers) | No price points or comparisons | personal research gaps; business research gaps |
| G-2 | No quote, approval, settlement, payment or response times anywhere | No timing copy | claims.timing.1–claims.timing.10 |
| G-3 | No supported way to pre-fill the online portal from the homepage | Selector routes only | personal.portal.3 |
| G-4 | No phone line stated for Yacht, Jet Ski, Motorcycle, Personal Accident, Credit Life, Property, Engineering, Aviation, Liability, Energy, Miscellaneous or Motor Fleet quotes | Use head office 06 517 4444 | personal.contact.8; business research gaps |
| G-5 | Which department owns which business line is not stated (the FGA page lists no products) | No "your team" claims on business cards | business.enquiry.6 |
| G-6 | Vehicle Export Certificate page has no content (serves the Motor Fleet page) | Leave it out of menus | business.vec.1 |
| G-7 | Hotel Comprehensive, Fire & Allied Perils and Fire & Lightning pages serve Business Interruption copy | Don't link them | business.missed.1, business.missed.2 |
| G-8 | Four fleet pages; no canonical | Link `/motor-fleet-insurance` only | business.missed.14 |
| G-9 | No overseas travel-assistance number or provider; travel tiers only in a PDF | No emergency claims for travel | claims.nonmotor.3; personal.travel.11 |
| G-10 | Roadside assistance: no provider, services, hours, area or tier list | Always "where included"; no "24/7" | claims.roadside.1 |
| G-11 | "24/7 medical claims support" has no number or channel | Don't use the claim | claims.missed.3, claims.missed.4 |
| G-12 | No helpline hours; office hours conflict (head office, complaints desk, `/other-inquiries`, branch pages) | Label hours as head-office hours | contact.hours.1; complaints.hours.1; mf.eservices.otherhours; missed.branch.head_office_timing |
| G-13 | No online claim tracking for motor or non-motor claims; medical status is a call-back form | Static claim steps only | claims.status.1, claims.status.8 |
| G-14 | Non-motor claim page gives no steps, phone or email | Point to head office | claims.nonmotor.1 |
| G-15 | Motor claims WhatsApp "50 107 9830" has no country code or link | Don't build a wa.me link | contact.whatsapp.1 |
| G-16 | Which medical claims number is primary is unclear (600 545459, 06-5117470, 06 5117500) | Show each with its own label | claims.medical.9, claims.medical.14; claims.missed.2 |
| G-17 | Upload limits and the confirmation or reference shown after an online claim are unknown | Don't promise a reference number | claims research gaps |
| G-18 | Complaints: no timelines on the page; no regulator escalation link although the 2025 Sustainability Report says one exists | Link the form only | complaints.process.1; about.missed.24 |
| G-19 | Medical provider counts conflict (2,400 against 1,500) | No counts | network.size.1 (corrected); network.size.2 |
| G-20 | Network types are not explained, and plans are not mapped to networks or TPAs | Show the values only | network.finder.2; tpa.page.1 |
| G-21 | The finder has no API, map, geolocation, count, export or update date | GET deep link only | network.finder.11 (corrected) |
| G-22 | Aafiya links all 404; FMC Android 404; NAS "View Network" is a homepage, not a search | Add the ABNIC Network fallback contact | tpa.aafiya.1; tpa.fmc.1; tpa.nas.1 |
| G-23 | Broker, home-broker and rental portals unreachable; provider portal 403; three services have no URL | Customer portals only | digital.svc.1, digital.svc.2, digital.svc.6, digital.svc.9 |
| G-24 | App: who can use it is not stated; support number and privacy declarations conflict; App Store privacy link 404; the digital card isn't in the store feature list | Attribute features to the store listing | app.support.1, app.support.2, app.support.3; mf.app.privacy; digital.svc.8 |
| G-25 | No customer login or account area; medical renewals are by phone or email; car renewal reuses the new-quote URL | No "manage your policy" claims | personal.motor.33; mf.eservices.otherhours |
| G-26 | No financial-strength rating and no ISO-type certification | No rating badges | about.ratings.1 |
| G-27 | The regulator registration appears only in the FY2025 statements PDF | Footer regulator line needs approval | about.regulator.1 |
| G-28 | InsureTek award year and title conflict (2022, 2023, "2022 & 2023") | Confirm before use | about.awards.1, about.awards.6, about.awards.7 |
| G-29 | `/financial-marketing` shows the incorporation date as the listing date and an outdated auditor | Use 2005 and KPMG from other sources | about.listing.3; about.governance.4, about.governance.5 |
| G-30 | Mission wording differs between the website and the 2026 profile | Use the website wording | about.mission.1, about.mission.2 |
| G-31 | Leadership in flux; `/management-team` is a 404 | No names; no team link | about.missed.4; about.leadership.3 |
| G-32 | The trading licence PDF on the investor page shows an expiry of 14-09-2026 | Don't cite it | about.missed.3 |
| G-33 | News page 1 is nine copies of one item | No automatic news feed | about.news.1 |
| G-34 | `/privacy-policy` duplicates the terms; the Data Privacy Policy PDF is internal; the request form has no submission address; no consent control on the homepage | Keep live labels; flag for ABNIC | legal.privacy.1 (corrected); missed.privacy.policy_internal; missed.privacy.dsr_placeholder; missed.privacy.consent_notice |
| G-35 | Medical complaint and pre-authorisation numbers conflict between two pages | Hold those numbers | contact.medical.4; mf.contact.conflict |
| G-36 | Motor claims office floor conflicts (Ground vs 2nd); building name varies ("Buhaira Insurance Towers" vs "Al Buhaira Tower") | Use the page link, not a floor | claims.issue.2; contact.fga.1 |
| G-37 | Phones missing for 8 of 24 branches; 2 show only staff names; most branch mailboxes are personal | Link `/branches`, don't list phones | branches.list.2; missed.branch.data_errors |
| G-38 | Life insurance: `/insurance-product` lists "Individual Life Insurance", `/life-insurance` says business only | Don't list life under Personal | missed.products.list; personal.missed.life-business-only |
| G-39 | Facebook and Instagram profiles not verifiable from a non-browser client | Check before launch | social.links.1 |
| G-40 | Esaad and Fazaa discount levels not published; Fazaa eligibility not stated | "Special rate" wording only | affinity.esaad.2, affinity.fazaa.1 |
| G-41 | Group Medical page: complaint contact doesn't render and the DHA link is missing | Don't copy | business.groupmedical.12; claims.missed.17 |
| G-42 | Purpose of "Motor Insurance Mobile" 0507510074 is not described | Optional in the strip | contact.helpline.3 |
| G-43 | Credit Life target buyer is unclear (lenders vs employers) | Lender framing only | business research gaps |

---

## Appendix D. Excluded and unverified claims

Nothing in this appendix may go on the homepage. 96 items in five groups.

### D.1 Refuted (1)

| ID | Claim | Verdict | Sources |
|---|---|---|---|
| D-1 | "An empty second phone entry (href='tel:') renders on the claims office pages." | Refuted: the entry is wrapped in a hidden `d-none` element and never renders. | claims.issue.3 · `/motor-claims-rolla` |

### D.2 Superseded wordings (corrected by the fact-checkers; use only the corrected version) (22)

| ID | Original claim (don't reintroduce) | Corrected to | Sources |
|---|---|---|---|
| D-2 | ABNIC offers individual term, whole-life and endowment life plans as personal products | Life insurance on the site is business-only: Group Life and Credit Life, quoted via `/enquiry` | personal.overview.5 |
| D-3 | "More than 2,400 medical providers" is the site's only provider figure | Conflicts with "over 1500"; use neither | personal.medical.5 |
| D-4 | The portal's "in minutes" is the only speed claim | Several unquantified speed claims exist; none states a time | personal.portal.1 |
| D-5 | Home Shield accidental damage "adds 20% to the premium" | A 20% loading on the basic rate or basic premium | personal.home.16 |
| D-6 | Motorcycle quotes are handled by enquiry and call-back | Enquiry form only; no call-back or response time stated; no product field | personal.motorcycle.5 |
| D-7 | The homepage business section is a carousel | A static wrapping card grid | business.nav.3 |
| D-8 | Loss of Profit covers revenue, fixed expenses and increased cost of working (unconditional) | Only after damage insured under a Property All Risks or Fire & Allied Perils policy | business.property.6 |
| D-9 | Group medical members can be added or removed monthly | "usually … subject to the insurer’s procedures and policy conditions" | business.groupmedical.7 |
| D-10 | Marine helplines are shown site-wide | In a pop-up opened only by a footer icon hidden on phones | business.marine.9 |
| D-11 | Business claims go through the non-motor form | It's one route for non-motor claim requests; fleet, medical and marine claims have their own routes | business.enquiry.8 |
| D-12 | The helpline list is a header pop-up | Footer-only trigger, hidden below 576px | claims.helpline.1 |
| D-13 | Finder Speciality and Doctor columns are always blank | Filled on doctor rows | network.finder.7 |
| D-14 | The site never states a provider total | It states two conflicting totals; finder rows repeat per network | network.finder.8 |
| D-15 | Keyword searches provider names | Also doctor names, location text and phone numbers | network.finder.10 |
| D-16 | The finder page loads four scripts | Ten scripts; still no data endpoint | network.finder.11 |
| D-17 | The finder can't search by doctor or clinic | It can, through Keyword and the Speciality filter | network.finder.13 |
| D-18 | "More than 2,400 medical providers" stated flatly | Sits in a plan-dependent "may include" list; conflicts with 1,500 | network.size.1 |
| D-19 | No service delivers online renewals or claim tracking | Online car renewal exists; the app listing claims claim status; medical status is a call-back form | digital.meta.1 |
| D-20 | The medical helpline sits in the site header | In the footer-triggered pop-up | medteam.6 |
| D-21 | The helpline pop-up is on every page | Not on `/customer-satisfaction-survey`; trigger hidden on phones | contact.helpline.1 |
| D-22 | 11 location groups and 25 branch links | 12 groups and 24 links | branches.list.2 |
| D-23 | Real privacy content is only in the Data Privacy Policy PDF | That PDF is an internal restricted policy; the public notice text is in the Consent Form PDF | legal.privacy.1 |

### D.3 Research-note and draft-copy errors caught by the fact-checkers (10)

| ID | Error | Correct position | Source of correction |
|---|---|---|---|
| D-24 | "No discounts or promotional offers" on personal products | Promo code MOTOR; Homat Al Watan 10%; Esaad and Fazaa special rates | personal.missed.promo-code-motor; personal.missed.homat-10pct |
| D-25 | Page canonicals use the host "www.www.albuhaira.com" | Canonicals are on https://www.albuhaira.com/ | business verification summary |
| D-26 | The Marine Department page shows a fax number | It doesn't | claims.nonmotor.10 |
| D-27 | `/car-insurance` uses the same documents wording as the motor FAQ | It is shorter | claims verification summary |
| D-28 | Timeline "2020: First Sustainability Report" | Published June 2021, covering FY2020 | about.missed.2 |
| D-29 | "25 branches and service points" | 24 branch links | branches.list.2 |
| D-30 | Every guide's "Get a Quote" goes to the online motor quote | Destinations vary (section 11.3) | missed.quote.guide_ctas |
| D-31 | A "Card-holder offers" category that includes `/car-insurance-offer` | That page is a general promo-code offer | missed.offers.promo_motor |
| D-32 | No department or contact is named for Group Life | A Life Department (DOCX) and a Medical & Life Department exist | business.missed.4, business.missed.5 |
| D-33 | Draft copy flagged by the fact-checkers: property summary bundling business interruption; "life and disability cover for your whole team"; unconditional credit-life "Pays"; non-motor link for all business claims; unqualified motor chips; "Buy online" for every product; unqualified Jet Ski theft; a helpline strip implying 24/7 and a yacht line | Replaced by the qualified copy in this register | verification copy_problems (all areas) |

### D.4 Unverified or not checked (don't use until checked) (16)

| ID | Item | Why | Sources |
|---|---|---|---|
| D-34 | Facebook page https://www.facebook.com/AlBuhairaInsurance/ | Returned 400 to a non-browser client | social.links.1 |
| D-35 | Instagram profile content | Login wall only | social.links.1 |
| D-36 | Sub-product quote forms not status-checked: `/erection-all-risk-quotation`, `/burglary-insurance-quotation`, `/money-insurance-quotation`, `/fidelity-insurance-quotation`, `/bankers-blanket-insurance-quotation`, `/plate-glass-insurance-quotation`, `/public-and-product-liability-quotation`, `/freight-forwarders-legal-liability-quotation` | Linked from pages, never fetched | business.engineering.8; business.misc.4–business.misc.9; business.liability.8; business.marine.12 |
| D-37 | Emirate keyword pages (for example `/car-insurance-sharjah`, `/health-insurance-sharjah`), `/bus-insurance` and other SEO pages | Not status-checked | support research gaps |
| D-38 | Later-step fields of the motor and home wizards (age range, nationality, body type, building type and so on) | Inferred from embedded data, never seen on screen | personal.motor-quote.5; personal.home-quote.3 |
| D-39 | Travel wizard destination and trip-type names | Not exposed | personal.travel-quote.2 |
| D-40 | Medical plan names "Basic Plans", "Flexi Plans", "Enhanced Plans" and how they relate to EBP | Wizard data only | personal.medical-quote.3–personal.medical-quote.5 |
| D-41 | Travel tiers (Gold, Silver, Bronze), territories and 7–90 day bands | Proposal-form PDF only | personal.travel.11–personal.travel.13 |
| D-42 | The app feature "Dawaa" | Never explained | app.features.4 |
| D-43 | "ABNIC Smart App" and "WhatsApp Business" | Named in the profile without details | digital.profile.1 |
| D-44 | Which medical members can use ABNIC Health Vault | Not stated | medical-digital research gaps |
| D-45 | International format of the motor claims WhatsApp number | Not stated | contact.whatsapp.1 |
| D-46 | Phones for 8 branches (Ajman Traffic, Fujairah Traffic, Fujairah Traffic Kalba, Kalba, Khor Fakkan Traffic, Khor Fakkan Tasjeel, Al Dhaid, Umm Al Quwain POS) | Not captured | branches.list.2 |
| D-47 | Reinsurer names | Logos only in the profile | about.partnership.4 |
| D-48 | Fazaa card eligibility | Not stated | affinity.fazaa.1 |
| D-49 | Whether the unreachable portals are down or only geo-blocked | Checks ran from outside the UAE | digital.svc.1, digital.svc.6, digital.svc.9 |

### D.5 True on the site but excluded from homepage copy (47)

| ID | Claim (VERBATIM where quoted) | Where | Why excluded | Sources |
|---|---|---|---|---|
| D-50 | "Access to more than 2,400 medical providers" | `/medical-insurance` | Conflicts with 1,500 | personal.medical.5; network.size.1 |
| D-51 | "ABNIC has a network of over 1500 medical providers managed by a professional team of around 20 doctors, 5 pharmacists working 24 hours…" | `/group-medical-insurance`; app listings | Conflicts with 2,400; undated | business.groupmedical.4; app.desc.1 |
| D-52 | "63 … hospitals", "593 accredited clinics", "51 Diagnostic Centre’s", "989 Pharmacies" | `/group-medical-insurance`; app listings | Undated, unconfirmed | business.groupmedical.5; app.desc.2 |
| D-53 | "Fast, simple, and secure — get your quote in minutes." | Online portal | Speed promise | personal.portal.1 |
| D-54 | "Fast & Hassle-free Claim process." | `/` | Unquantified speed claim | claims.timing.1 |
| D-55 | "a fast and efficient claims processing system that aims to provide prompt and fair compensation" | `/property-insurance` | Speed claim | claims.timing.2 |
| D-56 | "Fast claims settlement … as quickly as possible." | `/motor-fleet-insurance` | Settlement-speed claim | claims.timing.3 |
| D-57 | "fast and effective online claims handling" | `/digital-services` | Speed claim | claims.timing.4 |
| D-58 | "Efficiency in handling claims" | `/group-medical-insurance` | Unsupported | claims.timing.5 |
| D-59 | "24/7 Medical claims support center." and similar ("Dedicated 24 x 7 help line"; "24/7 dedicated medical claims support") | `/`, `/group-medical-insurance`, profile, Integrated Report | No number or channel | claims.247.1, claims.247.3; claims.missed.3, claims.missed.4 |
| D-60 | "strong balance sheet and high credit rating" | `/property-insurance` | No rating exists; FY2025 solvency breach | about.ratings.1; about.caution.1 |
| D-61 | "Financially stable" claims | `/credit-life-insurance`, `/group-life-insurance` | Financial-strength claim | about.missed.12, about.missed.13 |
| D-62 | "Strong financial stability, liquidity, and ample capital"; "Strong financial resilience and stability."; "High financial resilience and liquidity to ensure sustainability." | 2025 Sustainability Report; profile | Financial-strength claim | about.missed.14, about.missed.15; about.why.8 |
| D-63 | "financial strength" | About page meta description; Mission & Vision intro | Financial-strength claim | about.missed.16; about.values.2 |
| D-64 | "Total assets valued above AED 2 billion"; "paid-up capital of AED 250 million" | Profile; `/about-us` | Changeable financial figures | about.caution.3; about.listing.1 |
| D-65 | "We have achieved great financial results and healthy shareholder returns."; "strong financial situation" | `/investor-relations`; `/annual-reports` | Conflicts with FY2025 disclosures | about.ir.1, about.ir.6 |
| D-66 | "ABNIC achieved a significant milestone in 2025 by returning to profitability." | 2025 Sustainability Report | Sensitive given the solvency disclosure | about.milestones.5 |
| D-67 | Superlatives: "one of the leading insurance providers" (About, business hub, personal overview); "A leading insurer with personalized service."; "the highest levels of service" (Energy) | Several pages | Unsupported; ABNIC approval needed | about.founding.1; business.hub.3; personal.missed.overview-unhedged; about.positioning.1; business.energy.1 |
| D-68 | "over 40 years"; "Your Trusted Partner for 43+ Years" | `/property-insurance`, `/aviation-insurance`; 2022 news | Dates quickly; "since 1978" is safe | business.property.14; business.aviation.6; about.news.3 |
| D-69 | "ABNIC Earns Impressive 4.5-Star Google Rating" | News (09 Jun 2023) | Consumer rating, dated | about.ratings.2 |
| D-70 | Branch counts: "9 branches"; "Head office, 11branches"; "1 Head Office, 8 full-service branches, and 8 Points of Sale"; six branch cities | About, profile, Sustainability Report, statements | Conflicting | about.presence.1–about.presence.4 |
| D-71 | "346 professionals" | `/about-us` | Conflicts with 505 (2025) | about.presence.6 |
| D-72 | "Almost all (95%) of the UAE Nationals working at the company are women." | `/emiratization` | Conflicts with about 81% (2025) | about.emiratization.3; about.missed.17 |
| D-73 | "More than 99,000 individuals benefit from the card." (Esaad) | `/affinity` | Undated | affinity.esaad.1 |
| D-74 | "It is a mandatory requirement for all aircraft owners and operators to have insurance coverage before operating any aircraft in the UAE airspace." | `/aviation-insurance` | Unsourced legal claim | business.aviation.5 |
| D-75 | H1 "Energy Insurance in the Insurance" and the list of competitor insurers | `/energy-insurance` | Content errors | business.energy.4 |
| D-76 | "SME packages" | Business hub meta description | No such product found | business research gaps |
| D-77 | Fleet "online services, including policy renewal, claims submission, and tracking" | `/motor-fleet-insurance` | Unsupported | business.motorfleet.11 |
| D-78 | "track claims seamlessly from anywhere" | Digital Services meta description | Unsupported for medical; no motor tracking | digital.meta.1 |
| D-79 | "Our plans are specifically designed to increase the cost of medical treatment…" | App store descriptions | Garbled | app.desc.3 |
| D-80 | "comprehensive yacht and jet ski insurance coverage" | `/personal-insurance` | Unhedged; jet ski may be liability-only | personal.missed.overview-unhedged-watercraft |
| D-81 | "Health Authority of Abu Dhabi (HAAD)" | `/group-medical-insurance` | Outdated regulator name | business.groupmedical.2 |
| D-82 | Legacy plan names and limits (Family Package Plan A/B/C, AED 50/100 deductible; Group Medical Plans A–E, AED 400,000 to 25,000) | PDF forms | Undated, legacy | personal.medical.36; business.missed.20 |
| D-83 | "Projects insured by ABNIC" client and project names | Profile | Client permission needed | about.profile.1, about.profile.2 |
| D-84 | Executive and board names (CEO appointment, General Manager, acting management) | Board page; disclosures | Leadership in flux | about.board.3; about.leadership.2; about.missed.4, about.missed.5, about.missed.6, about.missed.7 |
| D-85 | Individual staff mailboxes and staff mobiles | Medical directory, complaints page, forms, branch pages | Personal data | contact.medical.3; complaints.process.1; missed.branch.data_errors |
| D-86 | "Life & Medical Insurance: 600 532229" | Profile | Not on the website | about.profile.3 |
| D-87 | The trading licence as a current credential | `/assets/pdfs/downloads/HEAD-OFFICE-LIC-2026.pdf` | Shows expiry 14-09-2026 | about.missed.3 |
| D-88 | InsureTek award variants ("Insuretek 2022", "Health Insurer of Excellence … 2022 & 2023") | `/about-us`; profile | Conflict; use only after ABNIC confirms | about.awards.1, about.awards.7 |
| D-89 | "Customer Happiness Medal awarded by the Insurance Authority." without a year | `/` | Must carry "2020" | about.awards.5 |
| D-90 | Present-tense "Proud Sponsor of Sharjah Sports Club" | News (13 Dec 2022) | Evidence covers the 2022–2023 season only | about.news.4; about.awards.9 |
| D-91 | "Worldwide & Schengen Cover" | `/travel-insurance` page title | The body never mentions worldwide cover | personal.travel.10 |
| D-92 | "Individual Life Insurance" as a personal line; EBP "for residents earning AED 4,000 per month or less" | `/insurance-product` | Conflicts with `/life-insurance` and the EBP page | missed.products.list |
| D-93 | Mislabelled "Get a Quote" buttons | `/medical-reimbursement` (opens a claim form); `/human-resources` (opens the travel quotation) | Wrong destinations | claims.issue.6; careers.hr.5 |
| D-94 | "Al Bauhaira National Insurance Company (ABNIC) official health insurance app." | Google Play short description | Misspelt company name | app.android.1 |
| D-95 | The 2026 company profile's mission wording | Profile | Two sources back the website wording | about.mission.2; about.missed.11 |
| D-96 | "The standard vehicle test may take approximately 10 minutes" as any ABNIC timing | `/adnoc-vehicle-inspection-centers` | ADNOC's test, not a claim time | claims.timing.9 |

