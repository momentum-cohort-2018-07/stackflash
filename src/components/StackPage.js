import React, { Component } from 'react'
import { Title } from 'bloomer'
import AddCard from './AddCard'

class FlashCardMini extends Component {
  render () {
    return (
      <div className='FlashCardMini'>
        <div className='cardFront'>
          <div className='miniCard'>
            <div className='cardDeleteButtonDiv'><button className='cardDeleteButton'>&#10006;</button></div>
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
      addCard: false,
      editCard: false
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick (e) {
    // debugger
    this.setState(state => ({ addCard: true }))
    console.log(this.state.addCard, 'state card')
  }
  render () {
    const stack = this.props.stack
    // console.log(this.state.addCard)
    if (this.state.addCard) {
      return (<AddCard addCard={this.state.addCard} />)
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
              {stack.cards && stack.cards.map((card) => <FlashCardMini key={card.id} card={card} />)}
            </div>
            <div className='column is-one-third addCardButtonDiv'>
              <button className='column is-one-third addCardButton' onClick={(e) => this.handleClick(e)}>+</button>
            </div>
          </div>
        </div>
      )
    }
  }
}

export default StackPage
