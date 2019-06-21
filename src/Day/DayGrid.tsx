import React from 'react';
import styled from 'styled-components';

import { VEvent } from '../types';
import { EventGrid } from '../Day/EventGrid';

type DayGridProps = {
  full?: boolean;
  date: Date;
  events: VEvent[];
};

type StyledDayGridProps = {
  full?: boolean;
};

const StyledDayGrid = styled.div`
  width: ${(props: StyledDayGridProps) =>
    props.full ? '100%' : '14.2857142857%'};
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

export const DayGrid = (props: DayGridProps) => (
  <StyledDayGrid full={props.full}>
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
  </StyledDayGrid>
);
