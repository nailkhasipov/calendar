import React from 'react';
import { getMonthMatrix, getDateTitle } from '../helpers';

import './Navigator.css';

export const Navigator: React.FunctionComponent<{
  date: Date;
  onDateChange: Function;
}> = ({ date, onDateChange }) => {
  const monthMatrix = getMonthMatrix(date);
  const month_table = monthMatrix.map((week: any, index: number) => (
    <tr key={index}>
      {week.map((monthMatrixDate: Date, index: number) => {
        const today = new Date();
        //@TODO !!!!!
        let className = 'day';
        if (date.getMonth() != monthMatrixDate.getMonth())
          className += ' offset ';
        if (
          monthMatrixDate.getMonth() === date.getMonth() &&
          monthMatrixDate.getDate() === date.getDate()
        )
          className += ' current ';
        if (
          monthMatrixDate.getMonth() === today.getMonth() &&
          monthMatrixDate.getDate() === today.getDate()
        )
          className += ' today ';
        //@TODO !!!!!
        return (
          <td key={index}>
            <span
              className={className}
              onClick={() => onDateChange(monthMatrixDate)}
            >
              {monthMatrixDate.getDate()}
            </span>
          </td>
        );
      })}
    </tr>
  ));

  return (
    <div className='sidebar-month' id='sidebar-month'>
      <h2 className='date-info'>{getDateTitle(date)}</h2>
      <table className='mini-month-navigator'>
        <tbody>{month_table}</tbody>
      </table>
    </div>
  );
};
