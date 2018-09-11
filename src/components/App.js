import React, { Component } from 'react'
import LoginForm from './LoginForm'
import { Title, Button } from 'bloomer'
import FlashCardContainer from './FlashCardContainer'
import data from '../data'

class App extends Component {
  constructor () {
    super()
    this.state = {
      currentUser: null
    }

    this.setCurrentUser = this.setCurrentUser.bind(this)
  }

  componentDidMount () {
    const username = window.localStorage.getItem('username')
    const token = window.localStorage.getItem('token')
    if (username && token) {
      this.setState({
        currentUser: { username, token }
      })
      data.setUserToken(token)
    }
  }

  setCurrentUser (user) {
    window.localStorage.setItem('username', user.username)
    window.localStorage.setItem('token', user.token)
    this.setState({ currentUser: user })
  }

  logout () {
    window.localStorage.clear()
    this.setState({
      currentUser: null
    })
  }

  render () {
    return (
      <div className='App'>
        <section className='sidebar'>
          <Title>StackFlash</Title>
          {this.state.currentUser &&
          <div>
            <p>Hello, {this.state.currentUser.username}</p>
            <Button onClick={() => this.logout()}>Sign Out</Button>
          </div>
          }
          <div className='attribution'>
            <p>
              Created by Cohort 2 at <a href='https://www.momentumlearn.com/'>Momentum</a>.
            </p>
            <p>
              <a href='https://github.com/momentum-cohort-2018-07/stackflash'>See the code at GitHub.</a>
            </p>
          </div>
        </section>
        <main className='main'>
          <div className='board'>
            <FlashCardContainer>
              {this.state.currentUser
                ? <div>Logged in as {this.state.currentUser.username}</div>
                : <LoginForm setCurrentUser={this.setCurrentUser} />
              }
            </FlashCardContainer>
          </div>
        </main>
      </div>
    )
  }
}

export default App
