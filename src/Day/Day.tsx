import React from 'react';

import { VEvent } from '../types';
import { HoursLabels } from './HoursLabels';
import { DayGrid } from './DayGrid';

import { FullCalViewGrid } from '../styled/FullCal';

type DayProps = {
  date: Date;
  events: VEvent[];
  onCreateEvent: (timestamp: number) => void;
};

export const Day = (props: DayProps) => {
  return (
    <FullCalViewGrid>
      <HoursLabels />
      <DayGrid full={true} date={props.date} events={props.events} />
    </FullCalViewGrid>
  );
};
