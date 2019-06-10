import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="switchList">
          <h1>
            { this.props.currentView === 'tried'
            ? 'Tried'
            : 'Want to try ' }
          </h1>
        </div>
        <ul>
          <li
            onClick={() => {this.props.handleView('wantToTry')}}>{this.props.wantToTryCount} Want to Try</li>
          <li
            onClick={() => {this.props.handleView('tried')}}>{this.props.triedCount} Tried</li>
        </ul>
      </div>
    )
  }
}

// export
export default Header
