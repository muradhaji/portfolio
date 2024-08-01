import AnimatedComponent from './AnimatedComponent';
import ProjectsGrid from './ProjectsGrid';

function MyProjects() {
  return (
    <section id='projects'>
      <div className='container'>
        <div className='content'>
          <h1 className='sectionHeader'>My Projects</h1>
          <AnimatedComponent>
            <ProjectsGrid compact />
          </AnimatedComponent>
        </div>
      </div>
    </section>
  );
}

export default MyProjects;
