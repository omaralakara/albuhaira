# Prototype notes

This is a front-end prototype of the homepage only. There is no backend: every action links to an existing, verified destination on the live site, checked on 26 October 2026, except where noted below.

## What is real

| Interaction | Destination | Notes |
| --- | --- | --- |
| Hero "Get a quote" (personal) | `online.albuhaira.com` product journeys (motor, medical, travel, home, yacht, Jet Ski), or the product picker when nothing is selected | All six journeys returned 200. Opens in a new tab (separate application). |
| Hero "Request a quote" (business) | Each line's quotation-request form on albuhaira.com, e.g. `/marine-insurance-quotation`; `/enquiry` when nothing is selected | These are short call-back forms, not instant prices. The copy says so. |
| Medical network finder | `GET https://www.albuhaira.com/medical-network?emirate=…&providerType=…&networkType=…&keyword=…&speciality=` | The live finder is a plain GET form, so the homepage passes the visitor's choices straight into real results (new tab). It covers in-house networks only; TPA plans are pointed to `/medical-network-tpa`. |
| Claims routes | `/motor-claims`, `/medical-reimbursement-form`, `/non-motor-claim`, reimbursement PDF form, `/claim-status` | Steps shown are the site's own published lists (motor 4, medical 6). No timings are stated because the site states none. |
| Phone numbers | `tel:` links with the published digits | Display is spaced for readability; digits are unchanged. |
| Footer and menus | Existing albuhaira.com pages and PDFs | The live footer's 105 keyword links are not carried over (see "Guides" below). |

## Prototype-only or illustrative

| Item | Why |
| --- | --- |
| Phone mockup in Digital services | There are no app screenshots, so the screen is an illustrative, data-free card. It is captioned "Illustrative screen". |
| In-page anchors (`#claims`, `#medical-network`, `#contact`…) | Header and quick-access items jump to homepage sections. On the live site these would be full pages (for example `/claims`, `/head-office`). |
| Partner portals | The live Digital Services page lists a motor brokers portal and a home insurance broker portal. On 26 October 2026 `broker.albuhaira.com` had no DNS record (public resolvers included) and `homeins.albuhaira.com` refused connections, so the homepage sends brokers to `/digital-services` rather than linking dead addresses. The medical provider portal (`provider.albuhaira.com`) is linked; it returned 403 from outside the UAE, which looks like an IP restriction. **Confirm which portals are live and public.** |
| Photography | Openly licensed stand-in photography (see `docs/image-credits.md`). Replace it with commissioned or licensed brand photography before launch. |

## Content decisions to confirm with Al Buhaira

- **No financial-strength or rating claims.** The site states no rating, and the FY2025 audited statements disclose a solvency-requirement breach. The trust section uses only dated recognitions and verifiable facts.
- **InsureTek award year.** The site variously says 2022, 2023 and "2022 & 2023". The homepage uses the 2023 award described in the 24 Feb 2023 news item.
- **ADX listing year.** The site says 2005 on About and 16/05/1978 on the listing page. The homepage states the listing without a year.
- **Medical contact numbers conflict between pages** (pre-authorisation, complaints). The homepage uses only consistent numbers: medical 06 511 7500, reimbursement guidance 600 545459, claims@albuhaira.com.
- **"24/7" claims.** The site mentions 24/7 medical support without a number. The homepage does not pair "24/7" with any phone number.
- **Roadside assistance (800 8181)** is always shown with "where included in your motor policy", as the site states.
- **Vehicle Export Certificate** has no real content on the live site (it serves the Motor Fleet page), so it is left out of the business menus until content exists.
- **Privacy.** The live footer links a "Data Privacy Policy" PDF that is an internal document marked "Classification: Restricted", and `/privacy-policy` repeats the website terms. The prototype links `/privacy-policy`, the consent form and the data subject request form, but not the restricted PDF. A customer-facing privacy notice is needed.
- **Helpline hours.** The site publishes no hours for the helplines, roadside assistance included; only office hours. The prototype never says "24/7" next to a number.
- **Helpline list.** The contact area shows all eight numbers from the live helpline pop-up (which phones can't open on the live site), plus reimbursement guidance and the head office. The site doesn't say what the "Motor Insurance Mobile" line (050 751 0074) is for, and it shows 600 545459 as plain text, not a link; the prototype makes it a `tel:` link.
- **Online portal wording.** The portal's "get your quote in minutes" line is not used, and only motor and travel are described as buyable online, as on their product pages.
- **Guides.** The footer guide links are hidden for this stage, as requested. The curated list is kept in `content/footer.ts` (`guideCategories`) if you want it back.
