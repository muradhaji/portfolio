import Button from './Button';
import SocialIcon from './SocialIcon';

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

  const renderCustomPagination = (swiper, current, total) => {
    let generatedBullets = ``;

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
    link.download = 'Murad Hajiyev - Resume (Front-End Developer).pdf'; // The name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id='skills'>
      <div className='container'>
        <div className='content'>
          <h1 className='sectionHeader'>My Skills</h1>
          <div className='slider'>
            <Swiper
              modules={[Pagination, Autoplay]}
              className='customSwiper'
              // autoHeight={true}
              onSlideChange={(swiper) =>
                renderCustomPagination(
                  swiper,
                  swiper.activeIndex + 1,
                  swiper.slides.length
                )
              }
              pagination={{
                el: '.customPagination',
                type: 'custom',
                clickable: true,
                renderCustom: (swiper, current, total) =>
                  renderCustomPagination(swiper, current, total),
              }}
              autoplay={{ disableOnInteraction: true }}
            >
              {MY_SKILLS.map((group, i) => (
                <SwiperSlide className='customSlider' key={i}>
                  {group.skills.map((skillName, i) => (
                    <div className='skillComponent' key={i}>
                      {skillName}
                    </div>
                  ))}
                </SwiperSlide>
              ))}
            </Swiper>
            <div className='customPagination'></div>
          </div>
          <div className='contactInfo'>
            <div className='avatar'>
              <img src={Avatar} alt='Avatar' />
            </div>
            <div className='card'>
              <Button
                text='Download CV'
                type='button'
                onClick={handleDownload}
              />
              <p>Fell free to contact me</p>
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
                <SocialIcon
                  media='email'
                  href='mailto:murad.hajiyev00@gmail.com'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MySkills;
