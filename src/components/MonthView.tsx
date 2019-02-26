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

  return <div className='month-table'>{month_table}</div>;
};
