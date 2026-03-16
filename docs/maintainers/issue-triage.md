# Issue Triage Guide

This guide defines a simple label taxonomy and triage flow for The Synod.

## Goals

The label system should help maintainers and contributors:

- understand what an issue is about
- estimate how large it is
- see whether it is a good fit for new contributors
- identify urgency without overcomplicating triage

## Label Groups

### Area Labels

Use one or more of:

- `area/contracts`
- `area/services`
- `area/sdk`
- `area/api`
- `area/explorer`
- `area/worker`
- `area/consensus`
- `area/ops`
- `area/security`
- `area/community`
- `area/docs`
- `area/tooling`

### Type Labels

Use one primary type:

- `type/bug`
- `type/feature`
- `type/docs`
- `type/chore`
- `type/test`
- `type/example`
- `type/question`

### Size Labels

Use one estimate:

- `size/xs` for a small self-contained change
- `size/s` for a focused change that may touch a few files
- `size/m` for a change likely to need careful review or several related files
- `size/l` for work that should probably be split before implementation

### Contributor Level Labels

Use when helpful:

- `level/starter`
- `level/intermediate`
- `level/advanced`

### Priority Labels

Use only when needed:

- `priority/high`
- `priority/medium`
- `priority/low`

### Community Guidance Labels

Use sparingly:

- `good first issue`
- `help wanted`
- `blocked`

## When To Use `good first issue`

Use `good first issue` only when all of the following are true:

- the scope is small and well-defined
- the issue has enough context for a newcomer to start
- the maintainer team expects the work to be reviewable without large design
  debates
- the issue does not require repository-internal context that is not documented

Good candidates:

- docs improvements
- small helpers
- fixtures
- templates
- isolated tests

## When To Use `help wanted`

Use `help wanted` when:

- the issue is ready for external contribution
- maintainers genuinely want outside help
- the work is not blocked on private context or missing decisions

## Triage Flow

When a new issue arrives:

1. Confirm whether it is a bug, feature, question, or support request
2. Apply one primary `type/*` label
3. Apply the most relevant `area/*` label
4. Estimate size honestly; split large work rather than labeling everything
   `size/l`
5. Add contributor-level labels only if they help route the work
6. Mark duplicates, missing context, or security-sensitive issues quickly

## Examples

- A README clarification:
  - `area/docs`, `type/docs`, `size/xs`, `level/starter`
- A new contract helper:
  - `area/contracts`, `type/feature`, `size/s`, `level/intermediate`
- A malformed API response:
  - `area/api`, `type/bug`, `size/s`
