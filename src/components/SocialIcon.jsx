import PropTypes from 'prop-types';
import { SOCIAL_LINKS } from '../helpers/constants';
import LinkedInSvg from '../images/icons/linkedin.svg?react';
import WhatsAppSvg from '../images/icons/whatsapp.svg?react';
import TelegramSvg from '../images/icons/telegram.svg?react';
import EnvelopeSvg from '../images/icons/envelope.svg?react';
import GitHubSvg from '../images/icons/github.svg?react';
import LeetCodeSvg from '../images/icons/leetcode.svg?react';
import LinktreeSvg from '../images/icons/linktree.svg?react';

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
