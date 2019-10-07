import React from "react";
import styled from "styled-components";

type DateEventProps = {
  date: Date;
};

export const DayEvent = (props: DateEventProps) => {
  const items = JSON.parse(localStorage.getItem("events") || "[]");
  const currentDateString = props.date.toDateString();
  const currentDateEvents = items.filter((event: any) => {
    const eventDateString = new Date(event.startDate).toDateString();
    return eventDateString === currentDateString;
  });
  const viewEvent = currentDateEvents.map((item: any, index: number) => {
    const top = parseInt(item.startTime) * 40;
    return (
      <DayViewEvent key={index} style={{ top: top + "px" }}>
        {item.title}
      </DayViewEvent>
    );
  });

  return <DayEventContainer>{viewEvent}</DayEventContainer>;
};

const DayViewEvent = styled.div`
  position: absolute;
  width: 440px;
  background: #339af0;
  color: white;
  padding: 5px;
  cursor: pointer;
  margin-top: 8px;
`;

const DayEventContainer = styled.div``;
