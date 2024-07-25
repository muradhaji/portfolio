import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ReactComponent as EyeSvg } from '../images/icons/eye.svg';

function Project({ appearance, project }) {
  let { name, coverHorizontal, coverVertical, url } = project || {};
  return (
    <div className='projectContainer'>
      <Link to={url} target='_blank'>
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
    url: PropTypes.string.isRequired,
  }),
};
