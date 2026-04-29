# Debug Systematically

Something's broken. The page is blank, the output is wrong, or nothing happens
when you click the button. Don't panic — every developer hits bugs constantly.
The difference between a frustrated beginner and a confident coder isn't avoiding
bugs; it's knowing how to hunt them down.

This guide gives you a repeatable process for finding and fixing bugs instead of
randomly changing things and hoping for the best.

## When to Use This Skill

- Your code doesn't do what you expected
- You see an error message you don't understand
- Something that was working just stopped working
- Your page is blank or shows unexpected results

## Step-by-Step Process

### 1. Read the Error Message Carefully

Error messages are clues, not punishments. Read the whole thing. Look for:
- A **file name** and **line number** — that's where the problem was detected
- A **description** of what went wrong (e.g., "undefined is not a function")
- A **stack trace** showing the path the code took to get there

If there's no error message, move to step 2 and look for one in the browser
console (right-click > Inspect > Console tab).

### 2. Reproduce the Bug

Before you fix anything, make sure you can make the bug happen again on purpose.
What exact steps cause it? If you can reproduce it reliably, you can test whether
your fix actually works.

### 3. Isolate — Narrow Down Where It Happens

Don't stare at all your code at once. Figure out *where* the problem lives:
- Comment out sections of code to see when the bug disappears
- Add `console.log()` statements to check which parts are running
- Check: is the problem in your HTML structure, your CSS styling, or your
  JavaScript logic?

### 4. Hypothesize — Form a Theory

Based on what you've found, take a guess. Say it out loud or write it down:
"I think the bug happens because my function runs before the page loads."
Having a specific theory makes the next step much easier.

### 5. Test Your Theory

Make **one small change** that would confirm or disprove your theory. Run the
code again. Did the behavior change? If yes, you're on the right track. If not,
go back to step 3 and form a new theory.

### 6. Fix and Verify

Once you understand the cause, make your fix. Then test everything — not just
the part that was broken. Sometimes a fix in one place creates a new problem
somewhere else.

## Example Scenario

A student's webpage shows a completely blank screen. Here's how to work through it:

1. **Read the error**: Open the browser console. It says: `Uncaught SyntaxError:
   Unexpected end of input` on line 14 of `index.html`.
2. **Reproduce**: Refresh the page — still blank. Consistent.
3. **Isolate**: Look at line 14 and the area around it. There's a `<div>` that
   opens on line 10 but never closes.
4. **Hypothesize**: "The missing `</div>` is breaking the HTML structure, so the
   browser can't render the page."
5. **Test**: Add `</div>` after the content block.
6. **Fix and verify**: The page renders. Check the rest of the page to make sure
   nothing else looks off.

## Tips for Better Debugging

- **Use `console.log()` generously.** Print variable values, print "got here"
  messages, print everything. You can always remove them later.
- **Check the browser dev tools.** The Console and Elements tabs are your best
  friends. Get comfortable opening them.
- **Don't change five things at once.** Change one thing, test, then change the
  next. Otherwise you won't know which change actually fixed it.
- **Take a break if you're stuck.** Seriously. Walk away for five minutes. Fresh
  eyes catch things tired eyes miss.
- **Rubber duck it.** Explain the problem out loud — to a friend, a teacher, or
  a literal rubber duck. You'll often find the answer mid-sentence.

Fair winds, debugger. Every bug you squash makes you a sharper coder.
