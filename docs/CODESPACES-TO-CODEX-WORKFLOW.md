# From a ChatGPT Project Record to Codex in GitHub Codespaces

This document records the bridge between receiving the starter ZIP from
ChatGPT and beginning recorded work with Codex. It is a reusable workflow, not
flyer copy.

## What happened in this project

1. Sign in to GitHub and create a new repository.
2. From the repository, choose **Code → Codespaces → Create codespace on main**.
   GitHub opens a browser-hosted VS Code workspace for the repository.
3. In the Explorer, upload the starter ZIP produced from the earlier ChatGPT
   work into the repository root.
4. Open the Codespaces terminal. The keyboard shortcut **Ctrl+`** (Control plus
   backtick) shows or returns focus to the integrated terminal.
5. Expand the ZIP and inspect the imported files:

   ```sh
   unzip first-step-flyer-codespaces-starter.zip
   chmod +x scripts/*.sh
   git status --short
   ```

6. Review the repository record before committing. Then create the initial Git
   snapshot and push it to GitHub:

   ```sh
   git diff --check
   git add .
   git status --short
   git commit -m "Initialize First Step flyer research record"
   git push
   ```

7. Install Codex and authenticate interactively with the ChatGPT account. The
   login happens before recording so credentials and one-time codes are not
   captured:

   ```sh
   curl -fsSL https://chatgpt.com/codex/install.sh | sh
   codex login --device-auth
   codex login status
   ```

8. Start the repository’s terminal recorder, then launch Codex inside the
   recorded shell:

   ```sh
   ./scripts/start-session.sh
   codex
   ```

9. Tell Codex to read `README.md`, `AGENTS.md`, `docs/CURRENT-SPEC.md`,
   `PLAN.md`, and `DECISIONS.md` before changing files. These repository files
   carry decisions across sessions in a way that a single chat prompt cannot.
10. At the end, leave Codex, inspect Git status and the diff, exit the recorded
    shell, and turn the useful evidence into a reviewed report under
    `sessions/published/`. Never commit the raw terminal transcript.

## The reusable formula

**Capture context → import evidence → establish rules → commit a baseline →
authenticate privately → record the work → verify artifacts → publish a
reviewed account.**

The important distinction is that the repository becomes durable shared
memory: source evidence remains intact, requirements are explicit, editable
work and generated outputs are separated, and Git records each accepted
change. The agent conversation helps perform the work, but it is not the only
place where the project’s meaning or history lives.
