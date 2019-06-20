import React from 'react';
import styled from 'styled-components';

import { getMonthArray, getCurrentWeekDates } from '../utils';

const StyledWeekDaysTitles = styled.div`
  font-size: 16px;
  padding-bottom: 8px;
  border-bottom: 2px solid #eee;
  margin-bottom: 4px;
  display: flex;
  flex-direction: row;
`;

const StyledWeekDaysTitlesTitle = styled.div`
  width: 14.2857142857%;
  text-align: center;
`;

export const WeekDaysTitles = () => {
  const week = getCurrentWeekDates();
  return (
    <StyledWeekDaysTitles>
      {week.map((date, index) => (
        <StyledWeekDaysTitlesTitle key={index}>
          {date.toLocaleString('en-us', { weekday: 'short' })}
        </StyledWeekDaysTitlesTitle>
      ))}
    </StyledWeekDaysTitles>
  );
};
