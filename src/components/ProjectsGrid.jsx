import Project from './Project';
import PropTypes from 'prop-types';
import Button from './Button';
import { MY_PROJECTS, PROJECT_COLUMN_COUNTS } from '../helpers/constants';
import { useEffect, useState } from 'react';
import useBreakpoint from './useBreakpoint';

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
          <p>
            {moreProjectsCount > 0
              ? `There are ${moreProjectsCount} more projects.`
              : 'There will be more projects.'}
          </p>
          <Button type='link' to='/projects' text='View All' />
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
