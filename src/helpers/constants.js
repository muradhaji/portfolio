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
    sliderLabel: 'LANGUAGES',
    skills: ['JavaScript', 'TypeScript', 'HTML 5', 'CSS 3', 'Sass'],
  },
  {
    sliderLabel: 'REACT',
    skills: [
      'React',
      'React Router',
      'Context API',
      'Redux',
      'Redux Toolkit',
      'React Query',
      'React Hook Form',
    ],
  },
  {
    sliderLabel: 'ANGULAR',
    skills: [
      'Angular',
      'Angular Signals',
      'RxJS',
      'NgRx',
      'Reactive Forms',
      'Angular Material',
    ],
  },
  {
    sliderLabel: 'UI & DESIGN',
    skills: [
      'Tailwind CSS',
      'Bootstrap',
      'Material UI',
      'Ant Design',
      'Mantine UI',
      'Font Awesome',
      'Figma',
    ],
  },
  {
    sliderLabel: 'LIBRARIES & BUILD',
    skills: ['Lodash', 'Moment.js', 'HighCharts', 'Webpack', 'Vite', 'Nx'],
  },
  {
    sliderLabel: 'BACK-END & APIS',
    skills: [
      'Node.js',
      'Express.js',
      'Rest API',
      'Mongo DB',
      'Mongoose',
      'ORM',
      'JWT',
      'Postman',
    ],
  },
  {
    sliderLabel: 'TESTING & QUALITY',
    skills: [
      'Jest',
      'Jasmine & Karma',
      'Playwright',
      'ESLint & Prettier',
      'Code Review',
    ],
  },
  {
    sliderLabel: 'WEB PRACTICES',
    skills: [
      'Responsive Design',
      'Accessibility (a11y)',
      'Web Performance',
      'SEO',
      'i18n',
      'Micro-frontends',
    ],
  },
  {
    sliderLabel: 'FUNDAMENTALS',
    skills: [
      'Algorithm Design',
      'Data Structures',
      'OOP',
      'SOLID Principles',
      'Clean Code',
    ],
  },
  {
    sliderLabel: 'WORKFLOW',
    skills: ['Git', 'GitHub', 'BitBucket', 'CI/CD', 'Jira', 'Agile / Scrum'],
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
      'Time Management',
      'Mentoring',
    ],
  },
];

export const PROJECT_COLUMN_COUNTS = {
  xs: 2,
  s: 2,
  m: 2,
  xl: 3,
  '2xl': 3,
  '3xl': 4,
  '4xl': 4,
  '5xl': 4,
  '6xl': 4,
};

export const ABOUT_ITEMS = [
  {
    icon: 'user',
    text: 'Front-End Developer with over three years of experience specializing in the MERN stack. Focused on building responsive, scalable applications and delivering clean, user-centered solutions in agile environments.',
  },
  {
    icon: 'bulb',
    text: 'I love turning ideas into user-friendly interfaces and solving challenges to deliver quality solutions. Besides front-end development, I excel at using data structures and algorithms to make my code efficient and perform well.',
  },
  {
    icon: 'seed',
    text: "Currently, I'm deepening my knowledge of TypeScript, testing and web performance to build faster, more reliable products.",
  },
  {
    icon: 'rocket',
    text: "Whether it's building responsive websites, developing interactive web applications, or exploring new technologies, I'm dedicated to pushing the boundaries of what's possible in web development.",
  },
  {
    icon: 'mug',
    text: "When I'm not coding, you can find me exploring the latest trends in web design, working on personal projects, or contributing to open-source initiatives.",
  },
  {
    icon: 'userPlus',
    text: "Let's connect and collaborate on exciting projects together!",
  },
];

export const COUNTERS = [
  { label: 'Years of experience', value: 3, suffix: '+' },
  { label: 'Completed projects', value: 2 },
  { label: 'Customers', value: 0 },
];

export const EDUCATION = [
  {
    label: 'Code Academy',
    data: [{ name: 'Software Development', start: '10/2021', end: '02/2022' }],
  },
  {
    label: 'Azerbaijan Technical University | Bachelor',
    data: [
      {
        name: 'Information Technologies Engineering',
        start: '09/2018',
        end: '07/2022',
      },
    ],
  },
];

export const EXPERIENCE = [
  {
    label: 'Andersen Lab',
    data: [{ name: 'JavaScript Developer', start: '06/2025', end: 'Present' }],
  },
  {
    label: 'Algo Academy',
    data: [{ name: 'Front-End Instructor', start: '10/2023', end: '07/2024' }],
  },
  {
    label: 'Qmeter',
    data: [{ name: 'Front-End Developer', start: '06/2021', end: '06/2022' }],
  },
];

// Each screen is drawn in the service picture; it can show a text or an icon.
export const SERVICES = [
  {
    title: 'Single Page Applications',
    description:
      'A single-page application (SPA) is a website or web application that dynamically rewrites the current web page with new data from the web server, instead of loading entire new pages.',
    screens: [{ text: '1' }],
  },
  {
    title: 'Multi Page Applications',
    description:
      'A multi-page application (MPA) is a website made up of many different sub-websites, or pages. When you interact with the site, new pages are downloaded from the server.',
    screens: [{}, { text: '3' }, {}],
  },
  {
    title: 'Responsive Design',
    description:
      'Responsive web design (RWD) is a web design approach to make web pages render well on all screen sizes and resolutions while ensuring good usability. It is the way to design for a multi-device web.',
    screens: [{}, {}, {}],
  },
  {
    title: 'Search Engine Optimization',
    description:
      'Search engine optimization (SEO) is the art and science of getting pages to rank higher in search engines such as Google. It matters because search is one of the main ways people discover content online.',
    screens: [{ icon: 'magnifier' }],
  },
  {
    title: 'Performance Optimization',
    description:
      'Performance optimization is the process of refining the efficiency of systems and applications to improve their output, speed, or scalability. It plays a key role in ensuring that the available resources are put to the best use.',
    screens: [{ icon: 'rocket' }],
  },
];
