# Task: Redesign Home Page and Theme Structure

- **ID:** 002
- **Status:** Completed
- **Created Date:** 2026-06-01
- **Completed Date:** 2026-06-01

## Description
Completely overhaul the home page design and theme structure to align with the premium, image-rich design reference shown in `.ai/resources/example.png`. This includes restructuring the home page layout, generating real-world representative imagery, and building a high-quality, modern visual aesthetic that reflects the professional geotechnical and hydrogeological branding.

## Requirements
- [x] **Hero Section Overhaul:** 
  - Implement a full-width hero header with a rich nature/forest background image.
  - Text overlay: "Sub-Surface Water Solutions." and subtext: "Expert hydrogeological surveys and soil engineering for a sustainable water future in Sri Lanka."
  - Include CTA button ("GET STARTED") and tags ("RESISTIVITY", "BOREHOLE", "SUSTAINABILITY").
- [x] **"Discover Our Advanced Testing" Section:**
  - Create a 3-column layout featuring Ground Water Surveys, Soil Engineering, and Water Quality.
  - Use high-quality real imagery for each column to represent field work.
- [x] **"Specialized Testing Tailored For You" Section:**
  - Build a grid of interactive cards with background imagery/overlays representing specialized services (Borehole Logging, Resistivity Imaging, Pump Testing, Environmental Audit).
- [x] **"Most Successful Surveys!" Showcase:**
  - Display featured projects as cards containing beautiful location imagery, region details, star ratings, and yield statistics (e.g., LPH / Yield).
- [x] **"Survey Ordering Process" Section:**
  - Highlight the 4-step pipeline (Find Your Site, Book a Survey, Expert Analysis, Project Delivery) with clean icons/illustrations.
- [x] **Water Source CTA Section:**
  - Design a full-width call-to-action block with a vibrant mountain-lake background image and text "EXPLORE YOUR WATER SOURCES NOW".
- [x] **Asset Generation:**
  - Generate high-quality realistic images using AI image generation to represent the geophysical and hydrological work.

## Implementation Plan
1. [x] Sift through existing assets or generate new image assets (e.g. forest background, water quality technicians, pump testing equipment, scenic mountain lake) using `generate_image`.
2. [x] Update `app/globals.css` and `tailwind.config.ts` if custom fonts, styles, or specific colors are needed to replicate the layout aesthetic.
3. [x] Restructure and code the new home page layout in `app/page.tsx`.
4. [x] Refactor or style the global Navigation/Header and Footer components to blend seamlessly with the updated hero/background imagery.
5. [x] Verify responsiveness, accessibility, and visual correctness across desktop and mobile screens.

## Notes & Design Considerations
- The design should match the look and feel of `file:///var/www/geoneeds-site/.ai/resources/example.png`.
- Ensure readability of text over background images by utilizing suitable dark overlays or semi-transparent backdrops.
