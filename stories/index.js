import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import LoginForm from '../src/components/LoginForm'

import 'bulma/css/bulma.css'
import '../src/index.css'

storiesOf('LoginForm', module)
  .add('default', () => (
    <LoginForm setCurrentUser={action('setCurrentUser')} />
  ))
