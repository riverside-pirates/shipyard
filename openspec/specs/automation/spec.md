# Automation Specification

## Purpose
Shipyard runs no GitHub Actions. This records the three workflows that were retired on 2026-11-22, what each did, what it got wrong, and the conditions a replacement has to meet before it is added. The process they wrapped is in `bounty-lifecycle` and `sea-worthiness`.

## Requirements

### Requirement: No workflow runs in this repo
The repo SHALL contain no file under `.github/workflows/`. Issue forms, the pull request template, labels and docs are the whole mechanism.

#### Scenario: A pull request is opened
- **WHEN** a crew member opens a pull request
- **THEN** no check runs and no bot comments; a reviewer picks it up

#### Scenario: Sunday midnight UTC
- **WHEN** the old dashboard schedule would have fired
- **THEN** nothing runs and nothing is committed to `main`

### Requirement: The retirement record is kept
What each retired workflow did and why it was removed SHALL stay in this spec, so the idea can be rebuilt without repeating the fault.

#### Scenario: The three retired workflows
- **WHEN** someone asks what automation Shipyard used to have
- **THEN** the answer is this table:

| Workflow | Trigger | What it did | Runs | What was wrong |
|---|---|---|---|---|
| Sea-Worthy Check (`pr-seaworthy-check.yml`) | pull request opened, edited or updated | Counted `- [x]` boxes in the body; under 3, it posted a reminder comment | 4: 3 failed, 1 passed | It declared no permissions, so posting the reminder returned 403 "Resource not accessible by integration" and the check went red with no message (seen 2026-11-20). It counted any three ticked boxes, so it measured the author's claim and not the review. |
| Bounty Tracker (`bounty-tracker.yml`) | issue closed | If a merged pull request had cross-referenced the issue, posted one of three congratulation comments | 0 | It never ran. It had no label filter, so it would have fired on any closed issue. It addressed whoever closed the issue, which is the reviewer who merged, not the crew member who did the work. It declared no permissions and would have met the same 403. |
| Activity Dashboard (`activity-dashboard.yml`) | Sundays 00:00 UTC, or by hand | Read every repo in the org, listed the last 7 days of merged pull requests and closed issues, and committed them to `dashboard/data.json` | 30 | It committed GitHub logins to a tracked file every week, against the org's student-data rule. It listed every closed issue as a bounty with no label filter. It pushed straight to `main`. The page that drew the data was never published: GitHub Pages is not enabled. |

#### Scenario: The dashboard page
- **WHEN** someone looks for `dashboard/`
- **THEN** it is gone from the tree; the viewer (`index.html`, `app.js`, `style.css`) and its generated `data.json` were removed with the workflow and remain in git history

### Requirement: A new workflow meets four conditions first
Before any workflow is added back, its pull request SHALL show that it declares the least `permissions` it needs, selects its targets by label or form and not by "any issue", writes no login, name or email into a tracked file, and does not push to `main`. It SHALL also add its own row to this spec.

#### Scenario: Someone proposes bringing back the weekly digest
- **WHEN** the proposal would save contributor logins to a file in the repo
- **THEN** it is declined, and the digest is instead a query run in a terminal or a count with no names

#### Scenario: Someone proposes a checklist reminder
- **WHEN** the proposal comments on pull requests
- **THEN** it declares `pull-requests: write`, and it is tried on a test pull request to prove the comment posts before it is merged
