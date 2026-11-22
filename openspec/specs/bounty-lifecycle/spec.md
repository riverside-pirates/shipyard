# Bounty Lifecycle Specification

## Purpose
The stages a bounty passes through from posted to shipped, what each stage is in GitHub terms, and who moves it. The README diagram is the picture; this is the contract. People move bounties by hand: see `automation`.

## Requirements

### Requirement: Five stages, each with a GitHub state
A bounty SHALL be in exactly one of the five README stages, and each stage SHALL correspond to GitHub state as the table in the scenario "The stage table" sets out.

#### Scenario: The stage table
- **WHEN** a bounty's stage is read from GitHub
- **THEN** it is the row that matches:

| README stage | Issue | Status label | Pull request |
|---|---|---|---|
| Pick a Bounty | open, no assignee | `available` | none |
| Build | open, assigned | `claimed`, then `in-progress` | none yet |
| Dry Dock | open, assigned | `review-needed` | open, linked to the bounty |
| Sea-Worthy | open, assigned | `review-needed` | approved by a reviewer |
| Ship It | closed as completed | none required | merged |

#### Scenario: The label and the state disagree
- **WHEN** an issue has an assignee but still carries `available`
- **THEN** the assignee is the truth and the label is stale, because the assignee is the claim and the label is a hand-kept copy

### Requirement: A claim is a comment, then an assignment
A crew member SHALL claim a bounty by commenting on the issue. The claim exists only once the teacher or a reviewer assigns the issue to them. A crew member SHALL hold at most one open claim.

#### Scenario: Two people comment on the same bounty
- **WHEN** two crew members both ask for one bounty
- **THEN** the one who is assigned holds it, and the other picks a different bounty

#### Scenario: A crew member cannot finish
- **WHEN** the assignee comments that they are stuck or stopping
- **THEN** the teacher or a reviewer removes the assignment and the bounty returns to Pick a Bounty

#### Scenario: One at a time
- **WHEN** a crew member who already holds an open claim asks for a second bounty
- **THEN** the teacher or reviewer declines to assign it until the first is shipped or released
- **AND** nothing in GitHub blocks the second assignment; the rule is kept by the person assigning

### Requirement: A bounty ships by a merged, linked pull request
A bounty SHALL close when a pull request that references it with a closing keyword is merged. A bounty closed by hand with no merged pull request was dropped, not shipped.

#### Scenario: Same-repo bounty
- **WHEN** a pull request whose body says `Closes #7` merges into the repo that holds bounty 7
- **THEN** GitHub closes the bounty as completed

#### Scenario: Work that needs changes
- **WHEN** a reviewer requests changes in Dry Dock
- **THEN** the bounty stays in Dry Dock, the crew member pushes more commits to the same pull request, and no new pull request is opened

### Requirement: Shipping is acknowledged by a person
When a bounty ships, the thanks SHALL come from the reviewer or the teacher in the pull request or in class. No bot posts it.

#### Scenario: A bounty ships
- **WHEN** the pull request merges
- **THEN** the merge and the reviewer's approval are the record, and any congratulation is written by a person
