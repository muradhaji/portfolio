import AnimatedComponent from './AnimatedComponent';
import ProjectsGrid from './ProjectsGrid';

function MyProjects() {
  return (
    <section id='projects'>
      <div className='container'>
        <div className='content'>
          <h2 className='sectionHeader'>My Projects</h2>
          <AnimatedComponent>
            <ProjectsGrid compact />
          </AnimatedComponent>
        </div>
      </div>
    </section>
  );
}

export default MyProjects;
