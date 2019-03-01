import React from 'react';
import { VEvent } from '../types';
import './Day.css';
import { translatePositionByPxToDate } from '../helpers';

type DayProps = {
  date: Date;
  events: VEvent[];
  onCreateEvent: Function;
};

export const Day = (props: DayProps) => {
  const currentDateString = props.date.toDateString();
  const currentDateEvents = props.events.filter((event: VEvent) => {
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
    <div className='cal-view'>
      <div className='cal-view__title'>1 March 2019</div>
      <div className='cal-day__grid-wrapper'>
        <div className='cal-day__grid'>
          <HoursLabels />
          <DayGrid />
        </div>
      </div>
    </div>
  );
};

const DayGrid = () => (
  <div className='day-view__grid'>
    {[...Array(24)].map((element, index) => (
      <div key={index} className='day-view__grid-hour' />
    ))}
  </div>
);

const HoursLabels = () => (
  <div className='cal__hours'>
    {[...Array(24)].map((element, index) => (
      <div className='cal_hours-label'>
        {index.toString().padStart(2, '0')}:00
      </div>
    ))}
  </div>
);
