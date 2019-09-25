import React, { useState, useReducer } from "react";
import styled from "styled-components";
import Modal from "react-responsive-modal";

import { StateProvider } from "./state";

import { Views, Navigate } from "./types";
import { Toolbar } from "./components/Toolbar";
import { Sidebar } from "./components/Sidebar";
import { DayHeader } from "./Day/DayHeader";
import { WeekHeader } from "./Week/WeekHeader";
import { MonthHeader } from "./Month/MonthHeader";
import { Day } from "./Day/Day";
import { getToday, getNextDay, getPreviousDay } from "./utils";

import "normalize.css";
import { Week } from "./Week/Week";
import { Month } from "./Month/Month";
import { FullCalView, FullCalViewGridWrapper } from "./styled/FullCal";
import { object } from "prop-types";

export const CurrentDateContext = React.createContext(new Date());

const getEvents = () => JSON.parse(localStorage.getItem("events") || "[]");
const initialState = { date: new Date() };

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case Navigate.TODAY:
      return { date: new Date() };
    case Navigate.NEXT:
      return {
        date: { date: new Date(state.date.setDate(state.date.getDate() + 1)) }
      };
    case Navigate.PREVIOUS:
      return {
        date: { date: new Date(state.date.setDate(state.date.getDate() - 1)) }
      };
    default:
      throw new Error();
  }
};

export const App = () => {
  const [events, setEvents] = useState(getEvents());
  const [date, setDate] = useState(getToday());
  const [view, setView] = useState(Views.DAY);
  const [open, setOpen] = useState(false);
  const [eventValue, setEventValue] = useState({
    title: "",
    startTime: "",
    startDate: "",
    endTime: "",
    endDate: ""
  });
  const handleNavigate = (to: Navigate) => {
    if (to === Navigate.TODAY) setDate(getToday());
    if (to === Navigate.NEXT) setDate(getNextDay(date));
    if (to === Navigate.PREVIOUS) setDate(getPreviousDay(date));
    if (to === Navigate.CREATE) setOpen(true);
  };
  const handleChangeView = (view: Views) => {
    setView(view);
  };
  const handleDateChange = (date: Date) => {
    setDate(date);
  };
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
    onCloseModal();
  };
  const onCloseModal = () => {
    setOpen(false);
  };
  let calViewHeader, calView;
  if (view === Views.DAY) {
    calViewHeader = <DayHeader date={date} />;
    calView = <Day date={date} />;
  }
  if (view === Views.WEEK) {
    calViewHeader = <WeekHeader date={date} />;
    calView = <Week date={date} />;
  }
  if (view === Views.MONTH) {
    calViewHeader = <MonthHeader date={date} />;
    calView = <Month date={date} />;
  }
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <StyledCalendar>
        <Toolbar
          view={view}
          onNavigate={(to: Navigate) => handleNavigate(to)}
          onChangeView={(view: Views) => handleChangeView(view)}
        />
        <Sidebar
          date={date}
          onDateChange={(date: Date) => handleDateChange(date)}
        />
        <FullCalView>
          {calViewHeader}
          <FullCalViewGridWrapper>{calView}</FullCalViewGridWrapper>
        </FullCalView>
        <Modal open={open} onClose={onCloseModal} center>
          <EventTitle
            type="text"
            placeholder="Добавьте название"
            name="title"
            onChange={e => handleEventChange(e)}
          />
          <EventDate
            name="startDate"
            type="date"
            onChange={e => handleEventChange(e)}
          ></EventDate>
          <EventTime
            name="startTime"
            type="time"
            onChange={e => handleEventChange(e)}
          ></EventTime>
          <EventTime
            name="endTime"
            type="time"
            onChange={e => handleEventChange(e)}
          ></EventTime>
          <EventDate
            name="endDate"
            type="date"
            onChange={e => handleEventChange(e)}
          ></EventDate>
          <EventSave
            type="button"
            value="Сохранить"
            onClick={() => handleAddEvent()}
          ></EventSave>
        </Modal>
      </StyledCalendar>
    </StateProvider>
  );
};

const StyledCalendar = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: 60px auto;
  grid-template-columns: 260px auto;
`;

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
