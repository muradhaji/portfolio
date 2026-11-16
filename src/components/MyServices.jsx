import { ReactComponent as MagnifierSvg } from '../images/icons/magnifier.svg';
import { ReactComponent as RocketSvg } from '../images/icons/rocket.svg';
import AnimatedComponent from './AnimatedComponent';
import { SERVICES } from '../helpers/constants';

const serviceIcons = {
  magnifier: <MagnifierSvg />,
  rocket: <RocketSvg />,
};

function MyServices() {
  return (
    <section id='services'>
      <div className='container'>
        <div className='content'>
          <h2 className='sectionHeader'>My Services</h2>
          <div className='services'>
            {SERVICES.map((service, i) => {
              const image = (
                <div className='image'>
                  {service.screens.map((screen, j) => (
                    <div
                      key={j}
                      className={
                        service.screens.length > 1
                          ? `screen screen${j + 1}`
                          : 'screen'
                      }
                    >
                      {screen.text && (
                        <span className='text'>{screen.text}</span>
                      )}
                      {screen.icon && (
                        <span className='icon'>
                          {serviceIcons[screen.icon]}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              );
              const text = (
                <div className='text'>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              );
              // Pictures alternate between the left and right side.
              const imageFirst = i % 2 === 0;

              return (
                <AnimatedComponent key={service.title}>
                  <div className={`service service${i + 1}`}>
                    {imageFirst ? image : text}
                    {imageFirst ? text : image}
                  </div>
                </AnimatedComponent>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default MyServices;
