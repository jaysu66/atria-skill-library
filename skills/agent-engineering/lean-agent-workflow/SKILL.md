---
name: lean-agent-workflow
description: Use when starting or resuming software work that needs a real user-visible slice and reliable critical-path evidence. Keep planning and verification short; defer broad regression until a coherent block or release.
---

# Lean Agent Workflow

Use this skill for a product or feature delivery task. Its job is to keep the work real and recoverable without turning every small edit into a documentation project.

## 1. Set one target

- Read the repository instructions, README, package/build files, start commands, and any existing `.agent-flow` record.
- Write one short target: user outcome, boundary, risk level, and done condition. Reuse the existing project records; do not create a competing system.
- Ask only when the answer can change scope, architecture, permissions, data ownership, an external side effect, or the acceptance target. Choose reversible defaults and record them briefly.
- Do not reopen settled cosmetic decisions.

## 2. Implement a vertical slice

Keep the user action, state change, persistence, error state, and feedback together. Avoid building disconnected mock screens.

| Level | Use for | Minimum check |
| --- | --- | --- |
| S0 | copy, style, static presentation | focused build or screen check |
| S1 | local component, read-only query, reversible refactor | affected function and screen |
| S2 | form, state transition, write, permission, API integration | happy path plus one failure/recovery path |
| S3 | payment, deletion, publication, migration, cross-tenant access, or material data loss | critical path, permission/side-effect proof, and fresh review |

Use a plan or subagent only when the change genuinely needs independent work or architecture review. Do not create a formal plan for a small edit.

## 3. Verify by risk

Run the smallest check that can catch the current risk.

- S0: focused build or manual screen check.
- S1: focused unit/integration check and the affected screen when there is real regression risk.
- S2: one real happy path and one representative failure or recovery path.
- S3: complete critical path plus the relevant permission, data-boundary, or external-side-effect proof.

Always verify these handoffs immediately when they are changed: save and recovery, account/project scope, version and asset binding, provider task state and budget, and export or other irreversible writes. Defer cross-module and full-suite regression until a coherent product block or release. Never run a broad suite only to increase a coverage number.

For external services, keep deterministic adapter checks separate from real-service checks. A mock proves local orchestration; it does not prove provider quality, quota, billing, or publication.

## 4. Record one compact result

Append a short entry to the project's existing task or QA record:

```text
Target: what the user can do now
Changed: files or behavior
Checks: command, browser/API step, or artifact
Status: PASS | PARTIAL | FAIL | NOT TESTED
Boundary/next: the important remaining limit or next slice
```

Link evidence only when it proves a decision. Keep historical evidence and correct later entries explicitly; do not overwrite a previous result. Do not claim completion from a build, preview, mock, lecture, or agent report alone.

## Critical completion gate

A slice may be called complete only when the user can perform the target action, the selected failure or recovery path is understood, and the required state survives the relevant refresh or boundary check. Any open S3 decision or unverified external dependency keeps the slice `PARTIAL` or `NOT TESTED`.

## Stop conditions

Stop and report when a required high-impact decision, credential, model, quota, dataset, or platform is unavailable; when an irreversible/external action lacks authorization; or when the same concrete failure remains after three evidence-backed repair attempts. Keep independent low-risk work moving when one dependency is blocked.

For acceptance-row format, read [references/acceptance-matrix.md](references/acceptance-matrix.md). For compact browser/API evidence, read [references/e2e-evidence.md](references/e2e-evidence.md).
