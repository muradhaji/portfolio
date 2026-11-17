import Button from './Button';
import { NOT_FOUND } from '../helpers/constants';

function NotFound() {
  return (
    <section id='notFound'>
      <div className='container'>
        <div className='content'>
          <h1 className='sectionHeader'>{NOT_FOUND.title}</h1>
          <p className='notFoundText'>{NOT_FOUND.text}</p>
          <Button type='link' to='/' text={NOT_FOUND.linkText} />
        </div>
      </div>
    </section>
  );
}

export default NotFound;
