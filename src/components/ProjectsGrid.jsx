import { useEffect, useState } from 'react';
import useBreakpoint from './useBreakpoint';

import PropTypes from 'prop-types';
import CountUp from 'react-countup';

import Project from './Project';
import Button from './Button';
import Skeleton from './Skeleton';

import { PROJECT_COLUMN_COUNTS } from '../helpers/constants';
import { getProjects } from '../services/projectsSetvice';

function ProjectsGrid({ compact = false }) {
  const breakPoint = useBreakpoint();

  const [projectColumns, setProjectColumns] = useState(
    PROJECT_COLUMN_COUNTS[breakPoint] || 2
  );
  const [grouppedProjects, setGrouppedProjects] = useState([]);
  const [projects, setProjects] = useState([]);
  const [projectsLoading, setProjectsLoading] = useState(false);
  const [projectsError, setProjectsError] = useState(null);

  useEffect(() => {
    let newProjectColumns = PROJECT_COLUMN_COUNTS[breakPoint];
    if (newProjectColumns !== projectColumns) {
      setProjectColumns(newProjectColumns);
    }
    //eslint-disable-next-line
  }, [breakPoint]);

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

  useEffect(() => {
    let newGrouppedProjects = Array(projectColumns)
      .fill()
      .map(() => Array(0));

    for (let i = 0; i < projects.length; i++) {
      if (compact && i === projectColumns * 2) {
        break;
      }
      newGrouppedProjects[i % projectColumns].push(projects[i]);
    }

    setGrouppedProjects(newGrouppedProjects);
    //eslint-disable-next-line
  }, [projectColumns, projects]);

  const moreProjectsCount = projects.length - projectColumns * 2;

  return (
    <div className='projectsGrid'>
      {projectsLoading ? (
        <Skeleton />
      ) : projectsError ? (
        <h3>{projectsError}</h3>
      ) : (
        <>
          <div className='grid'>
            {grouppedProjects.map((projectGroup, i) => (
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
          {compact ? (
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
                  <Button type='link' to='/projects' text='View All' />
                </>
              ) : (
                <p>Check back soon for new projects!</p>
              )}
            </div>
          ) : (
            ''
          )}
        </>
      )}
    </div>
  );
}

export default ProjectsGrid;

ProjectsGrid.propTypes = {
  compact: PropTypes.bool,
};
