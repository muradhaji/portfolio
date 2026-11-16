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
- Check visual changes in the browser before reporting them done.
- Keep commit messages short.
