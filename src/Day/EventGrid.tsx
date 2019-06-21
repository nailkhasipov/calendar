import React from 'react';
import styled from 'styled-components';

import { VEvent } from '../types';
import { translatePositionByPxToDate } from '../utils';

export type EventGridProps = {
  date: Date;
  events: VEvent[];
  onCreateEvent: (timestamp: number) => void;
};

const DayEvents = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 960px;
`;

const DayViewEvent = styled.div`
  position: absolute;
  width: 100%;
  background: #339af0;
  color: white;
  padding: 10px;
  cursor: pointer;
`;

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
      <DayViewEvent
        key={index}
        className='day-view__event'
        style={{ top: top + 'px' }}
      >
        {event.title}
      </DayViewEvent>
    );
  });
  return (
    <DayEvents
      onClick={(event: React.MouseEvent<HTMLElement>) =>
        props.onCreateEvent(
          translatePositionByPxToDate(props.date, event.nativeEvent.offsetY)
        )
      }
    >
      {currentDateEventsList}
    </DayEvents>
  );
};
