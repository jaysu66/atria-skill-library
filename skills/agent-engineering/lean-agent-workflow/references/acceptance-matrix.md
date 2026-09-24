# Acceptance matrix

Use this file as a small, traceable control surface. It is not a request to enumerate every imaginable test.

## Row schema

```markdown
| ID | ReqID | Source | Risk | Scenario | Given | When | Then | Evidence | Status |
| AC-R01-01 | R01 | USER-STATED | S2 | create result | ... | ... | ... | ... | OPEN |
```

`Source` is one of `USER-STATED`, `AI-DERIVED`, `OPEN`, or `ASSUMPTION`. `Status` is one of `OPEN`, `PASS`, `PARTIAL`, `FAIL`, or `NOT TESTED`.

Every row must describe an observable result. Avoid rows such as “code is clean” or “system is robust” unless they are tied to a concrete command and threshold.

## Derivation rule

For each requirement, derive at most the criteria that cover:

1. one main user outcome;
2. one failure or recovery that could strand the user;
3. one data or permission boundary if the requirement touches it;
4. one delivery or operational condition if the result depends on it.

Add more only when a real defect, explicit requirement, security boundary, or irreversible side effect justifies it. Record the reason in the row or in `decisions.md`.

## Scenario selection

The default release set is:

- P0 happy path for each critical capability;
- one representative error or recovery path per stateful P0 flow;
- one permission/data boundary per relevant role boundary;
- one real external side effect per S3 integration;
- one browser pass for the main desktop viewport and, where layout is relevant, one narrow viewport.

Do not multiply scenarios by every browser, screen size, record type, or API permutation unless the matrix identifies a distinct risk.

## Evidence labels

- `REAL`: exercised against the actual service or persisted data.
- `MOCK`: deterministic substitute; proves orchestration only.
- `PREVIEW`: visual or generated preview; does not prove final export/publication.
- `DEMO`: a demonstration or lecture claim; not product evidence.
- `NOT TESTED`: prerequisite or environment was unavailable.
