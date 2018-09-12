import React from 'react'
import PropTypes from 'prop-types'
import { route } from 'buttermilk'

class StacksPage extends React.Component {
  render () {
    if (this.props.stacks) {
      return (
        <div class='Stacks'>
          {this.props.stacks.map((stack) => <Stack key={stack.id} stack={stack} />)}
          <div className='Stack'>
            <div className='Stack__fg'>
              <div className='Stack__content'>
                <div className='Stack__addStack'>+</div>
                <div>Add a new stack</div>
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
class Stack extends React.Component {
  render () {
    const { stack } = this.props
    return (
      <div className='Stack' onClick={() => route(`/stacks/${stack.id}`)}>
        <div className='Stack__fg'>
          <div className='Stack__content'>
            <div className='Stack__title has-text-weight-bold'>{ stack.title }</div>
            <div className='Stack__cardCount'>{ stack.cardCount } cards</div>
          </div>
        </div>
        <div className='Stack__bg'>&nbsp;</div>
      </div>
    )
  }
}

Stack.propTypes = {
  stack: stackType
}

export default StacksPage
