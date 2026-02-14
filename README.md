# The Synod

The Synod is a decentralized oracle network for Soroban focused on resolving
high-ambiguity real-world questions and publishing normalized, auditable
verdicts on-chain.

## Vision

Soroban applications need a trustworthy way to consume off-chain reality when
the answer cannot be reduced to a simple price feed or single API response.
The Synod addresses that gap by combining:

- evidence retrieval from authoritative sources
- multi-agent evaluation and semantic consensus
- compact on-chain settlement for Soroban consumers

## Product Direction

The project is being shaped around a few core principles:

- keep heavy reasoning and retrieval off-chain
- keep Soroban writes compact and deterministic
- treat evidence and auditability as first-class outputs
- phase in stronger trust minimization over time

The initial product direction is aimed at use cases such as:

- prediction market resolution
- public-notice and event-based triggers
- regulatory or compliance event verification

## Planned System Areas

The repository will evolve around these major areas:

- Soroban contracts for request intake, publication, and consumer callbacks
- an off-chain listener and relayer for event ingestion and transaction
  submission
- worker and evaluator agents for retrieval, scoring, and consensus
- evidence storage, explorer APIs, and operator tooling

## Current Status

This repository is currently in the planning stage. The next major step is to
convert the product requirements into a technical design specification and then
scaffold the first implementation slices.
