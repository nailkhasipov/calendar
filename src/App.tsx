import React from 'react';
import { NAVIGATIONS, VIEWS } from './constants';
import { HoursLabels } from './components/HoursLabels';
import { Navigator } from './components/Navigator';
import { Top } from './components/Top';
import { Day } from './components/Day';
import './App.css';

import { VEvent } from './types';
import { WeekView } from './components/WeekView';
import { MonthView } from './components/MonthView';

const events = JSON.parse(localStorage.getItem('events') || '[]');

export class App extends React.Component<
  {},
  {
    events: VEvent[];
    date: Date;
    view: VIEWS;
  }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      events: events,
      date: new Date(),
      view: VIEWS.DAY
    };
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
  handleDateChange(date: Date) {
    this.setState({ date: date });
  }
  addEvent(title: string, startDate: Date, endDate: Date) {
    const event = {
      title: title,
      start: new Date(startDate).getTime(),
      end: new Date(endDate).getTime()
    };
    const events = this.state.events;
    events.push(event);
    this.setState({ events: events });
    localStorage.setItem('events', JSON.stringify(events));
  }
  render() {
    return (
      <div className='app calendar'>
        <Top
          onNavigate={(to: NAVIGATIONS) => this.handleNavigate(to)}
          onChangeView={(view: VIEWS) => this.handleViewChange(view)}
        />
        <div className='main'>
          <div className='sidebar'>
            <Navigator
              date={this.state.date}
              onDateChange={(date: Date) => this.handleDateChange(date)}
            />
          </div>
          <div className='view'>
            {this.state.view === VIEWS.DAY && (
              <React.Fragment>
                <div className='view-title'>
                  {this.state.date.toDateString()}
                </div>
                <div className='views day-view'>
                  <HoursLabels />
                  <Day date={this.state.date} events={this.state.events} />
                </div>
              </React.Fragment>
            )}
            {this.state.view === VIEWS.WEEK && (
              <React.Fragment>
                <div className='view-title'>
                  {this.state.date.toLocaleString('en-us', { month: 'long' })}{' '}
                  {this.state.date.getFullYear()}
                </div>
                <div className='views view-week'>
                  <HoursLabels />
                  <WeekView date={this.state.date} events={this.state.events} />
                </div>
              </React.Fragment>
            )}
            {this.state.view === VIEWS.MONTH && (
              <React.Fragment>
                <div className='view-title'>
                  {this.state.date.toLocaleString('en-us', { month: 'long' })}{' '}
                  {this.state.date.getFullYear()}
                </div>
                <div className='views view-month'>
                  <MonthView
                    date={this.state.date}
                    events={this.state.events}
                  />
                </div>
              </React.Fragment>
            )}
          </div>
        </div>
      </div>
    );
  }
}
