# Sea-Worthiness Specification

## Purpose
What a pull request has to show before it merges, and which document says so. "Sea-worthy" is a reviewer's judgement; nothing counts checkboxes. Measured against the repo on 2026-11-22.

## Requirements

### Requirement: A reviewer decides, not a count
A pull request SHALL be sea-worthy when a reviewer (a crew member or the teacher) has approved it after reading the change against the CONTRIBUTING checklist. Ticked boxes are the author's claim and MUST NOT be treated as the review.

#### Scenario: Every box is ticked and the code does not run
- **WHEN** a pull request arrives with a fully ticked checklist and a reviewer finds it fails
- **THEN** the reviewer requests changes and the pull request is not sea-worthy

#### Scenario: A box does not apply
- **WHEN** a docs-only pull request cannot honestly tick "Tested my changes"
- **THEN** the author leaves it unticked and says why on that line, and the reviewer may still approve

### Requirement: Three checklists exist, and CONTRIBUTING is the standard
The repo holds three checklists. CONTRIBUTING.md "Sea-Worthiness Checklist" SHALL be the standard a reviewer reads against. The README list is its short form, and the pull request template is what the author fills in.

#### Scenario: The three lists (measured 2026-11-22)
- **WHEN** the three are laid side by side
- **THEN** they are:

| Where | Items | Covers |
|---|---|---|
| CONTRIBUTING.md "Sea-Worthiness Checklist" | 14, in four groups | code quality, git hygiene, PR quality, style and conventions |
| README.md "Quick Reference" | 6 | runs, tested, no debug code, clear commits, repo conventions, PR explains and links the bounty |
| `.github/PULL_REQUEST_TEMPLATE.md` | 5 | tested, docs updated, issue linked, self-reviewed, no secrets |

- **AND** two template items ("Updated docs if needed", "No hardcoded secrets or passwords") appear in neither of the other lists, and "no leftover debug code" appears in both of the others but not in the template

### Requirement: The pull request names its bounty
A pull request for a bounty SHALL say what it does, how to test it, and which bounty it closes, using a closing keyword GitHub resolves.

#### Scenario: Bounty and pull request in different repos
- **WHEN** the bounty is `shipyard` issue 12 and the pull request is in `repac`
- **THEN** the body says `Closes riverside-pirates/shipyard#12`, because a bare `#12` would point at `repac`'s own issue 12
