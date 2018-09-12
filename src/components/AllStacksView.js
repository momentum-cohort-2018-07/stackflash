import React from 'react'
import PropTypes from 'prop-types'
import FlashCardContainer from './FlashCardContainer'
import StacksView from './StacksView'

class AllStacksView extends React.Component {
  render () {
    if (this.props.stacks) {
      return (
        <FlashCardContainer>
          <div>
            {this.props.stacks.map((stack) => <StacksView key={stack.id} stack={stack} />)}
            <div className='stackContainer'>
              <div className='addStack'>+</div>
              <div className='numberOfCards'><p>Add a New Deck</p></div>
            </div>
          </div>
        </FlashCardContainer>
      )
    } else {
      return null
    }
  }
}

AllStacksView.propTypes = {
  stacks: PropTypes.arrayOf(
    PropTypes.object
  )
}

export default AllStacksView
