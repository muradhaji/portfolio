import { Link } from 'react-router-dom';

function Home() {
  return (
    <div
      style={{
        padding: '24px 0px',
        background: 'linear-gradient(90deg, #ffffff, #d0d0d0)',
      }}
    >
      <div className='container'>
        <section id='about'>
          <h1>Test Section About</h1>
          <br />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum
            fugit quaerat dolorem unde placeat amet consequatur quam
            exercitationem iste porro, ipsum laudantium reiciendis distinctio ut
            minima, eius similique blanditiis ipsa.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum
            fugit quaerat dolorem unde placeat amet consequatur quam
            exercitationem iste porro, ipsum laudantium reiciendis distinctio ut
            minima, eius similique blanditiis ipsa.
          </p>
          <br />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum
            fugit quaerat dolorem unde placeat amet consequatur quam
            exercitationem iste porro, ipsum laudantium reiciendis distinctio ut
            minima, eius similique blanditiis ipsa.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum
            fugit quaerat dolorem unde placeat amet consequatur quam
            exercitationem iste porro, ipsum laudantium reiciendis distinctio ut
            minima, eius similique blanditiis ipsa.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum
            fugit quaerat dolorem unde placeat amet consequatur quam
            exercitationem iste porro, ipsum laudantium reiciendis distinctio ut
            minima, eius similique blanditiis ipsa.
          </p>
          <br />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum
            fugit quaerat dolorem unde placeat amet consequatur quam
            exercitationem iste porro, ipsum laudantium reiciendis distinctio ut
            minima, eius similique blanditiis ipsa.
          </p>
        </section>
        <section id='services' style={{ padding: '24px 0px' }}>
          <h1>Test Section Services</h1>
          <br />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum
            fugit quaerat dolorem unde placeat amet consequatur quam
            exercitationem iste porro, ipsum laudantium reiciendis distinctio ut
            minima, eius similique blanditiis ipsa.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum
            fugit quaerat dolorem unde placeat amet consequatur quam
            exercitationem iste porro, ipsum laudantium reiciendis distinctio ut
            minima, eius similique blanditiis ipsa.
          </p>
          <br />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum
            fugit quaerat dolorem unde placeat amet consequatur quam
            exercitationem iste porro, ipsum laudantium reiciendis distinctio ut
            minima, eius similique blanditiis ipsa.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum
            fugit quaerat dolorem unde placeat amet consequatur quam
            exercitationem iste porro, ipsum laudantium reiciendis distinctio ut
            minima, eius similique blanditiis ipsa.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum
            fugit quaerat dolorem unde placeat amet consequatur quam
            exercitationem iste porro, ipsum laudantium reiciendis distinctio ut
            minima, eius similique blanditiis ipsa.
          </p>
          <br />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum
            fugit quaerat dolorem unde placeat amet consequatur quam
            exercitationem iste porro, ipsum laudantium reiciendis distinctio ut
            minima, eius similique blanditiis ipsa.
          </p>
        </section>
        <section id='projects' style={{ padding: '24px 0px' }}>
          <h1>Test Section Projects </h1>
          <br />
          <Link to='/projects' style={{ textDecoration: 'underline' }}>
            All Projects
          </Link>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum
            fugit quaerat dolorem unde placeat amet consequatur quam
            exercitationem iste porro, ipsum laudantium reiciendis distinctio ut
            minima, eius similique blanditiis ipsa.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum
            fugit quaerat dolorem unde placeat amet consequatur quam
            exercitationem iste porro, ipsum laudantium reiciendis distinctio ut
            minima, eius similique blanditiis ipsa.
          </p>
          <br />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum
            fugit quaerat dolorem unde placeat amet consequatur quam
            exercitationem iste porro, ipsum laudantium reiciendis distinctio ut
            minima, eius similique blanditiis ipsa.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum
            fugit quaerat dolorem unde placeat amet consequatur quam
            exercitationem iste porro, ipsum laudantium reiciendis distinctio ut
            minima, eius similique blanditiis ipsa.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum
            fugit quaerat dolorem unde placeat amet consequatur quam
            exercitationem iste porro, ipsum laudantium reiciendis distinctio ut
            minima, eius similique blanditiis ipsa.
          </p>
          <br />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum
            fugit quaerat dolorem unde placeat amet consequatur quam
            exercitationem iste porro, ipsum laudantium reiciendis distinctio ut
            minima, eius similique blanditiis ipsa.
          </p>
        </section>
      </div>
    </div>
  );
}

export default Home;
