# Coding Rules & Standards

## 1. General Principles

- Write clean, readable, maintainable code.
- Follow existing project conventions.
- Prefer simple solutions over unnecessary abstractions.
- Reuse existing components and utilities.
- Avoid duplicated code.
- Do not introduce unnecessary dependencies.
- Do not modify unrelated files.
- Preserve existing functionality when making changes.

## 2. Next.js Rules

- Use the Next.js App Router.
- Prefer React Server Components by default.
- Use `"use client"` only when client-side interactivity is required.
- Keep page components focused on page composition.
- Use Next.js navigation utilities instead of unnecessary browser navigation.
- Use `next/image` for optimized images when appropriate.
- Use `next/font` for locally hosted or supported font loading.
- Define page metadata using Next.js Metadata API.
- Follow Next.js conventions for loading, error, and not-found states when needed.

## 3. React Rules

- Build reusable functional components.
- Keep components small and focused.
- Use props for component configuration.
- Avoid unnecessary state.
- Avoid unnecessary `useEffect` hooks.
- Keep event handlers and business logic understandable.
- Use stable keys when rendering lists.
- Avoid deeply nested component structures.
- Do not create components for trivial markup without a clear benefit.

## 4. TypeScript Rules

- Use TypeScript for all application code.
- Define explicit types for component props.
- Avoid using `any`.
- Prefer `type` or `interface` where appropriate.
- Use proper types for function parameters and return values.
- Keep shared types reusable.
- Do not suppress TypeScript errors without a valid reason.

## 5. Naming Conventions

| Element | Convention | Example |
|---|---|---|
| Components | PascalCase | `ProjectCard.tsx` |
| Hooks | camelCase with `use` | `useScrollProgress.ts` |
| Utilities | camelCase | `formatDate.ts` |
| Types | PascalCase | `Project.ts` |
| Constants | UPPER_SNAKE_CASE | `SITE_CONFIG` |
| Folders | lowercase | `components/` |
| CSS variables | kebab-case | `--color-primary` |

Use descriptive names that communicate purpose.

## 6. Tailwind CSS Rules

- Use Tailwind CSS for component styling.
- Follow the established design tokens.
- Use CSS variables for shared design values.
- Avoid arbitrary values when an existing token works.
- Keep class names readable.
- Avoid unnecessary conditional styling complexity.
- Extract repeated styling patterns when appropriate.
- Do not use inline styles unless dynamic styling requires them.

## 7. shadcn/ui Rules

- Use shadcn/ui as the foundation for reusable interface components.
- Customize components to match the portfolio design system.
- Keep shared UI components inside `src/components/ui/`.
- Reuse existing components before creating alternatives.
- Do not blindly use default shadcn styling.
- Maintain consistent variants, sizes, and interaction states.
- Avoid installing components that the project does not need.

## 8. Animation Rules

### GSAP
Use GSAP for:
- Complex animation timelines.
- ScrollTrigger animations.
- Advanced scroll interactions.
- Sequenced transitions.

### Motion
Use Motion for:
- Component transitions.
- Hover and tap interactions.
- Small entrance animations.
- Layout transitions.

### Lenis
Use Lenis for smooth scrolling when appropriate.

### General Animation Standards

- Every animation must serve a purpose.
- Avoid excessive motion.
- Keep animations smooth and performant.
- Respect `prefers-reduced-motion`.
- Clean up GSAP contexts, ScrollTriggers, and event listeners.
- Avoid running multiple animation libraries on the same element for the same effect.
- Avoid unnecessary animation on mobile devices.

## 9. Accessibility Rules

- Use semantic HTML elements.
- Provide accessible labels for form controls.
- Add meaningful alt text to informative images.
- Maintain sufficient color contrast.
- Support keyboard navigation.
- Provide visible focus states.
- Do not rely on color alone to communicate information.
- Respect reduced-motion preferences.

## 10. Performance Rules

- Optimize images and videos.
- Avoid unnecessary client-side JavaScript.
- Lazy-load heavy components when appropriate.
- Avoid unnecessary dependencies.
- Prevent layout shifts.
- Use appropriate loading strategies.
- Avoid expensive animation effects without a clear benefit.
- Keep components efficient.

## 11. File Organization Rules

- Follow the architecture defined in `architecture.md`.
- Keep feature-specific components inside their respective feature folders.
- Keep shared components inside `src/components/`.
- Keep reusable animation logic inside `src/animations/`.
- Keep website content inside `src/content/`.
- Keep shared utilities inside `src/lib/`.
- Keep shared types inside `src/types/`.
- Do not create unnecessary folders.

## 12. Code Change Rules

Before modifying code:

1. Inspect the relevant existing files.
2. Understand the current implementation.
3. Check related components and dependencies.
4. Identify the smallest appropriate change.

After modifying code:

1. Check for TypeScript errors.
2. Check for lint errors.
3. Verify affected functionality.
4. Run a production build when appropriate.
5. Report the files changed and any remaining issues.

## 13. AI Coding Assistant Instructions

When working on this project:

- Read the relevant documentation before implementing a task.
- Follow `prd.md` for product requirements.
- Follow `architecture.md` for project structure.
- Follow this file for coding standards.
- Follow `design.md` for visual direction.
- Follow `tasks.md` for implementation progress.
- Follow `memory.md` for important project decisions and context.
- Do not invent requirements or change established decisions without asking.
- Do not overwrite working code unnecessarily.
- If requirements are unclear, ask before making major architectural decisions.
- Explain important implementation decisions briefly.

## 14. Final Principle

Build code that is maintainable, accessible, performant, consistent, and easy to extend.

Prioritize working functionality and quality over unnecessary complexity.