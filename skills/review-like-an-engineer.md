# Review Like an Engineer

Code review is one of the most valuable skills in software development — and one
of the hardest to learn. When someone shares their code with you, they're asking
you to help make it better. That's a responsibility worth taking seriously.

Good reviewers don't just find problems. They help the author grow, catch bugs
before they ship, and make the whole team's code stronger. This guide will help
you review code thoughtfully and constructively.

## When to Use This Skill

- A classmate or teammate asks you to review their pull request
- You're paired up for a code review exercise
- You want to give feedback on someone's project
- You're reviewing your own code before submitting it

## Step-by-Step Process

### 1. Understand What the Code Is Supposed to Do

Before reading a single line of code, read the PR description or ask the author
what they were trying to accomplish. You can't evaluate code without knowing its
goal. Check: is there an issue or task it relates to?

### 2. Read the Diff Carefully

Go through the changes line by line. Don't skim. Look at:
- What was added
- What was removed
- What was changed and why

If something confuses you, that's worth flagging — if you can't follow it, others
might struggle too.

### 3. Check for Bugs and Edge Cases

Think about what could go wrong:
- What happens if the input is empty or unexpected?
- Are there any off-by-one errors in loops?
- Could anything break if the user does something weird?
- Does the code handle errors, or will it crash silently?

### 4. Suggest Improvements (Not Just Complaints)

Finding a problem is only half the job. Offer a suggestion for how to fix it.
Instead of "this is wrong," try "consider using a `for` loop here instead —
it would handle lists of any length."

### 5. Be Constructive and Kind

Remember: there's a person on the other side of this review. They put effort
into their work. Your job is to help, not to show off what you know.

Use language like:
- "What if we tried..."
- "Consider changing this to..."
- "Nice work here — one thought on this section..."
- "I'm curious why you chose this approach. Could you explain?"

### 6. Approve or Request Changes with Clear Reasons

Wrap up your review with a clear outcome:
- **Approve** if the code works and looks good (minor suggestions are fine)
- **Request changes** if there are bugs or significant issues that need fixing

Either way, explain your reasoning. "Looks good!" is okay for small changes but
not helpful for bigger ones. A sentence or two about what you checked and what
stood out goes a long way.

## Example Scenario

A teammate submits a PR that adds a "Dark Mode" button to a webpage. Here's what
to look for:

1. **Understand the goal**: The button should toggle between light and dark
   themes when clicked.
2. **Read the diff**: They added a `<button>` in the HTML, a `.dark-mode` class
   in CSS, and a click handler in JavaScript.
3. **Check for issues**: What happens if the user clicks the button twice quickly?
   Does the toggle work both ways? Is the dark mode class applied to the right
   element?
4. **Suggest improvements**: "The color contrast in dark mode might be hard to
   read — consider testing with a contrast checker tool."
5. **Be kind**: "Great start on this feature. The toggle logic is clean."
6. **Decision**: Approve with a suggestion to test contrast.

## Tips for Better Reviews

- **Start with something positive.** Even if the code needs work, find something
  the author did well. It sets the right tone.
- **Ask questions instead of making demands.** "Have you considered..." lands
  better than "You need to change..."
- **Focus on the code, not the coder.** Say "this function could be simplified"
  rather than "you wrote this wrong."
- **Don't nitpick every small thing.** If the logic is sound, let minor style
  differences go — save your energy for what matters.
- **Review your own code first.** Before asking someone else to review your PR,
  read through it yourself. You'll catch half the issues on your own.

Every good review makes the crew stronger. Sail on, shipmate.
