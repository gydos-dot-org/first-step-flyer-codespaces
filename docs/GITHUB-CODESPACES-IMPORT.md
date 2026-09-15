# Import This Starter into GitHub Codespaces

## Browser-only route

1. On GitHub, create a new repository. Keep it private during setup and review;
   it can be made public later.
2. Open the repository and choose **Code → Codespaces → Create codespace**.
3. In the browser-based VS Code file explorer, upload
   `first-step-flyer-codespaces-starter.zip` to the repository root.
4. In the Codespaces terminal, run:

```sh
unzip first-step-flyer-codespaces-starter.zip
chmod +x scripts/*.sh
git status --short
```

5. Inspect the files before the first commit:

```sh
git diff --check
git add .
git status --short
git commit -m "Initialize First Step flyer research record"
git push
```

6. Install and authenticate Codex:

```sh
curl -fsSL https://chatgpt.com/codex/install.sh | sh
codex login --device-auth
codex login status
```

7. Start the recording immediately after login verification:

```sh
./scripts/start-session.sh
```

8. Inside the newly recorded shell, run `codex` and give it the orientation
   prompt in `CODESPACES-RECORDING.md`.

## Why start private

The repository includes contact information and historical drafts because they
are part of the supplied flyer record. A private first pass gives the project
owner a chance to decide whether every phone number, photograph, and raw asset
is appropriate for permanent public distribution.

