import React from 'react';
import { VEvent } from '../types';
import './Day.css';
import { translatePositionByPxToDate } from '../helpers';

type DayProps = {
  date: Date;
  events: VEvent[];
  onCreateEvent: (timestamp: number) => void;
};

export const Day = (props: DayProps) => {
  const day = props.date.getDate();
  const monthName = props.date.toLocaleString('en-us', { month: 'long' });
  const fullYear = props.date.getFullYear();
  const dayName = props.date.toLocaleString('en-us', { weekday: 'long' });
  return (
    <div className='cal-view'>
      <div className='cal-view__header'>
        <div className='cal-view__title'>
          <b>
            {day} {monthName}
          </b>{' '}
          {fullYear}
        </div>
        <div className='cal-day__grid__header'>{dayName}</div>
      </div>
      <div className='cal-day__grid-wrapper'>
        <div className='cal-day__grid'>
          <HoursLabels />
          <div className='day-view__grid'>
            {[...Array(24)].map((element, index) => (
              <div key={index} className='day-view__grid-hour' />
            ))}
            <EventGrid
              date={props.date}
              events={props.events}
              onCreateEvent={(timestamp: number) =>
                props.onCreateEvent(timestamp)
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export const HoursLabels = () => (
  <div className='cal__hours'>
    {[...Array(24)].map((element, index) => (
      <div className='cal_hours-label'>
        {index.toString().padStart(2, '0')}:00
      </div>
    ))}
  </div>
);

export type EventGridProps = {
  date: Date;
  events: VEvent[];
  onCreateEvent: (timestamp: number) => void;
};

export const EventGrid = (props: EventGridProps) => {
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
    <div
      className='day-events'
      onClick={(event: React.MouseEvent<HTMLElement>) =>
        props.onCreateEvent(
          translatePositionByPxToDate(props.date, event.nativeEvent.offsetY)
        )
      }
    >
      {currentDateEventsList}
    </div>
  );
};
