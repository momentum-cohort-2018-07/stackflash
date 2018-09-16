import React, { Component } from 'react'
import { Label, Input, Button } from 'bloomer'
import data from '../data'

class EditCard extends Component {
  render () {
    console.log(this.props.state.card.front, 'the card')
    return (

      <div className='FlashCardMini'>
        <div>edit</div>
        <div className='cardFront'>
          <div className='miniCard'>
            <Label> Question
              <Input className='question' value={this.props.state.card.front} />
            </Label>
            <Label>Answer
              <Input className='answer' value={this.props.state.card.back} />
            </Label>
            <Button classname='button save'>Save</Button>
            <Button classname='button cancel'>Cancel</Button>
          </div>
        </div>
      </div>
    )
  }
}

export default EditCard
