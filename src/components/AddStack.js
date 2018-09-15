import React, { Component } from 'react'
import PropTypes from 'prop-types'

class AddNewStack extends Component {
  constructor () {
    super()
    this.state = {
      info: ''
    }
  }

  handleChange (event) {
    this.setState({
      info: event.target.value
    })
  }

  render () {
    return (
      <div className='Stack__newStack'>
        <input type='text' className='Stack__new-stack-name'
          onChange={this.handleChange.bind(this)} />
      </div>
    )
  }
}

AddNewStack.PropTypes = {
  info: PropTypes.string
}

export default AddNewStack
