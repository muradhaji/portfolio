import { useEffect, useMemo, useState } from 'react';
import useBreakpoint from './useBreakpoint';

import PropTypes from 'prop-types';
import CountUp from 'react-countup';

import Project from './Project';
import Button from './Button';
import Skeleton from './Skeleton';

import { PROJECT_COLUMN_COUNTS } from '../helpers/constants';
import { getProjects } from '../services/projectsService';

function ProjectsGrid({ compact = false }) {
  const breakPoint = useBreakpoint();
  const projectColumns = PROJECT_COLUMN_COUNTS[breakPoint] || 2;

  const [projects, setProjects] = useState([]);
  const [projectsLoading, setProjectsLoading] = useState(false);
  const [projectsError, setProjectsError] = useState(null);

  useEffect(() => {
    setProjectsLoading(true);
    getProjects()
      .then((data) => {
        setProjects(data);
      })
      .catch((err) => {
        setProjectsError('Could not load projects.');
        console.error('Error fetching projects:', err);
      })
      .finally(() => setProjectsLoading(false));
  }, []);

  const visibleProjects = compact
    ? projects.slice(0, projectColumns * 2)
    : projects;

  const groupedProjects = useMemo(() => {
    const groups = Array.from({ length: projectColumns }, () => []);
    visibleProjects.forEach((project, i) => {
      groups[i % projectColumns].push(project);
    });
    return groups;
  }, [projectColumns, visibleProjects]);

  const countRealProjects = (list) => list.filter((p) => !p.mockComponent).length;
  const moreProjectsCount =
    countRealProjects(projects) - countRealProjects(visibleProjects);

  return (
    <div className='projectsGrid'>
      {projectsLoading ? (
        <Skeleton />
      ) : projectsError ? (
        <h3>{projectsError}</h3>
      ) : (
        <>
          <div className='grid'>
            {groupedProjects.map((projectGroup, i) => (
              <div className='column' key={i}>
                {projectGroup.map((project, j) => {
                  return (
                    <Project
                      appearance={
                        i % 2 === 0
                          ? j % 2
                            ? 'vertical'
                            : 'horizontal'
                          : j % 2
                          ? 'horizontal'
                          : 'vertical'
                      }
                      project={project}
                      key={project.id}
                    />
                  );
                })}
              </div>
            ))}
          </div>
          {compact && (
            <div className='moreProjects'>
              {moreProjectsCount > 0 ? (
                <>
                  {moreProjectsCount > 1 ? (
                    <p>
                      There are{' '}
                      <CountUp
                        end={moreProjectsCount}
                        duration={3}
                        enableScrollSpy
                      />{' '}
                      more projects.
                    </p>
                  ) : (
                    <p>There is 1 more project.</p>
                  )}
                  <Button type='link' to='/projects' text='View all' />
                </>
              ) : (
                <p>Check back soon for new projects!</p>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
}

ProjectsGrid.propTypes = {
  compact: PropTypes.bool,
};

export default ProjectsGrid;
