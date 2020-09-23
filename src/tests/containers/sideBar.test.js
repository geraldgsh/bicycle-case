import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Grid from '@material-ui/core/Grid';
import '@testing-library/jest-dom/extend-expect';
import SideBar from '../../containers/sideBar';

Enzyme.configure({ adapter: new Adapter() });

const setup = () => {
  const component = shallow(
    <SideBar />,
  );
  return component;
};

describe('Sidebar container', () => {
  let component;
  beforeEach(() => {
    component = setup();
  });

  it('should render three Grid', () => {
    expect(component.find(Grid)).toHaveLength(1);
  });
  it('should render one MainAvatar component', () => {
    expect(component.find('MainAvatar')).toHaveLength(1);
  });
  it('should render one Query component', () => {
    expect(component.find('Query')).toHaveLength(1);
  });
});
