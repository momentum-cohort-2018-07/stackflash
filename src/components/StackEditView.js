import React, { Component } from 'react'
import { Title } from 'bloomer'
// import FlashCardContainer from './FlashCardContainer'
// import data from '../data'
// import { Stack } from 'immutable'

class FlashCardMini extends Component {
  // constructor () {
  //   super(props)
  // }

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

class StackEditView extends Component {
  // renderSeeAllStacksEdit () {
  //   return (
  //     <button className='sidebarNavButton showAllStacks'>See all stacks</button>
  //   )
  // }

  render () {
    const stack = this.props.stack
    return (
      <div className='board'>
        <div className='container'>
          <div className='stackNav'>
            <div className='stackTitle'><Title>{stack.title}</Title></div>
            <div className='editTitleButtonDiv'><button className='editTitleButton'>&#x270E;</button></div>
            <div className='deleteFlashCardDiv'><button className='deleteFlashCardButton'>&#10006;</button></div>
            <div className='edit-runDiv'><button className='editViewButton'>Edit</button><button className='runViewButton'>Run</button></div>
          </div>
          <div className='FlashCardMiniDiv columns'>
            <div className='column is-one-third'>
              {stack.cards.map((card) => <FlashCardMini key={card.id} card={card} />)}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default StackEditView
