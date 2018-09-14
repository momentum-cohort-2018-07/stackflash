import React from 'react'
import StackPage from './StackPage'

class DeleteStack extends React.Component {
  constructor () {
    super()
    this.state = {
      deleteStack: false,
      confirmMsg: null
    }
    this.handleClick = this.handlesusbmit.bind(this)
  }

  handleClick (event) {
    this.setState(state => ({deleteStack: true}))
  }

  render () {
    const stack = this.props.stack
    return (
      <StackPage>
        <button className='delete-stack' onClick={(event) => this.setState({deleteStack: event.target})} />
      </StackPage>
    )
  }
}

export default DeleteStack
