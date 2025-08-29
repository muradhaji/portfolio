import Header from './Header';
import Home from './Home';
import Projects from './Projects';
import Menu from './Menu';
import Footer from './Footer';
import ProjectDetails from './ProjectDetails';

import { Route, Routes, useLocation } from 'react-router-dom';
import { THEME } from '../helpers/constants';
import { useDispatch, useSelector } from 'react-redux';
import { hide as hideMenu } from '../redux/actions/menu';
import { useEffect } from 'react';

function App() {
  let dispatch = useDispatch();
  const { pathname } = useLocation();

  let { collapsed: menuCollapsed } = useSelector((state) => state.menu);
  let { theme } = useSelector((state) => state.theme);

  useEffect(() => {
    if (['/', '/projects'].includes(pathname)) {
      window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
    }
  }, [pathname]);

  useEffect(() => {
    if (!menuCollapsed) {
      const handleResize = () => {
        if (window.innerWidth > 600) {
          dispatch(hideMenu());
          window.removeEventListener('resize', handleResize);
        }
      };
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
    // eslint-disable-next-line
  }, [menuCollapsed]);

  return (
    <>
      {theme === THEME.LIGHT ? (
        <meta name='theme-color' content='#ffffff' />
      ) : (
        <meta name='theme-color' content='#000000' />
      )}

      {menuCollapsed ? (
        <>
          <Header></Header>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/projects/details/:id' element={<ProjectDetails />} />
          </Routes>
          <Footer></Footer>
        </>
      ) : (
        <Menu />
      )}
    </>
  );
}

export default App;
