import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import { NAV_LINKS, THEME } from '../helpers/constants';
import {
  getStoredTheme,
  storeTheme,
  SYSTEM_LIGHT_QUERY,
} from '../helpers/theme';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { set as setTheme } from '../redux/slices/theme';
import { toggle as toggleMenu } from '../redux/slices/menu';

import SunSvg from '../images/icons/sun.svg?react';
import MoonSvg from '../images/icons/moon.svg?react';
import BarsSvg from '../images/icons/bars.svg?react';

function Header() {
  const dispatch = useDispatch();

  const { theme } = useSelector((state) => state.theme);

  // Follow the system setting until the user picks a theme themselves.
  useEffect(() => {
    const query = window.matchMedia(SYSTEM_LIGHT_QUERY);
    const handleChange = (event) => {
      if (!getStoredTheme()) {
        dispatch(setTheme(event.matches ? THEME.LIGHT : THEME.DARK));
      }
    };
    query.addEventListener('change', handleChange);
    return () => query.removeEventListener('change', handleChange);
  }, [dispatch]);

  const changeTheme = (themeValue) => {
    storeTheme(themeValue);
    dispatch(setTheme(themeValue));
  };

  const nextTheme = theme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT;

  return (
    <header>
      <div className='container'>
        <nav className='menu'>
          <Link to='/' className='link logo'>
            Mh
          </Link>
          <div className='rightContainer'>
            {NAV_LINKS.filter((link) => !link.menuOnly).map((link) =>
              link.hash ? (
                <HashLink key={link.to} smooth to={link.to} className='link'>
                  {link.label}
                </HashLink>
              ) : (
                <Link key={link.to} to={link.to} className='link'>
                  {link.label}
                </Link>
              )
            )}

            <button
              type='button'
              className='iconButton toggleTheme'
              aria-label={`Switch to ${nextTheme} theme`}
              onClick={() => changeTheme(nextTheme)}
            >
              {theme === THEME.LIGHT ? <MoonSvg /> : <SunSvg />}
            </button>

            <button
              type='button'
              className='iconButton toggleMenu'
              aria-label='Open menu'
              onClick={() => dispatch(toggleMenu())}
            >
              <BarsSvg />
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
