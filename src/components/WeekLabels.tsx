import React from 'react';
import styled from 'styled-components';

import { getCurrentWeekDates } from '../utils';

const StyledWeekLabels = styled.div`
  font-size: 16px;
  padding-bottom: 8px;
  border-bottom: 2px solid #eee;
  margin-bottom: 4px;
  display: flex;
  flex-direction: row;
`;

const WeekLabel = styled.div`
  width: 14.2857142857%;
  text-align: center;
`;

type WeekLabelsProps = {
  withDates?: boolean;
};

export const WeekLabels = (props: WeekLabelsProps) => {
  const week = getCurrentWeekDates();
  return (
    <StyledWeekLabels>
      {week.map((date, index) => (
        <WeekLabel key={index}>
          {date.toLocaleString('en-us', { weekday: 'short' })}
          {props.withDates && ' ' + date.getDate()}
        </WeekLabel>
      ))}
    </StyledWeekLabels>
  );
};
