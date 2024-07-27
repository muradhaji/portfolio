import Button from './Button';
import { ReactComponent as DownArrow } from '../images/icons/downArrow.svg';
import SocialIcon from './SocialIcon';

function Intro() {
  return (
    <section id='intro'>
      <div className='container'>
        <div className='content'>
          <div className='text'>
            <div className='greeting'>
              <h1>Hi!</h1>
              <h1>
                <span>I’m</span> <span>Murad</span> <span>Hajiyev</span>
              </h1>
              <div className='profession'>
                <div className='line'></div>
                <div className='name'>Web developer</div>
              </div>
            </div>
            <p className='summary'>
              A passionate front-end developer with two years of experience
              crafting immersive web experiences.
            </p>
            <div className='buttons'>
              <Button
                type='hashlink'
                to='#about'
                appearance='solid'
                text='Read more about me'
                icon={<DownArrow />}
              />
              <Button
                type='hashlink'
                to='/#projects'
                appearance='stroke'
                text='View projects'
              />
            </div>
          </div>
          <div className='socialIcons'>
            <SocialIcon
              media='linkedin'
              type='stroke'
              href='https://www.linkedin.com/in/muradhajiev'
              target='_blank'
            />
            <SocialIcon
              media='telegram'
              type='stroke'
              href='https://t.me/muradhajiyev13'
              target='_blank'
            />
            <SocialIcon
              media='email'
              type='stroke'
              href='mailto:muradhajiyev42@icloud.com'
            />
            <SocialIcon
              media='github'
              type='stroke'
              href='https://github.com/muradhaji'
              target='_blank'
            />
            <SocialIcon
              media='leetcode'
              type='stroke'
              href='https://leetcode.com/u/muradhajiyev/'
              target='_blank'
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
