import React from 'react'
import PropTypes from 'prop-types'

class ActiveLink extends React.Component {
  render () {
    const { active, onClick } = this.props
    if (active) {
      return (
        <a onClick={onClick}>{this.props.children}</a>
      )
    } else {
      return (
        <strong>{this.props.children}</strong>
      )
    }
  }
}

ActiveLink.propTypes = {
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func
}

export default ActiveLink
