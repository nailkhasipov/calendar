import React from 'react';
import styled from 'styled-components';
import { VEvent } from '../types';
import { getMonthArray, getCurrentWeekDates } from '../utils';
import './Month.css';

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
  const month = getMonthArray(new Date());
  const monthArray = getMonthArray(props.date);
  const month_table = monthArray.map((monthArrayDate: Date, index) => {
    const today = new Date();
    let className = 'day';
    //@TODO !!!!!
    if (monthArrayDate.getMonth() != today.getMonth()) className += ' offset ';
    if (
      monthArrayDate.getMonth() === today.getMonth() &&
      monthArrayDate.getDate() === today.getDate()
    )
      className += ' today ';
    //@TODO !!!!!
    const todayEvents = props.events.map((event: VEvent, index) => {
      const eventDate = new Date(event.start);
      if (
        eventDate.getMonth() === monthArrayDate.getMonth() &&
        eventDate.getDate() === monthArrayDate.getDate()
      ) {
        return <MonthTableDayEvent>{event.title}</MonthTableDayEvent>;
      }
    });
    return (
      <MonthTableDay key={index} className={className}>
        <MonthTableDayDate>{monthArrayDate.getDate()}</MonthTableDayDate>
        {todayEvents}
      </MonthTableDay>
    );
  });

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

const WeekDaysTitles = () => {
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
