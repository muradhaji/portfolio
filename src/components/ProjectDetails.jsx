import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate, useParams } from 'react-router-dom';
import Skeleton from './Skeleton';
import { getProjectById } from '../services/projectsService';

function DetailsRow({ label, className, children }) {
  return (
    <div className={`detailsRow ${className}`}>
      <div className='detailsRowContent'>
        <h3 className='detailsLabel'>{label}</h3>
        <div className='detailsContainer'>{children}</div>
      </div>
      <div className='line'></div>
    </div>
  );
}

DetailsRow.propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

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
                <DetailsRow label='Timeline' className='timeline'>
                  <span>
                    {project.timeline.start} – {project.timeline.end}
                  </span>
                </DetailsRow>
              )}

              {project?.links?.length > 0 && (
                <DetailsRow label='Links' className='links'>
                  {project.links.map((link) => (
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
                </DetailsRow>
              )}

              {project?.contributors?.length > 0 && (
                <DetailsRow label='Contributors' className='contributors'>
                  {project.contributors.map((contributor) => (
                    <a
                      key={contributor.name}
                      href={contributor.url}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='contributorLink'
                    >
                      {contributor.name} {`(${contributor.roles.join(' / ')})`}
                    </a>
                  ))}
                </DetailsRow>
              )}

              {project?.techStack?.length > 0 && (
                <DetailsRow label='Tech stack' className='techStack'>
                  {project.techStack.map((tech) => (
                    <span key={tech} className='techItem'>
                      {tech}
                    </span>
                  ))}
                </DetailsRow>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default ProjectDetails;
