import React, { Component } from 'react'
import { Form, Label, Input, Button, Control } from 'bloomer'

class AddCard extends Component {
  constructor () {
    super()
    this.state = {
      question: '',
      answer: ''
    }
  }
  render () {
    // const newCard = this.props.addCard
    // debugger
    return (
      <div className='addCardFormDiv'>
        <Form className='addCardForm'>
          <Label className='questionLabel'>Question</Label>
          <Control>
            <Input className='questionInput' />
          </Control>
          <Label className='answerLabel'>Answer</Label>
          <Control>
            <Input className='answerInput' />
          </Control>
        </Form>
        <Button className='saveButton' type='submit'>Save</Button>
        <Button className='cancelButton' type='cancel'>Cancel</Button>
      </div>
    )
  }
}

export default AddCard
