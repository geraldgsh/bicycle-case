import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Grid from '@material-ui/core/Grid';
import '@testing-library/jest-dom/extend-expect';
import ResultPage from '../../containers/resultPage';

Enzyme.configure({ adapter: new Adapter() });

const setup = () => {
  const component = shallow(
    <ResultPage />,
  );
  return component;
};

describe('Result Page container', () => {
  let component;
  beforeEach(() => {
    component = setup();
  });

  it('should render three Grid', () => {
    expect(component.find(Grid)).toHaveLength(1);
  });
  it('should render one Results component', () => {
    expect(component.find('Results')).toHaveLength(1);
  });
});
