# Install and update

## Download

Before publication, clone the private release candidate through an authorized account. After publication, use a tagged release rather than an arbitrary branch snapshot. Verify the release tag and published SHA-256 before installing.

## Install one Skill

Copy the complete selected directory from `skills/<domain>/<skill-name>/` into the Skill root supported by the Agent host. Keep the directory name unchanged. Do not merge only `SKILL.md`; supporting `references/`, `scripts/`, and `assets/` are part of that Skill.

Typical roots vary by host. Prefer a host's documented shared Skill root when multiple Agents should use the same copy. Do not install real project memory, sample credentials, or the local `incubator/` folder.

## Verify

From the repository root:

```powershell
npm test
```

Then ask the target Agent to list or load the installed Skill. For `os`, run its read-only doctor in a disposable Git project before using initialization or write commands. For `design-os` and `compass`, verify that the Agent can load the bundled supporting files rather than only the entrypoint.

`design-os` does not bundle Refero data or credentials. Refero research requires
the user's own official account and MCP authorization; the Skill remains usable
without Refero.

## Update

1. Read `CHANGELOG.md` and compare the installed Skill with the new tagged version.
2. Back up local modifications outside the Skill directory; installed copies should not become personal forks silently.
3. Replace the entire Skill directory with the matching release directory.
4. Rerun repository validation and one representative host invocation.

Do not mix files from different releases. Keep project-generated state outside the installed Skill directory.

## Roll back and uninstall

Restore the previous complete Skill directory from its tagged release and verify it again. Uninstall by removing only the exact installed Skill directory. This does not remove state that a Skill created inside user projects; project data needs a separate, explicit cleanup decision.
