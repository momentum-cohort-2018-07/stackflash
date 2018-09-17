import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Icon } from 'bloomer'

const FlashCardMini = (props) =>
  <div className='FlashCardMini'>
    <div className='cardFront'>
      <div className='miniCard'>
        <div className='cardDeleteButtonDiv'><button className='cardDeleteButton'>&#10006;</button></div>
        <div className='cardEditButtonDiv'>
          <Link to={`/cards/${props.card.id}`}>
            <Icon className='far fa-edit' />
          </Link>
        </div>
        {props.card.front}
      </div>
    </div>
  </div>

FlashCardMini.propTypes = {
  cardFront: PropTypes.string
}

export default FlashCardMini
