# Project Architecture

## 1. Architecture Overview

The portfolio uses a feature-based architecture with reusable shared components.

The architecture should keep the application modular, maintainable, scalable, and easy for developers and AI coding assistants to understand.

### Core Principles

- Feature-based organization.
- Reusable components.
- Separation of UI and content.
- Centralized configuration.
- Shared animation utilities.
- Type-safe development.
- Avoid unnecessary abstractions.

## 2. Technology Stack

| Category | Technology |
|---|---|
| Framework | Next.js 16 |
| UI Library | React 19 |
| Language | TypeScript |
| Styling | Tailwind CSS 4 |
| UI Components | shadcn/ui |
| Icons | Lucide React |
| Animation | GSAP |
| Component Motion | Motion |
| Smooth Scrolling | Lenis |

## 3. Project Directory Structure

```text
chinmayakumardas/
│
├── docs/
│   ├── prd.md
│   ├── architecture.md
│   ├── rules.md
│   ├── design.md
│   ├── tasks.md
│   └── memory.md
│
├── public/
│   ├── fonts/
│   ├── images/
│   └── videos/
│
├── src/
│   ├── animations/
│   │
│   ├── app/
│   │   ├── about/
│   │   ├── contact/
│   │   ├── work/
│   │   ├── projects/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   │
│   ├── components/
│   │   ├── effects/
│   │   ├── layout/
│   │   └── ui/
│   │
│   ├── content/
│   │   ├── site.ts
│   │   └── urls.ts
│   │
│   ├── features/
│   │   ├── about/
│   │   ├── contact/
│   │   ├── home/
│   │   └── work/
│   │
│   ├── lib/
│   │
│   └── types/
│
├── AGENTS.md
├── PROJECT_GUIDE.md
├── package.json
└── ...
```

This represents the intended organization. Keep the existing project structure and add folders only when needed.

## 4. Application Routing

Use the Next.js App Router.

| Route | Purpose |
|---|---|
| `/` | Homepage |
| `/about` | About page |
| `/work` | Selected projects |
| `/projects/[slug]` | Individual project case study |
| `/contact` | Contact page |

Use route-level files inside `src/app/`.

Keep page-specific UI and logic inside the corresponding feature folders.

## 5. Component Architecture

### Shared Components

Location: `src/components/`

These components can be reused across multiple pages.

- `ui/` — shadcn/ui components.
- `layout/` — Header, Footer, Navigation.
- `effects/` — Reusable visual effects and interactive elements.

### Feature Components

Location: `src/features/`

Organize components according to their respective features.

Example:

```text
features/
├── home/
│   ├── components/
│   └── sections/
│
├── about/
│   └── components/
│
├── work/
│   ├── components/
│   └── sections/
│
└── contact/
    └── components/
```

Keep components close to the feature that owns them.

Move a component into `src/components/` when it is genuinely shared across features.

## 6. Animation Architecture

Location: `src/animations/`

Use different animation tools according to their strengths.

### GSAP
Use for:
- Complex timelines.
- Scroll-triggered animations.
- Advanced sequencing.
- Complex transitions.

### Motion
Use for:
- Component entrance animations.
- Hover interactions.
- Small UI transitions.
- Layout animations.

### Lenis
Use for:
- Smooth scrolling.

### Animation Rules

- Avoid duplicating animations across libraries.
- Keep animations purposeful.
- Respect reduced-motion preferences.
- Clean up animation instances and event listeners.
- Avoid unnecessary scroll-triggered effects.

## 7. Content Architecture

Location: `src/content/`

Centralize reusable website content and configuration.

Examples:

- Personal information.
- Navigation links.
- Social links.
- Contact information.
- Project data.
- Website metadata.

Avoid scattering repeated static content throughout components.

## 8. Utility and Type Architecture

### `src/lib/`

Store shared utility functions and helper logic.

### `src/types/`

Store reusable TypeScript interfaces and type definitions.

Keep types close to their features when they are only used by one feature. Move them into the shared types folder when multiple features need them.

## 9. Styling Architecture

- Use Tailwind CSS for layout and utility styling.
- Use CSS variables for design tokens.
- Use `globals.css` for global styles and theme variables.
- Use shadcn/ui as the foundation for reusable UI components.
- Customize components to match the portfolio's design system.
- Avoid unnecessary inline styles and duplicated CSS.

## 10. Data Flow

Use a simple and predictable data flow:

```text
Content / Configuration
        ↓
Feature Components
        ↓
Page Components
        ↓
Next.js App Router
        ↓
Rendered Website
```

Keep content separate from presentation wherever practical.

## 11. Performance Architecture

- Prefer Server Components by default.
- Use Client Components only when interactivity requires them.
- Lazy-load heavy components when appropriate.
- Dynamically load expensive animation or visual effects when necessary.
- Optimize images and videos.
- Avoid unnecessary dependencies.
- Prevent layout shifts.
- Keep the initial page load lightweight.

## 12. Architecture Rules

1. Follow the existing folder structure.
2. Do not create duplicate components.
3. Do not put every component inside the global components folder.
4. Keep feature-specific logic inside its feature.
5. Keep shared logic reusable.
6. Keep content separate from UI.
7. Use TypeScript consistently.
8. Avoid unnecessary abstraction and overengineering.
9. Do not introduce new libraries without a clear reason.
10. Preserve existing functionality when modifying the architecture.