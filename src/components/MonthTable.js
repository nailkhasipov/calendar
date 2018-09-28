import React from 'react';
import { getMonthArray } from '../helpers';

export const MonthTable = ( props ) => {
  const month = getMonthArray( new Date().getTime() );

  const monthTable = month.map( ( week, index ) => 
    <tr key={ index }>
      {week.map( ( day, index ) =>
        <td key={ index }>
          { day }
        </td>
      )}
    </tr>
  );

  return (
    <table>
      <tbody>
        {monthTable}
      </tbody>
    </table>
  );
}