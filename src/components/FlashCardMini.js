import React from 'react'
import PropTypes from 'prop-types'
import { Delete } from 'bloomer'
import { Link } from 'react-router-dom'

import { truncateString } from '../util'

const FlashCardMini = (props) => {
  const { card } = props
  return (
    <div className='FlashCardMini'>
      <div className='FlashCardMini__delete'>
        <Delete />
      </div>
      <Link to={`/cards/${card.id}`}>
        {truncateString(props.card.front, 180, 'right', '...', 'true')}
      </Link>

    </div>
  )
}

FlashCardMini.propTypes = {
  cardFront: PropTypes.string
}

export default FlashCardMini
