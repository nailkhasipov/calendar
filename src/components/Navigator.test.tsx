import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import { Navigator } from './Navigator';

const date = new Date(0);

const defaultProps = {
  date: date,
  onDateChange: jest.fn()
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

  // it('simulates click events', () => {
  //   const onDateChange = jest.fn();
  //   const component = shallow(
  //     <Navigator {...defaultProps} onDateChange={onDateChange} />
  //   );
  //   component
  //     .find('.current')
  //     .first()
  //     .simulate('click');
  //   expect(onDateChange).toHaveBeenCalledWith(date);
  // });
});
