---
description: Commit the current change on its branch, push it and open a pull request
argument-hint: <optional PR title>
---

Open a pull request for the current change: $ARGUMENTS

1. If on `main`, first create a branch for the change from up-to-date `main` (`data/…`, `feat/…`, `fix/…`, `chore/…` or `docs/…`) and carry the uncommitted changes onto it. Never commit on `main`.
2. Run `npm run check`. If anything fails, stop and show me the error.
3. Commit with a short message and push the branch.
4. Open a PR into `main` with `gh pr create`. In the body: the kind of change, what changed, spec behavior IDs touched (for feature changes), and what was checked (`npm run check`, browser).
5. Report the PR link, the CI result and the Vercel preview URL once they're available. Do not merge unless I ask; when I do, squash-merge.
