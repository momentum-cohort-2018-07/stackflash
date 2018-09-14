import React, { Component } from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

/* <div>
    <FontAwesomeIcon icon="pencil-alt times-circle times plus-circle plus" />
  </div> */

class FlashCardMini extends Component {
  render () {
    return (
      <div className='FlashCardMini'>
        <div className='miniCard'>
          <button className='cardDeleteButton'>&#10006;</button>
          <div className='Card__content'>
            {this.props.card.front}
          </div>
          {/* </div> */}
        </div>
      </div>
    )
  }
}

class StackPage extends Component {
  render () {
    const stack = this.props.stack
    return (
      <div className='StackPage'>
        <div className='stackNav columns'>
          <div className='stackTitle column is-three-quarters'>{stack.title}
            <button className='editTitleButton'>&#x270E;
            </button>
            <button className='cancelTitleEditButton'>&#10006;</button>
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

export default StackPage
