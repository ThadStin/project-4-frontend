import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1> cold ones. </h1>
        <div className="switchList">
          <h3>
            { this.props.currentView === 'tried'
            ? `beers i've tried`
            : `beers i want to try` }
          </h3>
        </div>
        <p>
          <span
            onClick={() => {this.props.handleView('wantToTry')}}> {this.props.wantToTryCount} beers i want to try.</span>
          <span>  ||  </span>
          <span
            onClick={() => {this.props.handleView('tried')}}>
            {this.props.triedCount} beers i've tried.</span>
        </p>
      </div>
    )
  }
}

// export
export default Header
