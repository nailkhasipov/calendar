import React from 'react';
import { VEvent } from '../types';
import { getMonthArray } from '../helpers';
import './MonthView.css';

type MonthViewProps = {
  date: Date;
  events: VEvent[];
};

export const MonthView = (props: MonthViewProps) => {
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
        return <li className='event'>{event.title}</li>;
      }
    });
    return (
      <div key={index} className={className}>
        {monthArrayDate.getDate()}
        {todayEvents}
      </div>
    );
  });

  return (
    <React.Fragment>
      <div className='month-table-day-titles'>
        <div className='day-title'>Mon</div>
        <div className='day-title'>Tue</div>
        <div className='day-title'>Wed</div>
        <div className='day-title'>Thu</div>
        <div className='day-title'>Fri</div>
        <div className='day-title'>Sut</div>
        <div className='day-title'>Sun</div>
      </div>
      <div className='month-table'>{month_table}</div>
    </React.Fragment>
  );
};
