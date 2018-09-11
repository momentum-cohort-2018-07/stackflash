import React from 'react'
import {Form, Field, Button, Control, Notification, Input, Label} from 'bloomer'
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
    const { username, password } = this.state
    data.register(username, password)
      .then(user => this.props.setNewUser(user))
      .catch(err => {
        this.setState({
          errorMsg: err.message
        })
      })
  }

  render () {
    const { username, password, errorMsg } = this.state

    return (
      <div className='RegistrationForm'>
        {errorMsg &&
          <Notification isColor='danger'>
            {errorMsg}
          </Notification>
        }
        <form onSubmit={this.handleSubmit}>
          <Field>
            <Label>Username:</Label>
            <Control>
              <Input type='text' value={username} placeholder='Username' onChange={(e) => this.setState({ username: e.target.value })} />
            </Control>
          </Field>
          <Field>
            <Label>Password:</Label>
            <Control>
              <Input type='text' value={password} placeholder='Create password' onChange={(e) => this.setState({ password: e.target.value })} />
            </Control>
          </Field>
          <Field>
            <Label>Confirm password:</Label>
            <Control>
              <Input type='text'placeholder='Confirm password' />
            </Control>
            <Button type='submit'>Register</Button>
          </Field>
        </form>
      </div>
    )
  }
}

export default RegistrationForm
