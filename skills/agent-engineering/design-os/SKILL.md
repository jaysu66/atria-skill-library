---
name: design-os
description: Use for frontend or UI design work, design critique, visual feedback, or preflight review. It provides shareable judgment standards, anti-AI-tells rules, technique guidance, feedback protocol, and delivery checks. It does not include personal preferences, customer cases, private references, or local archives.
---

# design-os — Design OS Community Core

This is the portable, shareable core of a design operating system. It helps an
Agent make UI decisions from explicit standards, references, feedback, and
verification instead of producing generic screens. The author's personal
preference archive and private reference library are intentionally excluded.

## Required routing

Read this Skill's `README.md`, then load only what the task needs:

| Situation | Read |
|---|---|
| Any UI implementation or change | `1-judgment/STANDARDS.md`, `1-judgment/AI-TELLS.md`, and the project's `DESIGN.md` |
| Before delivery | `1-judgment/PREFLIGHT.md` |
| New project | `4-workflow/WORKFLOW.md` and `4-workflow/DESIGN-TEMPLATE.md` |
| User says a UI feels wrong | `4-workflow/FEEDBACK-PROTOCOL.md` |
| Choosing interaction or motion techniques | `2-techniques/RECIPE.md`, then the relevant part of `PLAYS.md` |

## Non-negotiables

1. Establish a reference and a one-page `DESIGN.md` before implementing a new
   interface when the project has no design direction.
2. Translate vague visual feedback into observable issues and evidence; do not
   force the user to speak design jargon.
3. Verify the real page before delivery. A screenshot or static mock is not
   proof that the interaction works.
4. Keep personal preferences, customer material, copyrighted reference assets,
   credentials, and machine-specific paths outside this shared Skill.

## Optional references

The included workflow and technique references are portable guidance. If a
project maintains its own authorized reference library, point `DESIGN.md` at
that project-local source instead of assuming one exists here.
