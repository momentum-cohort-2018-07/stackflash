import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import LoginForm from '../src/components/LoginForm'
import StackTitle from '../src/components/StackTitle'
import StackPage from '../src/components/StackPage'

import 'bulma/css/bulma.css'
import '../src/index.css'

storiesOf('LoginForm', module)
  .add('default', () => (
    <LoginForm setCurrentUser={action('setCurrentUser')} />
  ))

storiesOf('StackTitle', module)
  .add('default', () => (
    <StackTitle title='title'
      onClick={action('clicked')}>Edit</StackTitle>
  ))

storiesOf('StackPage', module)
  .add('default', () => (
    <StackPage stack={
      {
        id: 'a',
        title: 'Title of Flashcard Stack',
        cards: [
          { id: 'a', front: 'What is the airspeed of a laden swallow?', back: 'African or European' },
          { id: 'b', front: 'What is React Storybook used for?', back: 'ssss' },
          { id: 'c', front: 'What is React Storybook used for but a longer version?', back: 'ssss' },
          { id: 'd', front: 'What is React Storybook used for (one more, with feeling)?', back: 'ssss' }
        ]
      }
    } />
  ))
