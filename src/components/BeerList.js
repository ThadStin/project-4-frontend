import React, { Component } from 'react'
import Beer from './Beer'

class BeerList extends Component {
  render () {
    return (
      <div className="beer-list">
        <table>
          <tr>
            <th> beer name: </th>
            <th> brewery: </th>
            <th> location: </th>
            <th> style: </th>
            <th> rating: </th>
            <th> options: </th>
          </tr>
        { this.props.currentView === 'tried'
          ? <React.Fragment>
            { this.props.triedBeers.map((beer, index) => {
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
            </React.Fragment>
          : <React.Fragment>
            {this.props.wantToTryBeers.map((beer, index) =>{
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
            </React.Fragment>
          }
        </table>
      </div>
    )
  }
}

// export
export default BeerList
