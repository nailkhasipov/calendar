import React, { useState } from 'react';
import { VEvent, Views, Navigate } from './types';
import { Toolbar } from './components/Toolbar';
import { Sidebar } from './components/Sidebar';
import { Day } from './Day/Day';
import { getToday, getNextDay, getPreviousDay } from './utils';

import 'normalize.css';
import './App.css';
import { Week } from './Week/Week';
import { Month } from './Month/Month';

const getEvents = () => JSON.parse(localStorage.getItem('events') || '[]');

export const App = () => {
  const [events, setEvents] = useState(getEvents());
  const [date, setDate] = useState(getToday());
  const [view, setView] = useState(Views.DAY);
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
    if (view === Views.WEEK)
      return (
        <Week
          date={date}
          events={events}
          onCreateEvent={(timestamp: number) => handleCreateEvent(timestamp)}
        />
      );
    if (view === Views.MONTH) return <Month date={date} events={events} />;
  };
  return (
    <div className='cal'>
      <Toolbar
        view={view}
        onNavigate={(to: Navigate) => handleNavigate(to)}
        onChangeView={(view: Views) => handleChangeView(view)}
      />
      <Sidebar
        date={date}
        onDateChange={(date: Date) => handleDateChange(date)}
      />
      {renderView()}
    </div>
  );
};
