import { fireEvent, screen, within } from '@testing-library/react';
import { realProject, renderApp } from '../testing/renderApp';
import { getProjects } from '../services/projectsService';

vi.mock('../services/projectsService');

const homeProjects = () => within(document.getElementById('projects'));
const cards = (root = document) => root.querySelectorAll('.projectContainer');

test('GRID-1 shows a skeleton while loading', async () => {
  getProjects.mockReturnValue(new Promise(() => {}));
  await renderApp('/projects');
  expect(document.querySelector('.projectsGrid .skeleton')).toBeInTheDocument();
});

test('PDATA-4 shows an error when projects cannot be loaded', async () => {
  vi.spyOn(console, 'error').mockImplementation(() => {});
  getProjects.mockRejectedValue(new Error('offline'));
  await renderApp('/projects');
  expect(screen.getByText('Could not load projects.')).toBeInTheDocument();
  console.error.mockRestore();
});

test.each([
  [600, 2],
  [800, 3],
  [1024, 4],
])('GRID-2 at %ipx wide the grid has %i columns', async (width, columns) => {
  window.innerWidth = width;
  getProjects.mockResolvedValue([realProject(1)]);
  await renderApp('/projects');
  expect(document.querySelectorAll('.grid .column')).toHaveLength(columns);
});

test('GRID-2 the column count follows window resizes', async () => {
  getProjects.mockResolvedValue([realProject(1)]);
  await renderApp('/projects');
  window.innerWidth = 600;
  fireEvent(window, new Event('resize'));
  expect(document.querySelectorAll('.grid .column')).toHaveLength(2);
});

test('PDATA-2 projects are shown in the order the service returns', async () => {
  getProjects.mockResolvedValue([realProject(5, 0), realProject(3, 1)]);
  await renderApp('/projects');
  const covers = screen.getAllByAltText(/ cover$/).map((img) => img.alt);
  expect(covers).toEqual(['Project 5 cover', 'Project 3 cover']);
});

const realProjects = (count) =>
  Array.from({ length: count }, (_, i) => realProject(i + 1));

test('PDATA-3 the grid fills up to 8 cards with placeholders', async () => {
  getProjects.mockResolvedValue(realProjects(1));
  await renderApp('/projects');
  expect(cards()).toHaveLength(8);
  expect(screen.getAllByAltText('Upcoming project')).toHaveLength(7);
});

test('PDATA-3 with 8 or more real projects there are no placeholders', async () => {
  getProjects.mockResolvedValue(realProjects(9));
  await renderApp('/projects');
  expect(cards()).toHaveLength(9);
  expect(screen.queryByAltText('Upcoming project')).not.toBeInTheDocument();
});

test('COMPACT-1 the home grid shows at most two rows', async () => {
  getProjects.mockResolvedValue(realProjects(12));
  await renderApp('/');
  expect(cards(document.getElementById('projects'))).toHaveLength(8);
});

test('COMPACT-2 counts one hidden real project', async () => {
  getProjects.mockResolvedValue(realProjects(9));
  await renderApp('/');
  expect(
    homeProjects().getByText('There is 1 more project.')
  ).toBeInTheDocument();
  expect(
    homeProjects().getByRole('link', { name: 'View all' })
  ).toHaveAttribute('href', '/projects');
});

test('COMPACT-2 counts several hidden real projects', async () => {
  getProjects.mockResolvedValue(realProjects(10));
  await renderApp('/');
  const more = homeProjects().getByText(/more projects\./);
  expect(more.textContent).toMatch(/^There are \d* more projects\.$/);
  expect(
    homeProjects().getByRole('link', { name: 'View all' })
  ).toBeInTheDocument();
});

test('COMPACT-3 with no hidden real projects it asks to check back', async () => {
  getProjects.mockResolvedValue(realProjects(1));
  await renderApp('/');
  expect(
    homeProjects().getByText('Check back soon for new projects!')
  ).toBeInTheDocument();
  expect(
    homeProjects().queryByRole('link', { name: 'View all' })
  ).not.toBeInTheDocument();
});

test('CARD-1 CARD-2 only real projects are links to their details', async () => {
  getProjects.mockResolvedValue(realProjects(1));
  await renderApp('/projects');
  const links = within(document.querySelector('.projectsGrid')).getAllByRole(
    'link'
  );
  expect(links).toHaveLength(1);
  expect(links[0]).toHaveAttribute('href', '/projects/details/1');
  expect(links[0]).not.toHaveAttribute('target');
});

test('CARD-3 covers have descriptive alt text', async () => {
  getProjects.mockResolvedValue(realProjects(1));
  await renderApp('/projects');
  expect(screen.getByAltText('Project 1 cover')).toBeInTheDocument();
  expect(screen.getAllByAltText('Upcoming project')[0]).toBeInTheDocument();
});

test('PPAGE-1 the projects page shows its heading and every project', async () => {
  getProjects.mockResolvedValue(realProjects(12));
  await renderApp('/projects');
  expect(
    screen.getByRole('heading', { level: 1, name: 'All Projects' })
  ).toBeInTheDocument();
  expect(cards()).toHaveLength(12);
});
