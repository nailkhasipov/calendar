import React from "react";
import styled from "styled-components";

import { getCurrentWeekDates } from "../utils";
import { HoursLabels } from "../Day/HoursLabels";
import { DayGrid } from "../Day/DayGrid";
import { DayEvent } from "../components/ViewEvent";
import { getCurrentWeekDatesWithEvents } from "../utils";

const StyledWeek = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  position: absolute;
  width: 100%;
  overflow: scroll;
  height: 100%;
  padding-left: 32px;
`;

type WeekProps = {
  date: Date;
};

export const Week = (props: WeekProps) => {
  const week = getCurrentWeekDates();
  const weekEvents = getCurrentWeekDatesWithEvents();
  return (
    <StyledWeek>
      <DayEvent events={weekEvents} date={week}></DayEvent>
      <HoursLabels />
      {week.map((date, index) => (
        <DayGrid key={index} full={false} date={date} />
      ))}
    </StyledWeek>
  );
};
