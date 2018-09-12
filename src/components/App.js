import React, { Component } from 'react'
import LoginForm from './LoginForm'
import { Title } from 'bloomer'
import FlashCardContainer from './FlashCardContainer'
import data from '../data'
import StacksView from './StacksView'

class App extends Component {
  constructor () {
    super()
    this.state = {
      currentUser: null,
      stacks: []
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
      data.getStacks().then(stacks => this.setState({
        stacks
      }))
    }
  }

  setCurrentUser (user) {
    window.localStorage.setItem('username', user.username)
    window.localStorage.setItem('token', user.token)
    this.setState({ currentUser: user })
  }

  render () {
    return (
      <div className='App'>
        <section className='sidebar'>
          <Title>StackFlash</Title>
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
                ? <div>
                  {this.state.stacks.map((stack) => <StacksView key={stack.id} stack={stack} />)}
                  <div className='stackContainer'>
                    <div className='addStack'>+</div>
                    <div className='numberOfCards'><p>Add a New Deck</p></div>
                  </div>
                </div>
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
