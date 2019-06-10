import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      brewery_name: '',
      location: '',
      beer_name: '',
      beer_style: '',
      ranking: 0,
      comments: '',
      tried: false,
      liked: false,
      img: ''
    }
    ///////////  binding  ///////////
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.clearForm = this.clearForm.bind(this)
  }
  ////////////  methods  ///////////
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
      // brewery_name: event.target.value,
      // beer_name: event.target.value,
      // beer_style: event.target.value

    })
    // this.setState({beer_name: event.target.value})
    // this.setState({beer_style: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.handleCreateBeer(this.state)
    this.clearForm()
  }

  clearForm = () => {
    this.setState({
      brewery_name: '',
      beer_name: '',
      beer_style: ''
     })
  }
//------------- gonna have to flesh out this file quite a bit ----------
// this form needs serious work
  render () {
    return (
      <div className="form" >
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            placeholder='Brewery Name'
            onChange={this.handleChange}
            value={this.state.brewery_name}
            id='brewery_name'
          />
          <input
            type='text'
            placeholder='Beer Name'
            onChange={this.handleChange}
            value={this.state.beer_name}
            id='beer_name'
          />
          <input
            type='text'
            placeholder='Beer Style'
            onChange={this.handleChange}
            value={this.state.beer_style}
            id='beer_style'
          />
{/*-----------/////////////////////////----------*/}
          <input
            type='text'
            placeholder='Location'
            onChange={this.handleChange}
            value={this.state.location}
            id='location'
          />
          <br></br>
          <input
            type="range" min="0" max="10"
            placeholder='Ranking'
            onChange={this.handleChange}
            value={this.state.ranking}
            id='ranking'
          /><output id="ranking" for="ranking">{this.state.ranking}</output>
          <input
            type='checkbox'
            placeholder='Tried'
            onChange={this.handleChange}
            value={this.state.tried}
            id='tried'
          />
          <input
            type='checkbox'
            placeholder='Liked'
            onChange={this.handleChange}
            value={this.state.liked}
            id='liked'
          />
          <input
            type='text'
            placeholder='Comments'
            onChange={this.handleChange}
            value={this.state.comments}
            id='comments'
          />
          <input
            type='text'
            placeholder='Image address'
            onChange={this.handleChange}
            value={this.state.img}
            id='img'
          />
          <button type='submit'> SUBMIT </button>
        </form>
      </div>
    )
  }
}

// export the class
export default Form
