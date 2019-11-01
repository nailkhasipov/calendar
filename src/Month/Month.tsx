import React from "react";
import styled from "styled-components";
import { getMonthArrayWithOffsetAndEvents } from "../utils";

import { MonthDay } from "./MonthDay";
import { DayGrid } from "../Day/DayGrid";

type MonthProps = {
  date: Date;
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
    <MonthTable>
      {monthArray.map((day: any, index) => (
        <MonthDay key={index} events={day.events} date={day.date} />
      ))}
    </MonthTable>
  );
};
