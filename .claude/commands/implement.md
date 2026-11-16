---
description: Implement an approved spec change, test it and verify it
argument-hint: <spec file or behavior IDs>
---

Implement the approved spec change: $ARGUMENTS

1. Read `CLAUDE.md`, `specs/README.md` and the spec. If any behavior in scope still has open questions, stop and ask me.
2. Implement only what the spec describes, following `CLAUDE.md`.
3. For every `[test]` behavior in scope, add or update a test in `src/__tests__/` whose name starts with the behavior ID.
4. Remove `(proposed)` from the implemented behaviors.
5. Run `npm run check` (format, lint, tests, build) and fix anything it reports.
6. Check every `[manual]` behavior in scope in the browser (light and dark theme, desktop and phone width where relevant). Also check that behaviors next to the change still work, especially styles that share selectors with changed code.
7. Report what changed, the result of `npm run check`, and what you checked in the browser. Do not commit unless I ask.
