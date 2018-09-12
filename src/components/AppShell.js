import React from 'react'
import { Title } from 'bloomer'

class AppShell extends React.Component {
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
            {this.props.children}
          </div>
        </main>
      </div>
    )
  }
}

export default AppShell
