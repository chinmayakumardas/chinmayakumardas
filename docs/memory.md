# Project Memory & Context

## 1. Project Identity

**Project:** Chinmaya Kumar Das — Personal Portfolio

**Website:** https://chinmayakumardas.com/

**Owner:** Chinmaya Kumar Das

**Professional Title:** Front-End Developer & Digital Experience Designer

**Current Version:** V1

## 2. Project Purpose

Build a professional portfolio that demonstrates my design and front-end development capabilities.

The website should help me:

- Grow my professional career.
- Attract better job opportunities.
- Generate freelance projects.
- Build professional connections.
- Showcase meaningful work and problem-solving ability.

## 3. Professional Positioning

I combine design thinking and front-end development to create digital experiences that are visually clear, intuitive, functional, and aligned with business goals.

### Main Areas

- Website Design
- UI/UX Design
- Conversion-Focused Landing Pages
- Design Systems
- Front-End Development
- Responsive Web Development
- Interactive User Experiences

## 4. Target Audience

- Recruiters and hiring managers.
- Companies hiring front-end developers.
- Startups and business owners.
- Potential freelance clients.
- Designers and developers interested in collaboration.

## 5. V1 Scope

The first version includes:

1. Home
2. Work
3. Project Case Study
4. About
5. Contact

A dedicated Services page is not required for V1.

## 6. Technology Decisions

| Category | Selected Technology |
|---|---|
| Framework | Next.js |
| UI | React |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Components | shadcn/ui |
| Icons | Lucide React |
| Complex Animations | GSAP |
| UI Animations | Motion |
| Smooth Scrolling | Lenis |

Avoid introducing additional libraries without a clear requirement.

## 7. Architecture Decisions

- Use the Next.js App Router.
- Keep application code inside `src/`.
- Use feature-based organization.
- Keep shared components inside `src/components/`.
- Keep feature-specific components inside `src/features/`.
- Keep reusable animation logic inside `src/animations/`.
- Keep website content inside `src/content/`.
- Keep shared utilities inside `src/lib/`.
- Keep shared types inside `src/types/`.
- Store project documentation inside `/docs`.
- Keep public assets inside `/public`.

## 8. Design Decisions

### Visual Direction

- Minimal.
- Modern.
- Professional.
- Premium.
- Typography-focused.
- Clean layouts.
- Smooth and purposeful interactions.

### Design References

- Nexila — visual atmosphere and typography.
- Razorpay — content structure and storytelling.
- Qubesys — whitespace and visual restraint.

These are inspiration sources, not templates to copy.

### Initial Color Direction

- Background: `#F6F7F9`
- Foreground: `#101010`
- Dark surface: `#121212`
- Accent: `#635BFF`

These values are provisional and can be refined in `design.md`.

### Typography Direction

- Headings: Urbanist.
- Body: Inter.

### Motion Direction

- Use GSAP for complex timelines and scroll interactions.
- Use Motion for component-level interactions.
- Use Lenis for smooth scrolling when appropriate.
- Avoid unnecessary 3D effects in V1.

## 9. Development Principles

- Build V1 before considering additional features.
- Prioritize functionality and visual quality.
- Avoid unnecessary complexity.
- Maintain consistent design tokens.
- Build reusable components where appropriate.
- Prioritize accessibility and performance.
- Keep the architecture understandable.
- Do not overengineer simple requirements.

## 10. Important Project Decisions

Record decisions that affect future implementation.

### Decision Template

**Date:**

**Decision:**

**Reason:**

**Impact:**

---

## 11. Current Project Status

**Current Phase:** Project Documentation and Foundation

**Documentation:**
- [x] prd.md
- [x] architecture.md
- [x] rules.md
- [x] design.md
- [x] tasks.md
- [x] memory.md

**Next Focus:**
- Complete shadcn/ui setup.
- Verify animation dependencies.
- Establish design tokens.
- Finalize typography and colors.
- Begin homepage implementation.

Update this section as the project evolves.

## 12. Instructions for AI Coding Assistants

Before starting a task:

1. Read this project memory.
2. Read the relevant requirements and architecture documents.
3. Check the current implementation.
4. Follow the coding and design rules.
5. Preserve established project decisions.

After completing a task:

1. Update relevant documentation when decisions or project status change.
2. Update `tasks.md`.
3. Record important long-term decisions here.
4. Do not store temporary debugging details as permanent project memory.
5. Keep documentation accurate and concise.