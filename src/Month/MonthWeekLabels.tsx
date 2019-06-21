import React from 'react';
import styled from 'styled-components';

import { getCurrentWeekDates } from '../utils';

const StyledMonthWeekLabels = styled.div`
  font-size: 16px;
  padding-bottom: 8px;
  border-bottom: 2px solid #eee;
  margin-bottom: 4px;
  display: flex;
  flex-direction: row;
`;

const MonthWeekLabel = styled.div`
  width: 14.2857142857%;
  text-align: center;
`;

export const MonthWeekLabels = () => {
  const week = getCurrentWeekDates();
  return (
    <StyledMonthWeekLabels>
      {week.map((date, index) => (
        <MonthWeekLabel key={index}>
          {date.toLocaleString('en-us', { weekday: 'short' })}
        </MonthWeekLabel>
      ))}
    </StyledMonthWeekLabels>
  );
};
