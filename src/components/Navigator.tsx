import React from 'react';
import { getMonthArray } from '../helpers';

import './Navigator.css';

export const Navigator = () => {
  const month = getMonthArray(new Date().getTime());

  const monthTable = month.map((week: any, index: number) => (
    <tr key={index}>
      {week.map((day: any, index: number) => (
        <td key={index}>{day}</td>
      ))}
    </tr>
  ));

  return (
    <table className='mini-month-navigator'>
      <tbody>{monthTable}</tbody>
    </table>
  );
};
