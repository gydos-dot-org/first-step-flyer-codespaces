#!/bin/sh

set -eu

script_dir=$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)
project_dir=$(CDPATH= cd -- "$script_dir/.." && pwd)
raw_dir="$project_dir/sessions/raw"
started_utc=$(date -u +%Y%m%dT%H%M%SZ)
log_path="$raw_dir/$started_utc-terminal.log"

if ! command -v script >/dev/null 2>&1; then
    printf '%s\n' "The Linux 'script' command is required (normally supplied by util-linux)." >&2
    exit 1
fi

mkdir -p "$raw_dir"

printf '%s\n' "Starting a recorded shell."
printf 'Raw transcript: %s\n' "$log_path"
printf '%s\n' "This file is ignored by Git; review and redact it before publication."
printf '%s\n' "Run 'codex' inside the new shell. Type 'exit' after leaving Codex to stop recording."

cd "$project_dir"
exec script -q -f "$log_path"

