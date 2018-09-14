import React, { Component } from 'react'

class AddNewStack extends Component {
  constructor () {
    super()
    this.state = {
      title: ''
    }
  }

  handleChange (event) {
    this.setState({
      title: event.target.value
    })
  }

  render () {
    return (
  
    )
  }
}

export default AddNewStack
