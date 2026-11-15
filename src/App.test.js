import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './redux/reducers';
import App from './components/App';

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

const projects = [
  {
    id: 1,
    name: 'PayFlow',
    description: 'Debt tracking and payment management system.',
    coverHorizontal: '/projects/payflowHorizontal.svg',
    coverVertical: '/projects/payflowVertical.svg',
    mockComponent: false,
  },
  {
    id: 2,
    name: 'Project Name',
    coverHorizontal: '/projects/projectHorizontal.svg',
    coverVertical: '/projects/projectVertical.svg',
    mockComponent: true,
  },
];

const renderAt = (path) =>
  render(
    <Provider store={configureStore({ reducer: rootReducer })}>
      <MemoryRouter initialEntries={[path]}>
        <App />
      </MemoryRouter>
    </Provider>
  );

beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({ ok: true, json: () => Promise.resolve(projects) })
  );
});

test('renders the projects page with loaded projects', async () => {
  renderAt('/projects');
  expect(screen.getByText('All Projects')).toBeInTheDocument();
  expect(await screen.findByText('PayFlow')).toBeInTheDocument();
});

test('renders details for a real project', async () => {
  renderAt('/projects/details/1');
  expect(
    await screen.findByText('Debt tracking and payment management system.')
  ).toBeInTheDocument();
});

test('redirects mock project details to the projects page', async () => {
  renderAt('/projects/details/2');
  expect(await screen.findByText('All Projects')).toBeInTheDocument();
  expect(await screen.findByText('PayFlow')).toBeInTheDocument();
});
