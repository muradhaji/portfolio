---
description: Change site content (projects, jobs, text, links, counters) without touching code
argument-hint: <what data to change>
---

Make this data change: $ARGUMENTS

1. If not already on a branch for this change, create `data/<short-topic>` from up-to-date `main`. Never edit on `main`.
2. Edit only the data files (`src/helpers/constants.js`, `public/projects/projects.json`) and data assets (project images in `public/projects/`, `public/resume.pdf`). Keep the existing shape of each entry. Your name, title and intro summary are `PROFILE` in `constants.js`; if the name or title changes, also update the CV file name in the `Content-Disposition` header in `vercel.json` (BUILD-13 fails otherwise). The avatar is `public/avatar.jpeg`. `projects.json` holds only real projects; the grid adds placeholder cards by itself (PDATA-3), so adding a project never means editing placeholders.
3. Follow the text rules in `CLAUDE.md` (apostrophes, en dash for ranges, heading and label case).
4. If the change needs a code or spec change (a new field, a new section, different behavior), stop and tell me instead of changing code.
5. Run `npm run check`. Tests read from the data files, so a failure usually means the data shape is wrong.
6. Show me the exact data changes. Do not commit unless I ask; when I do, open a PR with `/portfolio-pr`.
