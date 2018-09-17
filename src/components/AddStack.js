import React, { Component } from 'react'
import PropTypes from 'prop-types'

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

AddNewStack.PropTypes = {
  info: PropTypes.string
}

export default AddNewStack
