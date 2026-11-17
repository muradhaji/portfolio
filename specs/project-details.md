# Project Details

## Goal

Give each real project a page with what it is, when it was built, where to see it and how it was built.

## Behavior

- **DETAILS-1** `/projects/details/:id` shows the heading "Project Details" (`<h1>`), the project name (`<h2>`) and its description. [test]
- **DETAILS-2** While loading, the page shows a skeleton. [test]
- **DETAILS-3** (removed) If the id does not exist, belongs to a placeholder project, or loading fails, the page redirects to `/projects` (replacing the history entry). Replaced by DETAILS-6 and DETAILS-7.
- **DETAILS-4** Rows are shown only when the project has that data: Timeline (`start – end`), Links, Contributors (`name (ROLE / ROLE)`), Tech stack. [test]
- **DETAILS-5** Link and contributor entries open in a new tab with `rel="noopener noreferrer"`. [test]
- **DETAILS-6** If the id does not exist or belongs to a placeholder project, the page shows the not-found page (NOTFOUND-2) and the URL stays as typed. [test]
- **DETAILS-7** If loading the projects fails, the page redirects to `/projects` (replacing the history entry), as before: the project may exist, so "not found" would be wrong. [test]

## Out of scope

- Screenshots or galleries per project.
