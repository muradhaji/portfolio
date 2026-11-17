// jest-dom adds custom matchers for asserting on DOM nodes.
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/vitest';
import { resetSystemTheme } from './testing/systemTheme';

// jsdom does not implement these browser APIs used by the app.
window.IntersectionObserver = class {
  observe() {}
  unobserve() {}
  disconnect() {}
};
window.scrollTo = vi.fn();
Element.prototype.scrollIntoView = vi.fn();

beforeEach(() => {
  resetSystemTheme();
  localStorage.clear();
  document.documentElement.removeAttribute('class');
  document.documentElement.style.colorScheme = '';
  window.innerWidth = 1024;
});
