# Task: Add Admin Project Toasts and Reset Create Form
- **ID:** 009
- **Status:** Completed
- **Created Date:** 2026-06-04
- **Completed Date:** 2026-06-04

## Description
Replace JavaScript alerts in admin project create/edit pages with modern toast messages, and reset the new-project form after successful save.

## Requirements
- [x] Add reusable admin toast UI.
- [x] Reset all new project fields and uploaded photos after successful create.
- [x] Replace create-page success/failure alerts with toast messages.
- [x] Replace edit-page update/delete failure alerts with toast messages.
- [x] Preserve existing create, update, upload, and delete behavior.
- [x] Verify with a production build.

## Implementation Plan
1. [x] Add a small reusable toast component.
2. [x] Wire toast state into `/admin/projects/new`.
3. [x] Reset the create form after a successful save.
4. [x] Wire toast state into `/admin/projects/[id]`.
5. [x] Run build verification and complete task docs.

## Notes & Design Considerations
- Minimum Codex quota: edit only the two admin form pages, one small component, and task docs.
- Build passed with existing image lint warnings.
