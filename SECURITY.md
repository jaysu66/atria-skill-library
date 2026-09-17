# Security policy

Do not report a vulnerability by committing credentials, private logs, screenshots, recordings, or customer data. Use a private GitHub security advisory for the repository after public security reporting is enabled; while the repository remains private, contact the maintainer through the existing private collaboration channel.

## Scope

Security issues include unsafe side effects, hidden credential/session collection, unbounded filesystem or network access, prompt-injection handling that treats external content as user authorization, and packaging that includes private state.

Every Skill must keep high-impact actions behind the user's current authorization. “Local” does not mean private when content may enter a model context or session log.

The verification script detects common packaging mistakes and secret-like values. It is a release gate, not proof that no secret or vulnerability exists. Public release also requires a dedicated current-tree and Git-history secret scan.
