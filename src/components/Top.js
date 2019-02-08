import React from 'react';
import Navigator from './Navigator';
import './Top.css';

export const Top = () => (
  <div className="top">
    <div className="top__left">
      <button type="button">+</button>
    </div>
    <div className="top__middle">
      <Navigator />
    </div>
    <div className="top__right">
      <button type="button">DAY</button>
      <button type="button">WEEK</button>
      <button type="button">MONTH</button>
    </div>
  </div>
);

export default Top;
