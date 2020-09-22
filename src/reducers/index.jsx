import { combineReducers } from 'redux';
import reportsReducer from './reports';

const rootReducer = combineReducers({
  reports: reportsReducer,
});

export default rootReducer;
