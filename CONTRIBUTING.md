# Contributing

This repository is preparing for public contribution but is still private.

Before adding a Skill:

1. Put it under `skills/<domain>/<skill-name>/` with a complete `SKILL.md` and a user-facing `README.md`.
2. Record purpose, dependencies, source, authorship, and redistribution status in `manifests/skills.json`.
3. Keep private project state, customer examples, credentials, recordings, login sessions, generated outputs, proprietary references, and machine-specific paths out of the repository.
4. Link third-party material instead of copying it unless its license and required notices are documented.
5. Run `npm test` and the current Skill validator before review.

Use `incubator/` only for local evaluation. It is Git-ignored and is not a shortcut around provenance review. Move a candidate into `skills/` only after its source and license are recorded.

Changes should be small enough to review Skill intent, safety boundaries, and observable behavior. Do not make a Skill claim access, configuration, or acceptance that it has not actually verified.
