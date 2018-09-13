import React from 'react'
import { Field, Button, Control, Notification, Input, Label } from 'bloomer'
import { NavLink } from 'react-router-dom'
import BigFlashCard from './BigFlashCard'
import data from '../data'

class RegistrationForm extends React.Component {
  constructor () {
    super()
    this.state = {
      username: '',
      password: '',
      passwordConfirmation: '',
      errorMsg: null
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    // this.registrationView = this.registrationView.bind(this)
  }

  handleSubmit (event) {
    event.preventDefault()
    const { username, password, passwordConfirmation } = this.state
    if (passwordConfirmation === password) {
      data.register(username, password)
        .then(user => this.props.setCurrentUser(user))
        .catch(err => {
          this.setState({
            errorMsg: err.message
          })
        })
    } else {
      this.setState({ errorMsg: 'Your password and confirmation must match.' })
    }
  }

  render () {
    const { username, password, passwordConfirmation, errorMsg } = this.state

    return (
      <BigFlashCard>

        <div className='is-size-4 has-text-centered'>
          <NavLink to='/login'>Log In</NavLink>
          &nbsp;|&nbsp;
          <NavLink to='/register'>Register</NavLink>
        </div>

        <div className='RegistrationForm'>
          {errorMsg &&
          <Notification isColor='danger'>
            {errorMsg}
          </Notification>
          }
          <form onSubmit={this.handleSubmit}>
            <Field>
              <Label>Username</Label>
              <Control>
                <Input type='text' value={username} onChange={(e) => this.setState({ username: e.target.value })} />
              </Control>
            </Field>
            <Field>
              <Label>Password</Label>
              <Control>
                <Input type='password' value={password} onChange={(e) => this.setState({ password: e.target.value })} />
              </Control>
            </Field>
            <Field>
              <Label>Confirm password</Label>
              <Control>
                <Input type='password' value={passwordConfirmation} onChange={(e) => this.setState({ passwordConfirmation: e.target.value })} />
              </Control>
            </Field>
            <Button type='submit'>Register</Button>

          </form>
        </div>
      </BigFlashCard>
    )
  }
}

export default RegistrationForm
