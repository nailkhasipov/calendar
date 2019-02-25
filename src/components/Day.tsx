import React from 'react';
import { VEvent } from '../types';
import './Day.css';

export const Day: React.FunctionComponent<{
  date: Date;
  events: VEvent[];
}> = ({ date, events }) => {
  const currentDateString = date.toDateString();
  const currentDateEvents = events.filter((event: VEvent) => {
    const eventDateString = new Date(event.start).toDateString();
    return eventDateString === currentDateString;
  });
  const currentDateEventsList = currentDateEvents.map((event, index) => {
    const startHours = new Date(event.start).getHours();
    const top = startHours * 40;
    return (
      <div key={index} className='day-view__event' style={{ top: top + 'px' }}>
        {event.title}
      </div>
    );
  });
  return (
    <React.Fragment>
      <div className='day-view__grid'>
        <div className='day-view__grid-hour' />
        <div className='day-view__grid-hour' />
        <div className='day-view__grid-hour' />
        <div className='day-view__grid-hour' />
        <div className='day-view__grid-hour' />
        <div className='day-view__grid-hour' />
        <div className='day-view__grid-hour' />
        <div className='day-view__grid-hour' />
        <div className='day-view__grid-hour' />
        <div className='day-view__grid-hour' />
        <div className='day-view__grid-hour' />
        <div className='day-view__grid-hour' />
        <div className='day-view__grid-hour' />
        <div className='day-view__grid-hour' />
        <div className='day-view__grid-hour' />
        <div className='day-view__grid-hour' />
        <div className='day-view__grid-hour' />
        <div className='day-view__grid-hour' />
        <div className='day-view__grid-hour' />
        <div className='day-view__grid-hour' />
        <div className='day-view__grid-hour' />
        <div className='day-view__grid-hour' />
        <div className='day-view__grid-hour' />
        <div className='day-view__grid-hour' />
      </div>
      <div className='day-events'>{currentDateEventsList}</div>
    </React.Fragment>
  );
};

export default Day;
