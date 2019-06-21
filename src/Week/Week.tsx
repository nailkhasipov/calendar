import React from 'react';
import styled from 'styled-components';

import { getCurrentWeekDates } from '../utils';
import { VEvent } from '../types';
import { HoursLabels, EventGridProps, EventGrid } from '../Day/Day';
import { WeekLabels } from '../components/WeekLabels';
import { WeekDay } from './WeekDay';

const StyledWeek = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  position: absolute;
  width: 100%;
  overflow: scroll;
  height: 100%;
  padding-left: 32px;
`;

const WeekWrapper = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  flex-grow: 1;
`;

type WeekProps = {
  date: Date;
  events: VEvent[];
  onCreateEvent: Function;
};

export const Week = (props: WeekProps) => {
  const monthName = props.date.toLocaleString('en-us', { month: 'long' });
  const fullYear = props.date.getFullYear();
  const week = getCurrentWeekDates();
  return (
    <div className='cal-view'>
      <div className='cal-view__header'>
        <div className='cal-view__title'>
          <b>{monthName}</b> {fullYear}
        </div>
        <WeekLabels withDates={true} />
      </div>
      <WeekWrapper>
        <StyledWeek>
          <HoursLabels />
          {week.map((date, index) => (
            <WeekDay key={index} date={date} events={props.events} />
          ))}
        </StyledWeek>
      </WeekWrapper>
    </div>
  );
};
