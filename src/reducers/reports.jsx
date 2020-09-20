import { CREATE_REPORT, REMOVE_REPORT } from '../actions/index';

const reportReducer = (state = [], action) => {
  switch (action.type) {
    case CREATE_REPORT:
      return [...state, action.report];
    case REMOVE_REPORT:
      return state.filter(report => report.id !== action.report.id);
    default:
      return state;
  }
};

export default reportReducer;
