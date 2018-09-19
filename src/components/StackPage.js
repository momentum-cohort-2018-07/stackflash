import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button } from 'bloomer'
import { Link } from 'react-router-dom'

import StackTitle from './StackTitle'
import Spinner from './Spinner'
import FlashCardMini from './FlashCardMini'

class StackPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      deleting: false
    }
  }

  render () {
    const { stack, isLoading } = this.props
    return (
      <div className='StackPage'>
        <div className='stackNav columns'>
          <div className='stackTitle column is-three-quarters'>
            <StackTitle
              title={stack.title}
              onSaveTitle={this.props.updateStackTitle} />
          </div>
          <div className='edit-runDiv column buttons has-addons'>
            <Button className='editModeButton' isActive>Edit</Button>
            <Button className='runModeButton'>Run</Button>
          </div>
        </div>
        <div className='miniCardsView'>
          {isLoading
            ? (<div className='miniCard Card__addCard'>
              <Spinner className='is-size-1' />
            </div>)
            : stack.cards && stack.cards.map((card) => <FlashCardMini key={card.id} card={card} />)}

          <div className='FlashCardMini Card__addCard'>
            <div className='Card__addCardSymbol'>
              <Link to={`/stacks/${stack.id}/addCard`}>+</Link>
            </div>
            <div className='Card__addCardText'>Add a card</div>
          </div>
        </div>
      </div>
    )
  }
}

StackPage.propTypes = {
  stack: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    cards: PropTypes.arrayOf(PropTypes.object)
  }).isRequired,
  isLoading: PropTypes.bool,
  updateStackTitle: PropTypes.func.isRequired
}

export default StackPage
