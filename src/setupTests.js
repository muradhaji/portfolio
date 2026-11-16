// jest-dom adds custom jest matchers for asserting on DOM nodes.
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { resetSystemTheme } from './testing/systemTheme';

// CRA's Jest cannot resolve Swiper's package exports, so stub it virtually.
jest.mock(
  'swiper/react',
  () => ({
    Swiper: ({ children }) => <div>{children}</div>,
    SwiperSlide: ({ children }) => <div>{children}</div>,
  }),
  { virtual: true }
);
jest.mock('swiper/modules', () => ({}), { virtual: true });
jest.mock('swiper/css', () => ({}), { virtual: true });
jest.mock('swiper/css/pagination', () => ({}), { virtual: true });

// jsdom does not implement these browser APIs used by the app.
window.IntersectionObserver = class {
  observe() {}
  unobserve() {}
  disconnect() {}
};
window.scrollTo = jest.fn();
Element.prototype.scrollIntoView = jest.fn();

beforeEach(() => {
  resetSystemTheme();
  localStorage.clear();
  document.documentElement.removeAttribute('class');
  document.documentElement.style.colorScheme = '';
  window.innerWidth = 1024;
});
