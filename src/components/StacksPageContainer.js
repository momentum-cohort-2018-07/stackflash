import React from 'react'
import PropTypes from 'prop-types'
import data from '../data'
import StacksPage from './StacksPage'

class StacksPageContainer extends React.Component {
  constructor () {
    super()
    this.state = {
      stacks: [],
      isLoading: true
    }

    this.saveNewStack = this.saveNewStack.bind(this)
    this.deleteStack = this.deleteStack.bind(this)
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
      data.getStacks().then(stacks => this.setState({
        stacks,
        isLoading: false
      }))
    }
  }

  saveNewStack (stack) {
    return data.createStack(stack)
      .then(newStack => {
        this.setState(state => ({
          stacks: state.stacks.concat(newStack)
        }))
      })
  }

  deleteStack (id) {
    return data.deleteStack(id).then(() => {
      this.setState(state => {
        const remainingStacks = state.stacks.filter(stack => stack.id !== id)
        return { stacks: remainingStacks }
      })
    })
  }

  render () {
    return (
      <StacksPage stacks={this.state.stacks}
        isLoading={this.state.isLoading}
        onSaveNewStack={this.saveNewStack}
        deleteStack={this.deleteStack} />
    )
  }
}

StacksPageContainer.propTypes = {
  currentUser: PropTypes.shape({
    username: PropTypes.string,
    token: PropTypes.string
  })
}

export default StacksPageContainer
