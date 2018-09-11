import request from 'superagent'

let userToken
const apiDomain = process.env.REACT_APP_API_DOMAIN

function stackParams (stack) {
  return { title: stack.title }
}

function cardParams (card) {
  return {
    front: card.front,
    back: card.back
  }
}

function getId (objOrId) {
  if (objOrId.id) {
    return objOrId.id
  } else if (typeof objOrId === 'string') {
    return objOrId
  } else {
    return null
  }
}

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
        data.setUserToken(token)
        return { username, token }
      })
      .catch(err => {
        if (err.response.statusCode === 422) {
          throw new Error('You must provide a username and password.')
        } else if (err.response.statusCode === 401) {
          throw new Error('There is no user with that username and password.')
        } else {
          throw new Error('There was a problem communicating with the server.')
        }
      })
  },
  register: (username, password) => {
    return request.post(`${apiDomain}/api/register`)
      .send({ username, password })
      .then(res => res.body)
      .then(user => {
        data.setUserToken(user.token)
        return user
      })
      .catch(err => {
        if (err.response.statusCode === 422) {
          const errors = err.response.body.errors
          if (errors[0].msg === 'cannot be empty') {
            throw new Error('You must provide a username and password.')
          } else if (errors[0] === 'user already exists') {
            throw new Error('A user with that username already exists.')
          } else {
            throw new Error(`An unknown problem occurred: ${errors}`)
          }
        } else {
          throw new Error('There was a problem communicating with the server.')
        }
      })
      .catch(err => {
        if (err.reponse.statusCode === 503) {
          throw new Error('There was a problem communicating with the server.')
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
      .send(stackParams(stack))
      .then(res => res.body)
      .then(createdStack => {
        return Object.assign({}, stack, createdStack)
      })
  },
  updateStack: (stack) => {
    return request.put(`${apiDomain}/api/stacks/${stack.id}`)
      .set('Authorization', `Bearer ${userToken}`)
      .send(stackParams(stack))
      .then(res => res.body)
      .then(updatedStack => {
        return Object.assign({}, stack, updatedStack)
      })
  },
  deleteStack: (stackOrId) => {
    let stackId = getId(stackOrId)
    return request.delete(`${apiDomain}/api/stacks/${stackId}`)
      .set('Authorization', `Bearer ${userToken}`)
      .then(res => {
        if (res.body.numDeleted > 0) {
          return true
        } else {
          return false
        }
      })
  },
  createCard (stackOrId, card) {
    let stackId = getId(stackOrId)
    return request.post(`${apiDomain}/api/stacks/${stackId}/cards`)
      .set('Authorization', `Bearer ${userToken}`)
      .send(cardParams(card))
      .then(res => res.body)
      .then(createdCard => {
        return Object.assign({}, card, createdCard)
      })
  },
  updateCard (card) {
    return request.put(`${apiDomain}/api/cards/${card.id}`)
      .set('Authorization', `Bearer ${userToken}`)
      .send(cardParams(card))
      .then(res => res.body)
      .then(updatedCard => {
        return Object.assign({}, card, updatedCard)
      })
  }
}

export default data
