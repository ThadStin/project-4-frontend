import React, { Component } from 'react'

class Beer extends Component {
  render () {
    return (
      <tr>
        <td> {this.props.beer.beer_name} </td>
        <td> {this.props.beer.brewery_name} </td>
        <td> {this.props.beer.beer_style} </td>
        <td>
          { this.props.beer.tried
            ? <span></span>
            : <button
              onClick={() => {this.props.handleCheck(this.props.beer, this.props.arrayIndex, 'wantToTryBeers')}}
              ><span className="fas fa-beer"></span> tried it! </button>
          }
          <button
           onClick={() =>
              {this.props.handleDelete(this.props.beer.id, this.props.arrayIndex, this.props.currentArray)}}
          ><span className="delete far fa-trash-alt"></span> delete this beer. </button>
        </td>
      </tr>
    )
  }
}
export default Beer
