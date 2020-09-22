const CREATE_REPORT = 'CREATE_REPORT';
const REMOVE_REPORT = 'REMOVE_REPORT';

const REPORT_BEGIN = 'REPORT_BEGIN';
const REPORT_SUCCESS = 'REPORT_SUCCESS';
const REPORT_FAILURE = 'REPORT_FAILURE';

const createReport = report => ({
  type: CREATE_REPORT,
  report,
});

const removeReport = report => ({
  type: REMOVE_REPORT,
  report,
});

const reportBegin = () => ({
  type: REPORT_BEGIN,
});

const reportSuccess = report => ({
  type: REPORT_SUCCESS,
  report,
});

const reportFailure = error => ({
  type: REPORT_FAILURE,
  error,
});

export {
  CREATE_REPORT,
  REMOVE_REPORT,
  REPORT_BEGIN,
  REPORT_SUCCESS,
  REPORT_FAILURE,
  createReport,
  removeReport,
  reportBegin,
  reportSuccess,
  reportFailure,
};
