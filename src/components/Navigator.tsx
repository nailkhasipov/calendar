import React from 'react';

import './Navigator.css';

export const Navigator: React.FunctionComponent<{
  monthName: string;
  monthArray: [][];
  currentDay: number;
  onDayClick: Function;
}> = ({ monthName, monthArray, currentDay, onDayClick }) => {
  const month_table = monthArray.map((week: any, index: number) => (
    <tr key={index}>
      {week.map((day: number, index: number) => {
        let className = ''; //@TODO need refactor
        if (day) className += ' day';
        if (Number(day) === currentDay) className += ' current';
        return (
          <td key={index}>
            {day && (
              <span className={className} onClick={() => onDayClick(day)}>
                {day}
              </span>
            )}
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
