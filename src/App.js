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
      triedbeers: ['Temptress'],
      wantToTryBeers: ['Pliny the Elder']
    }//------ Will probably have to update state -------

  /////////////  BINDING  /////////////
    this.handleView = this.handleView.bind(this)
    this.fetchBeers = this.fetchBeers.bind(this)
    this.sortBeers = this.sortBeers.bind(this)
    this.setBeers = this.setBeers.bind(this)
    this.fetchBreweries = this.fetchBreweries.bind(this)
    this.toggleBeer = this.toggleBeer.bind(this)
    this.handleCreateBeer = this.handleCreateBeer.bind(this)
    this.updateArray = this.updateArray.bind(this)
    this.handleCheck = this.handleCheck.bind(this)
    this.removeFromArray = this.removeFromArray.bind(this)
    this.handleDelete = this.handleDelete.bind(this)


  }

  ///////////////////  METHODS  //////////////////
  handleView(view) {
    this.setState({
      currentView: view
    })
  }

  fetchBeers() {
    fetch('http://localhost:3000/beers')
      .then(data => data.json())
      .then(jData => {
      // console.log('this is jData', jData)
      this.sortTasks(jData)
    })
  } //----- this may need to change unsure about fetchBeers vs breweries

  sortBeers(beers) {
    let triedBeers = []
    let wantToTryBeers = []
    beers.ForEach( beer => {
      if (beer.tried) {
        triedBeers.push(beer)
      } else {
        wantToTryBeers.push(beer)
      }
    })
    this.setBeers(triedBeers, wantToTryBeers)
  }

  setBeers(tried, wantToTry) {
    this.setState({
      triedBeers: tried,
      wantToTryBeers: wantToTry
    })
  }

  /////////////// CREATE /////////////
  fetchBreweries() {

  }

  toggleBeer() {

  }//// if Brewery selected get beer info for brewery

  handleCreateBeer(beer) {
    fetch('http://localhost:3000/beers', {
      body: JSON.stringify(beer),
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
    .then(createdBeer => {
      return createdBeer.json()
    })
    .then(jData => {
      this.updateArray(jData, 'triedBeers')
      this.handleView('tried')
    })
    .catch(err => console.log(err))
  }//------- will probably have to update THEN

  updateArray(beer, array) {
    this.setState( prevState => {
      prevState[array].push(beer)
      return {
        [array]: prevState[array]
      }
    })
  }

  ///////////////  UPDATE  ////////////
  handleCheck(beer, arrayIndex, currentArray) {
    beer.tried = !beer.tried
    fetch('http://localhost:3000/beers/' + beer.id, {
      body:JSON.stringify(beer),
      method: 'PUT',
      headers: {
        'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        }
      })
      .then (updatedBeer => updatedBeer.json())
      .then(jData => {
        this.removeFromArray(currentArray, arrayIndex)
          if(currentArray === 'triedBeers') {
            this.updateArray(jData, 'wantToTryBeers')
          }  else {
              this.updateArray(jData, 'triedBeers')
          }
      })
      .catch(err => console.log('this is error from handleCheck', err))
  } //----- I am not sure this is right

  removeFromArray(array, arrayIndex) {
    this.setState(prevState => {
      prevState[array].splice(arrayIndex, 1)
      return {
        [array]: prevState[array]
      }
    })
  }

  ///////////////  DELETE  //////////////
  handleDelete(beerId, arrayIndex, currentArray) {
    fetch(`http://localhost:3000/beers/${beerId}`, {
    method: 'DELETE'
  })
    .then(data => {
      this.removeFromArray(currentArray, arrayIndex)
    })
    .catch(err => console.log(err))
  }

  /////////////////  DIDMOUNT  //////////////////
  componentDidMount() {
    this.fetchBreweries()
  }

////////////////////////  RENDER  ////////////////////////
  render() {
    return (
      <div>
      <h1> HELLO, JON! </h1>
      <Header
        // currentView={this.state.currentView}
        // handleView={this.handleView}
        // triedCount={this.state.triedBeers.length}
        // wantToTryCount={this.state.wantToTryBeers.length}
      />
      <Form

      />
      <BeerList

      />
      </div>
    )
  }
}


//export
export default App;
