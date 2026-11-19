import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import EyeSvg from '../images/icons/eye.svg?react';

function Project({ appearance, project }) {
  const { id, name, coverHorizontal, coverVertical, order, placeholder } =
    project;

  const content = (
    <>
      <div className='image'>
        <img
          src={appearance === 'vertical' ? coverVertical : coverHorizontal}
          alt={placeholder ? 'Upcoming project' : `${name} cover`}
        />
      </div>
      <div className='overlay'></div>
      <div className='bottom'>
        <span className='name'>{name}</span>
        <EyeSvg />
      </div>
    </>
  );

  return (
    <div className='projectContainer' style={{ '--order': order }}>
      {placeholder ? (
        <div className='projectLink'>{content}</div>
      ) : (
        <Link className='projectLink' to={`/projects/details/${id}`}>
          {content}
        </Link>
      )}
    </div>
  );
}

Project.propTypes = {
  appearance: PropTypes.oneOf(['horizontal', 'vertical']).isRequired,
  project: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    name: PropTypes.string.isRequired,
    coverHorizontal: PropTypes.string.isRequired,
    coverVertical: PropTypes.string.isRequired,
    order: PropTypes.number,
    placeholder: PropTypes.bool,
  }).isRequired,
};

export default Project;
