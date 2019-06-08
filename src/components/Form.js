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
  }

  render () {
    return (
      <div>

      </div>
    )
  }
}

// export the class
export default Form
