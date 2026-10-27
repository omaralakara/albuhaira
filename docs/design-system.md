# Al Buhaira homepage — design system

Concept: **"Life moves. Stay protected."** The page follows the everyday moments insurance protects (driving, family life, healthcare, travel, home, running a business) and reorganises the existing site around three questions:

1. What insurance can I get?
2. How do I get a quote?
3. Where do I go if I need help?

The tone is established, reassuring and contemporary: warm-white surfaces, dark readable ink, the official brand colours used selectively, large editorial serif headlines and generous space.

## Brand and colour

Colours come from the official logo (`public/brand/al-buhaira-logo.svg`). The logo itself is used unchanged and only on light surfaces.

| Token (Tailwind) | Value | Use |
| --- | --- | --- |
| `canvas` | #f8f6f1 | Page background (warm white) |
| `canvas-deep` | #f0ebe2 | Footer, quiet panels, image placeholders |
| `surface` | #ffffff | Cards, menus, form controls |
| `ink` | #14162a | Headlines, body text |
| `ink-soft` | #3b3e51 | Secondary text |
| `ink-muted` | #5c5f72 | Captions, meta (AA on canvas) |
| `line` / `line-strong` | #e4ded3 / #cfc6b7 | Borders, dividers |
| `brand` | #102694 | Logo royal blue: primary buttons, links, focus ring, the curve line |
| `brand-strong` | #0b1c74 | Hover/pressed for brand |
| `brand-deep` | #0a1450 | The one dark band (digital services) |
| `brand-tint` | #eef1fb | Icon wells, selected states |
| `sky` / `sky-soft` | #a9e8fb / #e8f5fa | Logo sky: claims background (`sky-soft`), accents on dark |
| `gold` / `gold-soft` / `gold-ink` | #ffd939 / #fff5cc / #5c4800 | Logo gold: roadside assistance only, plus tiny accents |
| `signal` / `signal-ink` | #ff2e17 / #b3220f | Logo red: errors only |

Rules: one brand-blue primary action per view; gold is reserved for roadside assistance so it stays easy to spot; never put the logo on a dark or photographic background.

## Typography

- Display: **Newsreader** (`font-display`), weight 400, italic for one emphasised phrase per heading (`<em className="italic text-brand">`).
- UI and body: **Instrument Sans** (`font-sans`), 400/500/600.
- Scale: `text-display-hero` (hero only), `text-display-1` (section titles), `text-display-2` (sub-features), `text-display-3` (card titles), `text-lead` (intros). Body is 16–17px, line-height 1.55.
- Eyebrows use `.eyebrow` (small caps label with a short rule). Max one per section.

## Layout

- `.page-container`: max width 84rem, gutters 20px (phones), 32px (sm), 48px (lg).
- Section rhythm: `py-20 md:py-28` (`lg:py-32` for feature sections). Vary compositions: split, asymmetric grid, list + panel, band. Avoid repeating identical card grids.
- Radii: cards `rounded-3xl`, controls `rounded-full` (buttons, chips) or `rounded-xl` (inputs). Photos: `rounded-3xl`, or the arch (`ArchFrame`) for the hero and the brand section.
- Borders before shadows: `border border-line`; `shadow-soft` only on floating elements (menus, the quick-access strip).

## Signature motif: the arch and the line

- `components/motif/arch-frame.tsx` → `<ArchFrame ratio={[4,5]} line="right" draw="load">`. The arch echoes the arched windows in the Al Buhaira emblem. A thin brand line traces it at a fixed offset and flows on, suggesting continuity and protection.
- `components/motif/curve-connector.tsx` → a static 1px curve that carries the line between a few sections (hero → quick access → personal, claims → medical). Use at most 3 times on the page.
- The line draws once (≤ 1.8s) and never loops.

## Components

| Component | Where | Notes |
| --- | --- | --- |
| `Button` (`components/ui/button.tsx`) | Everywhere | `default` = the single primary style (royal-blue pill). Secondary: `outline`, `secondary`, `ghost`, `link`. Sizes `lg` (48px), `default` (44px), `sm` (36px, menus only). Use `asChild` with `<a>`/`<Link>` |
| `SectionHeading` | Section intros | eyebrow + `h2` + intro; `align="split"` for two-column intros |
| `SplitText` (React Bits port) | Hero headline only | CSS-driven, server-rendered, runs once, skipped for reduced motion |
| `SpotlightCard` (React Bits) | Motor + Medical cards only | `spotlightColor` brand blue, low intensity; content never depends on hover |
| `AnimatedContent` (React Bits port) | Phone mockup in Digital services | Motion `whileInView`, once; the phone stays still after |
| shadcn `Tabs`, `Accordion`, `NavigationMenu`, `Sheet`, `Select`, `DropdownMenu` | Selector, business, FAQ, header, finder | Keep Radix semantics; restyle with tokens |

Icons: Lucide, `strokeWidth={1.75}`, 20–24px, in a 44–48px `bg-brand-tint text-brand` circle when used as a marker.

## Motion

- One library: **Motion** (`motion/react`, `m.*` components under `LazyMotion` + `domAnimation`). Do not add GSAP or other animation packages.
- Durations 150–450ms for UI state, ≤ 700ms for crossfades, ≤ 1.8s for the line draw. Easing `[0.25, 1, 0.5, 1]`.
- Animate only to explain a change (selected product → photo crossfade; selected business group → panel swap) or to make a single entrance.
- `MotionConfig reducedMotion="user"` is global; CSS animations sit behind `prefers-reduced-motion: no-preference`.
- Forms, claims guidance and contact information never move.

## Accessibility

- Semantic landmarks (`header`, `nav`, `main#main`, `section[aria-labelledby]`, `footer`), one `h1`, headings in order.
- Visible focus: 2px brand outline, 3px offset (global). Do not remove outlines.
- Touch targets ≥ 44×44px. Phone numbers are `tel:` links with the number visible.
- Everything works without hover; tabs and accordions are keyboard operable (Radix).
- Colour contrast ≥ 4.5:1 for text (≥ 3:1 for large text and UI boundaries).
- Images: meaningful `alt`; decorative SVGs `aria-hidden`.
- External links (other domains) open in a new tab, show `ArrowUpRight`, and include sr-only "(opens in a new tab)".

## Content rules

- Copy comes only from `content/` (built from the verified content register in `docs/content-register.md`). Never invent figures, ratings, awards, testimonials, partner logos, customer counts or turnaround times.
- Keep policy qualifications next to any benefit ("subject to policy terms", "where included in your plan", etc.).
- Interactions that the live site can't support yet are labelled with `<PrototypeNote>` and listed in `docs/prototype-notes.md`.
