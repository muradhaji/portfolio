import { render, screen, within } from '@testing-library/react';
import { renderApp } from '../testing/renderApp';
import { getProjects } from '../services/projectsService';
import Background from '../components/Background';
import {
  ABOUT_ITEMS,
  COUNTERS,
  EDUCATION,
  EXPERIENCE,
  MY_SKILLS,
  SERVICES,
} from '../helpers/constants';

jest.mock('../services/projectsService');

beforeEach(() => {
  getProjects.mockResolvedValue([]);
});

const section = (id) => document.getElementById(id);

test('HOME-1 shows the sections in order', async () => {
  await renderApp();
  const ids = [...document.querySelectorAll('main section')].map((s) => s.id);
  expect(ids).toEqual(['intro', 'about', 'skills', 'services', 'projects']);
  const titles = screen
    .getAllByRole('heading', { level: 2 })
    .map((heading) => heading.textContent);
  expect(titles).toEqual([
    'About Me',
    'My Skills',
    'My Services',
    'My Projects',
  ]);
});

test('HOME-2 the page has one h1, the name', async () => {
  await renderApp();
  const h1s = screen.getAllByRole('heading', { level: 1 });
  expect(h1s).toHaveLength(1);
  expect(h1s[0]).toHaveTextContent("I'm Murad Hajiyev");
});

test('INTRO-1 shows greeting, name, title and summary', async () => {
  await renderApp();
  const intro = within(section('intro'));
  expect(intro.getByText('Hi!')).toBeInTheDocument();
  expect(intro.getByText('Front-End Developer')).toBeInTheDocument();
  expect(intro.getByText(/Focused on building responsive/)).toBeInTheDocument();
});

test('INTRO-2 the intro buttons link to About and My Projects', async () => {
  await renderApp();
  const intro = within(section('intro'));
  expect(
    intro.getByRole('link', { name: /^Read more about me/ })
  ).toHaveAttribute('href', '/#about');
  expect(intro.getByRole('link', { name: 'View projects' })).toHaveAttribute(
    'href',
    '/#projects'
  );
});

test('INTRO-3 shows the intro social links', async () => {
  await renderApp();
  const names = within(section('intro'))
    .getAllByRole('link')
    .map((link) => link.getAttribute('aria-label'))
    .filter(Boolean);
  expect(names).toEqual([
    'LinkedIn',
    'Telegram',
    'Email',
    'GitHub',
    'LeetCode',
  ]);
});

test('HOME-4 ABOUT-1 shows every about paragraph from the data', async () => {
  await renderApp();
  const about = within(section('about'));
  ABOUT_ITEMS.forEach(({ text }) => {
    expect(about.getByText(text)).toBeInTheDocument();
  });
});

test('ABOUT-2 shows every counter with its label and suffix', async () => {
  await renderApp();
  const counters = section('about').querySelectorAll('.counterItem');
  expect(counters).toHaveLength(COUNTERS.length);
  COUNTERS.forEach((counter, i) => {
    expect(counters[i]).toHaveTextContent(counter.label);
    expect(
      counters[i]
        .querySelector('.count')
        .textContent.endsWith(counter.suffix ?? '')
    ).toBe(true);
  });
});

test('ABOUT-3 shows education and work history with date ranges', async () => {
  await renderApp();
  const about = within(section('about'));
  [...EDUCATION, ...EXPERIENCE].forEach(({ label, data }) => {
    const item = about.getByText(label).closest('.backgroundItem');
    data.forEach(({ name, start, end }) => {
      expect(item).toHaveTextContent(name);
      expect(item).toHaveTextContent(`${start}–${end}`);
    });
  });
});

test('ABOUT-3 hides missing dates instead of showing placeholder text', () => {
  render(<Background label='School' data={[{ name: 'Course' }]} />);
  expect(screen.getByText('Course')).toBeInTheDocument();
  expect(screen.queryByText('–')).not.toBeInTheDocument();
  expect(screen.queryByText(/No /)).not.toBeInTheDocument();
});

test('SKILLS-1 lists every skill group', async () => {
  await renderApp();
  const skills = within(section('skills'));
  MY_SKILLS.flatMap((group) => group.skills).forEach((skill) => {
    expect(skills.getByText(skill)).toBeInTheDocument();
  });
});

test('SKILLS-4 shows the avatar, CV button and contact links', async () => {
  await renderApp();
  const skills = within(section('skills'));
  expect(skills.getByAltText('Murad Hajiyev')).toBeInTheDocument();
  expect(
    skills.getByRole('button', { name: 'Download CV' })
  ).toBeInTheDocument();
  const names = skills
    .getAllByRole('link')
    .map((link) => link.getAttribute('aria-label'));
  expect(names).toEqual(['LinkedIn', 'WhatsApp', 'Telegram', 'Email']);
});

test('SKILLS-5 Download CV downloads the resume with a clear file name', async () => {
  const click = jest
    .spyOn(HTMLAnchorElement.prototype, 'click')
    .mockImplementation(function () {
      click.downloaded = {
        href: this.getAttribute('href'),
        download: this.download,
      };
    });
  const { user } = await renderApp();

  await user.click(screen.getByRole('button', { name: 'Download CV' }));

  expect(click.downloaded).toEqual({
    href: '/resume.pdf',
    download: 'Murad Hajiyev - CV (Front-End Developer).pdf',
  });
  click.mockRestore();
});

test('SERVICES-1 shows every service title and description', async () => {
  await renderApp();
  const services = within(section('services'));
  SERVICES.forEach(({ title, description }) => {
    expect(
      services.getByRole('heading', { level: 3, name: title })
    ).toBeInTheDocument();
    expect(services.getByText(description)).toBeInTheDocument();
  });
});

test('HOMEPROJECTS-1 shows the compact projects grid', async () => {
  await renderApp();
  expect(
    within(section('projects')).getByText('Check back soon for new projects!')
  ).toBeInTheDocument();
});
