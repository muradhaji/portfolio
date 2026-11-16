import { THEME } from './constants';

export const SYSTEM_LIGHT_QUERY = '(prefers-color-scheme: light)';

export const getStoredTheme = () => {
  try {
    const theme = localStorage.getItem(THEME.LS_NAME);
    return theme === THEME.LIGHT || theme === THEME.DARK ? theme : null;
  } catch {
    return null;
  }
};

export const storeTheme = (theme) => {
  try {
    localStorage.setItem(THEME.LS_NAME, theme);
  } catch {
    // Storage can be unavailable (private mode); the theme still applies.
  }
};

export const getSystemTheme = () =>
  window.matchMedia(SYSTEM_LIGHT_QUERY).matches ? THEME.LIGHT : THEME.DARK;

export const getInitialTheme = () => getStoredTheme() || getSystemTheme();

export const applyTheme = (theme) => {
  const root = document.documentElement;
  root.setAttribute('class', theme);
  root.style.colorScheme = theme;
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute('content', THEME.THEME_COLORS[theme]);
};
