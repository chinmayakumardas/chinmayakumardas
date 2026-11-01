# Chinmaya Kumar Das — Personal Portfolio (V1)

Professional portfolio for **Chinmaya Kumar Das** — Front-End Developer & Digital Experience Designer.

Built on the project foundation defined in `/docs`.

## Stack

- Next.js 16 (App Router)
- React 19 + TypeScript
- Tailwind CSS 4
- shadcn/ui
- Motion (UI motion)
- GSAP + Lenis (available for advanced scroll/timeline work)
- Lucide icons

## Structure

Follows `docs/architecture.md`:

- `src/app/` — routes
- `src/features/` — feature UI (home, work, about, contact)
- `src/components/layout/` — Header, Footer
- `src/components/ui/` — shared UI (shadcn)
- `src/content/` — site copy & project data
- `src/animations/` — shared animation helpers (ready for GSAP/Lenis)

## Pages

| Route | Purpose |
|-------|---------|
| `/` | Home |
| `/work` | Selected projects |
| `/projects/[slug]` | Case study |
| `/about` | About |
| `/contact` | Contact form |

## Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Design tokens

Defined in `src/app/globals.css` per `docs/design.md`:

- Background `#F6F7F9`
- Foreground `#101010`
- Accent `#635BFF`
- Dark surface `#121212`
- Headings: Urbanist · Body: Inter

## Customize

- Content: `src/content/site.ts` and `src/content/urls.ts`
- Contact form: wire `ContactForm` to Formspree / Resend / API route
- Social & email already sourced from content files
