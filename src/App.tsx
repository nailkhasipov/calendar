import React from 'react';
import { NAVIGATIONS, VIEWS } from './constants';
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
    view: VIEWS;
  }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      events: [],
      showModal: false,
      currentDate: new Date(),
      selectedDate: new Date(),
      view: VIEWS.DAY
    };
  }
  handleShowModal() {
    this.setState({ showModal: true });
  }
  handleNavigate(to: NAVIGATIONS) {
    console.log('navigate to ' + to);
  }
  handleViewChange(view: VIEWS) {
    this.setState({ view: view });
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
          onNavigate={(to: NAVIGATIONS) => this.handleNavigate(to)}
          onChangeView={(view: VIEWS) => this.handleViewChange(view)}
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
