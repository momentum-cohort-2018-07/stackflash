import request from 'superagent'

let userToken
const apiDomain = process.env.REACT_APP_API_DOMAIN

const data = {
  setUserToken: (token) => {
    userToken = token
  },
  getUserToken: () => {
    return userToken
  },
  login: (username, password) => {
    return request.post(`${apiDomain}/api/login`)
      .send({ username, password })
      .then(res => res.body.token)
      .then(token => {
        if (token) {
          data.setUserToken(token)
          return true
        } else {
          return false
        }
      })
  },
  getStacks: () => {
    return request.get(`${apiDomain}/api/stacks`)
      .set('Authorization', `Bearer ${userToken}`)
      .then(res => res.body.stacks)
  },
  getStack: (id) => {
    return request.get(`${apiDomain}/api/stacks/${id}`)
      .set('Authorization', `Bearer ${userToken}`)
      .then(res => res.body)
  },
  saveStack: (stack) => {
    if (!stack.id) {
      return data.createStack(stack)
    } else {
      return data.updateStack(stack)
    }
  },
  createStack: (stack) => {
    return request.post(`${apiDomain}/api/stacks`)
      .set('Authorization', `Bearer ${userToken}`)
      .send({ title: stack.title })
      .then(res => res.body)
      .then(createdStack => {
        return Object.assign({}, stack, createdStack)
      })
  },
  updateStack: (stack) => {
    return request.put(`${apiDomain}/api/stacks/${stack.id}`)
      .set('Authorization', `Bearer ${userToken}`)
      .send({ title: stack.title })
      .then(res => res.body)
      .then(updatedStack => {
        return Object.assign({}, stack, updatedStack)
      })
  },
  deleteStack: (stackOrId) => {
    let stackId = stackOrId
    if (typeof stackOrId !== 'string') {
      stackId = stackOrId.id
    }
    return request.delete(`${apiDomain}/api/stacks/${stackId}`)
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

export default data
