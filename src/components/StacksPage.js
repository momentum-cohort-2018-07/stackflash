import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import AddNewStack from './AddStack'

class StacksPage extends React.Component {
  constructor () {
    super()
    this.state = {
      newStack: false
    }
  }
  handleClick () {
    this.setState({
      newStack: true
    })
  }
  reset () {
    this.setState({
      newStack: false
    })
  }

  renderNewStackForm () {
    return (<div className='new-stack-title-card'>
      <AddNewStack />
      <div className='save-new-stack'
        onClick={() => this.reset()}>Save</div>
      <div className='cancel-new-stack'
        onClick={() => this.reset()}>Cancel</div>
    </div>)
  }

  renderAddNewStack () {
    return (
      <div className='new-stack-button'
        onClick={() => this.handleClick()}>
        <div className='Stack__addStack'>+</div>
        <div>Add a new stack</div>
      </div>
    )
  }

  render () {
    if (this.props.stacks) {
      return (
        <div className='Stacks'>
          {this.props.stacks.map((stack) => <Stack key={stack.id} stack={stack} />)}
          <div className='Stack'>
            <div className='Stack__fg'>
              <div className='Stack__content'>
                {
                  this.state.newStack
                    ? this.renderNewStackForm()
                    : this.renderAddNewStack()
                }
              </div>
            </div>
            <div className='Stack__bg'>&nbsp;</div>
          </div>
        </div>
      )
    } else {
      return null
    }
  }
}

const stackType = PropTypes.shape({
  title: PropTypes.string,
  cardCount: PropTypes.number
})

StacksPage.propTypes = {
  stacks: PropTypes.arrayOf(stackType)
}

// Why is Stack in here rather than in its own file?
// It is only used in StacksPage, so it makes sense to put it in the same file.
const Stack = withRouter(({ history, stack }) => {
  return (
    <div className='Stack' onClick={() => history.push(`/stacks/${stack.id}`)}>
      <div className='Stack__fg'>
        <div className='Stack__content'>
          <div className='Stack__title has-text-weight-bold'>{ stack.title }</div>
          <div className='Stack__cardCount'>{ stack.cardCount } cards</div>
        </div>
      </div>
      <div className='Stack__bg'>&nbsp;</div>
    </div>
  )
})

export default StacksPage
