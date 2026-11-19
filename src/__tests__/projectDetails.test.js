import { screen, within } from '@testing-library/react';
import { renderApp } from '../testing/renderApp';
import { getProjectById, getProjects } from '../services/projectsService';
import { NOT_FOUND } from '../helpers/constants';

vi.mock('../services/projectsService');

const payflow = {
  id: 1,
  name: 'PayFlow',
  description: 'Debt tracking and payment management system.',
  timeline: { start: 'Jun 2025', end: 'Aug 2025' },
  links: [{ label: 'Live demo', url: 'https://example.com/demo' }],
  contributors: [
    { name: 'Murad Hajiyev', roles: ['FE', 'BE'], url: 'https://example.com' },
  ],
  techStack: ['React', 'Redux'],
};

beforeEach(() => {
  getProjects.mockResolvedValue([]);
});

const expectRedirectToProjects = async () => {
  expect(
    await screen.findByRole('heading', { level: 1, name: 'All Projects' })
  ).toBeInTheDocument();
};

test('DETAILS-1 shows the page heading, project name and description', async () => {
  getProjectById.mockResolvedValue(payflow);
  await renderApp('/projects/details/1');
  expect(
    screen.getByRole('heading', { level: 1, name: 'Project Details' })
  ).toBeInTheDocument();
  expect(
    screen.getByRole('heading', { level: 2, name: 'PayFlow' })
  ).toBeInTheDocument();
  expect(screen.getByText(payflow.description)).toBeInTheDocument();
  expect(getProjectById).toHaveBeenCalledWith('1');
});

test('DETAILS-2 shows a skeleton while loading', async () => {
  getProjectById.mockReturnValue(new Promise(() => {}));
  await renderApp('/projects/details/1');
  expect(document.querySelector('.skeleton')).toBeInTheDocument();
});

const expectNotFoundAt = async (path) => {
  const { currentPath } = await renderApp(path);
  expect(
    await screen.findByRole('heading', { level: 1, name: NOT_FOUND.title })
  ).toBeInTheDocument();
  expect(currentPath()).toBe(path);
};

test('DETAILS-6 shows the not-found page for an unknown id', async () => {
  getProjectById.mockResolvedValue(null);
  await expectNotFoundAt('/projects/details/99');
});

test('DETAILS-7 redirects to /projects when loading fails', async () => {
  vi.spyOn(console, 'error').mockImplementation(() => {});
  getProjectById.mockRejectedValue(new Error('offline'));
  const { currentPath } = await renderApp('/projects/details/1');
  await expectRedirectToProjects();
  expect(currentPath()).toBe('/projects');
  console.error.mockRestore();
});

test('DETAILS-4 shows every row the project has data for', async () => {
  getProjectById.mockResolvedValue(payflow);
  await renderApp('/projects/details/1');
  const row = (label) =>
    screen
      .getByRole('heading', { level: 3, name: label })
      .closest('.detailsRow');

  expect(row('Timeline')).toHaveTextContent('Jun 2025 – Aug 2025');
  expect(row('Links')).toHaveTextContent('Live demo');
  expect(row('Contributors')).toHaveTextContent('Murad Hajiyev (FE / BE)');
  expect(row('Tech stack')).toHaveTextContent('ReactRedux');
});

test('DETAILS-4 hides rows without data', async () => {
  getProjectById.mockResolvedValue({
    id: 1,
    name: 'PayFlow',
  });
  await renderApp('/projects/details/1');
  expect(screen.queryAllByRole('heading', { level: 3 })).toHaveLength(0);
});

test('DETAILS-5 links and contributors open in a new tab safely', async () => {
  getProjectById.mockResolvedValue(payflow);
  await renderApp('/projects/details/1');
  const details = within(document.querySelector('.projectDetails'));
  ['Live demo', 'Murad Hajiyev (FE / BE)'].forEach((name) => {
    const link = details.getByRole('link', { name });
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });
});
