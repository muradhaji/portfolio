import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { useDispatch } from 'react-redux';
import { hide } from '../redux/slices/menu';
import { NAV_LINKS } from '../helpers/constants';

import XmarkSVG from '../images/icons/xmark.svg?react';

function Menu() {
  const dispatch = useDispatch();

  const hideMenu = () => dispatch(hide());

  return (
    <div className='popUpMenu'>
      <div className='container'>
        <div className='buttonContainer'>
          <button
            type='button'
            className='iconButton closeMenu'
            aria-label='Close menu'
            onClick={hideMenu}
          >
            <XmarkSVG />
          </button>
        </div>
        <nav className='linksContainer'>
          {NAV_LINKS.map((link) =>
            link.hash ? (
              <HashLink
                key={link.to}
                smooth
                to={link.to}
                className='link'
                onClick={hideMenu}
              >
                {link.label}
              </HashLink>
            ) : (
              <Link
                key={link.to}
                to={link.to}
                className='link'
                onClick={hideMenu}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>
      </div>
    </div>
  );
}

export default Menu;
