import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ReactComponent as EyeSvg } from '../images/icons/eye.svg';

function Project({ appearance, project }) {
  let { id, name, coverHorizontal, coverVertical, order, mockComponent } =
    project || {};

  return (
    <div className='projectContainer' style={{ '--order': order }}>
      <Link
        target={mockComponent ? '_self' : '_blank'}
        to={mockComponent ? '#' : `/projects/details/${id}`}
      >
        <div className='image'>
          {appearance === 'vertical' ? (
            <img src={coverVertical} alt='Cover' />
          ) : (
            <img src={coverHorizontal} alt='Cover' />
          )}
        </div>
        <div className='overlay'></div>
        <div className='bottom'>
          <span className='name'>{name}</span>
          <EyeSvg />
        </div>
      </Link>
    </div>
  );
}

export default Project;

Project.propTypes = {
  appearance: PropTypes.oneOf(['horizontal', 'vertical']).isRequired,
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    coverHorizontal: PropTypes.string.isRequired,
    coverVertical: PropTypes.string.isRequired,
  }),
};
