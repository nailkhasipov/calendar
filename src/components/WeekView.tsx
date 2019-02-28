import React from 'react';
import { VEvent } from '../types';
import { getCurrentWeekDates } from '../helpers';
import { Day } from './Day';

type WeekViewProps = {
  date: Date;
  events: VEvent[];
};

export const WeekView = (props: WeekViewProps) => {
  const currentWeekDates = getCurrentWeekDates();
  const week = currentWeekDates.map((date: Date, index) => (
    <React.Fragment>
      <div className='day-title'>
        {date.toString().split(' ')[0]} {date.getDate()}
      </div>
      <div key={index} className='views day-view'>
        {/* <Day date={date} events={props.events} /> */}
      </div>
    </React.Fragment>
  ));
  return <React.Fragment>{week}</React.Fragment>;
};

export default WeekView;
