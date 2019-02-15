import React from 'react';
import { getMonthArray, getDateTitle } from '../helpers';

import './Navigator.css';

export const Navigator: React.FunctionComponent<{ date: Date }> = props => {
  const day_of_month = props.date.getDate();
  const month_name = getDateTitle(props.date);
  const month_array = getMonthArray(props.date);

  const month_table = month_array.map((week: any, index: number) => (
    <tr key={index}>
      {week.map((day: number, index: number) => (
        <td
          key={index}
          className={'day ' + (Number(day) === day_of_month ? 'current' : '')}
        >
          {day}
        </td>
      ))}
    </tr>
  ));

  return (
    <div className='sidebar-month' id='sidebar-month'>
      <h2 className='date-info'>{month_name}</h2>
      <table className='mini-month-navigator'>
        <tbody>{month_table}</tbody>
      </table>
    </div>
  );
};
