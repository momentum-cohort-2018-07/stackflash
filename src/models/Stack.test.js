/* globals test, expect */

import Stack from './Stack'
import nock from 'nock'

Stack.setUserToken(process.env.REACT_APP_USER_TOKEN)

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

  Stack.all().then(stacks => {
    expect(stacks).toHaveLength(1)
    expect(stacks[0]).toBeInstanceOf(Stack)
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

  const stack = new Stack({ title: 'New stack' })
  stack.save().then(stack => {
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

  Stack.get('bde').then(stack => {
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

  Stack.get('bde').then(stack => {
    stack.title = 'Updated title'
    stack.save().then(stack => {
      expect(stack.title).toBe('Updated title')
      done()
    })
  })
})

test('can delete a stack', (done) => {
  nock(process.env.REACT_APP_API_DOMAIN)
    .delete('/api/stacks/bde')
    .reply(200, {
      numDeleted: 1
    })

  const stack = new Stack({ id: 'bde', title: 'Test stack' })
  stack.delete().then(deleted => {
    expect(deleted).toBe(true)
    done()
  })
})
