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
