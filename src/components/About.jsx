import { ReactComponent as UserSvg } from '../images/icons/user.svg';
import { ReactComponent as BulbSvg } from '../images/icons/bulb.svg';
import { ReactComponent as SeedSvg } from '../images/icons/seed.svg';
import { ReactComponent as RocketSvg } from '../images/icons/rocket.svg';
import { ReactComponent as MugSvg } from '../images/icons/mug.svg';
import { ReactComponent as UserPlusSvg } from '../images/icons/userPlus.svg';
import Background from './Background';

function About() {
  return (
    <section id='about'>
      <div className='container'>
        <div className='content'>
          <h1 className='sectionHeader'>About me</h1>
          <div className='glass'>
            <div className='glassItem'>
              <UserSvg />
              <p className='text'>
                A passionate front-end developer. With two years of experience
                crafting immersive web experiences, I specialize in HTML, CSS,
                JavaScript, and ReactJS for building dynamic user interfaces.
              </p>
            </div>
            <div className='glassItem'>
              <BulbSvg />
              <p className='text'>
                I love turning ideas into user-friendly interfaces and solving
                challenges to deliver quality solutions. Besides front-end
                development, I excel at using data structures and algorithms to
                make my code efficient and perform well.
              </p>
            </div>
            <div className='glassItem'>
              <SeedSvg />
              <p className='text'>
                Currently, I'm expanding my skill set by diving deeper into
                Node.js and honing my JavaScript skills to become a well-rounded
                full-stack developer.
              </p>
            </div>
            <div className='glassItem'>
              <RocketSvg />
              <p className='text'>
                Whether it's building responsive websites, developing
                interactive web applications, or exploring new technologies, I'm
                dedicated to pushing the boundaries of what's possible in web
                development.
              </p>
            </div>
            <div className='glassItem'>
              <MugSvg />
              <p className='text'>
                When I'm not coding or teaching, you can find me exploring the
                latest trends in web design, working on personal projects, or
                contributing to open-source initiatives.
              </p>
            </div>
            <div className='glassItem'>
              <UserPlusSvg />
              <p className='text'>
                Let's connect and collaborate on exciting projects together!
              </p>
            </div>
          </div>
          <div className='counters'>
            <div className='counterItem'>
              <h1 className='count'>2+</h1>
              <p className='label'>Years of experience</p>
            </div>
            <div className='counterSplitter'></div>
            <div className='counterItem'>
              <h1 className='count'>0</h1>
              <p className='label'>Completed Projects</p>
            </div>
            <div className='counterSplitter'></div>
            <div className='counterItem'>
              <h1 className='count'>0</h1>
              <p className='label'>Customers</p>
            </div>
          </div>
          <div className='background'>
            <div className='educations'>
              <h2 className='educationsHeader'>Education</h2>
              <Background
                label='Code Academy'
                data={[
                  {
                    name: 'Software development',
                    start: '10/2021',
                    end: '02/2022',
                  },
                ]}
              />
              <Background
                label='Azerbaijan Technical University | Bachelor'
                data={[
                  {
                    name: 'İnformation technologies engineering',
                    start: '09/2018',
                    end: '06/2022',
                  },
                ]}
              />
            </div>
            <div className='experiences'>
              <h2 className='experiencesHeader'>Work Experience</h2>
              <Background
                label='Algo Academy'
                data={[
                  {
                    name: 'Front-end educator',
                    start: '10/2023',
                    end: '07/2024',
                  },
                ]}
              />
              <Background
                label='Qmeter'
                data={[
                  {
                    name: 'Front-end developer',
                    start: '09/2021',
                    end: '05/2022',
                  },
                  {
                    name: 'Front-end developer (intern)',
                    start: '06/2021',
                    end: '09/2021',
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
