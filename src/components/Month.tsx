import React from 'react';
import { VEvent } from '../types';
import { getMonthArray, getCurrentWeekDates } from '../utils';
import './Month.css';

type MonthProps = {
  date: Date;
  events: VEvent[];
};

export const Month = (props: MonthProps) => {
  const month = getMonthArray(new Date());
  const monthArray = getMonthArray(props.date);
  const month_table = monthArray.map((monthArrayDate: Date, index) => {
    const today = new Date();
    let className = 'day';
    //@TODO !!!!!
    if (monthArrayDate.getMonth() != today.getMonth()) className += ' offset ';
    if (
      monthArrayDate.getMonth() === today.getMonth() &&
      monthArrayDate.getDate() === today.getDate()
    )
      className += ' today ';
    //@TODO !!!!!
    const todayEvents = props.events.map((event: VEvent, index) => {
      const eventDate = new Date(event.start);
      if (
        eventDate.getMonth() === monthArrayDate.getMonth() &&
        eventDate.getDate() === monthArrayDate.getDate()
      ) {
        return <div className='event'>{event.title}</div>;
      }
    });
    return (
      <div key={index} className={className}>
        <span className='month__day__date'>{monthArrayDate.getDate()}</span>
        {todayEvents}
      </div>
    );
  });

  const monthName = props.date.toLocaleString('en-us', { month: 'long' });
  const fullYear = props.date.getFullYear();
  const week = getCurrentWeekDates();

  return (
    <div className='cal-view'>
      <div className='cal-view__header'>
        <div className='cal-view__title'>
          <b>{monthName}</b> {fullYear}
        </div>
        <div className='cal-view__month__grid-titles'>
          {week.map((date, index) => (
            <div key={index} className='cal-view__month__weekday-title'>
              {date.toLocaleString('en-us', { weekday: 'short' })}{' '}
            </div>
          ))}
        </div>
      </div>
      <div className='month-table'>{month_table}</div>
    </div>
  );
};
