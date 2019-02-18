import React from 'react';
import { getMonthMatrix, getDateTitle } from '../helpers';

import './Navigator.css';

export const Navigator: React.FunctionComponent<{
  selectedDate: Date;
  onDateChange: Function;
}> = ({ selectedDate, onDateChange }) => {
  const monthMatrix = getMonthMatrix(selectedDate);
  const month_table = monthMatrix.map((week: any, index: number) => (
    <tr key={index}>
      {week.map((date: Date, index: number) => {
        //@TODO !!!!!
        let className = 'day';
        if (selectedDate.getMonth() != date.getMonth()) className += ' offset ';
        if (date.getDate() === selectedDate.getDate()) className += ' current ';
        //@TODO !!!!!
        return (
          <td key={index}>
            <span className={className} onClick={() => onDateChange(date)}>
              {date.getDate()}
            </span>
          </td>
        );
      })}
    </tr>
  ));

  return (
    <div className='sidebar-month' id='sidebar-month'>
      <h2 className='date-info'>{getDateTitle(selectedDate)}</h2>
      <table className='mini-month-navigator'>
        <tbody>{month_table}</tbody>
      </table>
    </div>
  );
};
