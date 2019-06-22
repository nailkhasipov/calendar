import React from 'react';
import styled from 'styled-components';

import { MonthTable } from './MonthTable';

export const Sidebar: React.FunctionComponent<{
  date: Date;
  onDateChange: (date: Date) => void;
}> = ({ date, onDateChange }) => (
  <StyledSidebar>
    <MonthTable date={date} onDateChange={onDateChange} />
  </StyledSidebar>
);

const StyledSidebar = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  border-right: 1px solid #eee;
  padding: 16px 0;
`;
