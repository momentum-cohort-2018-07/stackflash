import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import LoginForm from '../src/components/LoginForm'
import StackTitle from '../src/components/StackTitle'
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
