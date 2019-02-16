import React from 'react';
import {
  NAVIGATE_TODAY,
  NAVIGATE_NEXT,
  NAVIGATE_PREVIOUS,
  DAY_VIEW,
  WEEK_VIEW,
  MONTH_VIEW
} from './constants';
import { Navigator } from './components/Navigator';
import { Top } from './components/Top';
import { Day } from './components/Day';
import { NewEventModal } from './components/NewEventModal';
import { getMonthArray, getDateTitle } from './helpers';
import './App.css';

export class App extends React.Component<
  {},
  {
    events: [];
    showModal: boolean;
    currentDate: Date;
    selectedDate: Date;
    view: string;
  }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      events: [],
      showModal: false,
      currentDate: new Date(),
      selectedDate: new Date(),
      view: DAY_VIEW
    };
  }
  handleShowModal() {
    this.setState({ showModal: true });
  }
  handleNavigate(to: string) {
    console.log('navigate to ' + to);
  }
  handleViewChange(view: string) {
    console.log('change view to ' + view);
  }
  hideModal() {
    this.setState({ showModal: false });
  }
  handleDayClick(day: string) {
    console.log(day);
  }
  render() {
    const date = new Date();
    return (
      <div className='app calendar'>
        <Top
          onShowModal={() => this.handleShowModal()}
          onNavigate={(to: string) => this.handleNavigate(to)}
          onChangeView={(view: string) => this.handleViewChange(view)}
        />
        <div className='main'>
          <div className='sidebar'>
            <Navigator
              monthName={getDateTitle(date)}
              monthArray={getMonthArray(date)}
              currentDay={date.getDate()}
              onDayClick={(day: string) => this.handleDayClick(day)}
            />
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
