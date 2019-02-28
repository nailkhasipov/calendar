import React, { useState } from 'react';
import { Views, Navigate } from './types';
import { Toolbar } from './components/Toolbar';

import 'normalize.css';

export const App = () => {
  const [date, setDate] = useState(new Date());
  const [view, setView] = useState(Views.DAY);
  const handleNavigate = (to: Navigate) => {};
  const handleChangeView = (view: Views) => {
    setView(view);
  };
  return (
    <Toolbar
      onNavigate={(to: Navigate) => handleNavigate(to)}
      onChangeView={(view: Views) => handleChangeView(view)}
    />
  );
};
