import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <React.Fragment>
      <div className="header">
        <div className="left">
          <h1> cold ones. </h1>
        </div>
        <div className="right">
          <span
            onClick={() => {this.props.handleView('wantToTry')}}> {this.props.wantToTryCount} beers i want to try
          </span>
          <br />
          <span
            onClick={() => {this.props.handleView('tried')}}>
            {this.props.triedCount} beers i've tried
          </span>
          <p>click to above switch lists</p>
        </div>
        <div className="switchList">
          <h3>
            { this.props.currentView === 'tried'
            ? `beers i've tried`
            : `beers i want to try` }
          </h3>
        </div>
      </div>
      </React.Fragment>
    )
  }
}
// export
export default Header
