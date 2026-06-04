# AI Agent Guidelines & Knowledge Base Rules

Welcome! This file (`AGENTS.md`) at the root and the `.ai` directory serve as the central brain and knowledge center for AI agents working on the **GeoNeeds** Next.js project. To keep development organized, efficient, and cost-effective, all agents must adhere to the rules and structures outlined below.

---

## Directory Structure

All files inside `.ai` and `AGENTS.md` are dedicated to project tracking and knowledge management:

```text
├── AGENTS.md             # This file (instructions & system rules at root)
└── .ai/
    ├── project_overview.md   # Current architectural state and features implemented so far
    └── tasks/                # Status-tracked task workspace
        ├── README.md         # Task workflow and folder rules
        ├── inbox.md          # User-maintained raw task intake list
        ├── index.md          # Current task board summary
        ├── pending/          # Formalized tasks not started
        ├── in_progress/      # One or more active tasks
        ├── completed/        # Finished tasks
        ├── blocked/          # Tasks waiting on external input
        └── archive/          # Superseded or obsolete task records
```

---

## Task Management Workflow

When a user requests new tasks, follow this precise lifecycle:

### 1. Read Raw Tasks
Check [tasks/inbox.md](file:///var/www/geoneeds-site/.ai/tasks/inbox.md) for new requests appended by the user.

### 2. Formalize Tasks
For each new raw task, create a corresponding task file in [tasks/pending/](file:///var/www/geoneeds-site/.ai/tasks/pending/) named `XXX_short_description.md` (e.g., `001_install_new_theme.md`).
Each task file MUST use the following format:
```markdown
# Task: [Task Name]
- **ID:** XXX (e.g., 001)
- **Status:** Pending | In Progress | Completed | Blocked
- **Created Date:** YYYY-MM-DD
- **Completed Date:** YYYY-MM-DD (or N/A)

## Description
[Detailed description of what needs to be built or fixed]

## Requirements
- [ ] Requirement 1
- [ ] Requirement 2

## Implementation Plan
1. [ ] Step 1
2. [ ] Step 2

## Notes & Design Considerations
- [Design notes or architecture constraints]
```

### 3. Update Status
- Track task progress by updating the `Status` and checking off completed items in the task's markdown file.
- When you begin working on a task, move it from `pending/` to `in_progress/` and set `Status: In Progress`.
- When a task is finished, move it to `completed/`, set `Status: Completed`, and log the completed date.
- When a task cannot continue, move it to `blocked/`, set `Status: Blocked`, and add a clear blocker note.
- Keep [tasks/index.md](file:///var/www/geoneeds-site/.ai/tasks/index.md) updated whenever a task is created, moved, completed, blocked, or archived.

### 4. Remove/Archive Processed Raw Tasks
Once a raw task from `tasks/inbox.md` has been formalized in `pending/`, mark it as processed in `tasks/inbox.md` with the created task ID to prevent duplication.

---

## Knowledge Base Maintenance

To ensure the project stays well-documented:
1. **Update Project Overview:** After successfully completing any task that alters the database structure, routing, config, UI themes, or main packages, update [project_overview.md](file:///var/www/geoneeds-site/.ai/project_overview.md).
2. **Follow Coding & CSS Rules:**
   - Keep styling clean, premium, and dynamic.
   - We are currently using Tailwind CSS v3 with custom variables.
   - Utilize existing UI components such as Header, Footer, Encompasses, and WaterWave.
3. **Save Agent Quotas:** Always use the smallest practical context and command set.
   - Treat minimum Codex quota usage as a standing priority for every task and every turn.
   - Read `.ai/project_overview.md`, the relevant task file, and only the source files needed for the current change.
   - Prefer `rg`, `find`, `sed -n`, and narrow file reads over broad scans or opening large generated folders.
   - Do not inspect `.next`, `node_modules`, build output, or large media unless the task explicitly requires it.
   - Batch independent read-only commands when possible, keep responses concise, and avoid repeating information already stored in `.ai`.
   - Update `.ai` docs with durable findings so future agents do not need to rediscover the same project facts.
