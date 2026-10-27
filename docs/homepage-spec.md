# Homepage specification

Companion to `docs/design-system.md`. Content comes from `content/*.ts` (verified against the live site on 26 October 2026). Section order and anchors:

| # | Section | Component | Anchor | Surface |
| --- | --- | --- | --- | --- |
| 1 | Header (utility bar + sticky main bar) | `components/site/header/*` | — | canvas |
| 2 | Hero + product selector | `components/sections/hero/*` | `#top` | canvas |
| 3 | Quick access | `components/sections/quick-access.tsx` | — | white strip on canvas |
| 4 | Personal insurance | `components/sections/personal-insurance.tsx` | `#personal` | canvas |
| 5 | Business insurance | `components/sections/business/*` | `#business` | surface (white) |
| 6 | Claims | `components/sections/claims.tsx` | `#claims` | `sky-soft` |
| 7 | Medical network | `components/sections/medical-network.tsx` | `#medical-network` | canvas |
| 8 | Trust | `components/sections/trust.tsx` | `#about` | canvas |
| 9 | Digital services | `components/sections/digital-services.tsx` | `#digital-services` | `brand-deep` (the one dark band) |
| 10 | FAQ | `components/sections/faq.tsx` | `#faq` | canvas |
| 11 | Final CTA + contact | `components/sections/final-cta.tsx` | `#contact` | canvas |
| 12 | Footer | `components/site/footer.tsx` | — | `canvas-deep` |

Every section is `<section id=… aria-labelledby=…>` with its own `h2`. Only the hero has an `h1`.

---

## 1. Header

**Desktop (≥ 1280px, `xl`)**
- *Utility bar* (not sticky, 40px, `bg-canvas-deep/70`, bottom border, 13px text): left: **Digital services ▾** (DropdownMenu, from `digitalNav`: "For customers" and "For partners", footer link "All digital services"), **Find a medical provider** (`#medical-network`), **Branches**. Right: a quiet **Roadside assistance 800 8181** `tel:` link with a gold dot.
- *Main bar* (sticky `top-0`, `h-(--header-height)` = 68px, `bg-canvas/90 backdrop-blur`, bottom border `line`): logo (h-9 to h-10), then the five `mainNav` items (four mega menus and the **Contact** link), then **Urgent help** and the primary **Get a quote** button (`ONLINE_PORTAL`). Everything fits on one line at 1280px. Below 1440px, Urgent help may collapse to an icon button that keeps its accessible name.
- *Mega menus* (shadcn NavigationMenu): full-width panel aligned to `.page-container`, white surface, `shadow-soft`. Groups are columns with a small uppercase title. Links show the label (semibold) and an optional one-line description (`ink-muted`). Personal has a "Buy online" feature tile; Business shows four group columns plus footer links. Keyboard and Esc behaviour come from Radix.
- *Urgent help* (DropdownMenu or Popover): `urgentLines` as large `tel:` rows with label, number and purpose. Roadside uses the gold badge and its qualifier "Where roadside assistance is included in your motor policy". Footer link "All claim options" goes to `#claims`. Department numbers are not repeated across the bar.

**Below 1280px**
- Sticky bar with the logo (h-8), **Get a quote** (size `sm`, hidden below 360px), an **Urgent help** icon button (44px, labelled) and a **Menu** button (44px, `aria-label="Open menu"`).
- *Sheet* (right side, full width on phones, `max-w-md` on tablets): urgent-help block at the top (roadside in gold), then an accordion for the four menus, the Contact link, Digital services (customers and partners) and the primary **Get a quote** pinned at the bottom.

## 2. Hero: "Life moves. Stay protected."

Split editorial layout on a 12-column grid. Left `lg:col-span-6`, right `lg:col-span-6`.
- Eyebrow: "Al Buhaira National Insurance · Since 1978".
- `h1` uses `SplitText`: "Life moves." (ink) on line 1 and "Stay protected." (italic, `text-brand`) on line 2, at `text-display-hero`. Words rise once, with about 55ms stagger, and it is skipped for reduced motion.
- Supporting copy (`text-lead`): "Explore insurance for your everyday life, your family, and your business."
- **Selector card** (client component, `rounded-3xl border bg-surface p-5 sm:p-6`):
  - Visible label "What would you like to protect?" and Tabs **For me** / **For my business** (segmented control).
  - Product chips as a radio group (fieldset, sr-only legend). For me: Motor, Medical, Travel, Home, Yacht, Jet Ski (`personalProducts`), each with a Lucide icon. For my business: Group Medical, Motor Fleet, Property, Engineering, Marine, Liability (from `businessGroups`). Chips are 44px tall and wrap onto two rows on phones.
  - Description (`aria-live="polite"`, fixed min-height so nothing jumps). With nothing selected: "Choose what you'd like to protect to see the right next step." When selected: the product summary plus a "What's covered" link to the product page.
  - Actions:
    - Primary **Get a quote**. Personal: the product's online quote URL ("Get a motor quote"…), or `ONLINE_PORTAL` with nothing selected. Business: the line's quotation-request form ("Request a quote"), or `/enquiry` with nothing selected.
    - Secondary **Explore insurance**: `#personal` or `#business`, depending on the tab.
  - Small note under the actions. Personal: "Online quotes for all six personal products." Business: "Send a short request and a customer service representative will contact you."
- **Photo** (right): `ArchFrame` ratio 4:5, line `right`, `draw="load"`. The image crossfades (Motion `AnimatePresence`, opacity, about 600ms) whenever the selection changes. Personal products use their own images; business lines use their group image; with nothing selected it shows `heroEveryday`. Only the default image is preloaded; the others load on demand with `placeholder="blur"`.
- Mobile order: headline, copy, selector (with actions), then photo (max-w-sm, centred). The hero must not scroll horizontally: use `overflow-x-clip` on the section because the line's tail leaves the frame.

## 3. Quick access (existing customers)

Directly under the hero. A small label, "Already insured with us?", sits above a white `rounded-3xl border shadow-soft` strip:
- Desktop: 4 equal cells divided by vertical lines. Mobile: a 2×2 grid. Each whole cell is a link with min-height 88px, an `IconBadge`, a label and a helper line.
  1. **Make a claim** → `#claims`. Helper: "Motor, medical and other claims"
  2. **Find a medical provider** → `#medical-network`. Helper: "Search by emirate and provider type"
  3. **Get roadside assistance** → `tel:8008181`. Gold badge; the number "800 8181" is visible in the cell. Helper: "Where included in your motor policy"
  4. **Contact support** → `#contact`. Helper: "Helplines, branches and office hours"

## 4. Personal insurance: "Cover for the life you live."

Asymmetric editorial grid (lg: 12 columns):
- Header: `SectionHeading align="split"`, eyebrow "Personal insurance", title "Cover for the life *you live.*". Intro: "Protection for the car you drive, your family's health, your travels and your home, with online quotes for every personal product." Aside: "All personal insurance" link.
- **Motor** (`col-span-7`) and **Medical** (`col-span-5`) are the largest cards, built with `SpotlightCard` (brand-blue spotlight, low intensity). Vary their composition: Motor has the image on top; Medical has text on top and the image below. Each card has an icon badge, an h3, the summary sentence, 2–3 qualified highlights, the qualifier in small text, and links "Explore motor insurance →" and "Get a quote →".
- **Travel** and **Home** (`col-span-4` each): smaller cards with image, h3, summary and links.
- **Help panel** (`col-span-4`): "Not sure which cover fits?" Body: "We're here to help you better understand your risk exposures and how insurance can protect you." Links to Send an enquiry and the helpline.
- **Quieter row**: "On the water". Yacht and Jet Ski are horizontal list items (small arch thumbnail, name, sentence, link), plus "More personal cover" links. All information stays visible without hover.

## 5. Business insurance: "Protection that keeps business moving."

`bg-surface` band.
- Header: eyebrow "Business insurance", title "Protection that keeps *business moving.*". Intro: "Cover for your people, property and projects, transport and specialist risks, from a single group policy to bespoke programmes." Avoid unverifiable claims.
- **Desktop (≥ lg)**: vertical Tabs.
  - Left `col-span-5`: the 4 groups, each with a number (01–04), the group name (display font) and the kicker list. The active tab shows a brand rule on the left.
  - Right `col-span-7`: a photo (rounded-3xl, 16:10) that crossfades. Below it, the explanation and the lines (name, summary, qualifier, links "Learn more" and "Request a quote").
- **Mobile (< lg)**: an Accordion with the same content (image, explanation, lines).
- Actions under the explorer: **Explore business insurance** (outline) and **Talk to our team** (primary, `/enquiry`), plus "or call 06 517 4444" as a `tel:` link.
- Images: real workplaces, construction and logistics (`bizPeople`, `bizProperty`, `bizTransport`, `bizSpecialist`).

## 6. Claims: "Support when you need it."

`bg-sky-soft`, calm and static (no entrance animation).
- Header: eyebrow "Claims", title "Support when *you need it.*". Intro: "Choose your claim type to see where it leads and what to prepare. Our team will guide you from there."
- **Three route cards** (`claimRoutes`), white and equal height. Each has an icon, a title, the summary ("where it leads"), the primary action as a strong link-button, and a contact line (`tel:` and email). Medical also shows its note and the PDF form link.
- **How it works**: Tabs for "Motor claim" (4 steps) and "Medical reimbursement" (6 steps). Each is a numbered stepper using the site's own steps, plus a "What to prepare" box with the `prepare` text. Non-motor claims have no published steps, so none are drawn. No durations, no "approved" end state.
- **Assistance contacts**: roadside (gold, with its qualifier), motor claims, medical, marine claims and head office, plus office hours and a "Request a medical claim status update" link.

## 7. Medical network: "Find care within your network."

- Left: eyebrow, title "Find care *within your network.*", `networkNotice.lead` and `.check`, and the TPA link (`networkLinks.tpa`) with its description.
- Right: the finder card, a real `GET` form to `finder.action` with `target="_blank"`:
  - Fields: Emirate, Provider type and Your network (`NativeSelect size="lg"` with visible labels and hint), plus Provider name (Input, optional). Field `name`s match the live form; hidden `speciality=""`.
  - Submit: primary **Search the network** with sr-only "(opens in a new tab)". The note below reads "Results open in the Al Buhaira medical network search."
  - Secondary link: "Members can also find nearby providers in the ABNIC Health Vault app" → `#digital-services`.
- Never show invented providers or result counts.

## 8. Trust: "Experience behind every policy."

- A large typographic statement: "Since" (small) above "1978" (huge display numerals, `text-brand`), next to the title "Experience behind *every policy.*" and an intro built from `company.foundingStatement`, `listing` and `membership`.
- The Sharjah skyline over Khalid Lagoon (`trustArchitecture`), in a wide rounded or arched frame with the curve line.
- A restrained timeline (`milestones`: 1978 · 2020 · 2023) as a horizontal rule with three stops on desktop and a vertical list on mobile.
- Credentials (`credentials`) as a clean list: year, title and awarding body.
- The SHIELD values as a quiet typographic row: "Our values form our shield", each letter highlighted.
- Links: About Al Buhaira, Investor relations, Corporate governance.
- No ratings, financial-strength claims, counts or testimonials.

## 9. Digital services: "Everyday access, made easier."

Dark `brand-deep` band with white text and `sky` accents.
- Left: eyebrow, title "Everyday access, *made easier.*", and an intro about the ABNIC Health Vault app.
- The four capabilities (`app.capabilities`) with icons.
- The official store badges (`/brand/app-store-badge.svg`, `/brand/google-play-badge.svg`) linking to `app.stores`, with alt text naming the store.
- Right: a CSS phone mockup showing an illustrative digital medical card. Use the official emblem on a light card, placeholder bars instead of personal data, and a small caption "Illustrative screen". It enters once with `AnimatedContent` (distance about 60, duration about 0.9s), then stays still.
- Separate, clearly labelled area "For partners" (top border `white/15`): `partnerPortals` grouped by audience, plus "All digital services". The customer **Buy insurance online** link sits with the app, not with the partner portals.

## 10. FAQ

- Left `col-span-4`: eyebrow "Helpful answers", title "Questions, *answered.*" and a contact nudge.
- Right `col-span-8`: Accordion (single, collapsible) with `faqs` (5 items), plus answer paragraphs and links.

## 11. Final CTA + contact

- Title: "Let's find the right cover *for you.*"
- Two route cards:
  - **Explore personal insurance**: `#personal`, plus "Get a quote online".
  - **Discuss business insurance**: `/enquiry`, plus `tel:` head office.
- Use the curve line to connect them.
- Contact block (`id="contact"` target): head office address, phone, email, office hours and the helplines list (`allHelplines`), plus links to Branches and Contact the medical team.

## 12. Footer

`bg-canvas-deep`.
- Top row: the logo, a short line, the app badges and social links (text labels with icons, `aria-label`s).
- `footerColumns` (Insurance, Customer support, Company with an Investors sublist, Legal).
- **Guides**: `guideCategories` as five compact columns.
- Bottom bar: "© 2026 Al Buhaira National Insurance Company (P.S.C.). All rights reserved.", "Homepage concept, prototype", and a "Photo credits" disclosure (`<details>`) listing `imageCredits`.

---

## Prototype-only interactions

Listed in `docs/prototype-notes.md`. The finder and every quote, claim and contact action link to verified live destinations, so very little is prototype-only.
