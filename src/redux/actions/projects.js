import projectTypes from './projectTypes';

export const setSelectedProject = (project) => {
  return {
    type: projectTypes.SET_SELECTED,
    payload: project,
  };
};
