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
      <div className='button-group'>
        <div
          className='button cal-toolbar__button-today'
          onClick={() => props.onNavigate(Navigate.TODAY)}
        >
          Today
        </div>
        <div
          className='button cal-toolbar__button-previous'
          onClick={() => props.onNavigate(Navigate.PREVIOUS)}
        >
          {'<'}
        </div>
        <div
          className='button cal-toolbar__button-next'
          onClick={() => props.onNavigate(Navigate.NEXT)}
        >
          {'>'}
        </div>
      </div>
    </div>
    <div className='cal-toolbar__right'>
      <div className='button-group'>
        <div
          className=' button cal-toolbar__button-day'
          onClick={() => props.onChangeView(Views.DAY)}
        >
          Day
        </div>
        <div
          className=' button cal-toolbar__button-week'
          onClick={() => props.onChangeView(Views.WEEK)}
        >
          Week
        </div>
        <div
          className=' button cal-toolbar__button-month'
          onClick={() => props.onChangeView(Views.MONTH)}
        >
          Month
        </div>
      </div>
    </div>
  </div>
);
