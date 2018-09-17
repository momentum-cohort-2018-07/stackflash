import React, { Component } from 'react'
import { Label, Input, Button } from 'bloomer'

class EditCard extends Component {
  render () {
    const { card } = this.props

    return (
      <div className='FlashCardMini'>
        <div>edit</div>
        <div className='cardFront'>
          <div className='miniCard'>
            <Label> Question
              <Input className='question' value={card.front} />
            </Label>
            <Label>Answer
              <Input className='answer' value={card.back} />
            </Label>
            <Button className='button save'>Save</Button>
            <Button className='button cancel'>Cancel</Button>
          </div>
        </div>
      </div>
    )
  }
}

export default EditCard
