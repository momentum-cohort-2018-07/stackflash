import request from 'superagent'

let userToken

class Stack {
  constructor (properties) {
    this.id = properties.id
    this.title = properties.title
  }

  static setUserToken (token) {
    userToken = token
  }

  static all () {
    return request.get(`${process.env.REACT_APP_API_DOMAIN}/api/stacks`)
      .set('Authorization', `Bearer ${userToken}`)
      .then(res => res.body.stacks)
      .then(stacksInfo => stacksInfo.map(s => new Stack(s)))
  }
}

export default Stack
