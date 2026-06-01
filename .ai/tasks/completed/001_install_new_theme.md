# Task: Install New Theme

- **ID:** 001
- **Status:** Completed
- **Created Date:** 2026-06-01
- **Completed Date:** 2026-06-01

## Description
Revamp the application theme and styling to achieve a premium, modern, and high-quality aesthetic. The website represents a hydrogeological service provider ("GeoNeeds"), so design choices should align with industrial-grade, construction, water, and nature themes. Use a blue-led palette that feels connected to water while supporting earthy/natural accents.

## Requirements
- [x] Define a cohesive, modern color palette with clear primary, secondary, and accent colors.
- [x] Integrate CSS variables inside `globals.css` for theme colors.
- [x] Update `tailwind.config.ts` to utilize the new theme config.
- [x] Use Tailwind CSS as the primary styling tool.
- [x] Design high-quality interactive UI components (buttons, cards, headers, footers).
- [x] Use medium border radius values; avoid overly rounded pill-heavy styling unless the component calls for it.
- [x] Increase visual spacing so layouts feel more open, premium, and readable.
- [x] Apply smooth micro-animations, transitions, and hover effects across all pages.
- [x] Ensure full responsiveness (mobile, tablet, desktop) and accessibility.
- [x] Maintain support for light and dark theme aesthetics (clean & high-contrast).
- [x] Add a dark mode toggle for users.

## Implementation Plan
1. [x] Research and define a hydrogeology/corporate-scientific palette.
2. [x] Update global styles in [globals.css](file:///var/www/geoneeds-site/app/globals.css) and [tailwind.config.ts](file:///var/www/geoneeds-site/tailwind.config.ts).
3. [x] Refactor shared UI components including [Header.tsx](file:///var/www/geoneeds-site/app/components/Header.tsx), [Footer.tsx](file:///var/www/geoneeds-site/app/components/Footer.tsx), and homepage components.
4. [x] Refactor public pages including [page.tsx](file:///var/www/geoneeds-site/app/page.tsx), [about-us/page.tsx](file:///var/www/geoneeds-site/app/about-us/page.tsx), and other affected subpages.
5. [x] Test responsiveness, contrast, layout constraints, and key admin/public flows.

## Notes & Design Considerations
- Avoid default browser components or generic blue/red colors. Use rich, premium gradients.
- Leverage the existing `WaterWave` canvas effect seamlessly.
- Keep implementation quota-conscious: inspect and change only the pages/components affected by the theme pass, then update `.ai/project_overview.md` with any durable theme architecture changes.
- Raw input merged on 2026-06-01: modern industrial/construction/water/nature theme, Tailwind CSS, medium border radius, more spacing, dark mode, dark mode toggle, web design principles, and blue water-focused theme color.
- Completed on 2026-06-01: added CSS theme tokens, Tailwind aliases, dark mode toggle, refreshed public routes, and verified with `pnpm run build`.
