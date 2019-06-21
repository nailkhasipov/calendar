import React from 'react';
import styled from 'styled-components';

import { VEvent } from '../types';
import './Day.css';
import { HoursLabels } from './HoursLabels';
import { DayGrid } from './DayGrid';

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
    <div className='cal-view'>
      <div className='cal-view__header'>
        <div className='cal-view__title'>
          <b>
            {day} {monthName}
          </b>{' '}
          {fullYear}
        </div>
        <div className='cal-day__grid__header'>{dayName}</div>
      </div>
      <div className='cal-day__grid-wrapper'>
        <div className='cal-day__grid'>
          <HoursLabels />
          <DayGrid full={true} date={props.date} events={props.events} />
        </div>
      </div>
    </div>
  );
};
