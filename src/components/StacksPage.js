import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import {
  Modal, ModalBackground, ModalCard, ModalCardHeader, ModalCardBody, ModalCardTitle, ModalCardFooter,
  Delete,
  Field,
  Button
} from 'bloomer'

import Spinner from './Spinner'

class StacksPage extends React.Component {
  constructor () {
    super()
    this.state = {
      newStack: false,
      newStackTitle: '',
      deletingStack: null
    }
  }

  handleClick () {
    this.setState({
      newStack: true
    })
  }

  reset () {
    this.setState({
      newStack: false,
      newStackTitle: ''
    })
  }

  save () {
    this.props.onSaveNewStack({ title: this.state.newStackTitle })
    this.setState({
      newStack: false,
      newStackTitle: ''
    })
  }

  renderNewStackForm () {
    return (
      <div className='Stack__fg--no-hover'>
        <div className='Stack__content'>
          <div className='vcenter'>
            <Field>
              <input type='text' className='Stack__new-stack-name'
                onChange={e => this.setState({ newStackTitle: e.target.value })}
                placeholder='Title' style={{ textAlign: 'center' }} />
            </Field>
            <Field>
              <div className='buttons has-addons' style={{ justifyContent: 'center' }}>
                <Button isColor='primary' onClick={() => this.save()}>Save</Button>
                <Button isColor='warning' onClick={() => this.reset()}>Cancel</Button>
              </div>
            </Field>
          </div>
        </div>
      </div>
    )
  }

  renderAddNewStack () {
    return (
      <div className='Stack__fg'>
        <div className='Stack__content'>
          <a className='vcenter'
            onClick={() => this.handleClick()}>
            <div className='Stack__addStack'>+</div>
            <div>Add a new stack</div>
          </a>
        </div>
      </div>
    )
  }

  deleteStack (id) {
    this.props.deleteStack(id).then(() => {
      this.setState({ deletingStack: null })
    })
  }

  render () {
    const { stacks, isLoading } = this.props
    const { deletingStack } = this.state

    return (
      <div className='Stacks'>
        {isLoading
          ? <div className='Stack'>
            <div className='Stack__fg'>
              <div className='Stack__content'>
                <Spinner className='is-size-1' />
              </div>
            </div>
            <div className='Stack__bg'>&nbsp;</div>
          </div>
          : stacks.map((stack) =>
            <Stack key={stack.id} stack={stack} onDelete={() => this.setState({ deletingStack: stack })} />
          )
        }

        <div className='Stack'>
          {
            this.state.newStack
              ? this.renderNewStackForm()
              : this.renderAddNewStack()
          }
          <div className='Stack__bg'>&nbsp;</div>
        </div>
        <Modal isActive={deletingStack}>
          <ModalBackground />
          <ModalCard>
            <ModalCardHeader>
              <ModalCardTitle>Delete {deletingStack && deletingStack.title}?</ModalCardTitle>
              <Delete onClick={() => this.setState({ deletingStack: null })} />
            </ModalCardHeader>
            <ModalCardBody>
              This will delete your stack FOREVER!!!
            </ModalCardBody>
            <ModalCardFooter>
              <Button isColor='danger' onClick={() => this.deleteStack(deletingStack.id)}>Delete</Button>
              <Button isColor='warning' onClick={() => this.setState({ deletingStack: null })}>Cancel</Button>
            </ModalCardFooter>
          </ModalCard>
        </Modal>
      </div>
    )
  }
}

const stackType = PropTypes.shape({
  title: PropTypes.string,
  cardCount: PropTypes.number
})

StacksPage.propTypes = {
  stacks: PropTypes.arrayOf(stackType),
  isLoading: PropTypes.bool,
  deleteStack: PropTypes.func.isRequired
}

// Why is Stack in here rather than in its own file?
// It is only used in StacksPage, so it makes sense to put it in the same file.
const Stack = ({ stack, onDelete }) => {
  return (
    <div className='Stack'>
      <div className='Stack__fg'>
        <div className='Stack__content'>
          <a className='Stack__delete' onClick={onDelete}>
            <Delete />
          </a>
          <Link to={`/stacks/${stack.id}`} className='vcenter'>
            <div className='Stack__title has-text-weight-bold'>{ stack.title }</div>
            <div className='Stack__cardCount'>{ stack.cardCount } cards</div>
          </Link>
        </div>
      </div>
      <div className='Stack__bg'>&nbsp;</div>
    </div>
  )
}

export default StacksPage
