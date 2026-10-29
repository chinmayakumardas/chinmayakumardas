# Project Guide

## 1. Project Structure

### src/app/
Contains Next.js routes, page entry points, the root layout and global CSS. Keep page files focused on routing and composing page components.

### src/features/
Contains UI specific to each website area:
- `home/`: Homepage and keyboard-based hero.
- `work/`: Work listing and project cards.
- `about/`: About page content.
- `contact/`: Contact page content.

Create a feature folder for project case studies when their implementation requires it.

### src/components/
Contains components shared across multiple pages:
- `layout/`: Header, footer and navigation.
- `ui/`: Buttons, links, keyboard keys and other reusable UI.
- `effects/`: Preloader and page transitions when implemented.

### src/content/
Contains structured website content, not UI components.
- `site.ts`: Name, role, introduction, email and social links.
- Work data: Project titles, descriptions, roles, technologies, images and external links.

Keep each project in its own data file when project content grows. Add a shared project type in `src/types/` when needed.

### src/animations/
Contains reusable animation logic. Organize into GSAP and Motion subfolders when needed.

### src/lib/
Contains shared helper functions and utilities.

### src/types/
Contains shared TypeScript types for data structures and component contracts.

### public/
- `fonts/`: Local fonts.
- `images/`: General website images.
- `videos/`: Video assets.

Add `public/work/` only when project-specific assets need a dedicated location.

## 2. Where New Code Belongs

- New route: `src/app/`
- Page-specific section: matching folder in `src/features/`
- Shared UI component: `src/components/ui/`
- Shared navigation or layout: `src/components/layout/`
- Preloader or page transition: `src/components/effects/`
- Website copy or social links: `src/content/site.ts`
- Project information: `src/content/`
- Shared animation logic: `src/animations/`
- Reusable utility: `src/lib/`
- Shared data type: `src/types/`
- Static assets: appropriate folder in `public/`

## 3. Development Order

1. Establish global styles, fonts and design tokens.
2. Build shared layout and navigation.
3. Implement the homepage and keyboard-based hero.
4. Build the Work page and project case studies.
5. Build About and Contact pages.
6. Add interactions and animations.
7. Improve accessibility and performance.
8. Implement SEO and metadata when requested.
9. Test and deploy.

## 4. Current Scope

Focus on the existing folder structure, foundational code and page implementation.

Do not implement every planned feature in advance. Add files, abstractions and dependencies only when needed.

## 5. Future Possibilities

Possible later additions include advanced page transitions, a preloader, scroll animations, SEO metadata, analytics, email delivery and 3D experiences. These are not requirements for the initial setup.
