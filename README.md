# Al Buhaira National Insurance: homepage redesign prototype

An English-only homepage concept for [albuhaira.com](https://www.albuhaira.com), built around the idea **"Life moves. Stay protected."** It reorganises the existing site around three questions:

1. What insurance can I get?
2. How do I get a quote?
3. Where do I go if I need help?

This is a front-end prototype with no backend. Every quote, claim, contact and provider-search action links to a verified page on the live site (checked on 26 October 2026). The few interactions that are prototype-only are listed in [`docs/prototype-notes.md`](docs/prototype-notes.md).

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
```

Requires Node.js 20.9 or later (developed on Node 24).

## Stack

- **Next.js 16** (App Router, React 19, TypeScript)
- **Tailwind CSS v4**: design tokens live in `app/globals.css`
- **shadcn/ui** (Radix base): Tabs, Accordion, NavigationMenu, Sheet, DropdownMenu, NativeSelect, Input
- **Lucide** icons
- **Motion** (`motion/react`, lazy-loaded `domAnimation` features): the only animation library
- **React Bits**: `SplitText`, `SpotlightCard` and `AnimatedContent` in `components/react-bits/`. `SpotlightCard` is used as published. `SplitText` and `AnimatedContent` were ported from GSAP so the site ships a single animation library: SplitText to a server-rendered CSS keyframe entrance, AnimatedContent to Motion `whileInView`. Their React Bits props are preserved.
- **next/image** with static imports, so every photo gets intrinsic sizes and a blur placeholder

## Structure

```
app/
  layout.tsx          fonts (Newsreader + Instrument Sans), metadata, Motion provider
  page.tsx            the homepage composition
  globals.css         tokens, type scale, motif utilities, SplitText keyframes
components/
  site/               header, footer, logo, shared primitives (SectionHeading, SmartLink, IconBadge, PrototypeNote)
  sections/           one folder or file per homepage section
  motif/              ArchFrame, CurveLine, CurveConnector (the arch and the line)
  react-bits/         SplitText, SpotlightCard, AnimatedContent
  ui/                 shadcn/ui components (restyled through tokens)
content/              verified copy, links and contacts (the single source of truth)
assets/images/        optimised, openly licensed photography
public/brand/         official logo, emblem and app-store badges
docs/                 design system, homepage spec, prototype notes, content register, image credits
```

## Design in one paragraph

Warm-white surfaces, dark readable ink and the logo's royal blue (`#102694`), with sky and gold used sparingly: gold is reserved for roadside assistance. Large Newsreader headlines set the editorial tone. An **arch**, taken from the arched windows in the Al Buhaira emblem, frames key photographs, and a thin line traces it and flows on to suggest continuity and protection. The three signature moments are:
- the hero, where choosing a product crossfades the photograph;
- the asymmetric personal-insurance grid;
- the interactive business explorer.

Claims, forms and contact details stay calm and still. See [`docs/design-system.md`](docs/design-system.md) and [`docs/homepage-spec.md`](docs/homepage-spec.md).

## Content and accuracy

All copy comes from `content/*.ts`, which was compiled from the live site and checked by an adversarial fact-check (see [`docs/content-register.md`](docs/content-register.md)). The prototype deliberately avoids invented figures, ratings, testimonials and turnaround times, and keeps policy qualifications next to every benefit. Items that need Al Buhaira's confirmation are listed in [`docs/prototype-notes.md`](docs/prototype-notes.md).

## Photography

Stand-in photography is openly licensed (CC0, Public Domain, Unsplash, CC BY or CC BY-SA) and credited in [`docs/image-credits.md`](docs/image-credits.md) (not shown on the page for now; published use needs visible attribution). Replace it with commissioned or licensed brand photography before launch.
