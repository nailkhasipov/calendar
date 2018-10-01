import React from 'react';

export const DayView = () => {

  return (
    <div className="views view-day" id="view-day">
      <ul className="labels">
        {Array.apply( null, Array( 24 ) ).map( ( value, index ) =>
          <li className="hour">{ String(index).padStart(2, '0') }</li>
        )}
      </ul> 
      <div className="day-grid">
        {Array.apply( null, Array( 24 ) ).map( () =>
          <div className="hour"></div>
        )}
      </div>
    </div>
  );
}