# Build and Tooling

## Goal

Build, serve, test and lint the site with maintained tools (Vite, Vitest, ESLint flat config) instead of Create React App, which is unmaintained, causes most `npm audit` findings and blocks React 19 and React Router 7. Visitors see no difference: every behavior in the other specs stays identical.

## Behavior

### Scripts

- **BUILD-1** The npm scripts keep their names and purpose: `start` (dev server), `build` (production build), `test` (watch mode), `test:ci` (run once), `lint` (zero warnings), `format`, `format:check`, `check` (format check, lint, tests, build). CI and the docs need no new commands. [manual]
- **BUILD-2** `npm start` serves the site at http://localhost:3000 with hot reload; `.claude/launch.json` points at that port. [manual]

### Production build

- **BUILD-3** `npm run build` writes a static site to `build/`, which Vercel serves for previews and production. `vercel.json` sets the Vite framework preset and the output folder, so no dashboard setting needs changing. [manual]
- **BUILD-4** Every file in `public/` is served unchanged at the same URL as before (for example `/projects/projects.json`, `/projects/*.svg`, `/resume.pdf`, `/favicon.ico`, `/site.webmanifest`, `/robots.txt`). [manual]
- **BUILD-5** Opening or reloading any page URL directly (`/`, `/projects`, `/projects/<id>`, an unknown path) on Vercel loads the app, not a server 404 (rewrite to `index.html` in `vercel.json`). [manual]
- **BUILD-6** The page `<head>` is unchanged: title, description, `theme-color`, favicons, apple touch icon, manifest and the theme script (THEME-8). The HTML entry file is `index.html` at the repo root. [manual]
- **BUILD-7** SVG icons render inline (imported with `?react` through `vite-plugin-svgr`), so they follow the theme color and hover styles; the avatar image and Plus Jakarta Sans fonts load in the dev server and the production build. [manual]
- **BUILD-12** The production build targets Vite's default browsers (current, widely available versions of Chrome, Edge, Firefox and Safari). [manual]
- **BUILD-13** On Vercel, `/resume.pdf` is sent with `Content-Disposition: attachment` and the file name `Murad Hajiyev - CV (Front-End Developer).pdf` (header in `vercel.json`), so "Download CV" (SKILLS-5) saves it under that name instead of `resume.pdf`. The path and name come from `CV` in `src/helpers/constants.js`; `vercel.json` can't read it, so a test fails if the header's name differs. [test]

### Public data file

- **BUILD-14** `public/portfolio.json` is a copy of the site's personal data for other projects, served at `https://muradhajiyev.vercel.app/portfolio.json`: `version`, `updated` (`YYYY-MM-DD`), `basics` (name, title, summary, email, phone, location, avatar, cv), `social`, `about`, `counters`, `experience`, `education`, `skills`, `services` and `projects` (the real projects from `projects.json`, without placeholders). List entries have unique `id`s, dates are `YYYY-MM` (`end: null` while ongoing) and every URL is absolute. The avatar lives only in `public/avatar.jpeg`, used by the site (SKILLS-4) and linked from `basics.avatar`. [manual]
- **BUILD-15** On Vercel, `/portfolio.json` is sent with `Access-Control-Allow-Origin: *` (header in `vercel.json`), so other sites can fetch it. [test]
- **BUILD-16** A test fails if `portfolio.json` disagrees with what the site shows: the intro name, title and summary, the CV, the social links, about text, counters, education, work history, skills and services in `src/helpers/constants.js`, the projects in `public/projects/projects.json`, or if `public/avatar.jpeg` is missing. Every data change updates `portfolio.json` in the same pull request (`/portfolio-data-change`, `/portfolio-json`). [test]

### Tests and lint

- **BUILD-8** Tests run on Vitest with jsdom. Every test in `src/__tests__/` keeps its name (the behavior ID) and passes. [manual]
- **BUILD-9** Tests use the real Swiper, not a stub. [manual]
- **BUILD-10** ESLint uses a flat config (`eslint.config.mjs`) that ports Create React App's rules (core, `react`, `react-hooks`, `jsx-a11y`, `import`, plus `vitest` and `testing-library` rules for tests), keeping the current test-file exceptions; `npm run lint` passes with zero warnings. The pre-commit hook keeps working. [manual]

### Dependencies

- **BUILD-11** `react-scripts` and what only it needed (`@babel/plugin-proposal-private-property-in-object`, the `eject` script, `eslintConfig` and `browserslist` in `package.json`) are removed; test packages are dev dependencies. `npm audit` reports far fewer findings than the 74 under Create React App. [manual]

## Out of scope

- Upgrading React to 19, React Router to 7 or lint-staged to a new major (separate PRs).
- TypeScript, new lint rules beyond Create React App's, or any visual or content change.
