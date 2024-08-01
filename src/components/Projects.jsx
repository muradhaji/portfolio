import ProjectsGrid from './ProjectsGrid';
import AnimatedComponent from './AnimatedComponent';

function Projects() {
  return (
    <section className='projects'>
      <div className='container'>
        <div className='content'>
          <h1 className='sectionHeader'>All Projects</h1>
          <AnimatedComponent>
            <ProjectsGrid />
          </AnimatedComponent>
        </div>
      </div>
    </section>
  );
}

export default Projects;
