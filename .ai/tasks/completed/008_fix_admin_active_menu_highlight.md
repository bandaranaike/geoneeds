# Task: Fix Admin Active Menu Highlight
- **ID:** 008
- **Status:** Completed
- **Created Date:** 2026-06-04
- **Completed Date:** 2026-06-04

## Description
Fix the admin menu so the current admin route is highlighted instead of always highlighting Dashboard.

## Requirements
- [x] Highlight Dashboard only on `/admin`.
- [x] Highlight Admin projects on `/admin/projects` and edit pages.
- [x] Highlight Admin new project on `/admin/projects/new`.
- [x] Verify with a production build.

## Implementation Plan
1. [x] Use the current pathname in `AdminHeader`.
2. [x] Replace hardcoded `current` values with route matching.
3. [x] Run build verification.

## Notes & Design Considerations
- Minimum Codex quota: edit only `AdminHeader` and task docs.
- Build passed after clearing stale `.next` artifacts.
