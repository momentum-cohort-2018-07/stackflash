import React from 'react'
import { Field, Label, Control, Input, Button, Notification } from 'bloomer'
import { Link } from 'buttermilk'
import data from '../data'
import BigFlashCard from './BigFlashCard'

class LoginForm extends React.Component {
  constructor (props) {
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
      <BigFlashCard>
        <div className='is-size-4 has-text-centered'>
          <Link href='/login'>Log In</Link>
          &nbsp;|&nbsp;
          <Link href='/register'>Register</Link>
        </div>

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
      </BigFlashCard>
    )
  }
}

export default LoginForm
