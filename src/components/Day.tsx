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
    <div className='views day-view'>
      <ul className='day-view__labels'>
        <li className='day-view__labels-hour'>00:00</li>
        <li className='day-view__labels-hour'>01:00</li>
        <li className='day-view__labels-hour'>02:00</li>
        <li className='day-view__labels-hour'>03:00</li>
        <li className='day-view__labels-hour'>04:00</li>
        <li className='day-view__labels-hour'>05:00</li>
        <li className='day-view__labels-hour'>06:00</li>
        <li className='day-view__labels-hour'>07:00</li>
        <li className='day-view__labels-hour'>08:00</li>
        <li className='day-view__labels-hour'>09:00</li>
        <li className='day-view__labels-hour'>10:00</li>
        <li className='day-view__labels-hour'>11:00</li>
        <li className='day-view__labels-hour'>12:00</li>
        <li className='day-view__labels-hour'>13:00</li>
        <li className='day-view__labels-hour'>14:00</li>
        <li className='day-view__labels-hour'>15:00</li>
        <li className='day-view__labels-hour'>16:00</li>
        <li className='day-view__labels-hour'>17:00</li>
        <li className='day-view__labels-hour'>18:00</li>
        <li className='day-view__labels-hour'>19:00</li>
        <li className='day-view__labels-hour'>20:00</li>
        <li className='day-view__labels-hour'>21:00</li>
        <li className='day-view__labels-hour'>22:00</li>
        <li className='day-view__labels-hour'>23:00</li>
      </ul>
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
    </div>
  );
};

export default Day;
