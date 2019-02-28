import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';

import { Views, Navigate } from '../types';

import { Toolbar, ToolbarProps } from './Toolbar';

const onNavigate = jest.fn();
const onChangeView = jest.fn();

const defaultProps: ToolbarProps = {
  onNavigate: onNavigate,
  onChangeView: onChangeView
};

describe('<Toolbar />', () => {
  it('renders correctly', () => {
    const component = renderer.create(<Toolbar {...defaultProps} />).toJSON();
    expect(component).toMatchSnapshot();
  });

  it('call onNavigate(TODAY)', () => {
    const component = shallow(<Toolbar {...defaultProps} />);
    component.find('.cal-toolbar__button-today').simulate('click');
    expect(onNavigate).toHaveBeenCalledWith(Navigate.TODAY);
  });

  it('call onNavigate(NEXT)', () => {
    const component = shallow(<Toolbar {...defaultProps} />);
    component.find('.cal-toolbar__button-next').simulate('click');
    expect(onNavigate).toHaveBeenCalledWith(Navigate.NEXT);
  });

  it('call onNavigate(PREVIOUS)', () => {
    const component = shallow(<Toolbar {...defaultProps} />);
    component.find('.cal-toolbar__button-previous').simulate('click');
    expect(onNavigate).toHaveBeenCalledWith(Navigate.PREVIOUS);
  });

  it('call onChangeView(DAY_VIEW)', () => {
    const component = shallow(<Toolbar {...defaultProps} />);
    component.find('.cal-toolbar__button-day').simulate('click');
    expect(onChangeView).toHaveBeenCalledWith(Views.DAY);
  });

  it('call onChangeView(WEEK_VIEW)', () => {
    const component = shallow(<Toolbar {...defaultProps} />);
    component.find('.cal-toolbar__button-week').simulate('click');
    expect(onChangeView).toHaveBeenCalledWith(Views.WEEK);
  });

  it('call onChangeView(MONTH_VIEW)', () => {
    const component = shallow(<Toolbar {...defaultProps} />);
    component.find('.cal-toolbar__button-month').simulate('click');
    expect(onChangeView).toHaveBeenCalledWith(Views.MONTH);
  });
});
