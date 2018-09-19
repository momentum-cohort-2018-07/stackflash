import React from 'react'
import PropTypes from 'prop-types'
import data from '../data'
import StackPage from './StackPage'
import { Redirect } from 'react-router-dom'
import update from 'immutability-helper'

class StackPageContainer extends React.Component {
  constructor (props) {
    super()
    this.state = {
      stack: {
        title: ''
      },
      isLoading: true
    }
    this.updateStackTitle = this.updateStackTitle.bind(this)
  }

  componentDidMount () {
    data.getStack(this.props.id)
      .then(stack => this.setState({ stack, isLoading: false }))
  }

  updateStackTitle (newTitle) {
    this.setState(state => {
      return update(state, {
        stack: {
          title: {
            $set: newTitle
          }
        }
      })
    }, () => {
      data.updateStack(this.state.stack)
    })
  }

  render () {
    // if deleted, redirect to /
    if (this.state.deleted) {
      return <Redirect to='/' />
    }
    return <StackPage stack={this.state.stack}
      isLoading={this.state.isLoading}
      updateStackTitle={this.updateStackTitle} />
  }
}

StackPageContainer.propTypes = {
  id: PropTypes.string
}

export default StackPageContainer
