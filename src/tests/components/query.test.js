import React from 'react';
import Enzyme, { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Adapter from 'enzyme-adapter-react-16';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import '@testing-library/jest-dom/extend-expect';
import Query from '../../components/query';

Enzyme.configure({ adapter: new Adapter() });

const initialState = '';
const mockStore = configureStore();
let store;

const setup = () => {
  store = mockStore(initialState);
  const component = mount(
    <Provider store={store}>
      <Query />
    </Provider>,
  );
  return component;
};

describe('Query container', () => {
  let component;
  beforeEach(() => {
    component = setup();
  });

  it('should render two div tag', () => {
    expect(component.find('div')).toHaveLength(13);
  });
  it('should render one form tag', () => {
    expect(component.find('form')).toHaveLength(1);
  });
  it('should render one TextField tag', () => {
    expect(component.find(TextField)).toHaveLength(3);
  });
  it('should render three Grid tag', () => {
    expect(component.find(Grid)).toHaveLength(3);
  });
  it('should render one MuiPickersUtilsProvider tag', () => {
    expect(component.find(MuiPickersUtilsProvider)).toHaveLength(1);
  });
  it('should render two KeyboardDatePicker tag', () => {
    expect(component.find(KeyboardDatePicker)).toHaveLength(2);
  });
});
