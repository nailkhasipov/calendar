import React, { Component } from 'react';
import { DAY_VIEW, WEEK_VIEW, MONTH_VIEW } from './constants';
import { getDateTitle } from './helpers';
import { MiniMonthNavigator } from './components/MiniMonthNavigator';
import { Top } from './components/Top';
import { Day } from './components/Day';
import { WeekView } from './components/WeekView';
import { MonthView } from './components/MonthView';
import { NewEvent } from './components/NewEvent';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: DAY_VIEW,
    };
  }

  changeView(view) {
    this.setState({ view });
  }

  render() {
    return (
      <div className="app calendar">
        <Top />
        <div className="main">
          <div className="sidebar">
            <div className="sidebar-month" id="sidebar-month">
              <h2 className="date-info">{getDateTitle(new Date().getTime())}</h2>
              <MiniMonthNavigator />
            </div>
          </div>
          <div className="view-wrapper">
            <div className="navigation">
              <button>TODAY</button>
              <button>{'<'}</button>
              <button>{'>'}</button>
            </div>

            <div className="view">
              {this.state.view === DAY_VIEW
                && <Day />
              }
              {this.state.view === WEEK_VIEW
                && <WeekView />
              }
              {this.state.view === MONTH_VIEW
                && <MonthView />
              }
            </div>
          </div>
        </div>

        <NewEvent />
      </div>
    );
  }
}

export default App;
