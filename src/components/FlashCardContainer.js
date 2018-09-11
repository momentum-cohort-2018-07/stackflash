import React from 'react'

class FlashCardContainer extends React.Component {
  render () {
    return (
      <div className='FlashCardContainer'>
        {this.props.children}
      </div>
    )
  }
}

export default FlashCardContainer
