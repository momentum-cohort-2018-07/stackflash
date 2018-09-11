import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import LoginForm from '../src/components/LoginForm'
import StackEditView from '../src/components/StackEditView'
import 'bulma/css/bulma.css'
import '../src/index.css'

storiesOf('LoginForm', module)
  .add('default', () => (
    <LoginForm setCurrentUser={action('setCurrentUser')} />
  ))

storiesOf('StackEditView', module)
  .add('default', () => (
    <StackEditView stack={
      {
        id: 'a',
        title: 'Interview questions',
        cards: [
          {id: 'a', front: 'What is the airspeed of a laden swallow?', back: 'African or European'}
        ]
      }
    } />
  ))
