import request from 'superagent'

let userToken
const apiDomain = process.env.REACT_APP_API_DOMAIN

class Stack {
  constructor (properties) {
    this.id = properties.id
    this.title = properties.title
  }

  static setUserToken (token) {
    userToken = token
  }

  static all () {
    return request.get(`${apiDomain}/api/stacks`)
      .set('Authorization', `Bearer ${userToken}`)
      .then(res => res.body.stacks)
      .then(stacksInfo => stacksInfo.map(s => new Stack(s)))
  }

  static get (id) {
    return request.get(`${apiDomain}/api/stacks/${id}`)
      .set('Authorization', `Bearer ${userToken}`)
      .then(res => new Stack(res.body))
  }

  save () {
    if (!this.id) {
      return this.create()
    } else {
      return this.update()
    }
  }

  create () {
    return request.post(`${apiDomain}/api/stacks`)
      .set('Authorization', `Bearer ${userToken}`)
      .send({ title: this.title })
      .then(res => res.body)
      .then(stackInfo => {
        Object.assign(this, stackInfo)
        return this
      })
  }

  update () {
    return request.put(`${apiDomain}/api/stacks/${this.id}`)
      .set('Authorization', `Bearer ${userToken}`)
      .send({ title: this.title })
      .then(res => res.body)
      .then(stackInfo => {
        Object.assign(this, stackInfo)
        return this
      })
  }

  delete () {
    if (!this.id) { return false }
    return request.delete(`${apiDomain}/api/stacks/${this.id}`)
      .set('Authorization', `Bearer ${userToken}`)
      .then(res => {
        if (res.body.numDeleted > 0) {
          return true
        } else {
          return false
        }
      })
  }
}

export default Stack
