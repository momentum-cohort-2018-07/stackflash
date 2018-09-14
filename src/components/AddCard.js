import React, { Component } from 'react'
import { Label, Control, Input, Button } from 'bloomer'
import data from '../data'

class AddCard extends Component {
  constructor () {
    super()
    this.state = {
      question: '',
      answer: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit (e) {
    e.preventDefault()
    const { stackID, addCard } = this.props
    let card = this.state
    console.log(addCard, 'add card')
    data.createCard(stackID, card)
    // this.setState(state => ({ addCard: false }))
  }
  render () {
    const { answer, question } = this.state
    return (
      <div className='addCardFormDiv'>
        <form className='addCardForm' >
          <Label className='questionLabel'>Question</Label>
          <Control>
            <Input className='question input' value={question} onChange={event => { this.setState({ question: event.target.value }) }} />
          </Control>
          <Label className='answerLabel'>Answer</Label>
          <Control>
            <Input className='answer input' value={answer} onChange={event => { this.setState({ answer: event.target.value }) }} />
          </Control>
        </form>
        <Button className='saveButton' type='submit' onClick={this.handleSubmit}>Save</Button>
        <Button className='cancelButton' type='cancel'>Cancel</Button>
      </div>
    )
  }
}

export default AddCard
