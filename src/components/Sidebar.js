import React from 'react'
import PropTypes from 'prop-types'
import { Title, Button } from 'bloomer'
import { Link } from 'react-router-dom'

const Sidebar = (props) =>
  <section className='sidebar'>
    <Title><Link to='/'>StackFlash</Link></Title>
    {props.currentUser &&
      <div>
        <p>Hello, {props.currentUser.username}!</p>
        <Button onClick={props.onLogout}>Sign Out</Button>
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

Sidebar.propTypes = {
  currentUser: PropTypes.shape({
    username: PropTypes.string.isRequired,
    token: PropTypes.string.isRequired
  }),
  onLogout: PropTypes.func
}

export default Sidebar
