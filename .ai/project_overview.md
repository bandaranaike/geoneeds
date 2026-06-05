# GeoNeeds Project Overview

Last reviewed: 2026-06-01

This document is the quick-start context for AI agents working on the GeoNeeds site. Keep it accurate and compact so future agents can avoid expensive rediscovery.

---

## Tech Stack

- **Framework:** Next.js 15.1.6 with App Router.
- **Language:** TypeScript.
- **Runtime UI:** React 19.
- **Styling:** Tailwind CSS 3.4 with CSS variables in `app/globals.css`.
- **Fonts:** `app/layout.tsx` loads Geist via `next/font`; `app/globals.css` also imports Inter and Karla from Google Fonts and applies Inter to `body`.
- **Database:** MongoDB database named `geoneeds`.
- **Data access:** Native MongoDB driver for projects and messages; Mongoose for users.
- **Authentication:** NextAuth 4 with credentials, Google provider, MongoDB adapter, and JWT sessions.
- **Password hashing:** `bcryptjs` is used instead of native `bcrypt` to avoid CI/deploy failures from missing compiled bindings.
- **Media:** Cloudinary and `next-cloudinary`.
- **UI libraries:** Headless UI and Heroicons.

---

## Current App Map

### Deployment

- `.github/workflows/deploy.yml`: Pushes to `main` deploy through `appleboy/ssh-action` to the VPS, using `VPS_HOST`, optional `VPS_PORT` defaulting to `22`, `VPS_USER`, and `SSH_PRIVATE_KEY` secrets. The remote script pulls `origin/main`, installs with `pnpm install --frozen-lockfile`, builds, restarts PM2, and reloads Nginx.

### Public Routes

- `app/page.tsx`: Home page, including GeoNeeds marketing content and WaterWave usage.
- `app/about-us/page.tsx`: About page with profile/service content and `Encompasses`.
- `app/contact-us/page.tsx`: Modern contact page using `app/components/ContactForm.tsx`, with custom inline validation instead of native browser validation.
- `app/projects/page.tsx`: Project listing page.
- `app/projects/[slug]/page.tsx`: Single project page. Despite the route name, `lib/projects.ts` currently treats `slug` as a MongoDB ObjectId.
- `app/page.tsx`: Home page now fetches the latest four projects for the "MOST SUCCESSFUL SURVEYS!" section.
- Legal pages: `app/privacy-policy/page.tsx`, `app/cookie-policy/page.tsx`, `app/terms-and-conditons/page.tsx` (note current spelling).

### Admin Routes

- `app/admin/layout.tsx`: Admin layout wrapper.
- `app/admin/page.tsx`: Admin dashboard.
- `app/admin/projects/page.tsx`: Project management list.
- `app/admin/projects/new/page.tsx`: Create project form.
- `app/admin/projects/[id]/page.tsx`: Edit project form.
- Auth and admin pages use restrained theme-matched styling; admin CRUD behavior is unchanged.
- Admin project create/edit pages use `app/components/AdminToast.tsx` for success/error feedback; new project form resets after successful create. Project photo inputs support multiple selected files and append all uploaded Cloudinary URLs to the `photos` array.
- `middleware.ts`: Protects `/admin/:path*`; redirects unauthenticated users to `/auth/signin` and non-admin users to `/`.

### API Routes

- `app/api/auth/[...nextauth]/route.ts`: NextAuth route using `lib/auth.ts`.
- `app/api/contact-us/route.ts`: Public contact form submission endpoint.
- Contact submissions require name, message, and at least one contact method: email or phone.
- `app/api/admin/contact-messages/route.ts`: Admin contact-message endpoint.
- `app/api/admin/projects/route.ts`: Admin project collection endpoint.
- `app/api/admin/projects/[id]/route.ts`: Admin project item endpoint.
- `app/api/admin/upload/route.ts`: Cloudinary upload endpoint. Accepts one or more repeated `file` form-data fields, uploads in small concurrent batches via Cloudinary upload streams, and returns `secure_urls` plus legacy `secure_url`.
- `app/api/atlas.ts`: Legacy or utility API file; verify usage before changing.

### Shared Code

- `lib/mongodb.ts`: Cached MongoDB client promise.
- `lib/mongodbConnect.ts`: Mongoose connection helper.
- `lib/projects.ts`: Project fetch helpers for public pages.
- `lib/auth.ts`: NextAuth providers, adapter, session strategy, and callbacks.
- `models/User.ts`: Mongoose user schema.
- `types/project.ts`: Project TypeScript shape.
- `app/components/`: App-local components including Header, Footer, ContactForm, Encompasses, admin components, and ImageGallery.
- `components/`: Shared components including WaterWave, ProjectsList, Cloudinary, and DeleteConfirmationModal.

---

## Styling Notes

- Tailwind scans `pages`, `components`, and `app`.
- `tailwind.config.ts` currently exposes background and foreground colors along with theme token aliases like `primary`, `surface`, `line`, `accent`, and `rounded-geo` (which maps to `0.875rem` radius).
- `app/globals.css` defines color variables for background, foreground, surface, primary, accent, earth, and border.
- Homepage layout features a full-bleed hero banner utilizing a high-contrast dark overlay over a forest background image.
- Public project pages now use theme-matched dark image hero sections, richer casework cards, project fact panels, method/process content, and the shared footer.
- Public project cards are centralized in `app/components/PublicProjectsGrid.tsx`; reuse this component for home/project listing card layouts.
- About and legal pages now use theme-matched sections; the terms, cookie, and privacy pages share a focused legal article layout.
- Visual assets stored under `/public` now include: `/hero_forest.png`, `/groundwater_surveys.png`, `/soil_engineering.png`, `/water_quality.png`, `/borehole_logging.png`, `/resistivity_imaging.png`, `/pump_testing.png`, `/environmental_audit.png`, and `/cta_lake.png`, alongside individual regional survey thumbnails.
- The `Header` component supports a `transparent` prop allowing navigation menus to float cleanly on top of image-heavy hero sections.
- The `Footer` component has been refactored from a simple wave placeholder to a feature-rich, dark-theme layout displaying office bases, useful links, dynamic social actions, and legal policies.

---

## Low-Quota Operating Rules

- Minimum Codex quota usage is a standing project rule for every task and every turn.
- Start with this file, `AGENTS.md`, and the active task file before reading source.
- Use targeted commands: `rg`, `find`, `sed -n`, and narrow `ls` commands.
- Avoid scanning `.next`, `node_modules`, generated output, lockfile internals, and large assets unless directly relevant.
- Prefer reading route/component files directly over broad recursive dumps.
- When a fact is learned that will matter again, add it here or to the relevant task notes.
- Keep final summaries short: changed files, verification performed, and any known gaps.

---

## Active Task Notes

- Tasks are tracked by status under `.ai/tasks/`; read `.ai/tasks/inbox.md`, `.ai/tasks/README.md`, and `.ai/tasks/index.md` before changing task files.
- Task `completed/001_install_new_theme.md` completed the sitewide visual refresh on 2026-06-01.
- Task `completed/002_change_theme_structure.md` completed the visual homepage restructure, premium footer creation, and image updates on 2026-06-01.
