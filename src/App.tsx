import React from 'react';
import { NAVIGATIONS, VIEWS } from './constants';
import { Navigator } from './components/Navigator';
import { Top } from './components/Top';
import { Day } from './components/Day';
import { NewEventModal } from './components/NewEventModal';
import './App.css';

export class App extends React.Component<
  {},
  {
    events: [];
    showModal: boolean;
    date: Date;
    view: VIEWS;
  }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      events: [],
      showModal: false,
      date: new Date(),
      view: VIEWS.DAY
    };
  }
  handleShowModal() {
    this.setState({ showModal: true });
  }
  handleNavigate(to: NAVIGATIONS) {
    switch (to) {
      case NAVIGATIONS.NEXT:
        const nextDate = new Date(
          this.state.date.setDate(this.state.date.getDate() + 1)
        );
        this.setState({ date: nextDate });
        break;
      case NAVIGATIONS.PREVIOUS:
        const previousDate = new Date(
          this.state.date.setDate(this.state.date.getDate() - 1)
        );
        this.setState({ date: previousDate });
        break;
      case NAVIGATIONS.TODAY:
        this.setState({ date: new Date() });
      default:
        break;
    }
  }
  handleViewChange(view: VIEWS) {
    this.setState({ view: view });
  }
  hideModal() {
    this.setState({ showModal: false });
  }
  handleDateChange(date: Date) {
    this.setState({ date: date });
  }
  render() {
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
              selectedDate={this.state.date}
              onDateChange={(date: Date) => this.handleDateChange(date)}
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
