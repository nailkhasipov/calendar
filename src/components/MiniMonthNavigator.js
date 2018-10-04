import React from 'react';
import './MiniMonthNavigator.css';
import { getMonthArray } from '../helpers';

export const MiniMonthNavigator = () => {
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
    <table className="mini-month-navigator">
      <tbody>
        {monthTable}
      </tbody>
    </table>
  );
};

export default MiniMonthNavigator;
