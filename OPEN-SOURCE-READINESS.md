# Open-source readiness

Status: **PRIVATE REVIEW ONLY** as of 2026-09-15.

## Included in the first candidate

- `os`
- `compass`
- `design-os` Community Core
- repository documentation, version manifest, and verifier

The local ignored `incubator/` folder and every real project's state, mailbox, lock, snapshot, customer context, private reference archive, or credential are outside the candidate.

## Passed locally

- all three public Skill directories contain `SKILL.md` and `README.md`;
- frontmatter names match directory ids;
- the repository verifier blocks common secret files, private-state directories, archives, binaries, and maintainer absolute paths;
- the public candidate can be generated from Git-tracked files only.

## Blocking public visibility

- no repository `LICENSE` has been selected;
- item-level authorship/provenance approval is not yet recorded as a signed maintainer decision;
- current-tree and full-history secret scans need to run on the final licensed commit;
- installation and invocation should be exercised in at least two target Agent hosts from a fresh clone;
- GitHub security settings, issue templates, and final public-facing ownership/trademark wording need maintainer approval.

Do not change repository visibility until every blocker is closed. A clean scan or private GitHub repository alone is not approval to publish.
