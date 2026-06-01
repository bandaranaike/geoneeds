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

### Public Routes

- `app/page.tsx`: Home page, including GeoNeeds marketing content and WaterWave usage.
- `app/about-us/page.tsx`: About page with profile/service content and `Encompasses`.
- `app/contact-us/page.tsx`: Contact page using `app/components/ContactForm.tsx`.
- `app/projects/page.tsx`: Project listing page.
- `app/projects/[slug]/page.tsx`: Single project page. Despite the route name, `lib/projects.ts` currently treats `slug` as a MongoDB ObjectId.
- Legal pages: `app/privacy-policy/page.tsx`, `app/cookie-policy/page.tsx`, `app/terms-and-conditons/page.tsx` (note current spelling).

### Admin Routes

- `app/admin/layout.tsx`: Admin layout wrapper.
- `app/admin/page.tsx`: Admin dashboard.
- `app/admin/projects/page.tsx`: Project management list.
- `app/admin/projects/new/page.tsx`: Create project form.
- `app/admin/projects/[id]/page.tsx`: Edit project form.
- `middleware.ts`: Protects `/admin/:path*`; redirects unauthenticated users to `/auth/signin` and non-admin users to `/`.

### API Routes

- `app/api/auth/[...nextauth]/route.ts`: NextAuth route using `lib/auth.ts`.
- `app/api/contact-us/route.ts`: Public contact form submission endpoint.
- `app/api/admin/contact-messages/route.ts`: Admin contact-message endpoint.
- `app/api/admin/projects/route.ts`: Admin project collection endpoint.
- `app/api/admin/projects/[id]/route.ts`: Admin project item endpoint.
- `app/api/admin/upload/route.ts`: Upload endpoint, expected to work with Cloudinary.
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
- `tailwind.config.ts` currently exposes only `background` and `foreground` CSS variable colors.
- `app/globals.css` defines the site theme tokens for light and dark modes, including background, foreground, surface, primary, accent, earth, and border colors.
- `tailwind.config.ts` exposes theme token aliases such as `primary`, `surface`, `line`, `accent`, and `rounded-geo`.
- `app/components/ThemeToggle.tsx` controls the `.dark` class on the document root and persists the choice in local storage.
- Existing design work should reuse Header, Footer, Encompasses, WaterWave, and existing project/admin components unless there is a clear reason to replace them.
- The completed theme pass uses a blue-led hydrogeology palette with teal and earth accents, medium radius, larger spacing, and dark-mode support.

---

## Low-Quota Operating Rules

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
