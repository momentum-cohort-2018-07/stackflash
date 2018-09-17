import React from 'react'
import PropTypes from 'prop-types'

const FlashCardMini = (props) =>
  <div className='FlashCardMini'>
    <div className='cardFront'>
      <div className='miniCard'>
        <div className='cardDeleteButtonDiv'><button className='cardDeleteButton'>&#10006;</button></div>
        {props.card.front}
      </div>
    </div>
  </div>

FlashCardMini.propTypes = {
  cardFront: PropTypes.string
}

export default FlashCardMini
