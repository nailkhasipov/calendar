import React from "react";

import { HoursLabels } from "./HoursLabels";
import { DayGrid } from "./DayGrid";
import { DayEvent } from "../components/ViewEvent";
import { getCurrentDayWithEvents } from "../utils";
import { FullCalViewGrid } from "../styled/FullCal";

type DayProps = {
  date: Date;
};

export const Day = (props: DayProps) => {
  const dayEvents = getCurrentDayWithEvents(props.date);
  return (
    <FullCalViewGrid>
      <HoursLabels />
      <DayEvent events={dayEvents} date={props.date}></DayEvent>
      <DayGrid full={true} date={props.date} />
    </FullCalViewGrid>
  );
};
