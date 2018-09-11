import React from 'react'
// import data from './data'

class StacksView extends React.Component {
  render () {
    return (
      <div className='stackView'>
        <div className='stackContainer'>
          <div className='stackImage' />
          <div className='stackTitle'><h4>Placeholder "stack Name"</h4></div>
          <div className='numberOfCards'><p>(x) cards</p></div>
        </div>
        <div className='stackContainer'>
          <div className='addStack'>+</div>
          <div className='numberOfCards'><p>Add a New Deck</p></div>
        </div>
      </div>
    )
  }
}

export default StacksView
