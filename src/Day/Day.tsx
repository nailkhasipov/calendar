import React from 'react';
import styled from 'styled-components';

import { VEvent } from '../types';
import { HoursLabels } from './HoursLabels';
import { DayGrid } from './DayGrid';

type DayProps = {
  date: Date;
  events: VEvent[];
  onCreateEvent: (timestamp: number) => void;
};

const FullCalView = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const FullCalViewHeader = styled.div`
  font-size: 16px;
  font-weight: 200;
  padding-bottom: 8px;
  border-bottom: 2px solid #eee;
  margin: 0px 32px 0px 16px;
  margin-bottom: 4px;
`;

const FullCalViewHeaderTitle = styled.div`
  font-size: 24px;
  font-weight: 500;
  padding: 16px 16px 8px 16px;
`;

const FullCalViewHeaderDayGridTitle = styled.div`
  font-size: 16px;
  font-weight: 200;
  padding-bottom: 8px;
  border-bottom: 2px solid #eee;
  margin: 0px 32px 0px 16px;
  margin-bottom: 4px;
`;

const FullCalViewGridWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  flex-grow: 1;
`;

const FullCalViewGrid = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  width: 100%;
  overflow: scroll;
  height: 100%;
  padding: 0 32px;
`;

export const Day = (props: DayProps) => {
  const day = props.date.getDate();
  const monthName = props.date.toLocaleString('en-us', { month: 'long' });
  const fullYear = props.date.getFullYear();
  const dayName = props.date.toLocaleString('en-us', { weekday: 'long' });
  return (
    <FullCalView>
      <FullCalViewHeader>
        <FullCalViewHeaderTitle>
          <b>
            {day} {monthName}
          </b>{' '}
          {fullYear}
        </FullCalViewHeaderTitle>
        <FullCalViewHeaderDayGridTitle>{dayName}</FullCalViewHeaderDayGridTitle>
      </FullCalViewHeader>
      <FullCalViewGridWrapper>
        <FullCalViewGrid>
          <HoursLabels />
          <DayGrid full={true} date={props.date} events={props.events} />
        </FullCalViewGrid>
      </FullCalViewGridWrapper>
    </FullCalView>
  );
};
