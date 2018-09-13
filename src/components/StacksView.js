import React from 'react'

class StacksView extends React.Component {
  render () {
    return (
      <div className='stackView'>
        <div className='stackContainer'>
          <div className='stackTitle'><h4>{ this.props.stack.title } </h4></div>
          <div className='numberOfCards'><p>{ this.props.stack.cardCount } cards</p></div>
        </div>
      </div>
    )
  }
}

export default StacksView
