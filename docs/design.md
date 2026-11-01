# Design System & Visual Direction

## 1. Design Vision

Create a modern, minimal, premium-looking portfolio that combines strong visual design with clear communication.

The website should communicate:

- Design thinking.
- Front-end development expertise.
- Attention to detail.
- Professionalism.
- Creativity.
- Business-focused problem-solving.

The experience should feel polished without becoming visually complicated.

## 2. Design References

Use the following websites as design inspiration:

### Primary Reference: Nexila Agency
Reference: https://nexila.agency/

Take inspiration from:
- Visual atmosphere.
- Typography.
- Modern layouts.
- Clean composition.
- Strong visual presentation.

### Secondary Reference: Razorpay
Reference: https://razorpay.com/

Take inspiration from:
- Content hierarchy.
- Page structure.
- Professional presentation.
- Clear storytelling.
- Strong communication.

### Additional Reference: Qubesys
Reference: https://qubesys.com/

Take inspiration from:
- Minimal layouts.
- Whitespace.
- Typography-led sections.
- Visual restraint.

**Important:** Use these websites as inspiration, not templates. Create an original visual identity for this portfolio.

## 3. Visual Style

The overall design should be:

- Minimal.
- Modern.
- Clean.
- Premium.
- Professional.
- Typography-focused.
- Spacious.
- Subtly interactive.

Avoid:
- Excessive gradients.
- Unnecessary glassmorphism.
- Too many colors.
- Overloaded layouts.
- Excessive rounded cards.
- Unnecessary decorative elements.
- Heavy 3D effects in V1.

## 4. Color System

Use CSS variables for all design tokens.

Initial palette direction:

| Token | Value | Usage |
|---|---|---|
| Background | `#F6F7F9` | Main page background |
| Foreground | `#101010` | Primary text |
| Dark Surface | `#121212` | Dark sections and cards |
| Dark Surface Text | `#FFFFFF` | Text on dark surfaces |
| Accent | `#635BFF` | Interactive highlights |
| Muted | `#737373` | Secondary text |
| Border | `#E5E7EB` | Borders and dividers |

These are starting values, not permanent decisions. Refine the palette during implementation.

### Color Rules

- Maintain strong text contrast.
- Use the accent color selectively.
- Keep backgrounds consistent.
- Avoid introducing random colors.
- Use design tokens instead of hardcoding repeated color values.
- Ensure dark surfaces use readable light text.

## 5. Typography

### Font Direction

- Headings: Urbanist
- Body: Inter

### Typography Principles

- Use strong, expressive headings.
- Maintain readable body text.
- Establish a clear type hierarchy.
- Use appropriate line heights.
- Avoid excessive font weights.
- Keep typography consistent across pages.

### Suggested Type Scale

| Element | Suggested Size |
|---|---|
| Hero Heading | 64–88px |
| Section Heading | 40–56px |
| Card Heading | 20–28px |
| Body | 16–18px |
| Small Text | 13–14px |

Adjust typography responsively for different screen sizes.

## 6. Layout & Spacing

### Layout Principles

- Use a consistent content container.
- Maintain generous whitespace.
- Use grid layouts where appropriate.
- Align elements consistently.
- Keep sections visually balanced.
- Avoid unnecessarily narrow content areas.

### Spacing

Use a consistent spacing scale based on Tailwind CSS spacing utilities.

Avoid arbitrary spacing values when established tokens work.

## 7. Components & UI

### Buttons

- Prefer clean and minimal styling.
- Use clear labels.
- Provide hover and focus states.
- Maintain consistent button sizes.
- Use pill-shaped buttons selectively.

### Cards

- Use cards when they improve content organization.
- Maintain consistent internal spacing.
- Use subtle borders or backgrounds.
- Avoid excessive shadows and decoration.
- Use rounded corners consistently.

### Navigation

- Keep navigation simple.
- Make the current page understandable.
- Provide clear access to important pages.
- Include a meaningful contact CTA.

### Forms

- Use clear labels.
- Keep inputs visually consistent.
- Provide validation feedback.
- Show clear success and error states.

## 8. Page Design Direction

### Home
- Strong typography-led hero.
- Clear professional positioning.
- Selected project showcase.
- About preview.
- Capabilities section.
- Strong contact CTA.

### Work
- Project-focused layout.
- Clear project titles and descriptions.
- Strong visual thumbnails.
- Consistent project presentation.

### Project Case Study
- Strong project introduction.
- Clear storytelling.
- Structured content sections.
- Large project visuals.
- Readable text layouts.

### About
- Personal introduction.
- Professional background.
- Skills and capabilities.
- Working approach.

### Contact
- Clear contact heading.
- Simple enquiry form.
- Direct contact information.
- Social links.

## 9. Responsive Design

Design for:

- Desktop.
- Tablet.
- Mobile.

Requirements:

- Responsive typography.
- Flexible layouts.
- Mobile-friendly navigation.
- Appropriate spacing at every breakpoint.
- Touch-friendly interactive elements.
- No horizontal overflow.

## 10. Motion & Interaction Direction

Motion should improve the experience, not distract from content.

### Desired Effects

- Smooth section reveals.
- Subtle hover interactions.
- Text entrance animations.
- Project image transitions.
- Navigation interactions.
- Scroll-based storytelling where appropriate.

### Motion Principles

- Keep animations smooth and intentional.
- Avoid excessive movement.
- Avoid unnecessary parallax.
- Prioritize performance.
- Respect reduced-motion preferences.
- Avoid animating everything.

Use GSAP, Motion, and Lenis according to `architecture.md` and `rules.md`.

## 11. Performance & Accessibility

- Maintain readable contrast.
- Support keyboard interactions.
- Provide visible focus states.
- Use semantic HTML.
- Optimize visual assets.
- Avoid heavy animation effects.
- Respect reduced-motion settings.

## 12. Design Decision Principles

When making design decisions:

1. Prioritize clarity over decoration.
2. Prioritize usability over visual effects.
3. Maintain consistency across pages.
4. Use typography and spacing to create hierarchy.
5. Make interactions purposeful.
6. Keep the design lightweight and performant.
7. Build an original identity rather than copying references.

## 13. Final Design Goal

The final website should look like a thoughtfully designed professional portfolio, not a generic developer template.

It should communicate design ability, development capability, attention to detail, and business value through both its content and visual execution.