import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ReactComponent as EyeSvg } from '../images/icons/eye.svg';

function Project({ appearance, project }) {
  const { id, name, coverHorizontal, coverVertical, order, mockComponent } =
    project;

  const content = (
    <>
      <div className='image'>
        <img
          src={appearance === 'vertical' ? coverVertical : coverHorizontal}
          alt={mockComponent ? 'Upcoming project' : `${name} cover`}
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
      {mockComponent ? (
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
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    coverHorizontal: PropTypes.string.isRequired,
    coverVertical: PropTypes.string.isRequired,
    order: PropTypes.number,
    mockComponent: PropTypes.bool,
  }).isRequired,
};

export default Project;
