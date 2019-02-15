import React from 'react';

import './Navigator.css';

export const Navigator: React.FunctionComponent<{
  monthName: string;
  monthArray: [][];
  currentDay: number;
}> = ({ monthName, monthArray, currentDay }) => {
  const month_table = monthArray.map((week: any, index: number) => (
    <tr key={index}>
      {week.map((day: number, index: number) => {
        let className = '';
        if (day) className += ' day';
        if (Number(day) === currentDay) className += ' current';
        return (
          <td key={index} className={className}>
            {day}
          </td>
        );
      })}
    </tr>
  ));

  return (
    <div className='sidebar-month' id='sidebar-month'>
      <h2 className='date-info'>{monthName}</h2>
      <table className='mini-month-navigator'>
        <tbody>{month_table}</tbody>
      </table>
    </div>
  );
};
