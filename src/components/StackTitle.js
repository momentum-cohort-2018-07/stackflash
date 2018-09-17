import React, { Component } from 'react'
import PropTypes from 'prop-types'
import data from '../data'
import StackPage from './StackPage'
import { Redirect } from 'react-router-dom'


class StackTitle extends Component {
  constructor (props) {
    super()
    this.state = {
      isEditing: false
    }
  }

  // updateTitle (click) {
  //   const title = this.state.value
  //   this.setState({
  //     title: title
  //   })
  // }

  isEditingFn () {
    this.setState({ isEditing: true })
  }

  updateTitle (title) {
    data.updateStack(title)
      .then(() => this.setState({ isEditing: false }))
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

export default StackTitle
