import { useEffect, useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setSelectedProject } from '../redux/actions/projects';
import { useNavigate } from 'react-router-dom';
import Skeleton from './Skeleton';
import { getProjects } from '../services/projectsSetvice';

function ProjectDetails() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const project = useSelector((state) => state.projects.selectedProject);

  const [projectsLoading, setProjectsLoading] = useState(false);

  const { id } = useParams();

  const getProjectById = useCallback(async (id) => {
    const projects = await getProjects();
    return projects.find((p) => String(p.id) === String(id)) || null;
  }, []);

  useEffect(() => {
    if (id) {
      setProjectsLoading(true);
      getProjectById(id)
        .then((projectData) => {
          if (!projectData || projectData?.mockComponent) {
            navigate('/projects', { replace: true });
          }
          dispatch(setSelectedProject(projectData));
        })
        .catch((err) => {
          console.error('Error fetching project:', err);
          navigate('/projects', { replace: true });
        })
        .finally(() => setProjectsLoading(false));
    } else {
      navigate('/projects', { replace: true });
    }

    return () => {
      dispatch(setSelectedProject(null));
    };
  }, [id, dispatch, getProjectById, navigate]);

  return (
    <section id='projectDetails'>
      <div className='container'>
        <div className='content'>
          <h1 className='sectionHeader'>Project Details</h1>
          {projectsLoading ? (
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
                      {project?.links.map((link, i) => (
                        <a
                          key={i}
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
                      {project?.contributors.map((contributor, i) => (
                        <a
                          key={i}
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
                      {project?.techStack.map((tech, i) => (
                        <span key={i} className='techItem'>
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
