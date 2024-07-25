import ProjectsGrid from './ProjectsGrid';

function Projects() {
  return (
    <section className='projects'>
      <div className='container'>
        <div className='content'>
          <h1 className='sectionHeader'>All Projects</h1>
          <ProjectsGrid />
        </div>
      </div>
    </section>
  );
}

export default Projects;
