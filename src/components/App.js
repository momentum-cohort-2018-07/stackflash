import React, { Component } from 'react'
import { Router, route } from 'buttermilk'

import Sidebar from './Sidebar'
import data from '../data'
import RegistrationForm from './RegistrationForm'
import LoginForm from './LoginForm'
import StacksPage from './StacksPageContainer'
import StackPageContainer from './StackPageContainer'

class App extends Component {
  constructor () {
    super()
    this.state = {
      currentUser: null
    }

    this.setCurrentUser = this.setCurrentUser.bind(this)
    this.logout = this.logout.bind(this)
  }

  componentDidMount () {
    const username = window.localStorage.getItem('username')
    const token = window.localStorage.getItem('token')
    if (username && token) {
      this.setState({
        currentUser: { username, token }
      })
    } else {
      route('/login')
    }
  }

  setCurrentUser (user) {
    window.localStorage.setItem('username', user.username)
    window.localStorage.setItem('token', user.token)
    this.setState({ currentUser: user }, () => {
      route('/')
    })
  }

  logout () {
    data.setUserToken(null)
    window.localStorage.clear()
    this.setState({
      currentUser: null
    }, () => route('/login'))
  }

  render () {
    const { currentUser } = this.state
    return (
      <div className='App'>
        <Sidebar currentUser={currentUser} onLogout={this.logout} />
        <main className='main'>
          <div className='board'>
            <Router
              routes={[
                {
                  path: '/register',
                  render: () => <RegistrationForm setCurrentUser={this.setCurrentUser} />
                },
                {
                  path: '/login',
                  render: () => <LoginForm setCurrentUser={this.setCurrentUser} />
                },
                {
                  path: '/stacks/:id',
                  render: (routing) => <StackPageContainer id={routing.params.id} />
                },
                {
                  path: '*',
                  render: () => (
                    <StacksPage currentUser={this.state.currentUser} />
                  )
                }
              ]} />
          </div>
        </main>
      </div>

    )
  }
}

export default App
