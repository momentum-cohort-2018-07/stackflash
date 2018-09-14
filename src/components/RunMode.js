import React from 'react'
import PropTypes from 'prop-types'

class RunMode extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      flipped: false
    }
    this.flipCard = this.flipCard.bind(this)
    this.onThumbsUp = this.onThumbsUp.bind(this)
    this.onThumbsDown = this.onThumbsDown.bind(this)
  }

  flipCard () {
    this.setState(state => ({ flipped: !state.flipped }))
  }

  onThumbsUp () {

  }

  onThumbsDown () {

  }

  render () {
    let { front, back } = this.props.card
    let { onThumbsUp, onThumbsDown } = this.props
    return (
      <div>
        {this.state.flipped
          ? (<div className='card-run'>
            <div className='card-outline'>
              <a clasName='back-arrow-container'><i class='fas fa-angle-left back-arrow' onClick={() => this.flipCard()} /></a>
              <div className='card-back back'>{back}</div>
              <a><i class='fas fa-thumbs-down thumbs-down' onClick={() => onThumbsDown()} /></a>
              <a><i class='fas fa-thumbs-up thumbs-up' onClick={() => onThumbsUp()} /></a>
            </div>
          </div>)
          : (<div className='card-run'>
            <div className='card-outline'>
              <div className='card-front front'>{front}</div>
              <a><i class='fas fa-redo-alt flip-card' onClick={() => this.flipCard()} /></a>
            </div>
          </div>)
        }
      </div>
    )
  }
}

RunMode.propTypes = {
  card: PropTypes.shape({
    front: PropTypes.string,
    back: PropTypes.string
  }).isRequired,
  onThumbsUp: PropTypes.func.isRequired,
  onThumbsDown: PropTypes.func.isRequired
}

export default RunMode
