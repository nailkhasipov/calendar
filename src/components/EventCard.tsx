import React, { useState } from "react";
import styled from "styled-components";
import { getToday, getFullDate, getTime } from "../utils";

export const EventCard = () => {
  const date = getToday();
  const getEvents = () => JSON.parse(localStorage.getItem("events") || "[]");
  const [events, setEvents] = useState(getEvents());
  const [eventValue, setEventValue] = useState({
    title: "",
    startTime: getTime(date, "startTime"),
    startDate: getFullDate(date),
    endTime: getTime(date, "endTime"),
    endDate: getFullDate(date)
  });
  const handleEventChange = (e: { target: HTMLInputElement }) => {
    const name = e.target.name;
    const value = e.target.value;
    setEventValue({ ...eventValue, [name]: value });
  };

  const handleAddEvent = () => {
    const event = {
      title: eventValue.title,
      startTime: eventValue.startTime,
      endTime: eventValue.endTime,
      startDate: eventValue.startDate,
      endDate: eventValue.endDate
    };
    setEvents([...events, event]);
    localStorage.setItem("events", JSON.stringify([...events, event]));
  };

  return (
    <div>
      <EventTitle
        type="text"
        placeholder="Добавьте название"
        name="title"
        onChange={e => handleEventChange(e)}
      />
      <EventDate
        name="startDate"
        type="date"
        defaultValue={getFullDate(date)}
        onChange={e => handleEventChange(e)}
      ></EventDate>
      <EventTime
        name="startTime"
        type="time"
        defaultValue={getTime(date, "startTime")}
        onChange={e => handleEventChange(e)}
      ></EventTime>
      <EventTime
        name="endTime"
        type="time"
        defaultValue={getTime(date, "endTime")}
        onChange={e => handleEventChange(e)}
      ></EventTime>
      <EventDate
        name="endDate"
        type="date"
        defaultValue={getFullDate(date)}
        onChange={e => handleEventChange(e)}
      ></EventDate>
      <EventSave
        type="button"
        value="Сохранить"
        onClick={() => handleAddEvent()}
      ></EventSave>
    </div>
  );
};

const EventTitle = styled.input`
  width: 80%;
  height: 28px;
  font-size: 22px;
  color: #3c4043;
  border: none;
  border-bottom: 1px solid #dadce0;
  margin-top: 30px;
  padding: 5px;
  outline: none;

  &:focus {
    border-bottom: 1px solid #4285f4;
  }
`;

const EventDate = styled.input`
  border: none;
  border-bottom: 1px solid #dadce0;
  margin-top: 30px;
  outline: none;
  margin-left: 10px;

  &:focus {
    border-bottom: 1px solid #4285f4;
  }
`;

const EventTime = styled.input`
  border: none;
  border-bottom: 1px solid #dadce0;
  margin-top: 30px;
  margin-left: 10px;
  outline: none;

  &:focus {
    border-bottom: 1px solid #4285f4;
  }
`;

const EventSave = styled.input`
  width: 122px;
  height: 37px;
  color: white;
  font-size: 14px;
  background-color: #1a73e8;
  padding: 0 24px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
