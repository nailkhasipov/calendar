import React from 'react';
import './Navigator';
import { getMonthArray } from '../helpers';

export const Navigator = () => {
  const month = getMonthArray(new Date().getTime());

  const monthTable = month.map((week: any) => (
    <tr key={week}>
      {week.map((day: any) => (
        <td key={week + day}>{day}</td>
      ))}
    </tr>
  ));

  return (
    <table className='mini-month-navigator'>
      <tbody>{monthTable}</tbody>
    </table>
  );
};
