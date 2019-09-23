import React, { useState, useReducer } from 'react';
import styled from 'styled-components';

import { StateProvider } from './state';

import { Views, Navigate } from './types';
import { Toolbar } from './components/Toolbar';
import { Sidebar } from './components/Sidebar';
import { DayHeader } from './Day/DayHeader';
import { WeekHeader } from './Week/WeekHeader';
import { MonthHeader } from './Month/MonthHeader';
import { Day } from './Day/Day';
import { getToday, getNextDay, getPreviousDay } from './utils';

import 'normalize.css';
import { Week } from './Week/Week';
import { Month } from './Month/Month';
import { FullCalView, FullCalViewGridWrapper } from './styled/FullCal';

export const CurrentDateContext = React.createContext(new Date());

const getEvents = () => JSON.parse(localStorage.getItem('events') || '[]');

const StyledCalendar = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: 60px auto;
  grid-template-columns: 260px auto;
`;

const initialState = { date: new Date() };

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case Navigate.TODAY:
      return { date: new Date() };
    case Navigate.NEXT:
      return {
        date: { date: new Date(state.date.setDate(state.date.getDate() + 1)) }
      };
    case Navigate.PREVIOUS:
      return {
        date: { date: new Date(state.date.setDate(state.date.getDate() - 1)) }
      };
    default:
      throw new Error();
  }
};

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
  let calViewHeader, calView;
  if (view === Views.DAY) {
    calViewHeader = <DayHeader date={date} />;
    calView = (
      <Day
        date={date}
        onCreateEvent={(timestamp: number) => handleCreateEvent(timestamp)}
        events={events}
      />
    );
  }
  if (view === Views.WEEK) {
    calViewHeader = <WeekHeader date={date} />;
    calView = (
      <Week
        date={date}
        events={events}
        onCreateEvent={(timestamp: number) => handleCreateEvent(timestamp)}
      />
    );
  }
  if (view === Views.MONTH) {
    calViewHeader = <MonthHeader date={date} />;
    calView = <Month date={date} events={events} />;
  }
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <StyledCalendar>
        <Toolbar
          view={view}
          onNavigate={(to: Navigate) => handleNavigate(to)}
          onChangeView={(view: Views) => handleChangeView(view)}
        />
        <Sidebar
          date={date}
          onDateChange={(date: Date) => handleDateChange(date)}
        />
        <FullCalView>
          {calViewHeader}
          <FullCalViewGridWrapper>{calView}</FullCalViewGridWrapper>
        </FullCalView>
      </StyledCalendar>
    </StateProvider>
  );
};
