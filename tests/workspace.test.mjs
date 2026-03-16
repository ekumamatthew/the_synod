import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";

test("top-level workspace directories exist", () => {
  for (const path of ["contracts", "services", "sdk", "examples", "docs"]) {
    assert.equal(existsSync(path), true, `${path} should exist`);
  }
});

test(".env.example documents the expected keys", () => {
  const contents = readFileSync(".env.example", "utf8");

  for (const key of [
    "GITHUB_TOKEN",
    "GITHUB_REPO_OWNER",
    "GITHUB_REPO_NAME",
    "STELLAR_RPC_URL",
    "SYNOD_NETWORK_PASSPHRASE"
  ]) {
    assert.match(contents, new RegExp(`^${key}=`, "m"));
  }
});
