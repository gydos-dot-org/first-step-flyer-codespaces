# Agent Instructions

These instructions apply to this repository and are designed to be reusable for
future agentic research projects.

## Operating method

1. Read `README.md`, `docs/CURRENT-SPEC.md`, `PLAN.md`, and `DECISIONS.md` before
   changing project files.
2. State the intended outcome and the verification method before implementing a
   material change.
3. Treat supplied source files as evidence. Never overwrite anything under
   `assets/originals/` or `assets/drafts/`.
4. Put editable work in a new `src/` directory and generated deliverables in a
   new `output/` directory.
5. Make changes in small, inspectable increments. Record material design or
   factual choices in `DECISIONS.md`.
6. Distinguish facts supplied by the project owner from inferences. Do not
   silently invent or update addresses, routes, transit details, prices,
   accessibility directions, dates, or contact information.
7. Before a public commit, inspect `git diff --check`, `git status --short`, and
   the rendered artifact. Never commit secrets or raw terminal transcripts.
8. Prefer POSIX `sh` for repository scripts unless a documented dependency
   requires another language.

## Flyer-specific rules

- The finished flyer is portrait US Letter: 8.5 by 11 inches.
- Preserve a neutral dark-gray border and strong print contrast.
- Use a deterministic, editable layout such as SVG or HTML/CSS as the canonical
  source. Raster drafts are visual references, not editable truth.
- Export both a print-ready PDF and a 300-DPI PNG (2550 by 3300 pixels).
- Keep the entrance photograph visually useful; overlays must not hide the door
  or its identifying physical context.
- Preserve the exact approved wording and punctuation in
  `docs/CURRENT-SPEC.md`. Ask before making copy edits.
- The entrance information is known to have changed. Do not publish a corrected
  flyer until the project owner supplies or confirms the new directions.
- After rendering, inspect the full page and enlarged crops of all small text.
  Confirm that no text is clipped, warped, misspelled, or absorbed into an
  image-generation artifact.

## Session evidence

- Raw recordings belong in `sessions/raw/`; this directory is ignored by Git.
- Public session reports belong in `sessions/published/` and must follow the
  supplied template.
- A public report should record the question, inputs, commands, decisions,
  outputs, validation, mistakes, corrections, and next step.
- Never publish `.codex/auth.json`, API keys, access tokens, one-time login
  codes, cookies, environment secrets, or unreviewed command output.

