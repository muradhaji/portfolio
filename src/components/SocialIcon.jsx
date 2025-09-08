import PropTypes from 'prop-types';
import { ReactComponent as LinkedInSvg } from '../images/icons/linkedin.svg';
import { ReactComponent as WhatsAppSvg } from '../images/icons/whatsapp.svg';
import { ReactComponent as TelegramSvg } from '../images/icons/telegram.svg';
import { ReactComponent as EnvelopeSvg } from '../images/icons/envelope.svg';
import { ReactComponent as GitHubSvg } from '../images/icons/github.svg';
import { ReactComponent as LeetCodeSvg } from '../images/icons/leetcode.svg';
import { ReactComponent as BentoSvg } from '../images/icons/bento.svg';
import { ReactComponent as LinktreeSvg } from '../images/icons/linktree.svg';
import { ReactComponent as XMarkSvg } from '../images/icons/xmark.svg';

const mediaEnum = {
  linkedin: <LinkedInSvg />,
  whatsapp: <WhatsAppSvg />,
  telegram: <TelegramSvg />,
  email: <EnvelopeSvg />,
  github: <GitHubSvg />,
  leetcode: <LeetCodeSvg />,
  bento: <BentoSvg />,
  linktree: <LinktreeSvg />,
};

function SocialIcon({ media = null, type = null, ...props }) {
  return (
    <a className={`socialIcon ${type ? type : ''}`} {...props}>
      {media ? mediaEnum[media] : <XMarkSvg />}
    </a>
  );
}

export default SocialIcon;

SocialIcon.propTypes = {
  media: PropTypes.oneOf([
    'linkedin',
    'whatsapp',
    'telegram',
    'email',
    'github',
    'leetcode',
    'bento',
    'linktree',
  ]),
  type: PropTypes.oneOf(['transparent', 'stroke']),
};
