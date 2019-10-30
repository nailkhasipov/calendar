import React, { useState } from "react";
import styled from "styled-components";

import { Button } from "./Button";
import { Form, FormField, Input } from "./Form";
import { getToday, getFullDate, getTime } from "../utils";

export const CreateEventForm = (props: any) => {
  const date = getToday();
  const getEvents = () => JSON.parse(localStorage.getItem("events") || "[]");
  const [events, setEvents] = useState(getEvents());
  const [eventValue, setEventValue] = useState({
    title: "",
    startTime: getTime(date, "startTime"),
    startDate: getFullDate(date),
    endTime: getTime(date, "endTime"),
    endDate: getFullDate(date),
    height: 39
  });
  const handleEventChange = (e: { target: HTMLInputElement }) => {
    const name = e.target.name;
    const value = e.target.value;
    setEventValue({ ...eventValue, [name]: value });
  };
  const addHourTime = Number(eventValue.endTime.slice(3, 5)) > 30 ? 1 : 0;
  const height =
    (Number(eventValue.endTime.slice(0, -3)) +
      addHourTime -
      Number(eventValue.startTime.slice(0, -3))) *
    39;
  const handleAddEvent = () => {
    const event = {
      title: eventValue.title == "" ? "Нет заголовка" : eventValue.title,
      startTime: eventValue.startTime,
      endTime: eventValue.endTime,
      startDate: eventValue.startDate,
      endDate: eventValue.endDate,
      height: height
    };
    setEvents([...events, event]);
    localStorage.setItem("events", JSON.stringify([...events, event]));
    props.onCloseModal();
  };

  return (
    <StyledCreateEventForm>
      <Form>
        <FormField label="Title">
          <Input
            type="text"
            placeholder="Event Title"
            name="title"
            data-testid="eventInput"
            onChange={e => handleEventChange(e)}
          />
        </FormField>
        <FormField label="Starts">
          <EventDate
            name="startDate"
            type="date"
            data-testid="eventInput"
            defaultValue={getFullDate(date)}
            onChange={e => handleEventChange(e)}
          ></EventDate>
          <EventTime
            name="startTime"
            type="time"
            data-testid="eventInput"
            defaultValue={getTime(date, "startTime")}
            onChange={e => handleEventChange(e)}
          ></EventTime>
        </FormField>
        <FormField label="Ends">
          <EventDate
            name="endDate"
            type="date"
            data-testid="eventInput"
            defaultValue={getFullDate(date)}
            onChange={e => handleEventChange(e)}
          ></EventDate>
          <EventTime
            name="endTime"
            type="time"
            data-testid="eventInput"
            defaultValue={getTime(date, "endTime")}
            onChange={e => handleEventChange(e)}
          ></EventTime>
        </FormField>
        <FormField>
          <div />
          <Button data-testid="save" onClick={() => handleAddEvent()}>
            Save
          </Button>
        </FormField>
      </Form>
    </StyledCreateEventForm>
  );
};

const StyledCreateEventForm = styled.div`
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 32px;
`;

const EventDate = styled(Input)`
  flex-grow: 1;
  margin-right: 8px;
`;

const EventTime = styled(Input)`
  flex-grow: 1;
`;
