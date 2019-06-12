import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Modal from 'react-modal'

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

Modal.setAppElement('#root')

class Beer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false
    }
    this.openModal = this.openModal.bind(this)
    this.afterOpenModal = this.afterOpenModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }
  openModal() {
    this.setState({showModal: true})
  }

  afterOpenModal() {
    this.subtitle.style.color = '#f00'
  }

  closeModal() {
    this.setState({showModal: false})
  }

  render () {
    return (
      <React.Fragment>
        <tr>
          <td> <button onClick={this.openModal}> show details. </button> </td>
          <td> {this.props.beer.beer_name} </td>
          <td> {this.props.beer.brewery_name} </td>
          <td> {this.props.beer.beer_style} </td>
        </tr>
        <Modal
          isOpen={this.state.showModal}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Beer Details"
        >
          <h2 ref={subtitle => this.subtitle = subtitle}>
            {this.props.beer.beer_name}
          </h2>
          <h3 ref={subtitle => this.subtitle = subtitle}>
            {this.props.beer.brewery_name}
          </h3>
          <h4 ref={subtitle => this.subtitle = subtitle}>
            {this.props.beer.location}
          </h4>
          <h5 ref={subtitle => this.subtitle = subtitle}>
            style: {this.props.beer.beer_style} ||
            abv: {this.props.beer.abv}
          </h5>
          <div className="beer-details">
            <img src={ this.props.beer.img } alt={this.props.beer.beer_name} />
            <p>
              <b>comments:</b><br />
              { this.props.beer.comments }
            </p>
            <b>options: </b>
            <br />
            <button onClick={this.closeModal}> close window. </button>
            { this.props.beer.tried
              ? <span></span>
              : <button
                onClick={() => {this.props.handleCheck(this.props.beer, this.props.arrayIndex, 'wantToTryBeers')}}
                ><span className="fas fa-beer"></span> tried it! </button>
            }
            <button
              onClick={() =>
                {this.props.handleDelete(this.props.beer.id, this.props.arrayIndex, this.props.currentArray)}}
              >
              <span className="delete far fa-trash-alt"></span> delete this beer.
            </button>
          </div>
        </Modal>
      </React.Fragment>
    )
  }
}
export default Beer
