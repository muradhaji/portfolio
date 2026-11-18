---
description: Draft or update a spec for a feature or behavior change, without writing code
argument-hint: <what should change>
---

Draft a spec change for: $ARGUMENTS

1. Create a `feat/<short-topic>` (or `fix/<short-topic>`) branch from up-to-date `main`. The spec change and its implementation go in the same PR.
2. Read `specs/README.md` and every spec the change touches.
3. Update the relevant spec (or create a new one from the template in `specs/README.md` and add it to the table there). Mark each new or changed behavior with `(proposed)` and give it the next free ID and a `[test]` or `[manual]` tag.
4. List anything unclear under "Open questions" instead of guessing.
5. Do not change code or tests.
6. Show me the proposed behaviors and open questions, and ask me to approve or edit them.
