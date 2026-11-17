import UserSvg from '../images/icons/user.svg?react';
import BulbSvg from '../images/icons/bulb.svg?react';
import SeedSvg from '../images/icons/seed.svg?react';
import RocketSvg from '../images/icons/rocket.svg?react';
import MugSvg from '../images/icons/mug.svg?react';
import UserPlusSvg from '../images/icons/userPlus.svg?react';
import { Fragment } from 'react';
import Background from './Background';
import AnimatedComponent from './AnimatedComponent';
import CountUp from 'react-countup';
import {
  ABOUT_ITEMS,
  COUNTERS,
  EDUCATION,
  EXPERIENCE,
} from '../helpers/constants';

const aboutIcons = {
  user: <UserSvg />,
  bulb: <BulbSvg />,
  seed: <SeedSvg />,
  rocket: <RocketSvg />,
  mug: <MugSvg />,
  userPlus: <UserPlusSvg />,
};

function About() {
  return (
    <section id='about'>
      <div className='container'>
        <div className='content'>
          <h2 className='sectionHeader'>About Me</h2>
          <AnimatedComponent>
            <div className='glass'>
              {ABOUT_ITEMS.map((item) => (
                <div className='glassItem' key={item.icon}>
                  {aboutIcons[item.icon]}
                  <p className='text'>{item.text}</p>
                </div>
              ))}
            </div>
          </AnimatedComponent>
          <div className='counters'>
            {COUNTERS.map((counter, i) => (
              <Fragment key={counter.label}>
                {i > 0 && <div className='counterSplitter'></div>}
                <AnimatedComponent>
                  <div className='counterItem'>
                    <p className='count'>
                      <CountUp
                        end={counter.value}
                        duration={3}
                        enableScrollSpy
                      />
                      {counter.suffix}
                    </p>
                    <p className='label'>{counter.label}</p>
                  </div>
                </AnimatedComponent>
              </Fragment>
            ))}
          </div>
          <div className='background'>
            <div className='educations'>
              <AnimatedComponent>
                <h3 className='educationsHeader'>Education</h3>
              </AnimatedComponent>
              {EDUCATION.map((item) => (
                <AnimatedComponent key={item.label}>
                  <Background label={item.label} data={item.data} />
                </AnimatedComponent>
              ))}
            </div>
            <div className='experiences'>
              <AnimatedComponent>
                <h3 className='experiencesHeader'>Work Experience</h3>
              </AnimatedComponent>
              {EXPERIENCE.map((item) => (
                <AnimatedComponent key={item.label}>
                  <Background label={item.label} data={item.data} />
                </AnimatedComponent>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
