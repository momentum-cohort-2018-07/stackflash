import React, { Component } from 'react'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <section className='sidebar'>
          <h1>StackFlash</h1>
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
          <div className='board'>&nbsp;</div>
        </main>
      </div>
    )
  }
}

export default App
