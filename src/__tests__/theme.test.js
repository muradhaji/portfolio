import { act, screen } from '@testing-library/react';
import { renderApp, setSystemTheme } from '../testing/renderApp';
import { getProjects } from '../services/projectsService';

vi.mock('../services/projectsService');

const html = document.documentElement;

beforeEach(() => {
  getProjects.mockResolvedValue([]);
  document.head.innerHTML = '<meta name="theme-color" content="#ffffff" />';
});

const themeColor = () =>
  document.querySelector('meta[name="theme-color"]').getAttribute('content');

test('THEME-1 follows the system setting when nothing is saved', async () => {
  setSystemTheme('light');
  await renderApp();
  expect(html).toHaveClass('light');
});

test('THEME-1 uses dark when the system does not prefer light', async () => {
  setSystemTheme('dark');
  await renderApp();
  expect(html).toHaveClass('dark');
});

test('THEME-2 a saved choice overrides the system setting', async () => {
  setSystemTheme('dark');
  localStorage.setItem('APP_THEME', 'light');
  await renderApp();
  expect(html).toHaveClass('light');
});

test('THEME-3 clicking the theme button switches and saves the theme', async () => {
  setSystemTheme('light');
  const { user } = await renderApp();
  expect(localStorage.getItem('APP_THEME')).toBeNull();

  await user.click(
    screen.getByRole('button', { name: 'Switch to dark theme' })
  );

  expect(html).toHaveClass('dark');
  expect(localStorage.getItem('APP_THEME')).toBe('dark');
});

test('THEME-4 the button names the next theme and shows the matching icon', async () => {
  setSystemTheme('light');
  const { user } = await renderApp();
  const button = screen.getByRole('button', { name: 'Switch to dark theme' });
  expect(button).toHaveTextContent('moon.svg');

  await user.click(button);

  const next = screen.getByRole('button', { name: 'Switch to light theme' });
  expect(next).toHaveTextContent('sun.svg');
});

test('THEME-5 follows live system changes until a choice is saved', async () => {
  setSystemTheme('dark');
  const { user } = await renderApp();

  act(() => setSystemTheme('light'));
  expect(html).toHaveClass('light');

  await user.click(
    screen.getByRole('button', { name: 'Switch to dark theme' })
  );
  act(() => setSystemTheme('light'));
  expect(html).toHaveClass('dark');
});

test('THEME-6 applies the theme as a class and color-scheme on <html>', async () => {
  setSystemTheme('dark');
  await renderApp();
  expect(html).toHaveClass('dark');
  expect(html.style.colorScheme).toBe('dark');
});

test('THEME-7 the theme-color meta tag matches the theme', async () => {
  setSystemTheme('dark');
  const { user } = await renderApp();
  expect(themeColor()).toBe('#000000');

  await user.click(
    screen.getByRole('button', { name: 'Switch to light theme' })
  );
  expect(themeColor()).toBe('#ffffff');
});

test('THEME-9 works when localStorage is unavailable', async () => {
  const fail = () => {
    throw new Error('blocked');
  };
  vi.spyOn(Storage.prototype, 'getItem').mockImplementation(fail);
  vi.spyOn(Storage.prototype, 'setItem').mockImplementation(fail);
  setSystemTheme('light');

  const { user } = await renderApp();
  await user.click(
    screen.getByRole('button', { name: 'Switch to dark theme' })
  );

  expect(html).toHaveClass('dark');
  vi.restoreAllMocks();
});
