import React from 'react';
import styled from 'styled-components';

import {
  FullCalView,
  FullCalViewHeader,
  FullCalViewHeaderTitle
} from '../Day/Day';

import { getCurrentWeekDates } from '../utils';
import { VEvent } from '../types';
import { HoursLabels } from '../Day/HoursLabels';
import { WeekLabels } from '../components/WeekLabels';
import { DayGrid } from '../Day/DayGrid';

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
    <FullCalView>
      <FullCalViewHeader>
        <FullCalViewHeaderTitle>
          <b>{monthName}</b> {fullYear}
        </FullCalViewHeaderTitle>
        <WeekLabels withDates={true} />
      </FullCalViewHeader>
      <WeekWrapper>
        <StyledWeek>
          <HoursLabels />
          {week.map((date, index) => (
            <DayGrid
              key={index}
              full={false}
              date={date}
              events={props.events}
            />
          ))}
        </StyledWeek>
      </WeekWrapper>
    </FullCalView>
  );
};
