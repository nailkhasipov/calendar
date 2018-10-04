import React from 'react';
import './Top.css';
import { DAY_VIEW, WEEK_VIEW, MONTH_VIEW } from '../constants';

export const Top = () => (
  <div className="top">
    <div className="add">
      <button>+</button>
    </div>
    <div className="view-change">
      <button onClick={() => this.changeView(DAY_VIEW)}>DAY</button>
      <button onClick={() => this.changeView(WEEK_VIEW)}>WEEK</button>
      <button onClick={() => this.changeView(MONTH_VIEW)}>MONTH</button>
    </div>
  </div>
);

export default Top;
