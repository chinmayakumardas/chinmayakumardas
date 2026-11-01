# AGENTS.md — Coding Agent Instructions

## Project Goal
Build a distinctive, minimal, high-performance portfolio for a Front-End Developer and Digital Experience Designer.

## Before Making Changes
- Inspect existing files before editing.
- Read PROJECT_GUIDE.md for architecture and workflow.
- Reuse existing components, utilities and dependencies.
- Ask before destructive changes or major architectural decisions.

## Folder Responsibilities
- `src/app/`: Next.js routes, page entry points, root layout and global CSS.
- `src/features/`: Page-specific UI and components.
- `src/components/layout/`: Shared header, footer and navigation.
- `src/components/ui/`: Reusable interface components.
- `src/components/effects/`: Loading and transition effects when implemented.
- `src/content/`: Site information and structured project content.
- `src/animations/`: GSAP and Motion animation logic.
- `src/lib/`: Shared utilities.
- `src/types/`: Shared TypeScript types.
- `public/`: Static assets.

## Code Rules
- Use TypeScript and follow existing naming conventions.
- Prefer Server Components unless client-side interactivity is required.
- Use Client Components only when necessary.
- Build custom UI components; do not introduce shadcn/ui.
- Keep components focused, reusable and maintainable.
- Keep content separate from presentation.
- Avoid duplicate code and unnecessary abstractions.
- Do not create empty files or folders without a clear purpose.

## Design and Animation
- Prioritize typography, spacing, responsive design and performance.
- Ensure keyboard accessibility and respect reduced-motion preferences.
- Use GSAP for complex timelines and scroll-based animation.
- Use Motion for React for suitable UI transitions and interactions.
- Avoid conflicting animation systems on the same element.
- Do not implement 3D until explicitly requested.

## Scope Control
- Implement only what the user requests.
- Do not install unnecessary dependencies.
- Do not implement future features prematurely.
- Keep advanced SEO, email integrations, analytics and other optional systems out of scope until requested.
- Avoid unrelated refactoring.

## Verification
- Run relevant linting, type checks and builds after significant changes.
- Report what changed and which checks actually passed.
- Never claim a test or build passed without running it.
