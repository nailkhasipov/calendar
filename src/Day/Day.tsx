import React from "react";

import { HoursLabels } from "./HoursLabels";
import { DayGrid } from "./DayGrid";
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
      <DayGrid full={true} events={dayEvents} date={props.date} />
    </FullCalViewGrid>
  );
};
