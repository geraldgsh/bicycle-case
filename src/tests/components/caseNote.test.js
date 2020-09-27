import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import { DialogTitle, DialogContent, DialogActions } from '../../components/dialog/dialogHelper';
import Typography from '@material-ui/core/Typography';
import '@testing-library/jest-dom/extend-expect';
import CaseNote from '../../components/dialog/caseNote';

Enzyme.configure({ adapter: new Adapter() });

const infos = {
  media: {
    image_url: 'https://image.com',
  },
  title: 'Mock title',
  description: 'Mock desc',
  address: 'Mock address',
  occurred_at: 1599091200,
  updated_at: 1600840915,
};

const setup = () => {
  const component = shallow(
    <CaseNote info={infos} />,
  );
  return component;
};

describe('Case Note container', () => {
  let component;
  beforeEach(() => {
    component = setup();
  });

  it('should render 1 Div tag', () => {
    expect(component.find('div')).toHaveLength(1);
  });
  it('should render two Button component', () => {
    expect(component.find(Button)).toHaveLength(2);
  });
  it('should render one Dialog component', () => {
    expect(component.find(Dialog)).toHaveLength(1);
  });
  it('should render one DialogTitle component', () => {
    expect(component.find(DialogTitle)).toHaveLength(1);
  });
  it('should render four Typography component', () => {
    expect(component.find(Typography)).toHaveLength(4);
  });
  it('should render One DialogContent component', () => {
    expect(component.find(DialogContent)).toHaveLength(1);
  });
  it('should render One DialogActions component', () => {
    expect(component.find(DialogActions)).toHaveLength(1);
  });
});
