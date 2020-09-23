import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CircularProgress from '@material-ui/core/CircularProgress';
import '@testing-library/jest-dom/extend-expect';
import Loader from '../../elements/loader';

Enzyme.configure({ adapter: new Adapter() });

const setup = () => {
  const component = shallow(
    <Loader />,
  );
  return component;
};

describe('Home container', () => {
  let component;
  beforeEach(() => {
    component = setup();
  });

  it('should render one div', () => {
    expect(component.find('div')).toHaveLength(1);
  });
  it('should render one CircularProgress', () => {
    expect(component.find(CircularProgress)).toHaveLength(1);
  });
});
