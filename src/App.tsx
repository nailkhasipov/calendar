import React, { useState } from 'react';
import styled from 'styled-components';

import { Views, Navigate } from './types';
import { Toolbar } from './components/Toolbar';
import { Sidebar } from './components/Sidebar';
import { Day } from './Day/Day';
import { getToday, getNextDay, getPreviousDay } from './utils';

import 'normalize.css';
import { Week } from './Week/Week';
import { Month } from './Month/Month';
import {
  FullCalView,
  FullCalViewHeader,
  FullCalViewHeaderTitle,
  FullCalViewGridWrapper
} from './styled/FullCal';

const getEvents = () => JSON.parse(localStorage.getItem('events') || '[]');

const StyledCalendar = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: 60px auto;
  grid-template-columns: 260px auto;
`;

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
  let calView;
  if (view === Views.DAY)
    calView = (
      <Day
        date={date}
        onCreateEvent={(timestamp: number) => handleCreateEvent(timestamp)}
        events={events}
      />
    );
  if (view === Views.WEEK)
    calView = (
      <Week
        date={date}
        events={events}
        onCreateEvent={(timestamp: number) => handleCreateEvent(timestamp)}
      />
    );
  if (view === Views.MONTH) calView = <Month date={date} events={events} />;
  return (
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
        <FullCalViewHeader>
          <FullCalViewHeaderTitle>
            FullCalViewHeaderTitle
          </FullCalViewHeaderTitle>
        </FullCalViewHeader>
        <FullCalViewGridWrapper>{calView}</FullCalViewGridWrapper>
      </FullCalView>
    </StyledCalendar>
  );
};
