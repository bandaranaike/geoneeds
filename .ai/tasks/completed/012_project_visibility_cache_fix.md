# Task: Fix Production Project Visibility

- **ID:** 012
- **Status:** Completed
- **Created Date:** 2026-06-05
- **Completed Date:** 2026-06-05

## Description
Fix the production issue where newly created or updated projects are not visible after admin project changes.

## Requirements
- [x] Ensure public project listing reads fresh project data in production.
- [x] Ensure homepage latest projects read fresh project data in production.
- [x] Ensure admin project listing reads fresh project data in production.
- [x] Revalidate affected routes after project create/update/delete mutations.

## Implementation Plan
1. [x] Mark project-dependent pages as dynamic.
2. [x] Add route revalidation after admin project mutations.
3. [x] Run focused TypeScript verification.

## Notes & Design Considerations
- Root cause is likely production server component/static route caching, not MongoDB write failure.
- The mutation API now revalidates `/`, `/projects`, `/admin/projects`, and changed project detail routes.
