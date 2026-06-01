# Task: Install New Theme

- **ID:** 001
- **Status:** Pending
- **Created Date:** 2026-06-01
- **Completed Date:** N/A

## Description
Revamp the application theme and styling to achieve a premium, modern, and high-quality aesthetic. The website represents a hydrogeological service provider ("GeoNeeds"), so design choices should lean towards water/earth elements (sleek deep blues, water ripples, natural greens, dark mode accents, modern glassmorphism).

## Requirements
- [ ] Define a cohesive, modern color palette with clear primary, secondary, and accent colors.
- [ ] Integrate CSS variables inside `globals.css` for theme colors.
- [ ] Update `tailwind.config.ts` to utilize the new theme config.
- [ ] Design high-quality interactive UI components (buttons, cards, headers, footers).
- [ ] Apply smooth micro-animations, transitions, and hover effects across all pages.
- [ ] Ensure full responsiveness (mobile, tablet, desktop) and accessibility.
- [ ] Maintain support for light and dark theme aesthetics (clean & high-contrast).

## Implementation Plan
1. **Research & Design Palette:** Find inspiration for hydrogeological/corporate-scientific websites.
1. [ ] Research and define a hydrogeology/corporate-scientific palette.
2. [ ] Update global styles in [globals.css](file:///var/www/geoneeds-site/app/globals.css) and [tailwind.config.ts](file:///var/www/geoneeds-site/tailwind.config.ts).
3. [ ] Refactor shared UI components including [Header.tsx](file:///var/www/geoneeds-site/app/components/Header.tsx), [Footer.tsx](file:///var/www/geoneeds-site/app/components/Footer.tsx), and homepage components.
4. [ ] Refactor public pages including [page.tsx](file:///var/www/geoneeds-site/app/page.tsx), [about-us/page.tsx](file:///var/www/geoneeds-site/app/about-us/page.tsx), and other affected subpages.
5. [ ] Test responsiveness, contrast, layout constraints, and key admin/public flows.

## Notes & Design Considerations
- Avoid default browser components or generic blue/red colors. Use rich, premium gradients.
- Leverage the existing `WaterWave` canvas effect seamlessly.
- Keep implementation quota-conscious: inspect and change only the pages/components affected by the theme pass, then update `.ai/project_overview.md` with any durable theme architecture changes.
