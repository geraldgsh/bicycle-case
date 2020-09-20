const CREATE_REPORT = 'CREATE_REPORT';
const REMOVE_REPORT = 'REMOVE_REPORT';

const createReport = report => ({
  type: CREATE_REPORT,
  report,
});

const removeReport = report => ({
  type: REMOVE_REPORT,
  report,
});

export {
  CREATE_REPORT, REMOVE_REPORT, createReport, removeReport,
};
