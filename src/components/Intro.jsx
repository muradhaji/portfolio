import { Fragment } from 'react';
import Button from './Button';
import DownArrow from '../images/icons/downArrow.svg?react';
import SocialIcon from './SocialIcon';
import AnimatedComponent from './AnimatedComponent';
import { PROFILE } from '../helpers/constants';

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
                  <span>I'm</span>
                  {PROFILE.name.split(' ').map((word) => (
                    <Fragment key={word}>
                      {' '}
                      <span>{word}</span>
                    </Fragment>
                  ))}
                </h1>
                <div className='profession'>
                  <div className='line'></div>
                  <div className='name'>{PROFILE.title}</div>
                </div>
              </div>
              <p className='summary'>{PROFILE.summary}</p>
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
