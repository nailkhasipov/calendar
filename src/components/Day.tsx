import React from 'react';
import { VEvent } from '../types';
import './Day.css';

type DayProps = {
  date: Date;
  events: VEvent[];
  onCreateEvent: Function;
};

const getDateByPosition = (
  date: Date,
  event: React.MouseEvent<HTMLElement>
): number => {
  const target = event.target as HTMLElement;
  const rect = target.getBoundingClientRect();
  const positionY = event.clientY - rect.top;

  const totalMinutes = Math.floor(positionY / 10) * 15; //@TODO use constants
  const hours = (totalMinutes / 60) ^ 0;
  const minutes = totalMinutes % 60;

  return date.setHours(hours, minutes);
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
    <React.Fragment>
      <div className='day-view__grid'>
        {[...Array(24)].map((element, index) => (
          <div key={index} className='day-view__grid-hour' />
        ))}
      </div>
      <div
        className='day-events'
        onClick={(event: React.MouseEvent<HTMLElement>) =>
          props.onCreateEvent(getDateByPosition(props.date, event))
        }
      >
        {currentDateEventsList}
      </div>
    </React.Fragment>
  );
};

export default Day;
