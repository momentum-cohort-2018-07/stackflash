import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Modal, ModalBackground, ModalCard, ModalCardHeader, ModalCardBody, ModalCardTitle, ModalCardFooter,
  Delete,
  Button
} from 'bloomer'
import { Link } from 'react-router-dom'

import StackTitle from './StackTitle'

import FlashCardMini from './FlashCardMini'

class StackPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      deleting: false
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

        <div className='stackNav columns'>
          <div className='stackTitle column is-three-quarters'>
            <StackTitle
              title={stack.title}
              onSaveTitle={this.props.updateStackTitle} />
            {/* <Button className='delete-stack' onClick={() => this.setState({ deleting: true })}>Delete</Button> */}
          </div>
          <div className='edit-runDiv column buttons has-addons'>
            <Button className='editModeButton' isActive>Edit</Button>
            <Button className='runModeButton'>Run</Button>
          </div>
        </div>
        <div className='miniCardsView'>
          {stack.cards && stack.cards.map((card) => <FlashCardMini key={card.id} card={card} />)}

          <div className='miniCard Card__addCard'>
            <div className='Card__addCardSymbol'>
              <Link to={`/stack/${stack.id}/addCard`}>+</Link>
            </div>
            <div className='Card__addCardText'>Add a card</div>
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
  updateStackTitle: PropTypes.func.isRequired,
  onDeleteStack: PropTypes.func.isRequired
}

export default StackPage
