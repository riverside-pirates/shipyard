# Specs index

One contract per capability, at `openspec/specs/<capability>/spec.md`. The folders are
flat because the openspec CLI reads exactly one level.

Read in this order:

- `shipyard-model` - the entities (project, bounty, claim, contribution, checklist, label,
  crew member), the GitHub object each one is, the file that defines it, and the keys they
  join on. Also the list of known gaps between the docs and what GitHub holds.
- `bounty-lifecycle` - the five stages a bounty moves through, what GitHub state and
  status label each stage is, and who moves it.
- `sea-worthiness` - what a pull request must show before it merges, and which of the
  three checklists says so.
- `automation` - Shipyard runs none. What the three retired workflows did, what each got
  wrong, and the conditions a future one has to meet.

Check them with `openspec validate --specs --strict`.
