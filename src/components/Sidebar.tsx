import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { getMonthArray, getDateTitle } from '../utils';

const today = new Date();

const getDayComponent = (monthArrayDate: Date, selectedDate: Date) => {
  if (monthArrayDate.getMonth() != today.getMonth())
    return <OffsetDay>{monthArrayDate.getDate()}</OffsetDay>;
  if (
    monthArrayDate.getMonth() === selectedDate.getMonth() &&
    monthArrayDate.getDate() === selectedDate.getDate()
  )
    return <CurrentDay>{monthArrayDate.getDate()}</CurrentDay>;
  if (
    monthArrayDate.getMonth() === today.getMonth() &&
    monthArrayDate.getDate() === today.getDate()
  )
    return <Today>{monthArrayDate.getDate()}</Today>;
  return <Day>{monthArrayDate.getDate()}</Day>;
};

export const Sidebar: React.FunctionComponent<{
  date: Date;
  onDateChange: (date: Date) => void;
}> = ({ date, onDateChange }) => (
  <StyledSidebar>
    <MonthTable>
      <Title>{getDateTitle(date)}</Title>
      <DayTitles>
        <DayTitle>M</DayTitle>
        <DayTitle>T</DayTitle>
        <DayTitle>W</DayTitle>
        <DayTitle>T</DayTitle>
        <DayTitle>F</DayTitle>
        <DayTitle>S</DayTitle>
        <DayTitle>S</DayTitle>
      </DayTitles>
      <Days>
        {getMonthArray(date).map((monthArrayDate: Date, index) => (
          <DayWrapper key={index} onClick={() => onDateChange(monthArrayDate)}>
            {getDayComponent(monthArrayDate, date)}
          </DayWrapper>
        ))}
      </Days>
    </MonthTable>
  </StyledSidebar>
);

const StyledSidebar = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  border-right: 1px solid #eee;
  padding: 16px 0;
`;

const MonthTable = styled.div``;

const Title = styled.span`
  padding: 10px;
  margin-bottom: 4px;
`;

const DayTitles = styled.div`
  display: flex;
  flex-direction: row;
`;

const DayTitle = styled.div`
  width: 24px;
  height: 24px;
  font-size: 11px;
  margin: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DayWrapper = styled.div``;

const Days = styled.div`
  width: 224px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;

const Day = styled.div`
  width: 24px;
  height: 24px;
  font-size: 11px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
  margin: 4px;
  :hover {
    background: #f1f3f5;
  }
`;

const OffsetDay = styled(Day)`
  color: #eee;
`;

const CurrentDay = styled(Day)`
  background: #868e96;
  color: white;
  :hover {
    background: #495057;
    color: white;
  }
`;

const Today = styled(Day)`
  background: #495057;
  color: white;
  :hover {
    background: #212529;
  }
`;
