import SocialIcon from './SocialIcon';
import { SOCIAL_LINKS } from '../helpers/constants';

function Footer() {
  return (
    <footer>
      <div className='container'>
        <div className='content'>
          <p>&copy; 2024–{new Date().getFullYear()} | Murad Hajiyev</p>
          <div className='socialIcons'>
            {Object.keys(SOCIAL_LINKS).map((media) => (
              <SocialIcon key={media} media={media} />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
