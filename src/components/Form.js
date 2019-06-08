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
    // this.handleChange = this.handleChange.bind(this)
    // this.handleSubmit = this.handleSubmit.bind(this)
  }
  ////////////  methods  ///////////
  // handleChange = (event) => {
  //   this.setState({task_item: event.target.value})
  // }
  //
  // handleSubmit = (event) => {
  //   event.preventDefault()
  //   this.props.handleCreateTask(this.state)
  //   this.clearForm()
  // }
  //
  // clearForm = () => {
  //   this.setState({ task_item: '' })
  // }


  render () {
    return (
      <div className="form" onSubmit={this.handleSubmit}>
        <form>
          <input
            type='text'
            placholder='Brewery Name'
            onChange={this.handleChange}
            value={this.state.brewery_name}
          />
          <input
            type='text'
            placholder='Beer Name'
            onChange={this.handleChange}
            value={this.state.beer_name}
          />
          <input
            type='text'
            placholder='Beer Style'
            onChange={this.handleChange}
            value={this.state.beer_style}
          />
          <button type='submit'> SUBMIT </button>
        </form>
      </div>
    )
  }
}

// export the class
export default Form
