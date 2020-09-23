import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Grid from '@material-ui/core/Grid';
import '@testing-library/jest-dom/extend-expect';
import Home from '../../containers/home';

Enzyme.configure({ adapter: new Adapter() });

const setup = () => {
  const component = shallow(
    <Home />,
  );
  return component;
};

describe('Home container', () => {
  let component;
  beforeEach(() => {
    component = setup();
  });

  it('should render three Grid', () => {
    expect(component.find(Grid)).toHaveLength(3);
  });
  it('should render one SideBar component', () => {
    expect(component.find('SideBar')).toHaveLength(1);
  });
  it('should render one ResultPage component', () => {
    expect(component.find('ResultPage')).toHaveLength(1);
  });
});
