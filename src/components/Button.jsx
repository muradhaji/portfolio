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
  const className = `button ${appearance} ${icon ? 'hasIcon' : ''}`;
  const content = (
    <>
      <span className='text'>{text}</span>
      {icon && <span className='icon'>{icon}</span>}
    </>
  );

  if (type === 'link') {
    return (
      <Link to={to} className={className}>
        {content}
      </Link>
    );
  }

  if (type === 'hashlink') {
    return (
      <HashLink to={to} smooth className={className}>
        {content}
      </HashLink>
    );
  }

  return (
    <button type='button' onClick={onClick} className={className}>
      {content}
    </button>
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
