# Task: Make Home Survey Projects Dynamic
- **ID:** 005
- **Status:** Completed
- **Created Date:** 2026-06-04
- **Completed Date:** 2026-06-04

## Description
Make the home page "MOST SUCCESSFUL SURVEYS!" section dynamic using the latest four project records, and reuse one project card/grid style across the home and projects pages.

## Requirements
- [x] Fetch the latest four projects for the home page.
- [x] Avoid duplicated project card markup between home and `/projects`.
- [x] Preserve `/projects` behavior and project links.
- [x] Use minimum Codex quota and keep edits scoped.
- [x] Verify with a production build.

## Implementation Plan
1. [x] Add a latest-project fetch helper.
2. [x] Add a reusable public project grid component.
3. [x] Use the component in `/projects`.
4. [x] Replace the static home survey cards with latest projects.
5. [x] Run build verification and complete task docs.

## Notes & Design Considerations
- Use the existing modern project card style from `/projects`.
- Latest ordering should prefer newest project records.
- Build passed with existing image lint warnings.
