import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Title } from 'bloomer'

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
          <input type='text' className='title'
            onChange={event => this.updateTitle(event.target.value)}
            value={this.state.title} />
          <button onClick={() => this.stopEditing()}>Save</button>
          <button onClick={() => this.stopEditing(false)}>Cancel</button>
        </div>
      )
    }
    return (
      <Title>
        {title}

        <button className='editTitleButton'
          onClick={() => this.startEditing()}>&#x270E;
        </button>
      </Title>
    )
  }
}

StackTitle.propTypes = {
  title: PropTypes.string.isRequired,
  onSaveTitle: PropTypes.func.isRequired
}

export default StackTitle
