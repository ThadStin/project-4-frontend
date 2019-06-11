import React, { Component } from 'react'

class Beer extends Component {
  render () {
    return (
      <div>
        <div className="beer">
          <p>
            name: {this.props.beer.beer_name}<br />
            brewery: {this.props.beer.brewery_name}<br />
            location: {this.props.beer.location}<br />
            style: {this.props.beer.style}<br />
            my rating: {this.props.beer.ranking}<br />
            comments: {this.props.beer.comments}
          </p>
            <img src={this.props.beer.img}></img>
        </div>
        <div className="beer-actions">
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
        </div>
      </div>
    )
  }
}
export default Beer
