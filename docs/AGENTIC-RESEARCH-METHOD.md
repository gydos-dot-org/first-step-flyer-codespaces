# General Agentic Markdown Research Method

This method can be reused for work beyond the flyer.

## Minimum repository record

- `README.md`: purpose, setup, and current outcome.
- `AGENTS.md`: stable operating rules for the agent.
- `PLAN.md`: next actions and definition of done.
- `DECISIONS.md`: choices, alternatives, and reasons.
- `docs/PROMPT-RECORD.md`: provenance and history.
- `docs/CURRENT-SPEC.md`: present requirements, separated from history.
- `sessions/published/`: reviewed session reports.
- `assets/originals/`: immutable supplied evidence.
- `src/`: editable canonical source.
- `output/`: generated deliverables, when deliberately published.

## Session loop

1. **Orient:** record the date, Git commit, question, and constraints.
2. **Plan:** state a small testable outcome and how it will be checked.
3. **Act:** let the agent inspect, edit, and run tools within the agreed scope.
4. **Observe:** preserve commands, errors, diffs, renders, and measurements.
5. **Verify:** compare the result against the written specification.
6. **Reflect:** record what worked, what failed, and what remains uncertain.
7. **Commit:** use a focused Git commit with a descriptive message.
8. **Publish:** release only reviewed evidence with secrets and private material
   removed.

## Evidence levels

- **Primary evidence:** original files, measurements, command output, rendered
  artifacts, and Git diffs.
- **Decision evidence:** approved wording, constraints, and dated choices.
- **Interpretation:** explanations and hypotheses; label these as inference.
- **Reproduction instructions:** dependencies and exact commands another person
  can use to repeat the result.

## Research quality rule

Recording every byte is not the same as explaining the work. Preserve raw
evidence privately, but publish a structured account that makes the task,
choices, failures, corrections, and verification understandable to another
person.

