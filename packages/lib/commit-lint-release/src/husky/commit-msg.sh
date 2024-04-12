#!/bin/bash
. "$(dirname "$0")/_/husky.sh"

pnpm commitlint --edit $1
