import React from 'react';
import styled from 'styled-components';
import { Views, Navigate } from '../types';

export type ToolbarProps = {
  view: Views;
  onNavigate: (to: Navigate) => void;
  onChangeView: (view: Views) => void;
};

export const Toolbar = (props: ToolbarProps) => (
  <StyledToolbar>
    <ButtonGroup>
      <Button
        data-testid='navigate-today'
        onClick={() => props.onNavigate(Navigate.TODAY)}
      >
        Today
      </Button>
      <Button
        data-testid='navigate-previous'
        onClick={() => props.onNavigate(Navigate.PREVIOUS)}
      >
        {'<'}
      </Button>
      <Button
        data-testid='navigate-next'
        onClick={() => props.onNavigate(Navigate.NEXT)}
      >
        {'>'}
      </Button>
    </ButtonGroup>
    <ButtonGroup>
      <Button
        className={props.view === Views.DAY ? 'active' : ''}
        data-testid='change-view-day'
        onClick={() => props.onChangeView(Views.DAY)}
      >
        Day
      </Button>
      <Button
        className={props.view === Views.WEEK ? 'active' : ''}
        data-testid='change-view-week'
        onClick={() => props.onChangeView(Views.WEEK)}
      >
        Week
      </Button>
      <Button
        className={props.view === Views.MONTH ? 'active' : ''}
        data-testid='change-view-month'
        onClick={() => props.onChangeView(Views.MONTH)}
      >
        Month
      </Button>
    </ButtonGroup>
  </StyledToolbar>
);

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
