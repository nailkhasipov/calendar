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
    <div className='sidebar-month' id='sidebar-month'>
      <h2 className='date-info'>{getDateTitle(date)}</h2>
      <div className='mini-month-navigator'>{month_table}</div>
    </div>
  );
};
