import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import request from 'superagent'

// create button
// onClick button

class StackTitle extends Component {
  constructor (props) {
    super()
    this.state = {
      title: props.title,
      isEditing: false
    }
  }

  updateTitle (click) {
    const title = this.state.value
    this.setState({
      title: title
    })
  }

  isEditingFn () {
    this.setState({ isEditing: true })
  }

  render () {
    return (
      <div>
        <input type='text' className='title'
          onChange={event => this.updateTitle(event.target.value)}
          value={this.state.title} />
        <button>Save</button>
      </div>
    )
  }
}

StackTitle.PropTypes = {
  title: PropTypes.shape({
    isEditing: PropTypes.bool
  })
}

export default StackTitle
