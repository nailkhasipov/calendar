import React, { useState } from 'react';
import { Views, Navigate } from './types';
import { Toolbar } from './components/Toolbar';
import { Navigator } from './components/Navigator';
import { getToday, getNextDay, getPreviousDay } from './helpers';

import 'normalize.css';
import './App.css';

export const App = () => {
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
  return (
    <div className='cal'>
      <Toolbar
        onNavigate={(to: Navigate) => handleNavigate(to)}
        onChangeView={(view: Views) => handleChangeView(view)}
      />
      <div className='sidebar'>
        <Navigator
          date={getToday()}
          onDateChange={(date: Date) => handleDateChange(date)}
        />
      </div>
    </div>
  );
};
