import React from 'react';
import { getMonthArray } from '../helpers';

export const MonthTable = () => {
  const month = getMonthArray(new Date().getTime());

  const monthTable = month.map(week => (
    <tr key={week}>
      {week.map(day => (
        <td key={week + day}>
          { day }
        </td>
      ))}
    </tr>
  ));

  return (
    <table>
      <tbody>
        {monthTable}
      </tbody>
    </table>
  );
};

export default MonthTable;
