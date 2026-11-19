import fs from 'node:fs';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Intro from '../components/Intro';
import portfolio from '../../public/portfolio.json';
import projects from '../../public/projects/projects.json';
import {
  ABOUT_ITEMS,
  CV,
  COUNTERS,
  EDUCATION,
  EXPERIENCE,
  MY_SKILLS,
  SERVICES,
  SOCIAL_LINKS,
} from '../helpers/constants';

const SITE_URL = 'https://muradhajiyev.vercel.app';

// "06/2025" -> "2025-06"; "Present" -> null.
const toMonth = (value) => {
  if (value === 'Present') return null;
  const [month, year] = value.split('/');
  return `${year}-${month}`;
};

const withoutIds = (list) => list.map(({ id, ...entry }) => entry);

test('BUILD-16 portfolio.json basics match the intro, CV and avatar', () => {
  render(<Intro />, { wrapper: MemoryRouter });
  const { basics } = portfolio;
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
    `I'm ${basics.name}`
  );
  expect(screen.getByText(basics.title)).toBeInTheDocument();
  expect(screen.getByText(basics.summary)).toBeInTheDocument();
  expect(basics.cv).toBe(`${SITE_URL}${CV.href}`);
  expect(basics.avatar).toBe(`${SITE_URL}/avatar.jpeg`);
  expect(fs.existsSync('public/avatar.jpeg')).toBe(true);
  expect(SOCIAL_LINKS.email.href).toBe(`mailto:${basics.email}`);
  expect(SOCIAL_LINKS.whatsapp.href).toBe(
    `https://wa.me/${basics.phone.replace('+', '')}`
  );
});

test('BUILD-16 portfolio.json lists match constants.js', () => {
  expect(portfolio.social).toEqual(
    Object.entries(SOCIAL_LINKS).map(([id, { label, href }]) => ({
      id,
      label,
      url: href,
    }))
  );
  expect(withoutIds(portfolio.about)).toEqual(ABOUT_ITEMS);
  expect(withoutIds(portfolio.counters)).toEqual(COUNTERS);
  expect(withoutIds(portfolio.experience)).toEqual(
    EXPERIENCE.flatMap(({ label, data }) =>
      data.map(({ name, start, end }) => ({
        organization: label,
        role: name,
        start: toMonth(start),
        end: toMonth(end),
      }))
    )
  );
  expect(withoutIds(portfolio.education)).toEqual(
    EDUCATION.flatMap(({ label, data }) => {
      const [organization, degree] = label.split(' | ');
      return data.map(({ name, start, end }) => ({
        organization,
        ...(degree && { degree }),
        field: name,
        start: toMonth(start),
        end: toMonth(end),
      }));
    })
  );
  expect(
    portfolio.skills.map(({ group, items }) => [group.toUpperCase(), items])
  ).toEqual(MY_SKILLS.map(({ sliderLabel, skills }) => [sliderLabel, skills]));
  expect(portfolio.projects).toEqual(
    projects.map((project) => ({
      ...project,
      coverHorizontal: `${SITE_URL}${project.coverHorizontal}`,
      coverVertical: `${SITE_URL}${project.coverVertical}`,
    }))
  );
  expect(withoutIds(portfolio.services)).toEqual(
    SERVICES.map(({ title, description }) => ({ title, description }))
  );
});

test('BUILD-16 portfolio.json ids are unique and URLs absolute', () => {
  [
    'social',
    'about',
    'counters',
    'experience',
    'education',
    'skills',
    'services',
  ].forEach((key) => {
    const ids = portfolio[key].map((entry) => entry.id);
    ids.forEach((id) => expect(id).toMatch(/^[a-z0-9-]+$/));
    expect(new Set(ids).size).toBe(ids.length);
  });
  [
    portfolio.basics.avatar,
    portfolio.basics.cv,
    ...portfolio.projects.flatMap((project) => [
      project.coverHorizontal,
      project.coverVertical,
      ...(project.links ?? []).map((link) => link.url),
    ]),
    ...portfolio.social.map((link) => link.url),
  ].forEach((url) => expect(url).toMatch(/^(https:\/\/|mailto:)/));
  expect(portfolio.updated).toMatch(/^\d{4}-\d{2}-\d{2}$/);
});
