# Project preferences

## Code style

- Use `const` unless a value is reassigned.
- Define `propTypes` after the component and before `export default`.
- Use stable values (ids, names, urls) as list keys, not the array index. The index is fine only for items with no identity of their own (fixed placeholder lines, layout columns).
- Keep shared data (links, labels, lists) in `src/helpers/constants.js` instead of hardcoding it in components.
- Avoid repeated markup: build repeated elements from a list and share common JSX within a component.
- Redux state uses RTK `createSlice` in `src/redux/slices/`. Keep only state that is shared across components there.
- Remove dead code and commented-out code instead of leaving it in place.

## Styles

- SCSS is imported directly by the app; there is no compiled CSS file to commit.
- Use `@use`, never `@import`.
- Use the variables in `_colors.scss` instead of raw color values.
- Avoid `!important`.

## Accessibility

- Clickable controls are real `<button>` or link elements with an accessible label.
- One `<h1>` per page; heading levels follow the page structure.
- Images have descriptive `alt` text.

## Text

- Straight apostrophes (`'`), en dash (`–`) for ranges.
- Page and section headings use Title Case; buttons and labels use sentence case.

## Workflow

- Specs in `specs/` describe what the site does; read `specs/README.md` before changing behavior.
- Data change (projects, jobs, text, links, counters): edit only `src/helpers/constants.js` and `public/projects/projects.json`, no spec needed. If it needs a code change, say so first. Command: `/data-change`.
- Feature or behavior change: update the spec first (`/spec`), wait for approval, then implement (`/implement`). Code that changes behavior without a matching spec change is not done.
- Every `[test]` behavior has a test in `src/__tests__/` named after its ID; every `[manual]` behavior is checked in the browser.
- When changing a selector, class name or element type, check every style rule that targets it (hover, theme, responsive, animations).
- Refactors keep behavior identical; name any intended visual change explicitly.
- Before reporting a change done, run `npm run check` (format, lint, tests, build) and check affected interactions in the browser (hover, click, keyboard, light and dark theme, phone width).
- Keep commit messages short. The pre-commit hook formats and lints staged files; CI runs the full check on every push and pull request.
