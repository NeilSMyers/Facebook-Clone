import React, { Component } from 'react';
import StatusUpdate from './statusUpdate';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h3>Facebook</h3>
        <StatusUpdate name="Neil Myers"/>
      </div>
    );
  }
}
