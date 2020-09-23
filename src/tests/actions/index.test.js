import {
  reportBegin,
  reportSuccess,
  reportFailure,
} from '../../actions/index';

describe('change loading state', () => {
  it('should change loading state to reducer', () => {
    const expectedAction = {
      type: 'REPORT_BEGIN',
    };
    expect(reportBegin()).toEqual(expectedAction);
  });
});

describe('add report', () => {
  it('should add report to reducer', () => {
    const report = {
      incidents: [{
        id: 126140,
        title: 'Stolen 2016 Fuji(blue)',
      }],
    };
    const expectedAction = {
      report,
      type: 'REPORT_SUCCESS',
    };
    expect(reportSuccess(report)).toEqual(expectedAction);
  });
});

describe('add error', () => {
  it('should add error to reducer', () => {
    const error = 'Unable to find endpoint';
    const expectedAction = {
      error,
      type: 'REPORT_FAILURE',
    };
    expect(reportFailure(error)).toEqual(expectedAction);
  });
});
