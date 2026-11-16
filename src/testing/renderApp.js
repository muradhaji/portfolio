import { act, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import { reducer } from '../redux/store';
import App from '../components/App';

export { setSystemTheme } from './systemTheme';

// Renders the whole app at `path` and waits for pending data (projects) to load.
export const renderApp = async (path = '/') => {
  const store = configureStore({ reducer });
  let result;
  await act(async () => {
    result = render(
      <Provider store={store}>
        <MemoryRouter initialEntries={[path]}>
          <App />
        </MemoryRouter>
      </Provider>
    );
  });
  return { store, user: userEvent.setup(), ...result };
};

export const realProject = (id, order = id) => ({
  id,
  name: `Project ${id}`,
  description: `Description of project ${id}.`,
  coverHorizontal: `/projects/p${id}Horizontal.svg`,
  coverVertical: `/projects/p${id}Vertical.svg`,
  mockComponent: false,
  order,
});

export const placeholderProject = (id, order = id) => ({
  id,
  name: 'Project Name',
  coverHorizontal: '/projects/projectHorizontal.svg',
  coverVertical: '/projects/projectVertical.svg',
  mockComponent: true,
  order,
});
