import React from 'react'
import PropTypes from 'prop-types'
import data from '../data'
import StackPage from './StackPage'
import { Redirect } from 'react-router-dom'

class StackPageContainer extends React.Component {
  constructor (props) {
    super()
    this.state = {
      stack: {}
    }
    this.deleteStack = this.deleteStack.bind(this)
  }

  componentDidMount () {
    data.getStack(this.props.id)
      .then(stack => this.setState({ stack }))
  }

  deleteStack (id) {
    // actually delete the stack -- use data.?
    data.deleteStack(id)
      // .then(change state so that this component knows that it deleted the stack)
      .then(() => this.setState({ deleted: true }))
  }

  render () {
    // if deleted, redirect to /
    if (this.state.deleted) {
      return <Redirect to='/' />
    }
    return <StackPage stack={this.state.stack} onDeleteStack={(id) => this.deleteStack(id)} />
  }
}

StackPageContainer.propTypes = {
  id: PropTypes.string
}

export default StackPageContainer
