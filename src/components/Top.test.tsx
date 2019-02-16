import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';

import {
  NAVIGATE_TODAY,
  NAVIGATE_NEXT,
  NAVIGATE_PREVIOUS,
  DAY_VIEW,
  WEEK_VIEW,
  MONTH_VIEW
} from '../constants';

import { Top } from './Top';

const onShowModal = jest.fn();
const onNavigate = jest.fn();
const onChangeView = jest.fn();

const defaultProps = {
  onShowModal: onShowModal,
  onNavigate: onNavigate,
  onChangeView: onChangeView
};

describe('<Top />', () => {
  it('renders correctly', () => {
    const component = renderer.create(<Top {...defaultProps} />).toJSON();
    expect(component).toMatchSnapshot();
  });

  it('call onShowModal()', () => {
    const component = shallow(<Top {...defaultProps} />);
    component.find('.add-event-button').simulate('click');
    expect(onShowModal).toHaveBeenCalled();
  });

  it('call onNavigate(NAVIGATE_TODAY)', () => {
    const component = shallow(<Top {...defaultProps} />);
    component.find('.navigation-button__today').simulate('click');
    expect(onNavigate).toHaveBeenCalledWith(NAVIGATE_TODAY);
  });

  it('call onNavigate(NAVIGATE_NEXT)', () => {
    const component = shallow(<Top {...defaultProps} />);
    component.find('.navigation-button__next').simulate('click');
    expect(onNavigate).toHaveBeenCalledWith(NAVIGATE_NEXT);
  });

  it('call onNavigate(NAVIGATE_PREVIOUS)', () => {
    const component = shallow(<Top {...defaultProps} />);
    component.find('.navigation-button__previous').simulate('click');
    expect(onNavigate).toHaveBeenCalledWith(NAVIGATE_PREVIOUS);
  });

  it('call onChangeView(DAY_VIEW)', () => {
    const component = shallow(<Top {...defaultProps} />);
    component.find('.change-view-button__day').simulate('click');
    expect(onChangeView).toHaveBeenCalledWith(DAY_VIEW);
  });

  it('call onChangeView(WEEK_VIEW)', () => {
    const component = shallow(<Top {...defaultProps} />);
    component.find('.change-view-button__week').simulate('click');
    expect(onChangeView).toHaveBeenCalledWith(WEEK_VIEW);
  });

  it('call onChangeView(MONTH_VIEW)', () => {
    const component = shallow(<Top {...defaultProps} />);
    component.find('.change-view-button__month').simulate('click');
    expect(onChangeView).toHaveBeenCalledWith(MONTH_VIEW);
  });
});
