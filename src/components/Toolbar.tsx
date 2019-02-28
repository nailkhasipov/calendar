import React from 'react';
import { Views, Navigate } from '../types';
import './Toolbar.css';

export type ToolbarProps = {
  onNavigate: (to: Navigate) => void;
  onChangeView: (view: Views) => void;
};

export const Toolbar = (props: ToolbarProps) => (
  <div className='cal-toolbar'>
    <div className='cal-toolbar__left'>
      <button
        className='cal-toolbar__button-today'
        type='button'
        onClick={() => props.onNavigate(Navigate.TODAY)}
      >
        TODAY
      </button>
      <button
        className='cal-toolbar__button-previous'
        type='button'
        onClick={() => props.onNavigate(Navigate.PREVIOUS)}
      >
        {'<'}
      </button>
      <button
        className='cal-toolbar__button-next'
        type='button'
        onClick={() => props.onNavigate(Navigate.NEXT)}
      >
        {'>'}
      </button>
    </div>
    <div className='cal-toolbar__right'>
      <button
        className='cal-toolbar__button-day'
        onClick={() => props.onChangeView(Views.DAY)}
        type='button'
      >
        DAY
      </button>
      <button
        className='cal-toolbar__button-week'
        onClick={() => props.onChangeView(Views.WEEK)}
        type='button'
      >
        WEEK
      </button>
      <button
        className='cal-toolbar__button-month'
        onClick={() => props.onChangeView(Views.MONTH)}
        type='button'
      >
        MONTH
      </button>
    </div>
  </div>
);
