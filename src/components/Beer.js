import React, { Component } from 'react'
import {Popout} from 'react-popout-component';

class Beer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showPopout: false
    }
  }
  toggleDetails = () => {
    this.setState({showPopout: true});
  }

  popoutClosed = () => {
    this.setState({showPopout: false});
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
        {this.state.showPopout && (
          <Popout title='beer-details' onClosing={this.popoutClosed}>
            <div className="beer-details">
              <img src={ this.props.beer.img } alt="" />
              <p>
                <b>comments:</b><br />
                { this.props.beer.comments }
              </p>
              <b>options:</b>
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
            </div>
          </Popout>
        )}
      </React.Fragment>
    )
  }
}
export default Beer
