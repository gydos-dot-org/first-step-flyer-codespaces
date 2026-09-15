# Recording Codex Work in GitHub Codespaces

## Short answer

Yes: start the session recorder immediately after Codex authentication and
before project work. Do not record the login itself.

## First-time setup

From the repository’s Codespaces terminal:

```sh
curl -fsSL https://chatgpt.com/codex/install.sh | sh
codex login --device-auth
codex login status
chmod +x scripts/*.sh
```

Device-code login is appropriate for a remote/browser-hosted terminal. Complete
the one-time code in the browser. Do not copy any Codex credential cache into
the repository.

## Start a recorded work session

```sh
./scripts/start-session.sh
```

The script creates a timestamped raw transcript and opens a new shell. The
first commands inside that shell can be:

```sh
git status --short
git rev-parse --short HEAD
codex
```

At the start of Codex, ask it to read the repository record before changing the
flyer:

```text
Read README.md, AGENTS.md, docs/PROMPT-RECORD.md,
docs/CURRENT-SPEC.md, PLAN.md, and DECISIONS.md. Summarize the current state,
identify blockers, and do not modify files until the changed entrance
information has been supplied and confirmed.
```

## End a session

1. Leave Codex normally.
2. In the recorded shell, run `git status --short` and `git diff --stat`.
3. Type `exit` or press Ctrl-D to end the recorded shell.
4. Complete a copy of `sessions/published/TEMPLATE.md`.
5. Review the raw transcript locally for secrets and private material.
6. Commit the reviewed report, relevant source changes, and rendered outputs.

## What the recorder captures

The standard Linux `script` program records what is displayed in that shell,
including Codex prompts and responses, ordinary commands, errors, and terminal
control characters. It does not create a clean scholarly record by itself.

Git supplies the exact file history. The public Markdown report supplies the
human explanation. The raw transcript supplies private evidence when something
later needs to be checked.

## What not to publish

Never commit an unreviewed transcript. It can contain:

- authentication output or one-time codes;
- secrets printed by commands;
- private filesystem paths and environment variables;
- names, phone numbers, or personal narrative not intended for publication;
- pasted copyrighted or confidential source material;
- terminal escape sequences that make the file difficult to review.

The repository ignores `sessions/raw/` by default. A deliberate `git add -f`
would bypass that protection; do not use it.

## Recovery and continuity

A raw transcript is not the only way to continue work. Preserve progress with
small Git commits and a current `PLAN.md`. If the Codex session is still
available, the CLI may also offer session-resume functionality, but the
repository record must remain sufficient to restart the work independently of
any one chat session.

