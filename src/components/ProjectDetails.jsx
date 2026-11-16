import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Skeleton from './Skeleton';
import { getProjectById } from '../services/projectsService';

function ProjectDetails() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [project, setProject] = useState(null);
  const [projectLoading, setProjectLoading] = useState(true);

  useEffect(() => {
    let ignore = false;

    setProjectLoading(true);
    getProjectById(id)
      .then((projectData) => {
        if (ignore) return;
        if (!projectData || projectData.mockComponent) {
          navigate('/projects', { replace: true });
          return;
        }
        setProject(projectData);
      })
      .catch((err) => {
        console.error('Error fetching project:', err);
        navigate('/projects', { replace: true });
      })
      .finally(() => {
        if (!ignore) setProjectLoading(false);
      });

    return () => {
      ignore = true;
    };
  }, [id, navigate]);

  return (
    <section id='projectDetails'>
      <div className='container'>
        <div className='content'>
          <h1 className='sectionHeader'>Project Details</h1>
          {projectLoading ? (
            <Skeleton />
          ) : (
            <div className='projectDetails'>
              <h2 className='projectTitle'>{project?.name}</h2>

              {project?.description && (
                <p className='projectDescription'>{project?.description}</p>
              )}

              {project?.timeline && (
                <div className='detailsRow timeline'>
                  <div className='detailsRowContent'>
                    <h3 className='detailsLabel'>Timeline</h3>
                    <div className='detailsContainer'>
                      <span>
                        {project?.timeline?.start} – {project?.timeline?.end}
                      </span>
                    </div>
                  </div>
                  <div className='line'></div>
                </div>
              )}

              {project?.links && project?.links?.length > 0 && (
                <div className='detailsRow links'>
                  <div className='detailsRowContent'>
                    <h3 className='detailsLabel'>Links</h3>
                    <div className='detailsContainer'>
                      {project?.links.map((link) => (
                        <a
                          key={link.url}
                          href={link.url}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='projectLink'
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className='line'></div>
                </div>
              )}

              {project?.contributors && project?.contributors.length > 0 && (
                <div className='detailsRow contributors'>
                  <div className='detailsRowContent'>
                    <h3 className='detailsLabel'>Contributors</h3>
                    <div className='detailsContainer'>
                      {project?.contributors.map((contributor) => (
                        <a
                          key={contributor.name}
                          href={contributor.url}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='contributorLink'
                        >
                          {contributor.name}{' '}
                          {`(${contributor.roles.join(' / ')})`}
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className='line'></div>
                </div>
              )}

              {project?.techStack && project?.techStack.length > 0 && (
                <div className='detailsRow techStack'>
                  <div className='detailsRowContent'>
                    <h3 className='detailsLabel'>Tech Stack</h3>
                    <div className='detailsContainer'>
                      {project?.techStack.map((tech) => (
                        <span key={tech} className='techItem'>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className='line'></div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default ProjectDetails;
