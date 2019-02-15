import React from 'react';
import './Day.css';

export const Day = () => (
  <div className='views day-view'>
    <ul className='day-view__labels'>
      {Array(...Array(24)).map((value, index) => (
        <li key={index} className='day-view__labels-hour'>{`${String(
          index
        ).padStart(2, '0')}:00`}</li>
      ))}
    </ul>
    <div className='day-view__grid'>
      {Array(...Array(24)).map((value, index) => (
        <div key={index} className='day-view__grid-hour' />
      ))}
    </div>
  </div>
);

export default Day;
