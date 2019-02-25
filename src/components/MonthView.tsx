import React from 'react';
import { getMonthArray } from '../helpers';

export const MonthView = () => {
  const month = getMonthArray(new Date());

  return (
    <table className='month-table'>
      <tbody>
        {month.map((week: any) => (
          <tr>
            {week.map((day: any) => (
              <td>{day}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MonthView;
