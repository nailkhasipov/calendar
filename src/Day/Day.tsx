import React from "react";

import { VEvent } from "../types";
import { HoursLabels } from "./HoursLabels";
import { DayGrid } from "./DayGrid";
import { DayEvent } from "./DayViewEvent";

import { FullCalViewGrid } from "../styled/FullCal";

type DayProps = {
  date: Date;
};

export const Day = (props: DayProps) => {
  return (
    <FullCalViewGrid>
      <HoursLabels />
      <DayEvent date={props.date}></DayEvent>
      <DayGrid full={true} date={props.date} />
    </FullCalViewGrid>
  );
};
