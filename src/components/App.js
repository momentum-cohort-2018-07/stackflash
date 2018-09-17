import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom'

import Sidebar from './Sidebar'
import data from '../data'
import RegistrationForm from './RegistrationForm'
import LoginForm from './LoginForm'
import StacksPageContainer from './StacksPageContainer'
import StackPageContainer from './StackPageContainer'
import AddCard from './AddCard'
import EditCardContainer from './EditCardContainer'

class App extends Component {
  constructor () {
    super()
    this.state = {
      currentUser: null
    }

    const username = window.localStorage.getItem('username')
    const token = window.localStorage.getItem('token')
    if (username && token) {
      this.state.currentUser = { username, token }
      data.setUserToken(token)
    }

    this.setCurrentUser = this.setCurrentUser.bind(this)
    this.logout = this.logout.bind(this)
  }

  setCurrentUser (user) {
    window.localStorage.setItem('username', user.username)
    window.localStorage.setItem('token', user.token)
    this.setState({ currentUser: user })
  }

  logout () {
    data.setUserToken(null)
    window.localStorage.clear()
    this.setState({
      currentUser: null
    })
  }

  render () {
    const { currentUser } = this.state
    return (
      <Router>
        <div className='App'>
          <Sidebar currentUser={currentUser} onLogout={this.logout} />
          <main className='main'>
            <div className='board'>

              <Route exact path='/' render={() =>
                <Guard condition={this.state.currentUser} redirectTo='/login'>
                  <StacksPageContainer currentUser={this.state.currentUser} />
                </Guard>} />

              <Route exact path='/stacks/:id' render={({ match }) =>
                <Guard condition={this.state.currentUser} redirectTo='/login'>
                  <StackPageContainer id={match.params.id} />
                </Guard>
              } />

              <Route path='/stacks/:id/addCard' render={({ match }) =>
                <Guard condition={this.state.currentUser} redirectTo='/login'>
                  <AddCard stackId={match.params.id} />
                </Guard>
              } />

              <Route path='/cards/:id' render={({ match }) =>
                <Guard condition={this.state.currentUser} redirectTo='/login'>
                  <EditCardContainer id={match.params.id} />
                </Guard>
              } />

              <Route path='/register' render={() =>
                <Guard condition={!this.state.currentUser} redirectTo='/'>
                  <RegistrationForm setCurrentUser={this.setCurrentUser} />
                </Guard>}
              />
              <Route path='/login' render={() =>
                <Guard condition={!this.state.currentUser} redirectTo='/'>
                  <LoginForm setCurrentUser={this.setCurrentUser} />
                </Guard>}
              />
            </div>
          </main>
        </div>
      </Router>
    )
  }
}

const Guard = ({ redirectTo, condition, children }) => {
  if (condition) {
    return children
  } else {
    return <Redirect to={redirectTo} />
  }
}

export default App
