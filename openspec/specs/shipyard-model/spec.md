# Shipyard Model Specification

## Purpose
The things Shipyard talks about, the GitHub object each one really is, the file in this repo that defines it, and the key that joins it to the others. README.md and CONTRIBUTING.md are the prose for students; this is the contract behind them. Measured against the repo and the GitHub API on 2026-11-22.

## Requirements

### Requirement: One correspondence table
Every Shipyard term SHALL map to one GitHub object as the table in the scenario "The correspondence table" sets out. Joins are by repo name, issue or pull request number, and label name, never by title.

#### Scenario: The correspondence table
- **WHEN** a Shipyard term, its GitHub object and its defining file are matched
- **THEN** they map as follows:

| Shipyard term | GitHub object | Defined in | Join key |
|---|---|---|---|
| Fleet | The `riverside-pirates` organization | `projects.json` `org` | org login |
| Project (a ship) | A repository in the org | `projects.json` `projects[]`; README "Our Repos" | repo name |
| Bounty | An issue opened from the Bounty form | `.github/ISSUE_TEMPLATE/bounty.yml` | repo name + issue number |
| Bug report, idea, meta | An issue opened from one of the other three forms | `.github/ISSUE_TEMPLATE/` | repo name + issue number |
| Acceptance criteria | A task list in the bounty's body | Bounty form, "Acceptance criteria" | none: text in the issue |
| Difficulty | One label: `easy`, `medium`, `hard`, `legendary` | `labels.json` `difficulty` | label name |
| Type | One label: `bug`, `feature`, `docs`, `design`, `meta` | `labels.json` `type` | label name |
| Status | One label: `available`, `claimed`, `in-progress`, `review-needed` | `labels.json` `status` | label name |
| Skills needed | Checkboxes in the bounty's body (HTML/CSS, JavaScript, Python, Git, Writing/Docs, Design, Testing) | Bounty form, "Skills needed" | none: text in the issue |
| Skill guide | A Markdown file | `skills/*.md` | file name |
| Crew member | An org member | not stored in this repo | GitHub login, held by GitHub only |
| Reviewer | A crew member or the teacher, acting on a pull request | CONTRIBUTING "Respond to Feedback" | pull request review |
| Claim | The issue's assignee | CONTRIBUTING "Claim It" | issue assignee |
| Contribution | A pull request in the project's repo | `.github/PULL_REQUEST_TEMPLATE.md` | repo name + pull request number |
| Sea-worthiness checklist | A task list in the pull request's body | see `sea-worthiness` | none: text in the pull request |

### Requirement: Relations run through GitHub, not through files
The relations between entities SHALL be read from GitHub's own links: an issue's repository, its labels, its assignee, and a pull request's closing reference. This repo SHALL NOT keep a second copy of any of them.

#### Scenario: The relations
- **WHEN** one entity is followed to another
- **THEN** the link is the one in this table:

| From | To | How many | Carried by |
|---|---|---|---|
| Project | Bounty | one to many | the repository the issue lives in |
| Bounty | Difficulty, Type, Status | one each | labels on the issue |
| Bounty | Claim | zero or one | the issue's assignee |
| Crew member | Claim | at most one open at a time | a rule in README and CONTRIBUTING; nothing enforces it |
| Bounty | Contribution | one to many | `Closes #N` in the pull request body; from another repo, `Closes riverside-pirates/<repo>#N` |
| Contribution | Reviewer | one to many | pull request reviews |
| Contribution | Sea-worthiness checklist | one | the pull request body |

#### Scenario: A bounty filed in Shipyard for work in another repo
- **WHEN** a bounty lives in `shipyard` and its "Which project?" answer names `repac`
- **THEN** the project is known only from that line of body text, and the pull request in `repac` must use the full `riverside-pirates/shipyard#N` reference for the merge to close the bounty

### Requirement: Crew members are never written down
Tracked files, commits, issues and pull request text in this repo MUST NOT contain a student's name, email or GitHub login. Specs and docs SHALL name roles. Who claimed or shipped what is answered by GitHub at read time.

#### Scenario: Someone asks who shipped the most bounties
- **WHEN** the question is asked
- **THEN** the answer comes from a live GitHub query in a terminal, and nothing is saved to the repo

#### Scenario: History before 2026-11-22
- **WHEN** `git log -- dashboard/data.json` is read
- **THEN** it shows weekly snapshots that the retired dashboard workflow committed, and those snapshots contain logins
- **AND** removing them from history needs a force-push to `main`, which the org forbids, so it is the teacher's decision and has not been done

### Requirement: Known gaps are listed here until they are closed
A place where the docs, the data files and GitHub disagree SHALL be listed in this requirement with the date it was measured, and removed when it is fixed. A gap MUST NOT be hidden by writing the spec as if it were closed.

#### Scenario: Gaps measured 2026-11-22
- **WHEN** the repo is compared with the GitHub API
- **THEN** these disagreements exist:

| Gap | Evidence |
|---|---|
| The `bounty` label does not exist | The Bounty form applies `bounty` and `available`; the repo has no `bounty` label and `labels.json` does not define one. README and CONTRIBUTING both tell students to look for it. |
| The `idea` label does not exist | The Improvement Idea form applies `idea`; no such label in the repo or in `labels.json`. |
| No bounty has ever been filed | Zero issues, open or closed, carry `bounty`. The three open "Idea:" issues carry a difficulty and a type label only. |
| `good first issue` is documented but not defined | CONTRIBUTING lists it; the repo has it as a GitHub default; `labels.json` omits it. |
| No label says which project | README says labels tell you "the repo it belongs to". The only record is the form's "Which project?" answer. |
| The project list has three versions | `projects.json` and README list `repac` and `computer-science-essentials`; the Bounty form also offers `shipyard` and `other`. |
| `projects.json` `activeBounties` is always empty | Nothing writes it, and it would be a second copy of a GitHub query. |
| Skills needed and skill guides do not join | The form lists technologies; `skills/` holds four practice guides (break down a problem, debug, review, write a README). |
| The pull request template cannot close a cross-repo bounty as written | It ends with `Closes #`, which only resolves inside the same repo. |
| Nobody is named as the one who changes status labels | CONTRIBUTING says the teacher or a reviewer assigns the issue; no doc says who swaps `available` for `claimed` or the later labels. |
