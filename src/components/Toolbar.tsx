import React from 'react';
import styled from 'styled-components';
import { Views, Navigate } from '../types';
import './Toolbar.css';

export type ToolbarProps = {
  onNavigate: (to: Navigate) => void;
  onChangeView: (view: Views) => void;
};

export const Toolbar = (props: ToolbarProps) => (
  <div className='cal-toolbar'>
    <div className='cal-toolbar__left'>
      <ButtonGroup>
        <Button>Today</Button>
        <Button>{'<'}</Button>
        <Button>{'>'}</Button>
      </ButtonGroup>
    </div>
    <div className='cal-toolbar__right'>
      <ButtonGroup>
        <Button>Day</Button>
        <Button>Week</Button>
        <Button>Month</Button>
      </ButtonGroup>
    </div>
  </div>
);

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
