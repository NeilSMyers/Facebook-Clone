import React, { Component } from 'react';
import StatusUpdate from './statusUpdate';
import Header from './header';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Header name="Hingle"/>
        <StatusUpdate name="Hingle McKringle"/>
      </div>
    );
  }
}
