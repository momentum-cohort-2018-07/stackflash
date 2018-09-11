/* globals test, expect */

import data from './data'
import nock from 'nock'

data.setUserToken(process.env.REACT_APP_USER_TOKEN)

test('can login', (done) => {
  nock(process.env.REACT_APP_API_DOMAIN)
    .post('/api/login', { username: 'user', password: 'pass' })
    .reply(200, {
      token: 'abc'
    })

  data.login('user', 'pass').then(success => {
    expect(success).toEqual({ 'token': 'abc', 'username': 'user' })
    expect(data.getUserToken()).toBe('abc')
    done()
  })
})

test('can register', (done) => {
  nock(process.env.REACT_APP_API_DOMAIN)
    .post('/api/register', { username: 'user', password: 'pass' })
    .reply(200, {
      username: 'user',
      token: 'abc'
    })

  data.register('user', 'pass').then(success => {
    expect(success).toEqual({ 'token': 'abc', 'username': 'user' })
    expect(data.getUserToken()).toBe('abc')
    done()
  })
})

test('can retrieve list of stacks', (done) => {
  nock(process.env.REACT_APP_API_DOMAIN)
    .get('/api/stacks')
    .reply(200, {
      stacks: [
        {
          id: 'abc',
          title: 'Interview questions'
        }
      ]
    })

  data.getStacks().then(stacks => {
    expect(stacks).toHaveLength(1)
    expect(stacks[0].title).toBe('Interview questions')
    done()
  })
})

test('can create a stack', (done) => {
  nock(process.env.REACT_APP_API_DOMAIN)
    .post('/api/stacks', { title: 'New stack' })
    .reply(201, {
      id: 'bde',
      title: 'New stack'
    })

  const stack = { title: 'New stack' }
  data.saveStack(stack).then(stack => {
    expect(stack.id).toBe('bde')
    done()
  })
})

test('can get a stack', (done) => {
  nock(process.env.REACT_APP_API_DOMAIN)
    .get('/api/stacks/bde')
    .reply(200, {
      id: 'bde',
      title: 'Test stack'
    })

  data.getStack('bde').then(stack => {
    expect(stack.id).toBe('bde')
    expect(stack.title).toBe('Test stack')
    done()
  })
})

test('can update a stack', (done) => {
  nock(process.env.REACT_APP_API_DOMAIN)
    .get('/api/stacks/bde')
    .reply(200, {
      id: 'bde',
      title: 'Test stack'
    })

  nock(process.env.REACT_APP_API_DOMAIN)
    .put('/api/stacks/bde', { title: 'Updated title' })
    .reply(200, {
      id: 'bde',
      title: 'Updated title'
    })

  data.getStack('bde')
    .then(stack => {
      stack.title = 'Updated title'
      return data.saveStack(stack)
    })
    .then(stack => {
      expect(stack.title).toBe('Updated title')
      done()
    })
})

test('can delete a stack', (done) => {
  nock(process.env.REACT_APP_API_DOMAIN)
    .delete('/api/stacks/bde')
    .reply(200, {
      numDeleted: 1
    })

  const stack = { id: 'bde', title: 'Test stack' }
  data.deleteStack(stack).then(deleted => {
    expect(deleted).toBe(true)
    done()
  })
})
