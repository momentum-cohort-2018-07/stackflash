import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import Spinner from './Spinner'

class StacksPage extends React.Component {
  constructor () {
    super()
    this.state = {
      newStack: false,
      newStackTitle: ''
    }
  }

  handleClick () {
    this.setState({
      newStack: true
    })
  }

  reset () {
    this.setState({
      newStack: false,
      newStackTitle: ''
    })
  }

  save () {
    this.props.onSaveNewStack({ title: this.state.newStackTitle })
    this.setState({
      newStack: false,
      newStackTitle: ''
    })
  }

  renderNewStackForm () {
    return (<div className='new-stack-title-card vcenter'>
      <div className='Stack__newStack'>
        <input type='text' className='Stack__new-stack-name'
          onChange={e => this.setState({ newStackTitle: e.target.value })}
          placeholder='Title' style={{ textAlign: 'center' }} />
      </div>
      <div className='save-new-stack'
        onClick={() => this.save()}>Save</div>
      <div className='cancel-new-stack'
        onClick={() => this.reset()}>Cancel</div>
    </div>)
  }

  renderAddNewStack () {
    return (
      <a className='new-stack-button vcenter'
        onClick={() => this.handleClick()}>
        <div className='Stack__addStack'>+</div>
        <div>Add a new stack</div>
      </a>
    )
  }

  render () {
    const { stacks, isLoading } = this.props

    return (
      <div className='Stacks'>
        {isLoading
          ? <div className='Stack'>
            <div className='Stack__fg'>
              <div className='Stack__content'>
                <Spinner className='is-size-1' />
              </div>
            </div>
            <div className='Stack__bg'>&nbsp;</div>
          </div>
          : stacks.map((stack) => <Stack key={stack.id} stack={stack} />)
        }

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
const Stack = ({ stack }) => {
  return (
    <div className='Stack'>
      <div className='Stack__fg'>
        <div className='Stack__content'>
          <Link to={`/stacks/${stack.id}`} className='vcenter'>
            <div className='Stack__title has-text-weight-bold'>{ stack.title }</div>
            <div className='Stack__cardCount'>{ stack.cardCount } cards</div>
          </Link>
        </div>
      </div>
      <div className='Stack__bg'>&nbsp;</div>
    </div>
  )
}

export default StacksPage
