import React from 'react';
import renderer from 'react-test-renderer';
import { Navigator } from './Navigator';

import { getMonthArray, getDateTitle } from '../helpers';

const date = new Date(0);
const defaultProps = {
  monthName: getDateTitle(date),
  monthArray: getMonthArray(date),
  currentDay: 1
};

it('renders correctly', () => {
  const component = renderer.create(<Navigator {...defaultProps} />).toJSON();
  expect(component).toMatchSnapshot();
});
