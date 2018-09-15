import React from 'react'

const FlashCardMini = (props) =>
  <div className='FlashCardMini'>
    <div className='cardFront'>
      <div className='miniCard'>
        <div className='cardDeleteButtonDiv'><button className='cardDeleteButton'>&#10006;</button></div>
        {props.card.front}
      </div>
    </div>
  </div>

export default FlashCardMini
