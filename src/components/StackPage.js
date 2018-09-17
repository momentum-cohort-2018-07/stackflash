import React, { Component } from 'react'
import PropTypes from 'prop-types'
import data from '../data'

import {
  Title,
  Modal, ModalBackground, ModalCard, ModalCardHeader, ModalCardBody, ModalCardTitle, ModalCardFooter,
  Delete,
  Button,
  Field,
  Label,
  Control,
  Input
} from 'bloomer'

import FlashCardMini from './FlashCardMini.js'

class StackPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      deleting: false,
      // Kari's
      isEditing: false,
      // end Kari's
      title: ''
    }
  }

  

  render () {
    const { stack, onDeleteStack } = this.props
    return (
      <div className='StackPage'>
        <Modal isActive={this.state.deleting}>
          <ModalBackground />
          <ModalCard>
            <ModalCardHeader>
              <ModalCardTitle>Delete {stack.title}?</ModalCardTitle>
              <Delete onClick={() => this.setState({ deleting: false })} />
            </ModalCardHeader>
            <ModalCardBody>
              This will delete your stack FOREVER!!!
            </ModalCardBody>
            <ModalCardFooter>
              <Button isColor='danger' onClick={() => onDeleteStack(stack.id)}>Delete</Button>
              <Button isColor='warning' onClick={() => this.setState({ deleting: false })}>Cancel</Button>
            </ModalCardFooter>
          </ModalCard>
        </Modal>











        {/* // Kari's code here */}
        <Modal isActive={this.state.isEditing}>
          <ModalBackground />
          <ModalCard>
            <ModalCardHeader>
              {/* <ModalCardTitle>Edit {stack.title}?</ModalCardTitle> */}
              <Delete onClick={() => this.setState({ isEditing: true })} />
            </ModalCardHeader>
             <ModalCardBody>
                   <Field>
                    <Control>
                      <Input type='text'placeholder={stack.title} onChange={() => { this.setState({ title: 'test!!!' })
                    console.log(this.state)}}/>
                   </Control>
              </Field>
            </ModalCardBody>
                    <ModalCardFooter>

              <Button isColor='success' onClick={() => {

                function updateTitle() {
                  console.log('!!!!')
                  stack.title = 'Interview questions!!!' 
        } 
        
        updateTitle(), 
        
        data.updateStack(stack)
        this.setState({ isEditing: false })}}>Save</Button>
              <Button isColor='warning' onClick={() => this.setState({ isEditing: false })}>Cancel</Button>
            </ModalCardFooter>
                  </ModalCard>
        </Modal>

        

        {/* // Kari's code ends here */}














        <div className='stackNav columns'>
          <div className='stackTitle column is-three-quarters'>

            <Title>{stack.title} <button className='delete-stack' onClick={() => this.setState({ deleting: true })}>Delete</button></Title>

            <button className='editTitleButton' onClick={() => this.setState({ isEditing: true })}>&#x270E;
            </button>
            <button className='cancelTitleEditButton'>&#10006;</button>
          </div>
          <div className='edit-runDiv column'>
            <button className='editModeButton'>Edit</button>
            <button className='runModeButton'>Run</button>
          </div>
        </div>
        <div className='miniCardsView columns is-multiline'>
          <div className='column is-one-third'>
            {stack.cards && stack.cards.map((card) => <FlashCardMini key={card.id} card={card} />)}
          </div>
          <div className='column is-one-third'>
            <div className='Card__addCard'>
              <div className='Card__addCardSymbol'>+</div>
              <div className='Card__addCardText'>Add a card</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

StackPage.propTypes = {
  stack: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    cards: PropTypes.arrayOf(PropTypes.object)
  }).isRequired,
  onDeleteStack: PropTypes.func.isRequired
}

export default StackPage
