import React, { Component } from 'react';

import './App.css';
import Header from './components/Header'
import BeerList from './components/BeerList'
import Form from './components/Form'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentView: 'tried',
      triedbeers: [],
      wantToTryBeers: []
    }
  /////////////  BINDING  /////////////
    this.handleView = this.handleView.bind(this)
    this.fetchBeers = this.fetchBeers.bind(this)
    this.sortBeers = this.sortBeers.bind(this)
    this.setBeers = this.setBeers.bind(this)
    this.fetchBreweries = this.fetchBreweries.bind(this)
    // this.toggleBeer = this.toggleBeer.bind(this)
    this.handleCreateBeer = this.handleCreateBeer.bind(this)
    // this.updateArray = this.updateArray.bind(this)
    this.handleCheck = this.handleCheck.bind(this)
    this.removeFromArray = this.removeFromArray.bind(this)
    this.handleDelete = this.handleDelete.bind(this)


  }

  ///////////////////  METHODS  //////////////////
  handleView() {

  }

  fetchBeers() {

  }

  sortBeers() {

  }

  setBeers() {

  }

  /////////////// CREATE /////////////
  fetchBreweries() {

  }

  toggleBeer() {  //// No Binding?

  }

  handleCreateBeer() {

  }

  updateArray() { //// No binding?

  }

  ///////////////  UPDATE  ////////////
  handleCheck() {

  }

  removeFromArray() {

  }

  ///////////////  DELETE  //////////////
  handleDelete() {

  }

  /////////////////  DIDMOUNT  //////////////////
  componentDidMount() {
    this.fetchBreweries()
  }

////////////////////////  RENDER  ////////////////////////
  render() {
    return (
      <div>
      <h1> HELLO, JON </h1>
      </div>
    )
  }
}


//export
export default App;
