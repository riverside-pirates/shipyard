# Contributing to Riverside Pirates Projects

This guide walks you through the entire process of contributing code, from finding something to work on to getting your Pull Request merged. If this is your first time using Git or GitHub, that's totally fine -- we'll cover the basics here.

## Table of Contents

- [Find a Bounty](#find-a-bounty)
- [Claim It](#claim-it)
- [Set Up Your Workspace](#set-up-your-workspace)
- [Build Your Contribution](#build-your-contribution)
- [Open a Pull Request](#open-a-pull-request)
- [Respond to Feedback](#respond-to-feedback)
- [Sea-Worthiness Checklist](#sea-worthiness-checklist)
- [Cross-Repo Contributions](#cross-repo-contributions)
- [Git Basics Refresher](#git-basics-refresher)
- [Collaboration Expectations](#collaboration-expectations)

---

## Find a Bounty

Bounties are GitHub Issues that describe work that needs to be done. You can find them in a few places:

- **This repo (Shipyard):** Issues here are often about coordination, documentation, or cross-repo tasks.
- **Project repos:** Check the Issues tab on [`repac`](https://github.com/riverside-pirates/repac) or [`computer-science-essentials`](https://github.com/riverside-pirates/computer-science-essentials) for project-specific work.

Look for issues with the `bounty` label. Other labels tell you more:

| Label | Meaning |
|-------|---------|
| `bounty` | This is available work you can claim. |
| `good first issue` | Great for beginners. Start here if this is your first contribution. |
| `bug` | Something is broken and needs fixing. |
| `feature` | New functionality to build. |
| `docs` | Documentation improvements. |

## Claim It

Found something you want to work on? Here's how to claim it:

1. Read the full issue description and any acceptance criteria.
2. **Comment on the issue** saying you'd like to take it on. Something like: *"I'd like to work on this!"*
3. Wait for Mr. B or a reviewer to assign it to you.
4. Once assigned, it's yours. Work on one bounty at a time.

If you get stuck or realize you can't finish, that's okay. Just comment on the issue to let people know so someone else can pick it up.

## Set Up Your Workspace

### If you have write access to the repo

```bash
# Clone the repo (only need to do this once)
git clone https://github.com/riverside-pirates/<repo-name>.git
cd <repo-name>

# Create a branch for your work
git checkout -b your-branch-name
```

### If you're using a fork

```bash
# Fork the repo on GitHub (click the "Fork" button on the repo page)
# Then clone YOUR fork
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>

# Create a branch for your work
git checkout -b your-branch-name
```

**Branch naming tip:** Use something descriptive, like `fix-login-bug` or `add-score-display`. Keep it short and lowercase with hyphens.

## Build Your Contribution

Now you write code. A few things to keep in mind while you work:

1. **Follow the repo's conventions.** Look at how existing code is written and match that style.
2. **Test as you go.** Run the project locally and make sure your changes work.
3. **Commit often.** Small, focused commits are easier to review than one giant commit.
4. **Write clear commit messages.** Describe *what* you changed and *why*.

```bash
# Stage your changes
git add <file1> <file2>

# Commit with a clear message
git commit -m "Add score display to game results page"

# Push to GitHub
git push origin your-branch-name
```

If the repo has a test suite, run the tests before pushing:

```bash
# Check the repo's README for the specific test command
# Common examples:
npm test
python -m pytest
```

## Open a Pull Request

Once your code is pushed to GitHub:

1. Go to the repo on GitHub. You should see a banner suggesting you open a PR. Click it. (Or go to the Pull Requests tab and click "New pull request.")
2. Set the **base branch** to `main` and the **compare branch** to your branch.
3. Write a PR description that includes:
   - **What you did** -- a brief summary of your changes.
   - **Link to the bounty** -- reference the issue number (e.g., "Closes #12").
   - **How to test it** -- tell reviewers how to verify your work.
4. Submit the PR.

**Example PR description:**

```
## What I Did
Added a score display component to the game results page.

## Bounty
Closes #12

## How to Test
1. Run the app locally
2. Complete a game
3. Check that the score appears on the results page
```

## Respond to Feedback

After you open a PR, reviewers (classmates and Mr. B) will look at your code. They might:

- **Approve it** -- you're good to go, it'll get merged.
- **Request changes** -- they'll leave comments explaining what to fix.
- **Ask questions** -- they might want to understand why you did something a certain way.

When you get feedback:

1. Read the comments carefully.
2. Make the requested changes in your local branch.
3. Commit and push again -- the PR updates automatically.
4. Reply to the comments to let reviewers know you addressed their feedback.

Don't take change requests personally. Code review is how everyone gets better, including professional developers. It's part of the process.

## Sea-Worthiness Checklist

Your PR needs to pass this checklist before it can be merged. Go through it before requesting review:

### Code Quality
- [ ] Code runs without errors
- [ ] You tested it yourself and confirmed it works as described in the bounty
- [ ] No leftover debug code (`console.log`, `print("test")`, commented-out experiments)
- [ ] Variable and function names are clear and descriptive
- [ ] No hardcoded values that should be configurable

### Git Hygiene
- [ ] Commit messages clearly describe what each commit does
- [ ] No commits that just say "fix" or "update" or "asdf"
- [ ] You didn't commit files that shouldn't be tracked (`.env`, `node_modules/`, `__pycache__/`, etc.)

### PR Quality
- [ ] PR description explains what you built and why
- [ ] PR links to the bounty issue (e.g., "Closes #7")
- [ ] You've described how a reviewer can test your changes

### Style and Conventions
- [ ] Your code follows the existing patterns in the repo
- [ ] Indentation and formatting are consistent with the rest of the codebase
- [ ] If the repo has a linter or formatter, your code passes it

## Cross-Repo Contributions

Since our projects live in separate repos, here's how to contribute to each one from Shipyard:

### Contributing to `repac`

1. Find a bounty labeled for `repac` (either here in Shipyard or in the [`repac` Issues](https://github.com/riverside-pirates/repac/issues)).
2. Clone or fork the `repac` repo (not Shipyard).
3. Follow the setup instructions in the `repac` README.
4. Do your work, open your PR in the `repac` repo.
5. Reference the Shipyard issue if the bounty was tracked here (e.g., "See riverside-pirates/shipyard#5").

### Contributing to `computer-science-essentials`

1. Find a bounty labeled for `computer-science-essentials`.
2. Clone or fork the [`computer-science-essentials`](https://github.com/riverside-pirates/computer-science-essentials) repo.
3. Follow its README for setup.
4. Do your work and open your PR in that repo.
5. Reference the Shipyard issue if applicable.

### General Rule

**You open your PR in whatever repo your code changes live in.** Shipyard tracks bounties and coordination, but your actual code changes go in the project repo.

## Git Basics Refresher

If you're new to Git, here's a quick reference for the commands you'll use most.

### First-Time Setup

```bash
# Tell Git who you are (use your GitHub email)
git config --global user.name "Your Name"
git config --global user.email "your-email@example.com"
```

### Cloning a Repo

```bash
# Download a repo to your computer
git clone https://github.com/riverside-pirates/<repo-name>.git

# Move into the repo folder
cd <repo-name>
```

### Branching

```bash
# Create a new branch and switch to it
git checkout -b my-branch-name

# Switch back to main
git checkout main

# See all branches
git branch
```

### Making Changes

```bash
# Check what files you've changed
git status

# See the actual changes line by line
git diff

# Stage specific files for commit
git add filename.py

# Stage all changed files
git add .

# Commit with a message
git commit -m "Describe what you changed"
```

### Pushing and Pulling

```bash
# Push your branch to GitHub
git push origin my-branch-name

# Pull the latest changes from main
git checkout main
git pull origin main
```

### Staying Up to Date

If `main` has been updated while you were working on your branch:

```bash
# Switch to main and pull updates
git checkout main
git pull origin main

# Switch back to your branch and merge main into it
git checkout my-branch-name
git merge main
```

If you run into merge conflicts, ask for help. Mr. B or a classmate can walk you through resolving them.

## Collaboration Expectations

We're all learning here, and we're on the same crew. A few ground rules:

### Be Kind
- Give feedback that's helpful, not harsh. Say "this could be clearer if..." instead of "this is wrong."
- Remember that everyone is at a different skill level, and that's fine.
- Celebrate each other's wins. Getting a PR merged is a big deal.

### Ask Questions
- There are no dumb questions. If you don't understand something, ask.
- Comment on the issue, ask in class, or message Mr. B.
- If you see someone else stuck, offer to help.

### Iterate
- Your first attempt doesn't have to be perfect. That's what code review is for.
- Be open to feedback and willing to revise your work.
- Every professional developer goes through review. This is real-world practice.

### Respect the Process
- Don't merge your own PRs. Let a reviewer approve them.
- Don't claim a bounty and then ghost. If you can't finish, say so.
- Keep your commits and PRs focused. One bounty, one PR.

---

Questions about anything in this guide? Ask Mr. B or open an issue in Shipyard. That's what it's here for.
