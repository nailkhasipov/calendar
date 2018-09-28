import React, { Component } from 'react';
import { getDateTitle }from './helpers';
import { MonthTable } from './MonthTable';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app calendar">
        <div className="top">
        <div className="navigation">
          <button>TODAY</button>
          <button>{'<'}</button>
          <button>{'>'}</button>
        </div>
        <h2 className="date-info">{getDateTitle(new Date().getTime())}</h2>
        <div className="view-change">
          <button>DAY</button>
          <button>WEEK</button>
          <button>MONTH</button>
        </div>
        </div>
        <div className="main">
          <div className="sidebar">
            <div className="sidebar-month" id="sidebar-month">
              <MonthTable></MonthTable>
            </div>
            {/* <EventForm></EventForm> */}
          </div>
          <div className="view">
            {/* <View></View> */}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
