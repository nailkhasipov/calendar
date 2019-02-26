import React from 'react';
import './Top.css';
import { NAVIGATIONS, VIEWS } from '../constants';

export const Top: React.FunctionComponent<{
  onNavigate: Function;
  onChangeView: Function;
}> = ({ onNavigate, onChangeView }) => (
  <div className='top'>
    <div className='top__left'>
      <div className='navigation'>
        <button
          className='navigation-button navigation-button__today'
          type='button'
          onClick={() => onNavigate(NAVIGATIONS.TODAY)}
        >
          TODAY
        </button>
        <button
          className='navigation-button navigation-button__previous'
          type='button'
          onClick={() => onNavigate(NAVIGATIONS.PREVIOUS)}
        >
          {'<'}
        </button>
        <button
          className='navigation-button navigation-button__next'
          type='button'
          onClick={() => onNavigate(NAVIGATIONS.NEXT)}
        >
          {'>'}
        </button>
      </div>
    </div>
    <div className='top__right'>
      <button
        className='change-view-button change-view-button__day'
        onClick={() => onChangeView(VIEWS.DAY)}
        type='button'
      >
        DAY
      </button>
      <button
        className='change-view-button change-view-button__week'
        onClick={() => onChangeView(VIEWS.WEEK)}
        type='button'
      >
        WEEK
      </button>
      <button
        className='change-view-button change-view-button__month'
        onClick={() => onChangeView(VIEWS.MONTH)}
        type='button'
      >
        MONTH
      </button>
    </div>
  </div>
);

export default Top;
