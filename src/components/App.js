import React, { Component } from 'react'
import { Router, route } from 'buttermilk'

import data from '../data'
import RegistrationForm from './RegistrationForm'
import AppShell from './AppShell'
import LoginForm from './LoginForm'
import AllStacksContainer from './AllStacksContainer'

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
      console.log('username and token found')
      this.setState({
        currentUser: { username, token }
      }, () => console.log(this.state))
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
    })
  }

  render () {
    return (
      <Router
        outerComponent={AppShell}
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
            path: '*',
            render: () => (
              <AllStacksContainer currentUser={this.state.currentUser} />
            )
          }
        ]} />
    )
  }
}

export default App
