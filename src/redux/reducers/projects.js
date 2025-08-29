import projectTypes from '../actions/projectTypes';

const initialState = {
  selectedProject: null,
};

const projectsReducer = (state = initialState, action) => {
  switch (action.type) {
    case projectTypes.SET_SELECTED:
      return {
        ...state,
        selectedProject: action.payload,
      };
    default:
      return state;
  }
};

export default projectsReducer;
