import React, { Component } from 'react'

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
          onChange={this.handleChange.bind(this)} placeholder='Title' style={{ textAlign: 'center' }} />
      </div>
    )
  }
}

export default AddNewStack
