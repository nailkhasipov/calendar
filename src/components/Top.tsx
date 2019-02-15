import React from 'react';
import Navigator from './Navigator';
import './Top.css';

export const Top: React.FunctionComponent<{
  onShowModal: Function;
  onCloseModal: Function;
}> = ({ onShowModal, onCloseModal }) => (
  <div className='top'>
    <div className='top__left'>
      <button type='button' onClick={() => onShowModal()}>
        +
      </button>
    </div>
    <div className='top__middle'>
      <Navigator />
    </div>
    <div className='top__right'>
      <button type='button'>DAY</button>
      <button type='button'>WEEK</button>
      <button type='button'>MONTH</button>
    </div>
  </div>
);

export default Top;
