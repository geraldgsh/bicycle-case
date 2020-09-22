import {
  REPORT_BEGIN,
  REPORT_SUCCESS,
  REPORT_FAILURE,
} from '../actions/index';

const reportReducer = (
  state = [],
  action,
) => {
  switch (action.type) {
    case REPORT_BEGIN:
      return { loading: true, error: null };
    case REPORT_SUCCESS:
      return { reports: action.report, loading: false };
    case REPORT_FAILURE:
      return { reports: [], loading: false, error: action.error };
    default:
      return state;
  }
};

export default reportReducer;
