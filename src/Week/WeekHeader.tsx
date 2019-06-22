import React from 'react';

import { FullCalViewHeader, FullCalViewHeaderTitle } from '../styled/FullCal';
import { WeekLabels } from '../components/WeekLabels';

type WeekHeaderProps = {
  date: Date;
};

export const WeekHeader = (props: WeekHeaderProps) => {
  const monthName = props.date.toLocaleString('en-us', { month: 'long' });
  const fullYear = props.date.getFullYear();
  return (
    <FullCalViewHeader>
      <FullCalViewHeaderTitle>
        <b>{monthName}</b> {fullYear}
      </FullCalViewHeaderTitle>
      <WeekLabels withDates={true} />
    </FullCalViewHeader>
  );
};
