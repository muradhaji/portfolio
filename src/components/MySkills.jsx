import Button from './Button';
import SocialIcon from './SocialIcon';
import AnimatedComponent from './AnimatedComponent';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { MY_SKILLS } from '../helpers/constants';

import Avatar from '../images/avatar.jpeg';

import 'swiper/css';
import 'swiper/css/pagination';

function MySkills() {
  const getBulletClass = (i, current) => {
    if (i === current) {
      return 'currentBullet';
    } else if (i === current - 1) {
      return 'prevBullet';
    } else if (i === current - 2) {
      return 'prevPrevBullet';
    } else if (i === current + 1) {
      return 'nextBullet';
    } else if (i === current + 2) {
      return 'nextNextBullet';
    } else {
      return 'hiddenBullet';
    }
  };

  const renderCustomPagination = (current, total) => {
    let generatedBullets = '';

    for (let i = 1; i <= total; i++) {
      generatedBullets += `<span
          class="${`swiper-pagination-bullet customBullet ${getBulletClass(
            i,
            current
          )}`}"
        >
          ${i === current ? MY_SKILLS[current - 1].sliderLabel : ''}
        </span>`;
    }

    return generatedBullets;
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Murad Hajiyev - CV (Front-End Developer).pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id='skills'>
      <div className='container'>
        <div className='content'>
          <h2 className='sectionHeader'>My Skills</h2>
          <AnimatedComponent>
            <div className='slider'>
              <Swiper
                modules={[Pagination, Autoplay]}
                className='customSwiper'
                pagination={{
                  el: '.customPagination',
                  type: 'custom',
                  clickable: true,
                  renderCustom: (swiper, current, total) =>
                    renderCustomPagination(current, total),
                }}
                autoplay={{ disableOnInteraction: true }}
              >
                {MY_SKILLS.map((group) => (
                  <SwiperSlide className='customSlider' key={group.sliderLabel}>
                    {group.skills.map((skillName) => (
                      <div className='skillComponent' key={skillName}>
                        {skillName}
                      </div>
                    ))}
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className='customPagination'></div>
            </div>
          </AnimatedComponent>
          <div className='contactInfo'>
            <AnimatedComponent>
              <div className='avatar'>
                <img src={Avatar} alt='Murad Hajiyev' />
              </div>
            </AnimatedComponent>
            <AnimatedComponent>
              <div className='card'>
                <Button
                  text='Download CV'
                  type='button'
                  onClick={handleDownload}
                />
                <p>Feel free to contact me.</p>
                <div className='socialIcons'>
                  {['linkedin', 'whatsapp', 'telegram', 'email'].map(
                    (media) => (
                      <SocialIcon key={media} media={media} />
                    )
                  )}
                </div>
              </div>
            </AnimatedComponent>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MySkills;
