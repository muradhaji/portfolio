import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { hide } from '../redux/actions/menu';
import { useDispatch } from 'react-redux';

import { ReactComponent as XmarkSVG } from '../images/icons/xmark.svg';

function Menu() {
  let dispatch = useDispatch();

  return (
    <div className='popUpMenu'>
      <div className='container'>
        <div className='buttonContainer'>
          <XmarkSVG
            className='closeMenu'
            onClick={() => {
              dispatch(hide());
            }}
          />
        </div>
        <div className='linksContainer'>
          <Link
            to='/'
            className='link'
            onClick={() => {
              dispatch(hide());
            }}
          >
            Home
          </Link>
          <HashLink
            smooth
            to='/#about'
            className='link'
            onClick={() => {
              dispatch(hide());
            }}
          >
            About
          </HashLink>
          <HashLink
            smooth
            to='/#skills'
            className='link'
            onClick={() => {
              dispatch(hide());
            }}
          >
            Skills
          </HashLink>
          <HashLink
            smooth
            to='/#services'
            className='link'
            onClick={() => {
              dispatch(hide());
            }}
          >
            Services
          </HashLink>
          <Link
            to='/projects'
            className='link'
            onClick={() => {
              dispatch(hide());
            }}
          >
            Projects
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Menu;
