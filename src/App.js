import React, { Component } from 'react';

import './App.css';
import Header from './components/Header'
import TaskList from './components/TaskList'
import Form from './components/Form'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentView: 'tried',
      triedbeers: [],
      wantToTryBeers: []
    }
  }

  render() {
    return (
      <div>
      <h1> HELLO WORLD </h1>
      </div>
    )
  }
}


//export
export default App;
