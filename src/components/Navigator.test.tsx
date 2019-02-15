import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';

import { getMonthArray, getDateTitle } from '../helpers';
import { Navigator } from './Navigator';

const date = new Date(0);
const defaultProps = {
  monthName: getDateTitle(date),
  monthArray: getMonthArray(date),
  currentDay: 1,
  onDayClick: jest.fn()
};

describe('<Navigator />', () => {
  it('renders correctly', () => {
    const component = renderer.create(<Navigator {...defaultProps} />).toJSON();
    expect(component).toMatchSnapshot();
  });

  it('add "current" className to currentDay', () => {
    const component = shallow(<Navigator {...defaultProps} />);
    expect(component.find('.current')).toHaveLength(1);
  });

  it('simulates click events', () => {
    const onDayClick = jest.fn();
    const component = shallow(
      <Navigator {...defaultProps} onDayClick={onDayClick} />
    );
    component
      .find('.day')
      .first()
      .simulate('click');
    expect(onDayClick).toHaveBeenCalledWith('1');
  });
});
