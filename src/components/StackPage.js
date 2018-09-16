import React, { Component } from 'react'
import { Title, Input, Button, Label } from 'bloomer'
import AddCard from './AddCard'
import EditCard from './EditCard'

class FlashCardMini extends Component {
  constructor () {
    super()
    this.state = {
      editCard: false
    }
    this.handleClickEditCard = this.handleClickEditCard.bind(this)
  }
  handleClickEditCard (e, card) {
    e.preventDefault()
    console.log(card, 'card')
    console.log(e, 'event')
    this.setState(state => ({ editCard: card }))
  }
  render () {
    const { card } = this.props
    if (this.state.editCard) {
      return (<EditCard state={this.props} />)
    }
    return (
      <div className='FlashCardMini'>
        <div className='cardFront'>
          <div className='miniCard'>
            <div className='cardDeleteButtonDiv'><button className='cardDeleteandEditButton'>&#10006;</button></div>
            <div className='cardEditButtonDiv'><button className='cardDeleteandEditButton far fa-edit' type='submit' onClick={(e) => this.handleClickEditCard(e, card)} /></div>
            {this.props.card.front}
          </div>
        </div>
      </div>
    )
  }
}

class StackPage extends Component {
  constructor () {
    super()
    this.state = {
      addCard: false
    }
    this.handleClickAddCard = this.handleClickAddCard.bind(this)
  }
  handleClickAddCard (e, value) {
    e.preventDefault()
    this.setState(state => ({ addCard: value }))
  }

  render () {
    const stack = this.props.stack
    // console.log(this.state.addCard)
    if (this.state.addCard) {
      return (<AddCard addCard={this.state.addCard} stackID={stack.id} />)
    } else {
      return (
        <div className='StackPage'>
          <div className='stackNav'>
            <div className='stackTitle'><Title>{stack.title}</Title>
              <button className='editTitleButton'>&#x270E;</button>
              <button className='cancelTitleEditButton'>&#10006;</button></div>
            <div className='edit-runDiv'><button className='editModeButton'>Edit</button><button className='runModeButton'>Run</button></div>
          </div>
          <div className='FlashCardMiniDiv columns'>
            <div className='column is-one-third'>
              {stack.cards && stack.cards.map((card) => <FlashCardMini key={card.id} state={this.state} card={card} handleClickEditCard={this.handleClickEditCard} />)}
            </div>
            <div className='column is-one-third addCardButtonDiv'>
              <button className='column is-one-third addCardButton' onClick={(e) => this.handleClickAddCard(e, true)}>+</button>
            </div>
          </div>
        </div>
      )
    }
  }
}

export default StackPage
