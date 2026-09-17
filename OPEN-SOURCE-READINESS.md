# Open-source readiness

Status: **PUBLIC RELEASE CANDIDATE — VISIBILITY STILL PRIVATE** as of 2026-09-17.

## Included in the first candidate

- `os`
- `compass`
- `design-os` Community Core with optional official Refero MCP guidance
- repository documentation, version manifest, and verifier

The local ignored `incubator/`, private Refero-derived archive, and every real project's state, mailbox, lock, snapshot, customer context, private reference archive, or credential are outside the candidate.

## Passed locally

- all three public Skill directories contain `SKILL.md` and `README.md`;
- frontmatter names match directory ids;
- the repository verifier blocks common secret files, private-state directories, archives, binaries, and maintainer absolute paths;
- the public candidate can be generated from Git-tracked files only.
- Apache-2.0, attribution, provenance, third-party, trademark, security, contribution, and maintenance documents are present.

## Blocking public visibility

- current-tree and full-history secret scans need to run on the final licensed commit;
- installation and invocation should be exercised in at least two target Agent hosts from a fresh clone;
- GitHub Actions, security settings, and issue templates need to be verified on the pushed candidate;
- the maintainer must make the final visibility decision after reviewing the candidate commit hash.

Do not change repository visibility until every blocker is closed. The Refero-derived archive cannot be added without separate written authorization from Refero.
