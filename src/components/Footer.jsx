import SocialIcon from './SocialIcon';

function Footer() {
  return (
    <footer>
      <div className='container'>
        <div className='content'>
          <p>&copy; 2024 | Murad Hajiyev</p>
          <div className='socialIcons'>
            <SocialIcon
              media='linkedin'
              href='https://www.linkedin.com/in/muradhajiev'
              target='_blank'
            />
            <SocialIcon
              media='whatsapp'
              href='https://wa.me/994557088909'
              target='_blank'
            />
            <SocialIcon
              media='telegram'
              href='https://t.me/muradhajiyev13'
              target='_blank'
            />
            <SocialIcon media='email' href='mailto:muradhajiyev42@icloud.com' />
            <SocialIcon
              media='github'
              href='https://github.com/muradhaji'
              target='_blank'
            />
            <SocialIcon
              media='leetcode'
              href='https://leetcode.com/u/muradhajiyev/'
              target='_blank'
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
