# Task: Multi-File Project Uploads

- **ID:** 010
- **Status:** Completed
- **Created Date:** 2026-06-05
- **Completed Date:** 2026-06-05

## Description
Enable the admin project create and edit pages to upload multiple files for project photos, and update the admin upload API to efficiently handle multiple Cloudinary uploads in one request.

## Requirements
- [x] `/admin/projects/new` accepts and uploads multiple selected files.
- [x] `/admin/projects/[id]` accepts and uploads multiple selected files.
- [x] `app/api/admin/upload/route.ts` accepts multiple uploaded files and returns all uploaded URLs.
- [x] Existing single-file behavior remains compatible.

## Implementation Plan
1. [x] Update the upload API to read all `file` entries and upload them concurrently to Cloudinary.
2. [x] Update the new project form file input and upload handler for multiple selected files.
3. [x] Update the edit project form file input and upload handler for multiple selected files.
4. [x] Run focused verification and update task/project docs.

## Notes & Design Considerations
- Use repeated `file` form-data fields to avoid changing clients to a new field name.
- Return both `secure_urls` and the first `secure_url` to preserve compatibility with older single-file callers.
- Verification: `pnpm exec tsc --noEmit` passed; `pnpm run lint` passed with existing `<img>` warnings.
