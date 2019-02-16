import React from 'react';
import './Top.css';

import {
  NAVIGATE_TODAY,
  NAVIGATE_NEXT,
  NAVIGATE_PREVIOUS,
  DAY_VIEW,
  WEEK_VIEW,
  MONTH_VIEW
} from '../constants';

export const Top: React.FunctionComponent<{
  onShowModal: Function;
  onNavigate: Function;
  onChangeView: Function;
}> = ({ onShowModal, onNavigate, onChangeView }) => (
  <div className='top'>
    <div className='top__left'>
      <button
        className='add-event-button'
        type='button'
        onClick={() => onShowModal()}
      >
        +
      </button>
    </div>
    <div className='top__middle'>
      <div className='navigation'>
        <button
          className='navigation-button navigation-button__today'
          type='button'
          onClick={() => onNavigate(NAVIGATE_TODAY)}
        >
          TODAY
        </button>
        <button
          className='navigation-button navigation-button__next'
          type='button'
          onClick={() => onNavigate(NAVIGATE_NEXT)}
        >
          {'<'}
        </button>
        <button
          className='navigation-button navigation-button__previous'
          type='button'
          onClick={() => onNavigate(NAVIGATE_PREVIOUS)}
        >
          {'>'}
        </button>
      </div>
    </div>
    <div className='top__right'>
      <button
        className='change-view-button change-view-button__day'
        onClick={() => onChangeView(DAY_VIEW)}
        type='button'
      >
        DAY
      </button>
      <button
        className='change-view-button change-view-button__week'
        onClick={() => onChangeView(WEEK_VIEW)}
        type='button'
      >
        WEEK
      </button>
      <button
        className='change-view-button change-view-button__month'
        onClick={() => onChangeView(MONTH_VIEW)}
        type='button'
      >
        MONTH
      </button>
    </div>
  </div>
);

export default Top;
