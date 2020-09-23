import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import '@testing-library/jest-dom/extend-expect';
import MainAvatar from '../../elements/mainAvatar';

Enzyme.configure({ adapter: new Adapter() });

const setup = () => {
  const component = shallow(
    <MainAvatar />,
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
  it('should render one p tag', () => {
    expect(component.find('p')).toHaveLength(1);
  });
  it('should render one h2 tag', () => {
    expect(component.find('h2')).toHaveLength(1);
  });
  it('should render one Grid', () => {
    expect(component.find(Grid)).toHaveLength(1);
  });
  it('should render one Box', () => {
    expect(component.find(Box)).toHaveLength(1);
  });
  it('should render one Avatar', () => {
    expect(component.find(Avatar)).toHaveLength(1);
  });
});
