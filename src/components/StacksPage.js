import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { Columns, Column } from 'bloomer'
import AddNewStack from './AddStack'

import Spinner from './Spinner'

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

  render () {
    const { stacks, isLoading } = this.props

    return (
      <div className='Stacks'>
        <Columns isMultiline>
          {isLoading
            ? <Column isSize={2}>
              <div className='Stack'>
                <div className='Stack__fg'>
                  <div className='Stack__content'>
                    <Spinner className='is-size-1' />
                  </div>
                </div>
                <div className='Stack__bg'>&nbsp;</div>
              </div>
            </Column>
            : stacks.map((stack) => <Column isSize={2}><Stack key={stack.id} stack={stack} /></Column>)
          }

          <Column isSize={2}>
            <div className='Stack'>
              <div className='Stack__fg'>
                <div className='Stack__content'>
                  {
                    this.state.newStack
                      ? <div className='new-stack-title-card'>
                        <AddNewStack />
                        <div className='save-new-stack'
                          onClick={() => this.reset()}>Save</div>
                        <div className='cancel-new-stack'
                          onClick={() => this.reset()}>Cancel</div>
                      </div>
                      : <div className='new-stack-button'
                        onClick={() => this.handleClick()}>
                        <div className='Stack__addStack'>+</div>
                        <div>Add a new stack</div>
                      </div>
                  }
                </div>
              </div>
            </div>
          </Column>
        </Columns>
      </div>

    )
  }
}

const stackType = PropTypes.shape({
  title: PropTypes.string,
  cardCount: PropTypes.number
})

StacksPage.propTypes = {
  stacks: PropTypes.arrayOf(stackType),
  isLoading: PropTypes.bool
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
    </div>
  )
})

export default StacksPage
