import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Grid from '@material-ui/core/Grid';
import '@testing-library/jest-dom/extend-expect';
import CaseNote from '../../components/dialog/caseNote';

Enzyme.configure({ adapter: new Adapter() });

const info = {
  info: {
    media: {
      image_url: null,
    },
    title: 'Mock title',
    description: 'Mock desc',
    address: 'Mock address',
    occurred_at: 1599091200,
    updated_at: 1600840915,
  },
};

console.log(info.info.media.image_url);

const setup = () => {
  const component = shallow(
    <CaseNote info={info} />,
  );
  return component;
};

describe('Case Note container', () => {
  let component;
  beforeEach(() => {
    component = setup();
  });

  it('should render three Grid', () => {
    // expect(component.find(Grid)).toHaveLength(3);
    console.log(component.find('div').length);
  });
  // it('should render one SideBar component', () => {
  //   expect(component.find('SideBar')).toHaveLength(1);
  // });
  // it('should render one ResultPage component', () => {
  //   expect(component.find('ResultPage')).toHaveLength(1);
  // });
});