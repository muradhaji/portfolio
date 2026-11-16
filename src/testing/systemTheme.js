// A controllable stand-in for window.matchMedia('(prefers-color-scheme: …)').
let systemPrefersLight = false;
const mediaListeners = new Set();

window.matchMedia = (query) => ({
  get matches() {
    return query.includes('light') ? systemPrefersLight : !systemPrefersLight;
  },
  media: query,
  addEventListener: (_, listener) => mediaListeners.add(listener),
  removeEventListener: (_, listener) => mediaListeners.delete(listener),
});

export const resetSystemTheme = () => {
  systemPrefersLight = false;
  mediaListeners.clear();
};

export const setSystemTheme = (theme) => {
  systemPrefersLight = theme === 'light';
  mediaListeners.forEach((listener) =>
    listener({ matches: systemPrefersLight })
  );
};
