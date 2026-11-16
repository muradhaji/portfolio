import Header from './Header';
import Home from './Home';
import Projects from './Projects';
import Menu from './Menu';
import Footer from './Footer';
import ProjectDetails from './ProjectDetails';

import { Route, Routes, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { hide as hideMenu } from '../redux/slices/menu';
import { applyTheme } from '../helpers/theme';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();
  const { pathname, hash } = useLocation();

  const { collapsed: menuCollapsed } = useSelector((state) => state.menu);
  const { theme } = useSelector((state) => state.theme);

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  // On first load, jump to the section in the URL once it has rendered.
  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView();
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (!hash && ['/', '/projects'].includes(pathname)) {
      window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
    }
  }, [pathname, hash]);

  useEffect(() => {
    if (!menuCollapsed) {
      const handleResize = () => {
        if (window.innerWidth > 600) {
          dispatch(hideMenu());
        }
      };
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [menuCollapsed, dispatch]);

  return menuCollapsed ? (
    <>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/projects/details/:id' element={<ProjectDetails />} />
        </Routes>
      </main>
      <Footer />
    </>
  ) : (
    <Menu />
  );
}

export default App;
