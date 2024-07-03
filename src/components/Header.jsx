import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import { THEME } from '../helpers/constants';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { set as setTheme } from '../redux/actions/theme';
import { toggle as toggleMenu } from '../redux/actions/menu';

import { ReactComponent as SunSvg } from '../images/icons/sun.svg';
import { ReactComponent as MoonSvg } from '../images/icons/moon.svg';
import { ReactComponent as BarsSvg } from '../images/icons/bars.svg';

function Header() {
  let dispatch = useDispatch();

  let { theme } = useSelector((state) => state.theme);

  useEffect(() => {
    let lsTheme = localStorage.getItem(THEME.LS_NAME) || THEME.SYSTEM;
    if (lsTheme === THEME.SYSTEM) {
      let themeQuery = window.matchMedia('(prefers-color-scheme: light)');
      changeTheme(themeQuery.matches ? THEME.LIGHT : THEME.DARK);
    } else {
      changeTheme(lsTheme);
    }
    // eslint-disable-next-line
  }, []);

  function changeTheme(themeValue) {
    dispatch(setTheme(themeValue));
    document.documentElement.setAttribute('class', themeValue);
    document.documentElement.style.colorScheme = themeValue;
    localStorage.setItem(THEME.LS_NAME, themeValue);
  }

  return (
    <>
      <header>
        <div className='container'>
          <nav className='menu'>
            <Link to='/' className='link logo'>
              Mh
            </Link>
            <div className='rightContainer'>
              <HashLink smooth to='/#about' className='link'>
                About
              </HashLink>
              <HashLink smooth to='/#services' className='link'>
                Services
              </HashLink>
              <HashLink smooth to='/#projects' className='link'>
                Projects
              </HashLink>
              
              {theme === THEME.LIGHT ? (
                <MoonSvg
                  className='toggleTheme'
                  onClick={() => {
                    changeTheme(THEME.DARK);
                  }}
                />
              ) : (
                <SunSvg
                  className='toggleTheme'
                  onClick={() => {
                    changeTheme(THEME.LIGHT);
                  }}
                />
              )}

              <BarsSvg
                className='toggleMenu'
                onClick={() => {
                  dispatch(toggleMenu());
                }}
              />
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
