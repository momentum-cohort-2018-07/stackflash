import React from 'react'
import EditCard from './EditCard'
import data from '../data'

class EditCardContainer extends React.Component {
  constructor () {
    super()
    this.state = {
      card: {
        front: '',
        back: ''
      }
    }
  }

  componentDidMount () {
    data.getCard(this.props.id).then(card => this.setState({ card }))
  }

  render () {
    return (<EditCard card={this.state.card} />)
  }
}

export default EditCardContainer
