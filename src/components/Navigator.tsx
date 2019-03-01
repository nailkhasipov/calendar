import React from 'react';
import { getMonthArray, getDateTitle } from '../helpers';

import './Navigator.css';

export const Navigator: React.FunctionComponent<{
  date: Date;
  onDateChange: Function;
}> = ({ date, onDateChange }) => {
  const monthArray = getMonthArray(date);
  const month_table = monthArray.map((monthArrayDate: Date, index) => {
    const today = new Date();
    let className = 'day';
    //@TODO !!!!!
    if (monthArrayDate.getMonth() != today.getMonth()) className += ' offset ';
    if (
      monthArrayDate.getMonth() === date.getMonth() &&
      monthArrayDate.getDate() === date.getDate()
    )
      className += ' current ';
    if (
      monthArrayDate.getMonth() === today.getMonth() &&
      monthArrayDate.getDate() === today.getDate()
    )
      className += ' today ';
    //@TODO !!!!!
    return (
      <div
        key={index}
        className={className}
        onClick={() => onDateChange(monthArrayDate)}
      >
        {monthArrayDate.getDate()}
      </div>
    );
  });

  return (
    <div className='cal-sidebar'>
      <div className='cal-navigator'>
        <span className='cal-navigator__title'>{getDateTitle(date)}</span>
        <div className='cal-navigator__table'>
          <div className='day-titles'>
            <div className='day-title'>M</div>
            <div className='day-title'>T</div>
            <div className='day-title'>W</div>
            <div className='day-title'>T</div>
            <div className='day-title'>F</div>
            <div className='day-title'>S</div>
            <div className='day-title'>S</div>
          </div>
          <div className='mini-month-navigator'>{month_table}</div>
        </div>
      </div>
    </div>
  );
};
