import React from 'react';
import { getCurrentWeekDates } from '../helpers';
import { VEvent } from '../types';
import { HoursLabels } from './Day';

import './Week.css';

type WeekProps = {
  date: Date;
  events: VEvent[];
};

export const Week = (props: WeekProps) => {
  const monthName = props.date.toLocaleString('en-us', { month: 'long' });
  const fullYear = props.date.getFullYear();
  const week = getCurrentWeekDates();
  return (
    <div className='cal-view'>
      <div className='cal-view__header'>
        <div className='cal-view__title'>
          <b>{monthName}</b> {fullYear}
        </div>
        <div className='cal-view__week__grid-titles'>
          {week.map((date, index) => (
            <div key={index} className='cal-view__week__weekday-title'>
              {date.toLocaleString('en-us', { weekday: 'short' })}{' '}
              {date.getDate()}
            </div>
          ))}
        </div>
      </div>
      <div className='cal-week__grid-wrapper'>
        <div className='cal-week__grid'>
          <HoursLabels />
          {week.map((date, index) => (
            <div key={index} className='week-view__day'>
              {[...Array(24)].map((element, index) => (
                <div key={index} className='week-view__grid-hour' />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
