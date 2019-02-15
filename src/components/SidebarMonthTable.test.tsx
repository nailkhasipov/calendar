import React from 'react';
import { MiniMonthNavigator } from './SidebarMonthTable';
const renderer = require('react-test-renderer');

test('Link changes the class when hovered', () => {
  const component = renderer.create(<MiniMonthNavigator />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
