import { act, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { MemoryRouter, useLocation } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import { reducer } from '../redux/store';
import App from '../components/App';

export { setSystemTheme } from './systemTheme';

// Records the router's current path so tests can check redirects.
function PathProbe({ onPath }) {
  onPath(useLocation().pathname);
  return null;
}

PathProbe.propTypes = {
  onPath: PropTypes.func.isRequired,
};

// Renders the whole app at `path` and waits for pending data (projects) to load.
// `currentPath()` returns the path the router is on now.
export const renderApp = async (path = '/') => {
  const store = configureStore({ reducer });
  let pathNow = path;
  let result;
  await act(async () => {
    result = render(
      <Provider store={store}>
        <MemoryRouter initialEntries={[path]}>
          <App />
          <PathProbe onPath={(p) => (pathNow = p)} />
        </MemoryRouter>
      </Provider>
    );
  });
  return {
    store,
    user: userEvent.setup(),
    currentPath: () => pathNow,
    ...result,
  };
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
