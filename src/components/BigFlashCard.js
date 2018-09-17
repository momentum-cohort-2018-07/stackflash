import React from 'react'
import PropTypes from 'prop-types'

const BigFlashCard = (props) => <div className='BigFlashCard'>{props.children}</div>

BigFlashCard.PropTypes = {
  children: PropTypes.object
}

export default BigFlashCard
