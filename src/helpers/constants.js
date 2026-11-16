export const THEME = {
  LIGHT: 'light',
  DARK: 'dark',
  LS_NAME: 'APP_THEME',
  THEME_COLORS: {
    light: '#ffffff',
    dark: '#000000',
  },
};

export const NAV_LINKS = [
  { label: 'Home', to: '/', menuOnly: true },
  { label: 'About', to: '/#about', hash: true },
  { label: 'Skills', to: '/#skills', hash: true },
  { label: 'Services', to: '/#services', hash: true },
  { label: 'Projects', to: '/projects' },
];

export const SOCIAL_LINKS = {
  linkedin: {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/muradhajiev',
  },
  whatsapp: { label: 'WhatsApp', href: 'https://wa.me/994557088909' },
  telegram: { label: 'Telegram', href: 'https://t.me/muradhajiyev13' },
  email: { label: 'Email', href: 'mailto:muradhajiyev42@icloud.com' },
  github: { label: 'GitHub', href: 'https://github.com/muradhaji' },
  leetcode: {
    label: 'LeetCode',
    href: 'https://leetcode.com/u/muradhajiyev/',
  },
  linktree: { label: 'Linktree', href: 'https://linktr.ee/muradhajiyev' },
};

export const MY_SKILLS = [
  {
    sliderLabel: 'FRONT END',
    skills: [
      'JavaScript',
      'TypeScript',
      'HTML 5',
      'React',
      'React Router',
      'Context API',
    ],
  },
  {
    sliderLabel: 'DESIGN & TOOLS',
    skills: [
      'CSS 3',
      'Sass',
      'Bootstrap',
      'Ant Design',
      'Mantine UI',
      'Font Awesome',
      'Figma',
    ],
  },
  {
    sliderLabel: 'JS FRAMEWORKS / LIBRARIES',
    skills: ['Redux', 'React Query', 'HighCharts', 'Lodash', 'Moment.js'],
  },
  {
    sliderLabel: 'BACK-END',
    skills: ['Node.js', 'Express.js', 'Mongo DB', 'ORM', 'JWT'],
  },
  {
    sliderLabel: 'CONCEPTS / PRINCIPLES',
    skills: ['Algorithm Design', 'Data Structures', 'SOLID Principles', 'OOP'],
  },
  {
    sliderLabel: 'TECHNOLOGIES / TOOLS',
    skills: [
      'Git',
      'GitHub',
      'BitBucket',
      'Jira',
      'Postman',
      'Rest API',
      'Webpack',
      'Vite',
    ],
  },
  {
    sliderLabel: 'SOFT SKILLS',
    skills: [
      'Problem Solving',
      'Adaptability',
      'Collaboration',
      'Communication',
      'Creativity',
      'Research',
      'Self Study',
    ],
  },
];

export const PROJECT_COLUMN_COUNTS = {
  xs: 2,
  s: 2,
  m: 2,
  l: 3,
  xl: 3,
  '2xl': 3,
  '3xl': 4,
  '4xl': 4,
  '5xl': 4,
  '6xl': 4,
};
