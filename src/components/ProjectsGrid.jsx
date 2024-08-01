import Project from './Project';
import PropTypes from 'prop-types';
import Button from './Button';
import { MY_PROJECTS, PROJECT_COLUMN_COUNTS } from '../helpers/constants';
import { useEffect, useState } from 'react';
import useBreakpoint from './useBreakpoint';
import CountUp from 'react-countup';

function ProjectsGrid({ compact = false }) {
  const breakPoint = useBreakpoint();

  let [projectColumns, setProjectColumns] = useState(
    PROJECT_COLUMN_COUNTS[breakPoint]
  );

  let [grouppedProjects, setGrouppedProjects] = useState([]);

  useEffect(() => {
    let newProjectColumns = PROJECT_COLUMN_COUNTS[breakPoint];
    if (newProjectColumns !== projectColumns) {
      setProjectColumns(newProjectColumns);
    }
    //eslint-disable-next-line
  }, [breakPoint]);

  useEffect(() => {
    let newGrouppedProjects = Array(projectColumns)
      .fill()
      .map(() => Array(0));

    for (let i = 0; i < MY_PROJECTS.length; i++) {
      if (compact && i === projectColumns * 2) {
        break;
      }
      newGrouppedProjects[i % projectColumns].push(MY_PROJECTS[i]);
    }
    setGrouppedProjects(newGrouppedProjects);
    //eslint-disable-next-line
  }, [projectColumns]);

  const moreProjectsCount = MY_PROJECTS.length - projectColumns * 2;

  return (
    <div className='projectsGrid'>
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
                  key={j}
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
    </div>
  );
}

export default ProjectsGrid;

ProjectsGrid.propTypes = {
  compact: PropTypes.bool,
};
