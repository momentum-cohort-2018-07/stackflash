import React from 'react'
import 'bulma/css/bulma.css'
import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm';

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
        <button onClick={() => this.setState({isRegistering: false})}>Log In</button>
        <button onClick={() => this.setState({isRegistering: true})}>Register</button>
        {this.state.isRegistering
          ? <RegistrationForm setCurrentUser={setCurrentUser} />
          : <LoginForm setCurrentUser={setCurrentUser} />}
      </div>
    )
  }
}

export default LoggedOut
