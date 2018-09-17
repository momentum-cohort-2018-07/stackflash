import React, { Component } from 'react'
import request from 'superagent'
import {
  Title,
  Modal, ModalBackground, ModalCard, ModalCardHeader, ModalCardBody, ModalCardTitle, ModalCardFooter,
  Delete,
  Button
} from 'bloomer'
import PropTypes from 'prop-types'

class FlashCardMini extends Component {
  constructor () {
    super()
    this.state = {
      clicked: null
    }
    this.evaluateAnswer = this.evaluateAnswer.bind(this)
  }

  evaluateAnswer (result, id) {
    console.log('hi')
    if (result === 'correct') {
      this.setState({ clicked: true }, () => {
        request.post(`https://stackflash-api.glitch.me/api/cards/${id}/correct`).end()
      })
    } else {
      this.setState({ clicked: true }, () => {
        request.post(`https://stackflash-api.glitch.me/api/cards/${id}/incorrect`).end()
      })
    }
  }

  render () {
    return (
      <div className='FlashCardMini'>
        <div className='cardFront'>
          <div className='miniCard'>
            <div className='cardDeleteButtonDiv'><button className='cardDeleteButton'>&#10006;</button></div>
            {this.props.card.front}
            <div className='correct-incorrect'>
              <button className='fas fa-thumbs-up' onClick={() => this.evaluateAnswer('correct')} />
              <button className='fas fa-thumbs-down' onClick={() => this.evaluateAnswer('incorrect')} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

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
