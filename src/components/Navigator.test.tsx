import React from 'react';
import ReactDOM from 'react-dom';
import { Navigator } from './Navigator';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Navigator date={new Date()} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
