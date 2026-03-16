# Reviewing External Contributions

This guide is for maintainers reviewing work from contributors.

## Goals

Reviews should protect project quality while keeping the contribution process
respectful, predictable, and useful.

## Review Tone

Aim to be:

- direct
- specific
- respectful
- technically grounded

Prefer comments that explain:

- what is wrong
- why it matters
- what kind of change would resolve it

Avoid vague comments like "needs work" without details.

## Response Expectations

When possible:

- acknowledge new PRs in a reasonable time
- tell contributors early if a change is out of scope
- surface blocking issues before optional refinements

If a PR cannot be merged, explain why clearly.

## First-Time Contributors

For first-time contributors:

- assume some repo conventions may still be unfamiliar
- point to the relevant doc or example when asking for changes
- avoid expecting hidden project knowledge
- thank them for the concrete work, even when changes are needed

## Keep Feedback Actionable

Separate comments into:

- blockers required for merge
- strong recommendations
- optional follow-up ideas

This helps contributors understand what must change now versus what can be a
future issue.

## Scope Control

If a PR is trying to do too much:

- say so early
- suggest a smaller mergeable slice
- open or reference follow-up issues where helpful

Do not ask contributors to keep expanding a PR indefinitely.

## Incomplete Or Abandoned Work

If a contribution stalls:

- leave a clear note about what is missing
- give the contributor a reasonable chance to respond
- decide whether to close, take over, or split the remaining work

If maintainers continue the work, preserve the contributor's credit where
possible.

## Disagreement

Technical disagreement is expected. Handle it by:

- focusing on requirements and tradeoffs
- asking for clarification when needed
- avoiding personal framing

If a decision is architectural, prefer recording it in an ADR rather than
repeating the debate in multiple PRs.
