import React, { useState } from "react";
import styled from "styled-components";
import Modal from "react-responsive-modal";
import { Views, Navigate } from "../types";
import { CreateEventForm } from "./CreateEventForm";

export type ToolbarProps = {
  view: Views;
  onNavigate: (to: Navigate) => void;
  onChangeView: (view: Views) => void;
};

export const Toolbar = (props: ToolbarProps) => {
  const [open, setOpen] = useState(false);
  const onCloseModal = () => {
    setOpen(false);
  };

  const onOpen = () => {
    setOpen(true);
  };

  return (
    <StyledToolbar>
      <ToolbarLeftActions>
        <ButtonGroup>
          <Button
            data-testid="navigate-today"
            onClick={() => props.onNavigate(Navigate.TODAY)}
          >
            Today
          </Button>
          <Button
            data-testid="navigate-previous"
            onClick={() => props.onNavigate(Navigate.PREVIOUS)}
          >
            {"<"}
          </Button>
          <Button
            data-testid="navigate-next"
            onClick={() => props.onNavigate(Navigate.NEXT)}
          >
            {">"}
          </Button>
        </ButtonGroup>
        <AddNewEventButton onClick={() => onOpen()}>+</AddNewEventButton>
      </ToolbarLeftActions>
      <ButtonGroup>
        <Button
          className={props.view === Views.DAY ? "active" : ""}
          data-testid="change-view-day"
          onClick={() => props.onChangeView(Views.DAY)}
        >
          Day
        </Button>
        <Button
          className={props.view === Views.WEEK ? "active" : ""}
          data-testid="change-view-week"
          onClick={() => props.onChangeView(Views.WEEK)}
        >
          Week
        </Button>
        <Button
          className={props.view === Views.MONTH ? "active" : ""}
          data-testid="change-view-month"
          onClick={() => props.onChangeView(Views.MONTH)}
        >
          Month
        </Button>
      </ButtonGroup>
      <Modal open={open} onClose={onCloseModal} center>
        <CreateEventForm onCloseModal={onCloseModal}></CreateEventForm>
      </Modal>
    </StyledToolbar>
  );
};

const StyledToolbar = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;
  width: 100%;
  border-bottom: 1px solid #eee;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 16px;
  align-items: center;
`;

const ToolbarLeftActions = styled.div`
  display: flex;
  flex-direction: row;
`;

const Button = styled.button`
  /* Structure */
  display: inline-block;
  zoom: 1;
  line-height: normal;
  white-space: nowrap;
  vertical-align: middle;
  text-align: center;
  cursor: pointer;
  user-select: none;
  /* Styles */
  outline: none;
  font-size: 13px;
  padding: 0.5em 1em;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  text-align: center;
  :hover {
    background-image: linear-gradient(
      transparent,
      rgba(0, 0, 0, 0.05) 40%,
      rgba(0, 0, 0, 0.1)
    );
  }
  &.active {
    background-image: linear-gradient(
      transparent,
      rgba(0, 0, 0, 0.05) 40%,
      rgba(0, 0, 0, 0.1)
    );
  }
`;

const AddNewEventButton = styled(Button)`
  margin-left: 16px;
`;

const ButtonGroup = styled.div`
  margin: 0;
  border-radius: 0;
  border-right: none;
  ${Button} {
    margin: 0;
    border-radius: 0;
    border-right: none;
  }
  ${Button}:first-child {
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
  }
  ${Button}:last-child {
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    border-right: 1px solid rgba(0, 0, 0, 0.2);
  }
`;
