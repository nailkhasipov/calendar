import React from 'react';
import styled from 'styled-components';

import { VEvent } from '../types';
import { EventGrid } from '../Day/Day';

type WeekDayProps = {
  date: Date;
  events: VEvent[];
};

const StyledWeekDay = styled.div`
  width: 14.2857142857%;
  padding-top: 6px;
  position: relative;
`;
const Hour = styled.div`
  height: 40px;
  border-top: 1px solid #f8f9fa;
  border-right: 1px solid #eeeeee;
  :last-child {
    border-right: none;
  }
`;

export const WeekDay = (props: WeekDayProps) => (
  <StyledWeekDay>
    <Hour />
    <Hour />
    <Hour />
    <Hour />
    <Hour />
    <Hour />
    <Hour />
    <Hour />
    <Hour />
    <Hour />
    <Hour />
    <Hour />
    <Hour />
    <Hour />
    <Hour />
    <Hour />
    <Hour />
    <Hour />
    <Hour />
    <Hour />
    <Hour />
    <Hour />
    <Hour />
    <Hour />
    <EventGrid
      date={props.date}
      events={props.events}
      onCreateEvent={(timestamp: number) => true}
    />
  </StyledWeekDay>
);
