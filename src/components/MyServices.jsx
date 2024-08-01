import { ReactComponent as MagnifierSvg } from '../images/icons/magnifier.svg';
import { ReactComponent as RocketSvg } from '../images/icons/rocket.svg';
import AnimatedComponent from './AnimatedComponent';

function MyServices() {
  return (
    <section id='services'>
      <div className='container'>
        <div className='content'>
          <h1 className='sectionHeader'>My Services</h1>
          <div className='services'>
            <AnimatedComponent>
              <div className='service service1'>
                <div className='image'>
                  <div className='screen'>
                    <span className='text'>1</span>
                  </div>
                </div>
                <div className='text'>
                  <h2>Single Page Applications</h2>
                  <p>
                    A single-page application (SPA) is a website or web
                    application that dynamically rewrites a current web page
                    with new data from the web server, instead of loading entire
                    new pages. Multi Page Applications
                  </p>
                </div>
              </div>
            </AnimatedComponent>
            <AnimatedComponent>
              <div className='service service2'>
                <div className='text'>
                  <h2>Multi Page Applications</h2>
                  <p>
                    A multi-page application (MPA) is a website made up of many
                    different sub-websites, or pages. When you interact with the
                    site, new pages are downloaded from the server. 
                  </p>
                </div>
                <div className='image'>
                  <div className='screen screen1'></div>
                  <div className='screen screen2'>
                    <span className='text'>3</span>
                  </div>
                  <div className='screen screen3'></div>
                </div>
              </div>
            </AnimatedComponent>
            <AnimatedComponent>
              <div className='service service3'>
                <div className='image'>
                  <div className='screen screen1'></div>
                  <div className='screen screen2'></div>
                  <div className='screen screen3'></div>
                </div>
                <div className='text'>
                  <h2>Responsive Design</h2>
                  <p>
                    Responsive web design (RWD) is a web design approach to make
                    web pages render well on all screen sizes and resolutions
                    while ensuring good usability. It is the way to design for a
                    multi-device web.
                  </p>
                </div>
              </div>
            </AnimatedComponent>
            <AnimatedComponent>
              <div className='service service4'>
                <div className='text'>
                  <h2>Search Engine Optimization</h2>
                  <p>
                    Search engine optimization (SEO) is the art and science of
                    getting pages to rank higher in search engines such as
                    Google. Because search is one of the main ways in which
                    people discover content online.
                  </p>
                </div>
                <div className='image'>
                  <div className='screen'>
                    <span className='icon'>
                      <MagnifierSvg />
                    </span>
                  </div>
                </div>
              </div>
            </AnimatedComponent>
            <AnimatedComponent>
              <div className='service service5'>
                <div className='image'>
                  <div className='screen'>
                    <span className='icon'>
                      <RocketSvg />
                    </span>
                  </div>
                </div>
                <div className='text'>
                  <h2>Performance Optimization</h2>
                  <p>
                    Performance Optimization is the process of refining the
                    efficiency of systems and applications to improve their
                    output, speed, or scalability. It plays a key role in
                    ensuring that the available resources are put to the best
                    use.
                  </p>
                </div>
              </div>
            </AnimatedComponent>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MyServices;
