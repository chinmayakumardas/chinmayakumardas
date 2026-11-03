# Design system — how to add a page

Everything is built from a few shared pieces. Reuse them and new pages look native.

## 1 · Layout
`src/components/layout/Section.tsx`

```tsx
<Section id="x" labelledBy="x-title" tone="grey|white|lavender|dark" fill>
  <SectionLabel id="x-title">Label</SectionLabel>
  …content…
</Section>
```
- A page is a stack of `Section`s inside the page gutter (`--page-x`).
- `fill` = about one screen tall **on large screens only** (`.fill-screen` in globals.css).
- Pass `ref` when a section needs GSAP.

## 2 · Type scale (globals.css)
| class | use |
|---|---|
| `type-display` | hero headline only |
| `type-mega` | one big page / section headline |
| `type-statement` | the sentence next to a label |
| `type-title` | card titles |
| `type-item` / `type-item-text` | list headings + body |
| `type-giant` | big numerals (01, 02…) |
| `type-label` | the small `(Label)` |
| `text-outline` | outlined glyphs |

Rule: one `type-mega` per screen, never two big headlines side by side.

## 3 · Colours
`#ececef` grey · `white` · `--surface-services` lavender · `#141414` dark · ink `#0a0a0a`. Tones live in `Section.tsx` only.

## 4 · Motion (`src/animations/gsap.ts` + `src/components/gsap/`)
- Always `import { gsap, ScrollTrigger } from "@/animations/gsap"` — never from `"gsap"`.
- Wrap animation in `gsap.context(() => {…}, ref)` inside `useIsoLayoutEffect`, `return ctx.revert()`.
- Respect `prefersReducedMotion()`.
- Ready-made: `SplitReveal` (rise / scrub words), `Marquee`, `DotLine`, `FlipText` (hover).
- Marquees: max 2 on the whole site (work ticker + contact band).
- Lenis drives scroll through GSAP's ticker (`SmoothScroll.tsx`).

## 5 · Content
Home copy lives in `src/content/site.ts`. Each fact appears once; detail goes on its own page.

## 6 · Contact form
`ContactForm` → `POST /api/contact` → Resend. Validation is shared in `src/lib/contact.ts`.
Env vars (see `.env.example`): `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`.
The default sender `onboarding@resend.dev` only delivers to the Resend account's own email —
verify a domain in Resend and set `CONTACT_FROM_EMAIL` to send from it.

## 7 · Work page
Projects live in `src/content/work.ts` (`works`), each tagged with one capability
(`landing-pages`, `ui-ux-design`, `custom-software`). `/work` groups them by capability as
plain list rows (no cards): problem → what I built → result. Add a project = add one object.

## New page checklist
1. `src/app/<route>/page.tsx` (server) with `metadata`.
2. Body in `src/features/<route>/…` built from `Section`.
3. Add the link in `site.nav` / `Footer`.
