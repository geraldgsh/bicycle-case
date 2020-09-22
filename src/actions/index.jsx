const REPORT_BEGIN = 'REPORT_BEGIN';
const REPORT_SUCCESS = 'REPORT_SUCCESS';
const REPORT_FAILURE = 'REPORT_FAILURE';

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
  REPORT_BEGIN,
  REPORT_SUCCESS,
  REPORT_FAILURE,
  reportBegin,
  reportSuccess,
  reportFailure,
};
