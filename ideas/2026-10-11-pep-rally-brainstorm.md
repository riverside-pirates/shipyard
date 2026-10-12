# Pep Rally Brainstorm: Tools Riverside Needs

*October 11, 2026.* Five crew members with different priorities pitched tools, then argued about each other's ideas. These are **nascent ideas**. They aren't bounties yet. Pick one, sharpen it, and turn it into a bounty with the `bounty` issue template.

## The Crew

| Who | Cheer | What they care about |
|---|---|---|
| **Jay**, 9th grader | "Less tapping, more winning!" | Saving time, knowing what's due, not feeling dumb |
| **Mr. B**, teacher | "Ship it, Pirates, we sail at dawn!" | Real engineering, less busywork, equity |
| **Dana**, REPAC parent | "Pirates sail together!" | Transparency, every family included, any language |
| **Ms. Okafor**, AP / IT | "One login per student, and it's mine!" | Student privacy (FERPA), no new logins, outlives its author |
| **Ria**, student maintainer | "Ship small, ship free!" | Static sites, free tier, a 9th grader can run it |

## Ground Rules the Crew Agreed On

These came out of the crossfire round. Every idea below should follow them.

1. **No student names in public repos.** Use asset tags, headcounts, and dates instead.
2. **No new logins.** If families need an account, it's the wrong design. GitHub accounts are fine for students only.
3. **Free tier only.** GitHub Pages, Actions, JSON, and CSV. No paid texting or servers.
4. **Printed and translated copies count.** Not every family has email, Wi-Fi, or English.

## Where Each Idea Lives

| Idea | Home repo | Difficulty | Notes |
|---|---|---|---|
| Lunch Menu Board | `shipyard` (needs a new repo) | `easy` | Most agreed-on idea. See below. |
| Gear Locker (loaner and equipment checkout) | `shipyard` (needs a new repo) | `medium` | Three pitches merged into one |
| Good First Issue Finder | `shipyard` | `easy` | Helps new crew find work |
| Bounty Leaderboard | `shipyard` | `easy` | Nightly Action builds a markdown leaderboard |
| Club Headcount | `shipyard` (needs a new repo) | `medium` | Counts only, no names |
| Lost and Found Board | `shipyard` (needs a new repo) | `medium` | Jay: useless without a push alert |
| Substitute Lesson Hub | `shipyard` (needs a new repo) | `easy` | Static pages, no student records |
| Due Date Dock | [`computer-science-essentials`](https://github.com/riverside-pirates/computer-science-essentials/blob/main/IDEAS.md) | `hard` | |
| RubricBot | [`computer-science-essentials`](https://github.com/riverside-pirates/computer-science-essentials/blob/main/IDEAS.md) | `legendary` | Would touch classroom50 |
| Offline Lesson Packs | [`computer-science-essentials`](https://github.com/riverside-pirates/computer-science-essentials/blob/main/IDEAS.md) | `medium` | |
| FamilyLink Translate | [`repac`](https://github.com/riverside-pirates/repac/blob/main/docs/ideas.md) | `medium` | |
| ParentPing newsletter | [`repac`](https://github.com/riverside-pirates/repac/blob/main/docs/ideas.md) | `medium` | |
| Volunteer Sign-Up | [`repac`](https://github.com/riverside-pirates/repac/blob/main/docs/ideas.md) | `medium` | |
| Lab Fund Tracker | [`repac`](https://github.com/riverside-pirates/repac/blob/main/docs/ideas.md) | `easy` | |
| Build Showcase Board | [`repac`](https://github.com/riverside-pirates/repac/blob/main/docs/ideas.md) | `medium` | |

## Cross-Cutting Ideas (Shipyard's Job)

### Lunch Menu Board, `easy`
- **For:** Everyone, plus cafeteria staff.
- **Why:** Jay, Ria, and Dana all pitched it or built on it.
- **What it'd take:** A scheduled Action writes `menu.json`, and a GitHub Pages site shows it. Open straight to **today's** menu (Jay's idea). Show allergen notes and the top home languages (Dana's idea).
- **First question:** Where does the district publish the menu, and can we read it automatically?

### Gear Locker, `medium`
- **For:** The front office, the library, and CS/engineering teachers.
- **Why:** Mr. B (LoanerLog), Ms. Okafor (Chromebook Loaner Tracker), and Ria (Equipment Checkout CSV) all pitched the same thing.
- **What it'd take:** A CSV in a repo with asset tag, item, date out, and date back. Git history is the audit trail. Add a simple checkout page.
- **Rule:** Ms. Okafor's condition is that it records **no student names**, ever.

### Good First Issue Finder, `easy`
- **For:** New 9th-grade contributors.
- **What it'd take:** A page in `dashboard/` that uses the public GitHub API to list `good first issue` issues across the org.

### Bounty Leaderboard, `easy`
- **For:** Shipyard contributors.
- **What it'd take:** A nightly Action counts merged PRs that are linked to bounties and commits `LEADERBOARD.md`.
- **Open question:** Should it use GitHub handles or pirate pseudonyms? Ask the crew.

### Club Headcount, `medium`
- **For:** Club advisors, like robotics and coding club.
- **What it'd take:** Scan a QR code, then tap +1. It stores a count per club per day.
- **Rule:** Ms. Okafor says to record a headcount, not names. Records we don't need are records we'd have to protect.

### Lost and Found Board, `medium`
- **For:** The front office and students.
- **Pushback from Jay:** "If I have to remember to open a page, I'll just text my friend." It needs some kind of push, but without collecting phone numbers. Can that be solved? That's the real puzzle here.

### Substitute Lesson Hub, `easy`
- **For:** Substitute teachers.
- **What it'd take:** Static pages per class with today's plan. No student records.

## Parked (For Now)

- **Pickup Pulse** (text alerts for pickups, late buses, and early dismissal). Mr. B, Ms. Okafor, and Ria all pushed back on it. It would mean collecting family phone numbers, paying for texts, and storing sensitive pickup data, which custody orders make risky. Use the school's existing notification system. A static "today's schedule changes" page might be a safe version.
- **Club Sign-Up via Issue Forms.** Dana pointed out that it requires a GitHub account, which shuts families out. It's OK for students only.
- **Shift Swap Board** and **Practice Pulse** (Jay). These are real needs, but they belong to employers and coaches. Revisit them if a coach asks.
