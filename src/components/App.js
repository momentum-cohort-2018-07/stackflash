import React, { Component } from 'react'
import LoginForm from './LoginForm'
import { Title } from 'bloomer'
import FlashCardContainer from './FlashCardContainer'

class App extends Component {
  constructor () {
    super()
    this.state = {
      currentUser: null
    }

    this.setCurrentUser = this.setCurrentUser.bind(this)
  }

  setCurrentUser (username) {
    this.setState({ currentUser: username })
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
                ? <div>Logged in as {this.state.currentUser}</div>
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
