import React from 'react';

export const WeekView = () => {

  return (
    <div class="views view-week">
      {Array.apply( null, Array( 7 ) ).map( () =>
        <div class="day-grid">
          {Array.apply( null, Array( 24 ) ).map( () =>
            <div class="hour"></div>
          )}
        </div>
      )}
    </div>
  );
}