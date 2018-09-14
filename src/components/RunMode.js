import React from 'react'
// import PropTypes from 'prop-types'
// import { Title, Button } from 'bloomer'
// import { Link } from 'react-router-dom'
// import data from '../data'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faRotateRight } from '@fortawesome/free-solid-svg-icons'
// import 'font-awesome/css/font-awesome.min.css'
import { Icon } from 'bloomer'

class RunMode extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      flipped: false
    }
  }

  render () {
    return (
      <div className='card-run'>
        <div className='card-outline'>
          <div className='card-front front'>{this.props.card.front}</div>
          <Icon class='fas fa-redo-alt flip-card' />
        </div>
        <div className='card-outline'>
          <div className='card-back back'>{this.props.card.back}</div>
          <Icon class='far fa-thumbs-down thumbs-down' />
          <Icon class='far fa-thumbs-up thumbs-up' />
        </div>
      </div>
    )
  }
}

export default RunMode
