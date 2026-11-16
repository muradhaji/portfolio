---
description: Change site content (projects, jobs, text, links, counters) without touching code
argument-hint: <what data to change>
---

Make this data change: $ARGUMENTS

1. Edit only the data files: `src/helpers/constants.js` and `public/projects/projects.json`. Keep the existing shape of each entry.
2. Follow the text rules in `CLAUDE.md` (apostrophes, en dash for ranges, heading and label case).
3. If the change needs a code or spec change (a new field, a new section, different behavior), stop and tell me instead of changing code.
4. Run `npm run check`. Tests read from the data files, so a failure usually means the data shape is wrong.
5. Show me the exact data changes. Do not commit unless I ask.
