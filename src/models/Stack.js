import request from 'superagent'

let userToken
const apiDomain = process.env.REACT_APP_API_DOMAIN

const Stack = {
  setUserToken: (token) => {
    userToken = token
  },
  all: () => {
    return request.get(`${apiDomain}/api/stacks`)
      .set('Authorization', `Bearer ${userToken}`)
      .then(res => res.body.stacks)
  },
  get: (id) => {
    return request.get(`${apiDomain}/api/stacks/${id}`)
      .set('Authorization', `Bearer ${userToken}`)
      .then(res => res.body)
  },
  save: (stack) => {
    if (!stack.id) {
      return Stack.create(stack)
    } else {
      return Stack.update(stack)
    }
  },
  create: (stack) => {
    return request.post(`${apiDomain}/api/stacks`)
      .set('Authorization', `Bearer ${userToken}`)
      .send({ title: stack.title })
      .then(res => res.body)
      .then(createdStack => {
        return Object.assign({}, stack, createdStack)
      })
  },
  update: (stack) => {
    return request.put(`${apiDomain}/api/stacks/${stack.id}`)
      .set('Authorization', `Bearer ${userToken}`)
      .send({ title: stack.title })
      .then(res => res.body)
      .then(updatedStack => {
        return Object.assign({}, stack, updatedStack)
      })
  },
  delete: (stackOrId) => {
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

export default Stack
