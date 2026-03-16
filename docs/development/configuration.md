# Local Development Configuration

This repository currently uses two broad groups of environment variables:

## Repository Automation

These are used by local helper scripts such as issue publishing and token-based
push workflows:

- `GITHUB_TOKEN`
- `GITHUB_REPO_OWNER`
- `GITHUB_REPO_NAME`
- `GITHUB_API_BASE`

## Local Service Development

These are placeholders for the local development environment expected by future
off-chain services:

- `STELLAR_RPC_URL`
- `SYNOD_BROKER_CONTRACT_ID`
- `SYNOD_NETWORK_PASSPHRASE`
- `LOG_LEVEL`

## How To Use The Example File

1. Copy `.env.example` to `.env`
2. Replace placeholder values with local values
3. Never commit your real `.env` file

The repository `.gitignore` is configured to keep local `.env` files out of
version control.
