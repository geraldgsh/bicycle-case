import React from 'react';
import Enzyme, { mount } from 'enzyme';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Adapter from 'enzyme-adapter-react-16';
import { List } from '@material-ui/core';
import '@testing-library/jest-dom/extend-expect';
import Results from '../../components/results';

Enzyme.configure({ adapter: new Adapter() });

const initialState = {
  loading: false,
  reports: [{
    id: 126140,
    title: 'Stolen 2016 Fuji(blue)',
  }],
  error: null,
};
const mockStore = configureStore([thunk]);
let store;

const setup = () => {
  store = mockStore(initialState);
  const component = mount(
    <Provider store={store}>
      <Results />
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
    expect(component.find('div')).toHaveLength(1);
  });
  it('should render one List component', () => {
    expect(component.find(List)).toHaveLength(1);
  });
});
