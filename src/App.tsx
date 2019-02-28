import React from 'react';
import { Views, Navigate } from './types';
import { Toolbar } from './components/Toolbar';

import 'normalize.css';

export const App = () => (
  <Toolbar
    onNavigate={(to: Navigate) => console.log(to)}
    onChangeView={(view: Views) => console.log(view)}
  />
);
