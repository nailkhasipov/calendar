import React from 'react';

import {
  FullCalViewHeader,
  FullCalViewHeaderTitle,
  FullCalViewHeaderDayGridTitle
} from '../styled/FullCal';

type DayHeaderProps = {
  date: Date;
};

export const DayHeader = (props: DayHeaderProps) => {
  const day = props.date.getDate();
  const monthName = props.date.toLocaleString('en-us', { month: 'long' });
  const fullYear = props.date.getFullYear();
  const dayName = props.date.toLocaleString('en-us', { weekday: 'long' });
  return (
    <FullCalViewHeader>
      <FullCalViewHeaderTitle>
        <b>
          {day} {monthName}
        </b>{' '}
        {fullYear}
      </FullCalViewHeaderTitle>
      <FullCalViewHeaderDayGridTitle>{dayName}</FullCalViewHeaderDayGridTitle>
    </FullCalViewHeader>
  );
};
