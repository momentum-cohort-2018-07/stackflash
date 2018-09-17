import React, { Component } from 'react'
import PropTypes from 'prop-types'
import StackTitle from './StackTitle'

import {
  Modal, ModalBackground, ModalCard, ModalCardHeader, ModalCardBody, ModalCardTitle, ModalCardFooter,
  Delete,
  Button
} from 'bloomer'

import FlashCardMini from './FlashCardMini.js'

class StackPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      deleting: false
    }
  }

  render () {
    const { stack, onDeleteStack } = this.props
    return (
      <div className='StackPage'>
        <Modal isActive={this.state.deleting}>
          <ModalBackground />
          <ModalCard>
            <ModalCardHeader>
              <ModalCardTitle>Delete {stack.title}?</ModalCardTitle>
              <Delete onClick={() => this.setState({ deleting: false })} />
            </ModalCardHeader>
            <ModalCardBody>
              This will delete your stack FOREVER!!!
            </ModalCardBody>
            <ModalCardFooter>
              <Button isColor='danger' onClick={() => onDeleteStack(stack.id)}>Delete</Button>
              <Button isColor='warning' onClick={() => this.setState({ deleting: false })}>Cancel</Button>
            </ModalCardFooter>
          </ModalCard>
        </Modal>

        <div className='stackNav columns'>
          <div className='stackTitle column is-three-quarters'>
            <StackTitle
              title={stack.title}
              onSaveTitle={this.props.updateStackTitle} />
            <button className='delete-stack' onClick={() => this.setState({ deleting: true })}>Delete</button>
          </div>
          <div className='edit-runDiv column'>
            <button className='editModeButton'>Edit</button>
            <button className='runModeButton'>Run</button>
          </div>
        </div>
        <div className='miniCardsView columns is-multiline'>
          <div className='column is-one-third'>
            {stack.cards && stack.cards.map((card) => <FlashCardMini key={card.id} card={card} />)}
          </div>
          <div className='column is-one-third'>
            <div className='Card__addCard'>
              <div className='Card__addCardSymbol'>+</div>
              <div className='Card__addCardText'>Add a card</div>
            </div>
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
  updateStackTitle: PropTypes.func.isRequired,
  onDeleteStack: PropTypes.func.isRequired
}

export default StackPage
