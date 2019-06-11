import React, { Component } from 'react'

class Beer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      viewDetails: false
    }
    this.toggleDetails = this.toggleDetails.bind(this)
  }
  toggleDetails(event) {
    this.setState({
      viewDetails: !this.state.viewDetails
    });
  }
  render () {
    return (
      <React.Fragment>
        <tr>
          <td> <button onClick={this.toggleDetails}> show details. </button> </td>
          <td> {this.props.beer.beer_name} </td>
          <td> {this.props.beer.brewery_name} </td>
          <td> {this.props.beer.beer_style} </td>
        </tr>
        <div className="beer-details" style={{display: this.state.viewDetails ? 'block' : 'none'}}>
          <img src={ this.props.beer.img } alt="" />
          <p> <b>comments:</b><br />
            { this.props.beer.comments }
          </p>
          <p> <b>options:</b>
            { this.props.beer.tried
            ? <span></span>
            : <button
              onClick={() => {this.props.handleCheck(this.props.beer, this.props.arrayIndex, 'wantToTryBeers')}}
              ><span className="fas fa-beer"></span> tried it! </button>
            }
            <br />
            <button
              onClick={() =>
                {this.props.handleDelete(this.props.beer.id, this.props.arrayIndex, this.props.currentArray)}}
                >
              <span className="delete far fa-trash-alt"></span> delete this beer.
            </button>
          </p>
        </div>
      </React.Fragment>
    )
  }
}
export default Beer
