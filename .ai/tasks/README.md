# Task Workspace

This folder tracks work by task status. Use it with `.ai/tasks/inbox.md`.

## Folder Statuses

- `inbox.md`: Raw task intake. The user can add rough task ideas here.
- `pending/`: Formalized tasks that are ready but not started.
- `in_progress/`: Tasks actively being worked on.
- `completed/`: Finished tasks with completed dates.
- `blocked/`: Tasks that cannot continue without user input or an external change.
- `archive/`: Superseded, duplicated, or obsolete task files.

## Workflow

1. Read `.ai/tasks/inbox.md`.
2. Convert each unchecked raw item into a formal task in `pending/`.
3. Mark the raw item as processed with its task ID.
4. Add the task to `index.md`.
5. Move task files between status folders as status changes.
6. Update the task file metadata and `index.md` on every status change.

## Naming

Use this file name format:

```text
XXX_short_task_name.md
```

Example:

```text
001_install_new_theme.md
```

Use the next available numeric ID across all status folders.

## Required Task Template

```markdown
# Task: [Task Name]

- **ID:** XXX
- **Status:** Pending | In Progress | Completed | Blocked
- **Created Date:** YYYY-MM-DD
- **Completed Date:** YYYY-MM-DD or N/A

## Description
[Detailed description of what needs to be built or fixed]

## Requirements
- [ ] Requirement 1
- [ ] Requirement 2

## Implementation Plan
1. [ ] Step 1
2. [ ] Step 2

## Notes & Design Considerations
- [Design notes, constraints, blockers, or verification notes]
```

## Low-Quota Rule

Before opening source files, read only `.ai/project_overview.md`, `.ai/tasks/inbox.md`, this README, `index.md`, and the relevant task file. Then inspect only the files needed for the task.
