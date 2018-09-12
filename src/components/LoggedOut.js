import React from 'react'
import PropTypes from 'prop-types'

import RegistrationForm from './RegistrationForm'
import LoginForm from './LoginForm'
import ActiveLink from './ActiveLink'

class LoggedOut extends React.Component {
  constructor () {
    super()
    this.state = {
      isRegistering: false
    }
  }

  render () {
    let { setCurrentUser } = this.props
    return (
      <div>
        <div className='is-size-4 has-text-centered'>
          <ActiveLink
            active={this.state.isRegistering}
            onClick={() => this.setState({ isRegistering: false })}>
            Log In
          </ActiveLink>
          &nbsp;|&nbsp;
          <ActiveLink
            active={!this.state.isRegistering}
            onClick={() => this.setState({ isRegistering: true })}>
            Register
          </ActiveLink>
        </div>
        {this.state.isRegistering
          ? <RegistrationForm setCurrentUser={setCurrentUser} />
          : <LoginForm setCurrentUser={setCurrentUser} />}
      </div>
    )
  }
}

export default LoggedOut
