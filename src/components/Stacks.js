import React from 'react'
import PropTypes from 'prop-types'
import Stack from './Stack'

class Stacks extends React.Component {
  render () {
    if (this.props.stacks) {
      return (
        <div class='Stacks'>
          {this.props.stacks.map((stack) => <Stack key={stack.id} stack={stack} />)}
          <div className='Stack'>
            <div className='Stack__fg'>
              <div className='Stack__content'>
                <div className='Stack__addStack'>+</div>
                <div>Add a new stack</div>
              </div>
            </div>
            <div className='Stack__bg'>&nbsp;</div>
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
