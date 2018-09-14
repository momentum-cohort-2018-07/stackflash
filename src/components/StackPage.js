import React, { Component } from 'react'
import {
  Title,
  Modal, ModalBackground, ModalCard, ModalCardHeader, ModalCardBody, ModalCardTitle, ModalCardFooter,
  Delete,
  Button
} from 'bloomer'

import FlashCardMini from './FlashCardMini.js'
import PropTypes from 'prop-types'

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
              <Delete onClick={() => this.setState({deleting: false})} />
            </ModalCardHeader>
            <ModalCardBody>
              This will delete your stack FOREVER!!!
            </ModalCardBody>
            <ModalCardFooter>
              <Button isColor='danger' onClick={() => onDeleteStack(stack.id)}>Delete</Button>
              <Button isColor='warning' onClick={() => this.setState({deleting: false})}>Cancel</Button>
            </ModalCardFooter>
          </ModalCard>
        </Modal>
        <div className='stackNav'>
          <div className='stackTitle'><Title>{stack.title} <button className='delete-stack' onClick={() => this.setState({deleting: true})}>Delete</button></Title>
            <button className='editTitleButton'>&#x270E;</button>
            <button className='cancelTitleEditButton'>&#10006;</button></div>
          <div className='edit-runDiv'><button className='editModeButton'>Edit</button><button className='runModeButton'>Run</button></div>
        </div>
        <div className='FlashCardMiniDiv columns'>
          <div className='column is-one-third'>
            {stack.cards && stack.cards.map((card) => <FlashCardMini key={card.id} card={card} />)}
          </div>
          <div className='column is-one-third addCardButtonDiv'>
            <button className='column is-one-third addCardButton'>+</button>
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
  onDeleteStack: PropTypes.func.isRequired
}

export default StackPage
