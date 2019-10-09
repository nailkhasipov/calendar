import React from "react";
import styled from "styled-components";
import { IDayPosition } from "../types";

type WeekEventProps = {
  date: Date;
};

const dayPosition: IDayPosition = {
  1: 70,
  2: 205,
  3: 343,
  4: 480,
  5: 618,
  6: 754,
  7: 890
};

export const WeekEvent = (props: any) => {
  const items = JSON.parse(localStorage.getItem("events") || "[]");
  const currentWeekEvents: Array<Object> = [];
  items.filter((event: any) => {
    const eventDateString = new Date(event.startDate).toDateString();
    for (var i = 0; i < props.date.length; i++) {
      const currentWeekString = props.date[i].toDateString();
      if (eventDateString === currentWeekString) {
        currentWeekEvents.push(event);
      }
    }
  });
  const viewEvent = currentWeekEvents.map((item: any, index: number) => {
    const top = parseInt(item.startTime) * 40;
    const date = new Date(item.startDate);
    const weekDay = date.getDay();
    const left = dayPosition[weekDay];
    return (
      <WeekViewEvent key={index} style={{ top: top + "px", left: left + "px" }}>
        {item.title}
      </WeekViewEvent>
    );
  });

  return <DayEventContainer>{viewEvent}</DayEventContainer>;
};

const WeekViewEvent = styled.div`
  position: absolute;
  width: 135px;
  background: #339af0;
  color: white;
  padding: 5px;
  cursor: pointer;
  margin-top: 8px;
`;

const DayEventContainer = styled.div``;
