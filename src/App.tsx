import React, { useState } from 'react';
import { VEvent, Views, Navigate } from './types';
import { Toolbar } from './components/Toolbar';
import { Navigator } from './components/Navigator';
import { Day } from './components/Day';
import { getToday, getNextDay, getPreviousDay } from './helpers';

import 'normalize.css';
import './App.css';
import { Week } from './components/Week';
import { Month } from './components/Month';

const getEvents = () => JSON.parse(localStorage.getItem('events') || '[]');

export const App = () => {
  const [events, setEvents] = useState(getEvents());
  const [date, setDate] = useState(getToday());
  const [view, setView] = useState(Views.MONTH);
  const handleNavigate = (to: Navigate) => {
    if (to === Navigate.TODAY) setDate(getToday());
    if (to === Navigate.NEXT) setDate(getNextDay(date));
    if (to === Navigate.PREVIOUS) setDate(getPreviousDay(date));
  };
  const handleChangeView = (view: Views) => {
    setView(view);
  };
  const handleDateChange = (date: Date) => {
    setDate(date);
  };
  const handleCreateEvent = (timestamp: number) => {
    const title = prompt('Title');
    const event = {
      title: title,
      start: new Date(timestamp).getTime(),
      end: new Date(timestamp).getTime()
    };
    setEvents([...events, event]);
    localStorage.setItem('events', JSON.stringify([...events, event]));
  };
  const renderView = () => {
    if (view === Views.DAY)
      return (
        <Day
          date={date}
          onCreateEvent={(timestamp: number) => handleCreateEvent(timestamp)}
          events={events}
        />
      );
    if (view === Views.WEEK) return <Week date={date} events={events} />;
    if (view === Views.MONTH) return <Month date={date} events={events} />;
  };
  return (
    <div className='cal'>
      <Toolbar
        onNavigate={(to: Navigate) => handleNavigate(to)}
        onChangeView={(view: Views) => handleChangeView(view)}
      />
      <Navigator
        date={date}
        onDateChange={(date: Date) => handleDateChange(date)}
      />
      {renderView()}
    </div>
  );
};
