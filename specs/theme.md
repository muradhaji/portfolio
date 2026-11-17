# Theme

## Goal

The site follows the visitor's system light/dark setting until they choose a theme themselves, and never flashes the wrong theme on load.

## Behavior

- **THEME-1** With no saved choice, the theme matches the system setting: light when the system prefers light, otherwise dark. [test]
- **THEME-2** A saved choice (`localStorage` key `APP_THEME`, value `light` or `dark`) overrides the system setting. [test]
- **THEME-3** Clicking the theme button switches theme and saves the choice. Nothing is saved until the visitor clicks. [test]
- **THEME-4** The theme button's label names the theme it switches to ("Switch to dark theme" / "Switch to light theme") and shows a moon in light theme, a sun in dark theme. [test]
- **THEME-5** With no saved choice, the site follows system setting changes live. After a saved choice, system changes are ignored. [test]
- **THEME-6** The theme is applied as a class on `<html>` (`light` / `dark`) together with `color-scheme`. [test]
- **THEME-7** The `theme-color` meta tag is `#ffffff` in light theme and `#000000` in dark theme. [test]
- **THEME-8** The theme is applied before first paint by a script in `index.html` at the repo root (moved from `public/index.html`, see BUILD-6), so there is no flash of the wrong theme. That script must stay in sync with `src/helpers/theme.js`. [manual]
- **THEME-9** If `localStorage` is unavailable, the theme still works; it is just not remembered. [test]

## Out of scope

- A third "system" option in the UI.
