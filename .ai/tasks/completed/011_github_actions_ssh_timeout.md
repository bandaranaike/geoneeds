# Task: Diagnose GitHub Actions SSH Timeout

- **ID:** 011
- **Status:** Completed
- **Created Date:** 2026-06-05
- **Completed Date:** 2026-06-05

## Description
Investigate the GitHub Actions deployment failure showing `dial tcp ***:22: i/o timeout` during the SSH deployment step.

## Requirements
- [x] Inspect deployment workflow.
- [x] Identify whether the failure is build-related or SSH connectivity-related.
- [x] Improve workflow SSH configuration where useful.
- [x] Document the required external VPS/network checks.

## Implementation Plan
1. [x] Read `.github/workflows/deploy.yml`.
2. [x] Add configurable SSH port and timeout settings to the SSH action.
3. [x] Update project overview with deployment workflow note.

## Notes & Design Considerations
- The pasted failure occurs before the deployment script starts; it is not a production build error.
- Most likely causes: VPS SSH port closed/filtered, wrong `VPS_HOST`, custom SSH port not configured in Actions, firewall rules blocking GitHub-hosted runners, or SSH service down.
