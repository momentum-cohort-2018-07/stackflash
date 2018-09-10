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
