import React from "react";
import styled from "styled-components";
import { IDayPosition } from "../types";

const dayPosition: IDayPosition = {
  1: 7,
  2: 20.5,
  3: 33.3,
  4: 48,
  5: 60,
  6: 75.4,
  7: 89
};

export const DayEvent = (props: any) => {
  const viewEvent = props.events.map((item: any, index: number) => {
    const top = parseInt(item.startTime) * 40;
    const date = new Date(item.startDate);
    const weekDay = date.getDay();
    const left = dayPosition[weekDay];
    return (
      <DayViewEvent key={index} style={{ top: top + "px", left: left + "%" }}>
        {item.title}
      </DayViewEvent>
    );
  });

  return <DayEventContainer>{viewEvent}</DayEventContainer>;
};

const DayViewEvent = styled.div`
  position: absolute;
  width: 13%;
  background: #339af0;
  color: white;
  padding: 5px;
  cursor: pointer;
  margin-top: 8px;
`;

const DayEventContainer = styled.div``;
