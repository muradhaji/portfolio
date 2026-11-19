import Button from './Button';
import SocialIcon from './SocialIcon';
import AnimatedComponent from './AnimatedComponent';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { CV, MY_SKILLS, PROFILE } from '../helpers/constants';

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

    // Swiper needs an HTML string here; buttons keep the dots keyboard usable.
    for (let i = 1; i <= total; i++) {
      const { sliderLabel } = MY_SKILLS[i - 1];
      generatedBullets += `<button
          type="button"
          class="swiper-pagination-bullet customBullet ${getBulletClass(
            i,
            current
          )}"
          aria-label="Show ${sliderLabel.toLowerCase()} slide"
          ${i === current ? 'aria-current="true"' : ''}
        >
          ${i === current ? sliderLabel : ''}
        </button>`;
    }

    return generatedBullets;
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = CV.href;
    link.download = CV.fileName;
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
                <img src='/avatar.jpeg' alt={PROFILE.name} />
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
