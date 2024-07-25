import ProjectsGrid from './ProjectsGrid';

function MyProjects() {
  return (
    <section id='projects'>
      <div className='container'>
        <div className='content'>
          <h1 className='sectionHeader'>My Projects</h1>
          <ProjectsGrid compact />
        </div>
      </div>
    </section>
  );
}

export default MyProjects;
