import React from 'react'

class StacksView extends React.Component {
  render () {
    return (
      <div className='Stack'>

        <div className='Stack__fg'>
          <div className='Stack__content'>
            <div className='Stack__title has-text-weight-bold'>{ this.props.stack.title }</div>
            <div className='Stack__cardCount'>{ this.props.stack.cardCount } cards</div>
          </div>
        </div>
        <div className='Stack__bg'>&nbsp;</div>
      </div>
    )
  }
}

export default StacksView
