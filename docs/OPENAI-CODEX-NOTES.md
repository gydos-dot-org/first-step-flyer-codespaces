# Codex Access Notes

Checked against official OpenAI documentation on 2026-09-15.

## Account boundary

Codex CLI supports two different authentication paths:

- ChatGPT sign-in for subscription access.
- API-key sign-in for usage-based access.

For this interactive GitHub Codespaces project, use the ChatGPT Plus sign-in.
General OpenAI API billing is not required merely to run an interactive Codex
CLI session under the plan’s available usage allowance.

## Remote login

After installing Codex in the Codespace, use:

```sh
codex login --device-auth
codex login status
```

The device-code flow is designed for remote or headless environments in which
the ordinary localhost browser callback may not work.

## Official references

- [OpenAI authentication documentation](https://learn.chatgpt.com/docs/auth)
- [Codex CLI documentation](https://learn.chatgpt.com/docs/codex/cli)
- [ChatGPT Work and Codex pricing](https://learn.chatgpt.com/docs/pricing)

## Security boundary

The Codex credential cache is equivalent to a password. It must not be copied
into the repository, pasted into a session report, or included in a transcript
that is published.

