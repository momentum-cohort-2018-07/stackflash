import React from 'react'
import { Field, Label, Control, Input, Button, Notification } from 'bloomer'
import data from '../data'

class LoginForm extends React.Component {
  constructor () {
    super()
    this.state = {
      username: '',
      password: '',
      errorMsg: null
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (event) {
    event.preventDefault()
    const { username, password } = this.state
    console.log('submitting login')
    data.login(username, password)
      .then(user => this.props.setCurrentUser(user))
      .catch(err => {
        this.setState({
          errorMsg: err.message
        })
      })
  }

  render () {
    const { username, password, errorMsg } = this.state

    return (
      <div className='LoginForm'>

        {errorMsg &&
          <Notification isColor='danger'>
            {errorMsg}
          </Notification>}
        <form onSubmit={this.handleSubmit}>
          <Field>
            <Label>Username</Label>
            <Control>
              <Input type='text' value={username}
                onChange={(e) => this.setState({ username: e.target.value })} />
            </Control>
          </Field>
          <Field>
            <Label>Password</Label>
            <Control>
              <Input type='password' value={password}
                onChange={(e) => this.setState({ password: e.target.value })} />
            </Control>
          </Field>
          <Button type='submit'>Login</Button>
        </form>
      </div>
    )
  }
}

export default LoginForm
