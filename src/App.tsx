import React from 'react';
import { DAY_VIEW, WEEK_VIEW, MONTH_VIEW } from './constants';
import { getDateTitle } from './helpers';
import { MiniMonthNavigator } from './components/SidebarMonthTable';
import { Top } from './components/Top';
import { Day } from './components/Day';
import { WeekView } from './components/WeekView';
import { MonthView } from './components/MonthView';
import { NewEventModal } from './components/NewEventModal';
import './App.css';

export class App extends React.Component<{}, { showModal: boolean }> {
  constructor(props: any) {
    super(props);
    this.state = {
      showModal: false
    };
  }
  showModal() {
    this.setState({ showModal: true });
  }
  hideModal() {
    this.setState({ showModal: false });
  }
  render() {
    return (
      <div className='app calendar'>
        <Top
          onShowModal={() => this.showModal()}
          onCloseModal={() => this.hideModal()}
        />
        <div className='main'>
          <div className='sidebar'>
            <div className='sidebar-month' id='sidebar-month'>
              <h2 className='date-info'>
                {getDateTitle(new Date().getTime())}
              </h2>
              <MiniMonthNavigator />
            </div>
          </div>
          <div className='view'>
            <Day />
          </div>
        </div>

        <NewEventModal
          show={this.state.showModal}
          handleClose={() => this.hideModal()}
        />
      </div>
    );
  }
}
