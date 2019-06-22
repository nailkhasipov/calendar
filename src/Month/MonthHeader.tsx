import React from 'react';

import { getMonthNameFromDate, getFullYearFromDate } from '../utils';
import { FullCalViewHeader, FullCalViewHeaderTitle } from '../styled/FullCal';
import { WeekLabels } from '../components/WeekLabels';

type MonthHeaderProps = {
  date: Date;
};

export const MonthHeader = (props: MonthHeaderProps) => {
  return (
    <FullCalViewHeader>
      <FullCalViewHeaderTitle>
        <b>{getMonthNameFromDate(props.date)}</b>{' '}
        {getFullYearFromDate(props.date)}
      </FullCalViewHeaderTitle>
      <WeekLabels />
    </FullCalViewHeader>
  );
};
