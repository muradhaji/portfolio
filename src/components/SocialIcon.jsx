import PropTypes from 'prop-types';
import { SOCIAL_LINKS } from '../helpers/constants';
import { ReactComponent as LinkedInSvg } from '../images/icons/linkedin.svg';
import { ReactComponent as WhatsAppSvg } from '../images/icons/whatsapp.svg';
import { ReactComponent as TelegramSvg } from '../images/icons/telegram.svg';
import { ReactComponent as EnvelopeSvg } from '../images/icons/envelope.svg';
import { ReactComponent as GitHubSvg } from '../images/icons/github.svg';
import { ReactComponent as LeetCodeSvg } from '../images/icons/leetcode.svg';
import { ReactComponent as LinktreeSvg } from '../images/icons/linktree.svg';

const mediaIcons = {
  linkedin: <LinkedInSvg />,
  whatsapp: <WhatsAppSvg />,
  telegram: <TelegramSvg />,
  email: <EnvelopeSvg />,
  github: <GitHubSvg />,
  leetcode: <LeetCodeSvg />,
  linktree: <LinktreeSvg />,
};

function SocialIcon({ media, type = null }) {
  const { label, href } = SOCIAL_LINKS[media];
  const isExternal = !href.startsWith('mailto:');

  return (
    <a
      className={`socialIcon ${type ? type : ''}`}
      href={href}
      aria-label={label}
      {...(isExternal && { target: '_blank', rel: 'noopener noreferrer' })}
    >
      {mediaIcons[media]}
    </a>
  );
}

SocialIcon.propTypes = {
  media: PropTypes.oneOf(Object.keys(SOCIAL_LINKS)).isRequired,
  type: PropTypes.oneOf(['transparent', 'stroke']),
};

export default SocialIcon;
