import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

function Button({
  text = 'Button',
  type = 'button',
  to = '',
  appearance = 'solid',
  onClick = () => {},
  icon = null,
}) {
  return type === 'link' ? (
    <Link to={to} className={`button ${appearance} ${icon ? 'hasIcon' : ''}`}>
      <span className='text'>{text}</span>
      {icon && <span className='icon'>{icon}</span>}
    </Link>
  ) : type === 'hashlink' ? (
    <HashLink
      to={to}
      smooth
      className={`button ${appearance} ${icon ? 'hasIcon' : ''}`}
    >
      <span className='text'>{text}</span>
      {icon && <span className='icon'>{icon}</span>}
    </HashLink>
  ) : (
    <div
      onClick={onClick}
      className={`button ${appearance} ${icon ? 'hasIcon' : ''}`}
    >
      <span className='text'>{text}</span>
      {icon && <span className='icon'>{icon}</span>}
    </div>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  type: PropTypes.oneOf(['link', 'hashlink', 'button']),
  to: PropTypes.string,
  appearance: PropTypes.oneOf(['solid', 'stroke']),
  onClick: PropTypes.func,
  icon: PropTypes.node,
};

export default Button;
