import React, { Component } from 'react'
import Beer from './Beer'

class BeerList extends Component {
  render () {
    return (
      <div className="beer-list">
        { this.props.currentView === 'wantToTryBeers'
          ? <div>
              { this.props.wantToTryBeers.map((beer, index) => {
                return (
                  <Beer
                    key={index}
                    beer={beer}
                    handleCheck={this.props.handleCheck}
                    arrayIndex={index}
                    currentArray='wantToTryBeers'
                    handleDelete={this.props.handleDelete}
                  />
                )
              })}
          </div>
          : <div>
              {this.props.triedBeers.map((beer, index) =>{
                return (
                  <Beer
                    key={index}
                    beer={beer}
                    handleCheck={this.props.handleCheck}
                    arrayIndex={index}
                    currentArray='triedBeers'
                    handleDelete={this.props.handleDelete}
                  />
                )
              })}
            </div>
          }  
      </div>
    )
  }
}

// export
export default BeerList
