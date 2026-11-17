import { fireEvent, screen, within } from '@testing-library/react';
import { renderApp } from '../testing/renderApp';
import { getProjects, getProjectById } from '../services/projectsService';
import { NOT_FOUND, SOCIAL_LINKS } from '../helpers/constants';

vi.mock('../services/projectsService');

beforeEach(() => {
  getProjects.mockResolvedValue([]);
  getProjectById.mockResolvedValue({
    id: 1,
    name: 'PayFlow',
    mockComponent: false,
  });
});

describe.each(['/', '/projects', '/projects/details/1'])('route %s', (path) => {
  test('LAYOUT-1 LAYOUT-3 renders header, content and footer', async () => {
    await renderApp(path);
    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByRole('main')).toBeInTheDocument();
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
    expect(await screen.findAllByRole('heading', { level: 1 })).toHaveLength(1);
  });
});

test('NAV-1 the logo links home', async () => {
  await renderApp('/projects');
  const header = screen.getByRole('banner');
  expect(within(header).getByRole('link', { name: 'Mh' })).toHaveAttribute(
    'href',
    '/'
  );
});

test('NAV-2 the header links to the home sections and projects', async () => {
  await renderApp();
  const header = screen.getByRole('banner');
  const links = {
    About: '/#about',
    Skills: '/#skills',
    Services: '/#services',
    Projects: '/projects',
  };
  Object.entries(links).forEach(([name, href]) => {
    expect(within(header).getByRole('link', { name })).toHaveAttribute(
      'href',
      href
    );
  });
});

test('NAV-4 the header has a theme button', async () => {
  await renderApp();
  expect(
    within(screen.getByRole('banner')).getByRole('button', {
      name: /Switch to (light|dark) theme/,
    })
  ).toBeInTheDocument();
});

const openMenu = (user) =>
  user.click(screen.getByRole('button', { name: 'Open menu' }));

test('MENU-1 MENU-2 the menu replaces the page and lists every page', async () => {
  const { user } = await renderApp();
  await openMenu(user);

  expect(screen.queryByRole('banner')).not.toBeInTheDocument();
  expect(screen.queryByRole('main')).not.toBeInTheDocument();
  ['Home', 'About', 'Skills', 'Services', 'Projects'].forEach((name) => {
    expect(screen.getByRole('link', { name })).toBeInTheDocument();
  });
});

test('MENU-3 the close button closes the menu', async () => {
  const { user } = await renderApp();
  await openMenu(user);
  await user.click(screen.getByRole('button', { name: 'Close menu' }));
  expect(screen.getByRole('banner')).toBeInTheDocument();
  // The home page mounts again and reloads its projects.
  await screen.findByText('Check back soon for new projects!');
});

test('MENU-3 clicking a link closes the menu and navigates', async () => {
  const { user } = await renderApp();
  await openMenu(user);
  await user.click(screen.getByRole('link', { name: 'Projects' }));
  expect(
    await screen.findByRole('heading', { level: 1, name: 'All Projects' })
  ).toBeInTheDocument();
});

test('MENU-4 the menu closes when the window gets wider than 600px', async () => {
  window.innerWidth = 400;
  const { user } = await renderApp();
  await openMenu(user);

  window.innerWidth = 800;
  fireEvent(window, new Event('resize'));

  expect(screen.getByRole('banner')).toBeInTheDocument();
  await screen.findByText('Check back soon for new projects!');
});

test('SCROLL-1 a section hash scrolls to that section', async () => {
  Element.prototype.scrollIntoView.mockClear();
  await renderApp('/#skills');
  const scrolled = Element.prototype.scrollIntoView.mock.instances.map(
    (element) => element.id
  );
  expect(scrolled).toContain('skills');
});

test('SCROLL-2 pages without a hash scroll to the top', async () => {
  window.scrollTo.mockClear();
  await renderApp('/projects');
  expect(window.scrollTo).toHaveBeenCalledWith(
    expect.objectContaining({ top: 0 })
  );
});

test('SCROLL-2 a section hash does not scroll to the top', async () => {
  window.scrollTo.mockClear();
  await renderApp('/#skills');
  expect(window.scrollTo).not.toHaveBeenCalled();
});

test('FOOTER-1 shows the copyright with the current year as plain text', async () => {
  await renderApp();
  const footer = screen.getByRole('contentinfo');
  const year = new Date().getFullYear();
  const copyright = within(footer).getByText(`© 2024–${year} | Murad Hajiyev`);
  expect(copyright.closest('a')).toBeNull();
});

const footerSocialLinks = () =>
  Object.values(SOCIAL_LINKS).map(({ label, href }) => ({
    href,
    link: within(screen.getByRole('contentinfo')).getByRole('link', {
      name: label,
    }),
  }));

test('FOOTER-2 shows every social link with its accessible name', async () => {
  await renderApp();
  footerSocialLinks().forEach(({ link, href }) => {
    expect(link).toHaveAttribute('href', href);
  });
});

test('FOOTER-3 external social links open in a new tab safely', async () => {
  await renderApp();
  footerSocialLinks()
    .filter(({ href }) => !href.startsWith('mailto:'))
    .forEach(({ link }) => {
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });
});

test('FOOTER-3 the email link opens in the same tab', async () => {
  await renderApp();
  footerSocialLinks()
    .filter(({ href }) => href.startsWith('mailto:'))
    .forEach(({ link }) => {
      expect(link).not.toHaveAttribute('target');
    });
});

test('NOTFOUND-1 an unknown URL shows the not-found page inside the layout', async () => {
  await renderApp('/foo');
  expect(screen.getByRole('banner')).toBeInTheDocument();
  expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  expect(
    within(screen.getByRole('main')).getByRole('heading', {
      level: 1,
      name: NOT_FOUND.title,
    })
  ).toBeInTheDocument();
});

test('NOTFOUND-2 the not-found page has one heading, the message and a home link', async () => {
  await renderApp('/foo');
  expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1);
  expect(screen.getByText(NOT_FOUND.text)).toBeInTheDocument();
  expect(
    within(screen.getByRole('main')).getByRole('link', {
      name: NOT_FOUND.linkText,
    })
  ).toHaveAttribute('href', '/');
});

test('NOTFOUND-3 the URL stays as typed', async () => {
  const { currentPath } = await renderApp('/foo/bar');
  expect(currentPath()).toBe('/foo/bar');
});
