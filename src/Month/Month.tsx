import React from 'react';
import styled from 'styled-components';
import { VEvent } from '../types';
import { getMonthArrayWithOffsetAndEvents } from '../utils';

import { WeekDaysTitles } from './WeekDaysTitles';

type MonthProps = {
  date: Date;
  events: VEvent[];
};

const MonthTable = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 100%;
`;

const MonthTableDay = styled.div`
  width: 14.2857142857%;
  height: 16.6666666667%;
  border-left: 1px solid #eeeeee;
  border-bottom: 1px solid #eeeeee;
`;

const MonthTableDayDate = styled.span`
  width: 100%;
  text-align: right;
  display: block;
  padding: 8px;
  font-size: 13px;
`;

const MonthTableDayEvent = styled.div`
  background: #339af0;
`;

export const Month = (props: MonthProps) => {
  const monthArray = getMonthArrayWithOffsetAndEvents(
    props.date,
    new Date(),
    true
  );
  const month_table = monthArray.map((day: any, index) => (
    <MonthTableDay key={index}>
      <MonthTableDayDate>{day.date.getDate()}</MonthTableDayDate>
    </MonthTableDay>
  ));

  const monthName = props.date.toLocaleString('en-us', { month: 'long' });
  const fullYear = props.date.getFullYear();

  return (
    <div className='cal-view'>
      <div className='cal-view__header'>
        <div className='cal-view__title'>
          <b>{monthName}</b> {fullYear}
        </div>
        <WeekDaysTitles />
      </div>
      <MonthTable>{month_table}</MonthTable>
    </div>
  );
};

type MonthDayProps = {};

const StyledMonthDay = styled.div``;

const MonthDay = (props: MonthDayProps) => {
  return (
    <StyledMonthDay>
      <MonthTableDayDate>1</MonthTableDayDate>
    </StyledMonthDay>
  );
};
