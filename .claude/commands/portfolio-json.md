---
description: Update public/portfolio.json so it matches the site's current data
argument-hint: [what changed, optional]
---

Bring `public/portfolio.json` (served at `/portfolio.json` for other projects, see BUILD-14 in `specs/build-tooling.md`) in line with the site's data. Context: $ARGUMENTS

1. Work on the current change's branch; never edit on `main`.
2. Update `public/portfolio.json` from the sources, keeping its shape:
   - `basics.name`, `title`, `summary`: `PROFILE` in `src/helpers/constants.js`.
   - `basics.email` and `phone`: the email and WhatsApp links in `SOCIAL_LINKS`; `location` stays as is unless I give a new one.
   - `social`: `SOCIAL_LINKS`, in order, as `{ id, label, url }` (id = the key).
   - `about`, `counters`, `services`: `ABOUT_ITEMS`, `COUNTERS`, `SERVICES` (title and description only).
   - `experience`: one entry per role in `EXPERIENCE` as `{ id, organization, role, start, end }`.
   - `education`: one entry per item in `EDUCATION` as `{ id, organization, degree?, field, start, end }`; a label like `Azerbaijan Technical University | Bachelor` splits into organization and degree.
   - `skills`: `MY_SKILLS` as `{ id, group, items }`, the group in Title Case (`UI & Design`).
   - `projects`: every project in `public/projects/projects.json`, copied as is, with `coverHorizontal` and `coverVertical` made absolute. Placeholders aren't data, so they never appear here.
   - Dates become `YYYY-MM`; `Present` becomes `null`.
3. Ids: keep existing ids; a new entry gets one made from its name (lowercase letters, digits and dashes, unique in its list, for example `acme-corp`).
4. URLs stay absolute (`https://muradhajiyev.vercel.app/...`). The avatar is `public/avatar.jpeg` (the site uses the same file); replace that file to change it.
5. Set `updated` to today (`YYYY-MM-DD`). Raise `version` only if a field is renamed or removed.
6. Run `npm run check`; `portfolioJson.test.jsx` fails if the file disagrees with the site.
7. Show me the diff of `public/portfolio.json`. Do not commit unless I ask.
