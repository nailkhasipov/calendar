import React from 'react';
import './Day.css';

type Event = {
  title: string;
  startDate: Date;
  endDate: Date;
};

export const Day: React.FunctionComponent<{
  date: Date;
  events: Event[];
}> = ({ date, events }) => {
  const currentDateString = date.toDateString();
  // const currentDateEvents = events.filter(
  //   (event: Event) =>
  //     Date.parse(event.startDate).toDateString() === currentDateString
  // );
  const currentDateEventsList = events.map((event, index) => (
    <div key={index}>{event.title}</div>
  ));
  return (
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
      <div className='day-events'>{currentDateEventsList}</div>
    </div>
  );
};

export default Day;
