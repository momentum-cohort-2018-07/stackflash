import React from 'react'
import PropTypes from 'prop-types'
import data from '../data'
import AllStacksView from './AllStacksView'

class AllStacksContainer extends React.Component {
  constructor () {
    super()
    this.state = {
      stacks: []
    }
  }

  componentDidMount () {
    this.loadStacks()
  }

  componentDidUpdate (prevProps) {
    if (prevProps.currentUser !== this.props.currentUser) {
      this.loadStacks()
    }
  }

  loadStacks () {
    const { currentUser } = this.props
    if (currentUser && currentUser.token) {
      data.setUserToken(currentUser.token)
      console.log('user token set')
      data.getStacks().then(stacks => this.setState({
        stacks
      }))
    }
  }

  render () {
    return (
      <AllStacksView stacks={this.state.stacks} />
    )
  }
}

AllStacksContainer.propTypes = {
  currentUser: PropTypes.shape({
    username: PropTypes.string,
    token: PropTypes.string
  })
}

export default AllStacksContainer
