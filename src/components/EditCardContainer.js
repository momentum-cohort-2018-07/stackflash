import React from 'react'
import { Redirect } from 'react-router-dom'
import EditCard from './EditCard'
import Spinner from './Spinner'
import data from '../data'

class EditCardContainer extends React.Component {
  constructor () {
    super()
    this.state = {
      done: false,
      card: {
        front: '',
        back: ''
      }
    }
    this.onSave = this.onSave.bind(this)
    this.onCancel = this.onCancel.bind(this)
  }

  componentDidMount () {
    data.getCard(this.props.id).then(card => this.setState({ card }))
  }

  onSave (card) {
    data.updateCard(card).then(() => this.setState({ done: true }))
  }

  onCancel (card) {
    this.setState({ done: true })
  }

  render () {
    if (this.state.done && this.state.card.stackId) {
      return <Redirect to={`/stacks/${this.state.card.stackId}`} />
    } else if (this.state.card.id) {
      return (<EditCard card={this.state.card} onSave={this.onSave} onCancel={this.onCancel} />)
    } else {
      return (<Spinner className='is-size-1' />)
    }
  }
}

export default EditCardContainer
