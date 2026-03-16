# Contributing To The Synod

Thanks for considering a contribution.

The Synod is still early-stage. That means the codebase will change quickly, but
it also means small, thoughtful contributions can shape the project in useful
ways.

## Before You Start

Please read:

- [README.md](README.md)
- [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md)
- [SECURITY.md](SECURITY.md)
- [SUPPORT.md](SUPPORT.md)

If your change affects a major design choice, check the ADR folder under
[`docs/adr/`](docs/adr/).

## Good First Contributions

Strong early contributions include:

- documentation clarifications
- issue templates and workflow improvements
- tests and fixtures
- isolated helpers and utilities
- small, well-scoped bug fixes

If you are unsure where to start, look for issues labeled:

- `good first issue`
- `help wanted`
- `docs`
- `tests`

## How To Approach Work

Prefer small, focused pull requests.

As a rough rule:

- one bug fix is better than a broad cleanup
- one helper is better than a mixed refactor
- one documented behavior change is better than several loosely related changes

If a task feels large, split it into smaller pieces or ask for feedback before
building the whole thing.

## Development Expectations

The repo currently spans planning work and implementation scaffolding. As the
project grows, contributors should expect a mix of:

- Rust for Soroban contracts
- TypeScript or similar tooling for off-chain services and SDK work
- Markdown documentation and examples

When making changes:

- keep code and docs consistent
- add or update tests when behavior changes
- avoid mixing unrelated work in one PR
- document assumptions in the PR description

## Pull Requests

Use the pull request template and include:

- the problem being solved
- a concise change summary
- how you tested the change
- any follow-up work that remains

If your change closes an issue, reference it in the PR body.

## Documentation Changes

Please update documentation when you change:

- public behavior
- contributor workflows
- developer setup
- repository structure
- security or support guidance

## Architecture Decisions

For decisions that affect long-term structure or policy, use an ADR instead of
hiding rationale in PR comments.

ADR templates live under [`docs/adr/`](docs/adr/).

## Security Issues

Do not file public issues for suspected vulnerabilities. Follow the reporting
guidance in [SECURITY.md](SECURITY.md).

## Communication

If something is unclear, use the support guidance in [SUPPORT.md](SUPPORT.md)
instead of guessing. Questions are welcome.
