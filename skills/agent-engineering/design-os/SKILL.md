---
name: design-os
description: Use for frontend or UI design work, design critique, reference research, visual feedback, or preflight review. It provides judgment standards, optional Refero research guidance, technique guidance, feedback protocol, and delivery checks. It excludes private preferences, customer cases, copied third-party archives, and local state.
---

# design-os — Design OS Community Core

This is the portable, shareable core of a design operating system. It helps an
Agent make UI decisions from explicit standards, references, feedback, and
verification instead of producing generic screens. It can use the user's own
official Refero connection as an optional research source; no Refero dataset or
private preference archive is bundled with the Skill.

## Required routing

Read this Skill's `README.md`, then load only what the task needs:

| Situation | Read |
|---|---|
| Any UI implementation or change | `1-judgment/STANDARDS.md`, `1-judgment/AI-TELLS.md`, and the project's `DESIGN.md` |
| Before delivery | `1-judgment/PREFLIGHT.md` |
| New project | `4-workflow/WORKFLOW.md` and `4-workflow/DESIGN-TEMPLATE.md` |
| Use Refero as a research source | `3-references/REFERO.md`, then use the user's official connection |
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
   credentials, and machine-specific paths outside this shared Skill. Do not
   turn third-party research services into a redistributed archive.

## Optional references

The included workflow and techniques are portable guidance. Refero is an
optional external source governed by its own terms. If a project maintains its
own authorized reference library, keep it project-local and out of this Skill.
