import React from 'react';
import { Navigator } from './components/Navigator';
import { Top } from './components/Top';
import { Day } from './components/Day';
import { NewEventModal } from './components/NewEventModal';
import './App.css';

export class App extends React.Component<{}, { showModal: boolean }> {
  constructor(props: any) {
    super(props);
    this.state = {
      showModal: false
    };
  }
  showModal() {
    this.setState({ showModal: true });
  }
  hideModal() {
    this.setState({ showModal: false });
  }
  render() {
    return (
      <div className='app calendar'>
        <Top
          onShowModal={() => this.showModal()}
          onCloseModal={() => this.hideModal()}
        />
        <div className='main'>
          <div className='sidebar'>
            <Navigator date={new Date()} />
          </div>
          <div className='view'>
            <Day />
          </div>
        </div>

        <NewEventModal
          show={this.state.showModal}
          handleClose={() => this.hideModal()}
        />
      </div>
    );
  }
}
