import React from 'react';
import { getMonthArray } from '../helpers';

export const MonthView = () => {
  const month = getMonthArray(new Date().getTime());

  return (
    <table className="month-table">
      <tbody>
        {month.map(week => (
          <tr>
            {week.map(day => <td>{day}</td>)}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MonthView;
