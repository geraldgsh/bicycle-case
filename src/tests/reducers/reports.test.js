/* eslint-disable import/extensions */
import reportReducer from '../../Reducers/reports.jsx';

const newBegin = [{
  loading: true,
  error: null,
}];
const newReports = [{
  incidents: [{
    id: 126140,
    title: 'Stolen 2016 Fuji(blue)',
  }],
  loading: false,
}];
const newError = [{
  reports: [],
  error: 'Unable to find endpoint',
  loading: false,
}];
const beginAction = { type: 'REPORT_BEGIN' };
const reportsAction = { type: 'REPORT_SUCCESS' };
const errorAction = { type: 'REPORT_FAILURE' };

describe('Change loading state', () => {
  it('should change loading state', () => {
    expect(reportReducer(newBegin, beginAction.type)).toEqual(newBegin, beginAction.type);
  });
});

describe('Add reports', () => {
  it('should add reports', () => {
    expect(reportReducer(newReports, reportsAction.type)).toEqual(newReports, reportsAction.type);
  });
});

describe('Add error', () => {
  it('should add error', () => {
    expect(reportReducer(newError, errorAction.type)).toEqual(newError, errorAction.type);
  });
});
