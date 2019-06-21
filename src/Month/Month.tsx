import React from 'react';
import styled from 'styled-components';
import { VEvent } from '../types';
import {
  getMonthArrayWithOffsetAndEvents,
  getMonthNameFromDate,
  getFullYearFromDate
} from '../utils';

import { WeekLabels } from '../components/WeekLabels';
import { MonthDay } from './MonthDay';

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

export const Month = (props: MonthProps) => {
  const monthArray = getMonthArrayWithOffsetAndEvents(
    props.date,
    new Date(),
    true
  );
  return (
    <div className='cal-view'>
      <div className='cal-view__header'>
        <div className='cal-view__title'>
          <b>{getMonthNameFromDate(props.date)}</b>{' '}
          {getFullYearFromDate(props.date)}
        </div>
        <WeekLabels />
      </div>
      <MonthTable>
        {monthArray.map((day: any, index) => (
          <MonthDay key={index} date={day.date} />
        ))}
      </MonthTable>
    </div>
  );
};
