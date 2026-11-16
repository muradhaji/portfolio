import Button from './Button';
import { ReactComponent as DownArrow } from '../images/icons/downArrow.svg';
import SocialIcon from './SocialIcon';
import AnimatedComponent from './AnimatedComponent';

function Intro() {
  return (
    <section id='intro'>
      <div className='container'>
        <AnimatedComponent>
          <div className='content'>
            <div className='text'>
              <div className='greeting'>
                <p className='hi'>Hi!</p>
                <h1>
                  <span>I'm</span> <span>Murad</span> <span>Hajiyev</span>
                </h1>
                <div className='profession'>
                  <div className='line'></div>
                  <div className='name'>Front-End Developer</div>
                </div>
              </div>
              <p className='summary'>
                Focused on building responsive, scalable applications and
                delivering clean, user-centered solutions in agile environments.
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
              {['linkedin', 'telegram', 'email', 'github', 'leetcode'].map(
                (media) => (
                  <SocialIcon key={media} media={media} type='stroke' />
                )
              )}
            </div>
          </div>
        </AnimatedComponent>
      </div>
    </section>
  );
}

export default Intro;
