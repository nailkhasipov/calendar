import React from 'react';

import { VEvent } from '../types';
import { HoursLabels } from './HoursLabels';
import { DayGrid } from './DayGrid';

import { FullCalViewGridWrapper, FullCalViewGrid } from '../styled/FullCal';

type DayProps = {
  date: Date;
  events: VEvent[];
  onCreateEvent: (timestamp: number) => void;
};

export const Day = (props: DayProps) => {
  const day = props.date.getDate();
  const monthName = props.date.toLocaleString('en-us', { month: 'long' });
  const fullYear = props.date.getFullYear();
  const dayName = props.date.toLocaleString('en-us', { weekday: 'long' });
  return (
    <FullCalViewGrid>
      <HoursLabels />
      <DayGrid full={true} date={props.date} events={props.events} />
    </FullCalViewGrid>
  );
};
