# Workflow Guide

How this portfolio is built, tested and changed: the spec-driven workflow, the automation around it, and how to work day to day.

## What changed, in short

The project moved from "write code, check by hand" to **spec-driven development (SDD) with automated checks**:

1. **Specs** in `specs/` describe what the site does, behavior by behavior.
2. **Tests** in `src/__tests__/` prove those behaviors automatically.
3. **Automation** checks every change: formatting and lint on commit, the full check on every pull request (GitHub CI), and weekly dependency updates (Dependabot).
4. **Pull requests only**: every change goes through a PR. `main` accepts a merge only after CI and the Vercel preview build pass, and Vercel deploys `main` to production.
5. **Claude commands** (`/spec`, `/implement`, `/data-change`, `/pr`, `/check`) run the workflow for you, following the rules in `CLAUDE.md`.

Commits on `main` that introduced this:

| Commit    | What                                                                              |
| --------- | --------------------------------------------------------------------------------- |
| `ee488a9` | `CLAUDE.md` rules and code aligned with them                                      |
| `9e5dff4` | Specs, tests, Prettier, pre-commit hook, CI, Dependabot, Claude commands and hook |

## How to work from now on

Every change is one of two kinds. Decide which one first. Both end the same way: a pull request (see [Branches and pull requests](#branches-and-pull-requests)).

### 1. Data change: just ask

Examples: add a project, a job, a skill, a link; change a sentence or a counter.

- Where the data lives:
  - `public/projects/projects.json`: projects (cards and details pages).
  - `src/helpers/constants.js`: about text, counters, education, work history, services, skills, social links, nav links.
  - `public/projects/*.svg`: project images, referenced from `projects.json`.
  - `public/resume.pdf`: the CV behind the "Download CV" button.
- How: run `/data-change <what to change>` in Claude (it starts a `data/…` branch), or edit the file yourself on a branch. Then `/pr` to open the pull request.
- No spec is needed. If the change needs new code (a new field, a new section), Claude stops and tells you; then it becomes a feature change.
- Placeholder ("upcoming") projects are entries with `"mockComponent": true`. Projects are shown sorted by `order`.

### 2. Feature or behavior change: spec first

Examples: a 404 page, filtering projects, a contact form, changing how the menu works.

1. **`/spec <what you want>`**: Claude starts a `feat/…` branch, updates the relevant spec in `specs/`, marks new behaviors `(proposed)` and lists open questions. No code yet.
2. **You review**: approve, edit or answer questions. This is the step that prevents misunderstandings (like the hover overlay mix-up).
3. **`/implement <spec or behavior IDs>`**: Claude writes the code and tests on the same branch, runs `npm run check`, and checks `[manual]` behaviors in the browser.
4. **You check and ask for a PR** (`/pr`). Spec and code go in one PR. Claude never commits unless you ask.

## Branches and pull requests

`main` is protected on GitHub (ruleset "Protect main"): changes reach it only through a pull request, the checks "Format, lint, test, build" (CI) and "Vercel" (the preview build) must pass, force pushes and deleting `main` are blocked, and nobody can bypass this. Merges are squash only, so each PR becomes one commit on `main`, and merged branches are deleted automatically.

1. **Branch** from up-to-date `main`, named by kind: `data/…`, `feat/…`, `fix/…`, `chore/…` (tooling, dependencies) or `docs/…`.
2. **Commit and push** the branch. The pre-commit hook formats and lints the files you commit.
3. **Open a PR** (`/pr` in Claude, or `gh pr create`). CI runs, and Vercel builds a preview URL for the branch.
4. **Check the preview**, then **merge** on GitHub (Squash and merge). The button stays disabled until both checks pass. With "Enable auto-merge", the PR merges itself once they pass.
5. **Vercel deploys `main`** to production after the merge.

Claude opens PRs but merges only when you ask.

CI doesn't require a PR to be up to date with `main` before merging: one fewer click per PR, and CI runs again on `main` after every merge, so a clash between two PRs still shows up as a red check.

### Quick checks

- `/check` in Claude, or `npm run check` in a terminal: format check, lint, tests, build.

## The specs

| File                         | Covers                                                             | ID prefixes                                        |
| ---------------------------- | ------------------------------------------------------------------ | -------------------------------------------------- |
| `specs/README.md`            | The workflow, ID rules, template                                   |                                                    |
| `specs/layout-navigation.md` | Layout, header, mobile menu, section links, footer, not-found page | LAYOUT, NAV, MENU, SCROLL, FOOTER, NOTFOUND        |
| `specs/theme.md`             | Light and dark theme                                               | THEME                                              |
| `specs/home.md`              | Intro, About Me, My Skills, My Services, My Projects               | HOME, INTRO, ABOUT, SKILLS, SERVICES, HOMEPROJECTS |
| `specs/projects.md`          | Project data, grid, cards, projects page                           | PDATA, GRID, COMPACT, CARD, PPAGE                  |
| `specs/project-details.md`   | Project details page                                               | DETAILS                                            |

How to read a behavior line:

```md
- **THEME-3** Clicking the theme button switches theme and saves the choice. [test]
```

- `THEME-3` is a permanent ID. The matching test is named `THEME-3 …`, so a failing test tells you exactly which promise broke.
- `[test]`: checked automatically. `[manual]`: visual (hover, animation, layout), checked in the browser.
- `(proposed)`: approved for building but not built yet.

## The tests

- Location: `src/__tests__/`, one file per spec (`theme.test.js`, `layoutNavigation.test.js`, `home.test.js`, `projects.test.js`, `projectDetails.test.js`) plus `projectsService.test.js` for data loading.
- Helpers: `src/testing/renderApp.js` renders the whole app at a URL and provides `setSystemTheme('light' | 'dark')`, `realProject(id)` and `placeholderProject(id)`. `src/setupTests.js` stubs browser APIs jsdom lacks (Swiper, IntersectionObserver, scrolling).
- Tests read text from `constants.js`, so normal data changes don't break them.
- Run: `npm test` (watch mode while coding) or `npm run test:ci` (once).

## The automation

| What               | Where                                                           | When it runs                       | What it does                                                                       |
| ------------------ | --------------------------------------------------------------- | ---------------------------------- | ---------------------------------------------------------------------------------- |
| Prettier           | `.prettierrc.json`, `.prettierignore`                           | Pre-commit, CI, Claude edits       | One code style (single quotes, 2 spaces, trailing commas)                          |
| Pre-commit hook    | `.husky/pre-commit` + `lint-staged` in `package.json`           | Every `git commit`                 | Formats and lints only the files you commit; blocks lint errors                    |
| GitHub CI          | `.github/workflows/ci.yml`                                      | Every PR and every merge to `main` | Format check, lint, tests, build; red ✗ on GitHub if anything fails                |
| Branch protection  | GitHub → Settings → Rules ("Protect main")                      | Every change to `main`             | PR plus passing CI and Vercel required, squash only, no force push or bypass       |
| Dependabot         | `.github/dependabot.yml`                                        | Weekly (npm), monthly (actions)    | Opens PRs for outdated packages; CI tests them before you merge                    |
| Claude format hook | `.claude/settings.json`                                         | Every file Claude edits            | Runs Prettier on that file                                                         |
| Claude commands    | `.claude/commands/*.md`                                         | When you type `/spec` etc.         | Runs the workflow steps described above                                            |
| Vercel             | Vercel dashboard; Node version from `engines` in `package.json` | Every push                         | Preview for each PR branch; production from `main`, so only checked code goes live |

### npm scripts

| Script                 | What                                         |
| ---------------------- | -------------------------------------------- |
| `npm start`            | Dev server                                   |
| `npm test`             | Tests in watch mode                          |
| `npm run test:ci`      | Tests once                                   |
| `npm run lint`         | ESLint, zero warnings allowed                |
| `npm run format`       | Format every file with Prettier              |
| `npm run format:check` | Check formatting without changing files      |
| `npm run check`        | Everything: format check, lint, tests, build |
| `npm run build`        | Production build                             |

The old `watchscss` script is gone: SCSS is imported directly by the app, so there is no compiled CSS to keep in sync.

## Rules Claude follows (`CLAUDE.md`)

`CLAUDE.md` is loaded automatically in every Claude session in this repo. It is the source of truth for the rules; this guide explains them, and the Claude commands carry them out. It holds:

- **Code style**: `const`, `propTypes` before `export`, stable list keys, shared data in `constants.js`, no repeated markup, Redux via `createSlice`, no dead code.
- **Styles**: SCSS `@use` only, color variables only, no `!important`.
- **Accessibility**: real buttons and links with labels, one `<h1>` per page, descriptive `alt` text.
- **Text**: straight apostrophes, en dash for ranges, Title Case headings, sentence-case buttons and labels.
- **Workflow**: the two kinds of change, spec first for features, check every style rule a changed selector touches, refactors keep behavior identical, `npm run check` plus browser check before "done", a branch and pull request for every change (never commit to `main`), short commit messages.

Edit it whenever a preference changes; Claude picks it up in the next session.

## Typical day

- "Add my new job at X from 01/2026": `/data-change add job ...` → review the diff → `/pr` → check the Vercel preview → merge.
- "I want a 404 page": `/spec add a not-found page` → answer questions, approve → `/implement specs/layout-navigation.md` → look at it → `/pr` → check the preview → merge.
- Dependabot opened a PR: if the checks are green and it's minor/patch, merge it on GitHub. For a major update, ask Claude to check it first. **Swiper updates always need a browser check** of the My Skills slider (autoplay, dots, keyboard): tests replace Swiper with a stub, so green checks don't prove the slider works.
- CI is red: open the failed run on GitHub, or run `/check` locally; the failing test name tells you which spec behavior broke.

## Good to know

- Commit before big experiments; `git` is your undo button. To undo a merged change, revert its squash commit in a new PR (GitHub has a "Revert" button on merged PRs).
- Personal repos under `~/projects/personal/` commit with your personal email through an `includeIf` rule in `~/.gitconfig` (`~/.gitconfig-personal`); work repos keep their own identity.
- If the pre-commit hook blocks a commit, it printed the lint error; fix it (or ask Claude) and commit again.
- `.claude/launch.json` lets Claude start the dev server to check pages in its browser.
- Create React App (`react-scripts`) is no longer maintained. Moving to Vite is a reasonable future feature change; do it via `/spec` so the tests guard the migration.
