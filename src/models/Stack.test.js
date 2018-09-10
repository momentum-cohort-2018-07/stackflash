/* globals test, expect */

import Stack from './Stack'

Stack.setUserToken(process.env.REACT_APP_USER_TOKEN)

test('can retrieve list of stacks', (done) => {
  Stack.all().then(stacks => {
    expect(stacks).not.toBeUndefined()
    expect(stacks[0]).toBeInstanceOf(Stack)
    done()
  })
})
