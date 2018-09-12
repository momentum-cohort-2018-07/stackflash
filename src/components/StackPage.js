import React, { Component } from 'react'
import { Title } from 'bloomer'

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
  render () {
    const stack = this.props.stack
    return (
      <div className='board'>
        <div style={{ margin: '15px' }}>
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
              <button className='column is-one-third addCardButton'>+</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default StackPage
