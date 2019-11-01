import React, { useContext } from "react";
import styled from "styled-components";
import { StateContext } from "../state";
import {
  getMonthArray,
  getDateTitle,
  isOffsetDay,
  isSelectedDay,
  isToday
} from "../utils";

const getDayComponent = (monthArrayDate: Date, selectedDate: Date) => {
  if (isOffsetDay(monthArrayDate, selectedDate))
    return <OffsetDay>{monthArrayDate.getDate()}</OffsetDay>;
  if (isSelectedDay(monthArrayDate, selectedDate))
    return <CurrentDay>{monthArrayDate.getDate()}</CurrentDay>;
  if (isToday(monthArrayDate)) return <Today>{monthArrayDate.getDate()}</Today>;
  return <Day>{monthArrayDate.getDate()}</Day>;
};

type MonthTableProps = {
  date: Date;
  onDateChange: (date: Date) => void;
};

export const MonthTable = (props: MonthTableProps) => {
  return (
    <StyledMonthTable>
      <Title>{getDateTitle(props.date)}</Title>
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
        {getMonthArray(props.date).map((monthArrayDate: Date, index) => (
          <DayWrapper
            key={index}
            onClick={() => props.onDateChange(monthArrayDate)}
          >
            {getDayComponent(monthArrayDate, props.date)}
          </DayWrapper>
        ))}
      </Days>
    </StyledMonthTable>
  );
};

const StyledMonthTable = styled.div``;

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
