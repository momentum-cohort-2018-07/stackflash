import React from 'react'
import PropTypes from 'prop-types'
import { Delete } from 'bloomer'

import { truncateString } from '../util'

const FlashCardMini = (props) => (
  <div className='FlashCardMini'>
    <div className='FlashCardMini__delete'>
      <Delete />
    </div>
    {truncateString(props.card.front, 180, 'right', '...', 'true')}
  </div>
)

FlashCardMini.propTypes = {
  cardFront: PropTypes.string
}

export default FlashCardMini
