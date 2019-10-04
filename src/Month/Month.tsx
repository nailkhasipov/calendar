import React from "react";
import styled from "styled-components";
import { VEvent } from "../types";
import { getMonthArrayWithOffsetAndEvents } from "../utils";

import { MonthDay } from "./MonthDay";

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
        <MonthDay key={index} date={day.date} />
      ))}
    </MonthTable>
  );
};
