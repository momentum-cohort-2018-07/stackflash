import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Title, Input, Field, Button, Control, Icon } from 'bloomer'

class StackTitle extends Component {
  constructor (props) {
    super()
    this.state = {
      isEditing: false
    }
  }

  updateTitle (newTitle) {
    this.setState({ title: newTitle })
  }

  startEditing () {
    this.setState({
      isEditing: true,
      title: this.props.title
    })
  }

  stopEditing (save = true) {
    if (save) {
      this.props.onSaveTitle(this.state.title)
    }
    this.setState({
      isEditing: false
    })
  }

  render () {
    const { title } = this.props
    if (this.state.isEditing) {
      return (
        <div>
          <Field hasAddons>
            <Control isExpanded><Input isFullWidth isSize='large' type='text' className='StackTitle__input'
              onChange={event => this.updateTitle(event.target.value)}
              value={this.state.title} /></Control>
            <Control><Button isSize='large' isColor='primary' onClick={() => this.stopEditing()}>Save</Button></Control>
            <Control><Button isSize='large' isColor='warning' onClick={() => this.stopEditing(false)}>Cancel</Button></Control>
          </Field>
        </div>
      )
    }
    return (
      <Title>
        {title + ' '}
        <a onClick={() => this.startEditing()}><Icon isSize='large' className='fas fa-edit' /></a>
      </Title>
    )
  }
}

StackTitle.propTypes = {
  title: PropTypes.string.isRequired,
  onSaveTitle: PropTypes.func.isRequired
}

export default StackTitle
