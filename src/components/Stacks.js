import React from 'react'
import PropTypes from 'prop-types'
import Stack from './Stack'

class Stacks extends React.Component {
  render () {
    if (this.props.stacks) {
      return (
        <div class='Stacks'>
          {this.props.stacks.map((stack) => <Stack key={stack.id} stack={stack} />)}
          <div className='stackContainer'>
            <div className='addStack'>+</div>
            <div className='numberOfCards'><p>Add a New Deck</p></div>
          </div>
        </div>
      )
    } else {
      return null
    }
  }
}

Stacks.propTypes = {
  stacks: PropTypes.arrayOf(
    PropTypes.object
  )
}

export default Stacks
