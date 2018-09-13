import React from 'react'
import PropTypes from 'prop-types'
import data from '../data'
import StackPage from './StackPage'

class StackPageContainer extends React.Component {
  constructor (props) {
    super()
    this.state = {
      stack: {}
    }
  }

  componentDidMount () {
    data.getStack(this.props.id)
      .then(stack => this.setState({ stack }))
  }

  render () {
    return <StackPage stack={this.state.stack} />
  }
}

StackPageContainer.propTypes = {
  id: PropTypes.number
}

export default StackPageContainer
