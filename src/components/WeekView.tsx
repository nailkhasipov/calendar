import React from 'react';

export const WeekView = () => (
  <div className='views view-week'>
    {Array(...Array(7)).map(() => (
      <div className='day-grid'>
        {Array(...Array(24)).map(() => (
          <div className='hour' />
        ))}
      </div>
    ))}
  </div>
);

export default WeekView;
