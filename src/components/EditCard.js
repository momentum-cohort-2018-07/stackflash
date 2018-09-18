import React, { Component } from 'react'
import { Label, Input, Button } from 'bloomer'
import PropTypes from 'prop-types'

class EditCard extends Component {
  constructor (props) {
    super()
    this.state = {
      front: props.card.front,
      back: props.card.back
    }
    this.onSave = this.onSave.bind(this)
  }

  onSave () {
    const { card, onSave } = this.props

    card.front = this.state.front
    card.back = this.state.back
    onSave(card)
  }

  render () {
    const { front, back } = this.state

    return (
      <div className='FlashCardMini'>
        <div>edit</div>
        <div className='cardFront'>
          <div className='miniCard'>
            <Label>Front
              <Input value={front} onChange={event => this.setState({ front: event.target.value })} />
            </Label>
            <Label>Back
              <Input value={back} onChange={event => this.setState({ back: event.target.value })} />
            </Label>
            <Button className='button save' onClick={this.onSave}>Save</Button>
            <Button className='button cancel' onClick={this.props.onCancel}>Cancel</Button>
          </div>
        </div>
      </div>
    )
  }
}

EditCard.propTypes = {
  card: PropTypes.shape({
    front: PropTypes.string,
    back: PropTypes.string
  }).isRequired,
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired
}

export default EditCard
