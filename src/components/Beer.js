import React, { Component } from 'react'

class Beer extends Component {
  render () {
    return (
      <div>
        <div className="beer-name">
        <p>{this.props.beer.beer_name}</p>
        <img src={this.props.beer.img}></img>
        <p>{this.props.beer.brewery_name}</p>
        <p>{this.props.beer.comments}</p>
        </div>
        <div className="beer-actions">
          { this.props.beer.tried
            ? <i
              className="fas fa-not-equal"
              onClick={() => {this.props.handleCheck(this.props.beer, this.props.arrayIndex, this.props.currentArray)}}
              ></i>
            : <i
              className="fas fa-beer" //style={{color: f0fc}}
              onClick={() => {this.props.handleCheck(this.props.beer, this.props.arrayIndex, this.props.currentArray)}}
              ></i>
          }
          <i
           className="delete far fa-trash-alt"
           onClick={() =>
              {this.props.handleDelete(this.props.beer.id, this.props.arrayIndex, this.props.currentArray)}}
          ></i>
        </div>
      </div>
    )
  }
}
////------- This is going to need a lot of work to  do what we want it to do
////------- this is just updating the tried and not tired beers with icon click
////------- Also will probably need to give the handleCheck method much work
////-------  all of this still errors on click of icon without backend

// #f9e234
// export
export default Beer
