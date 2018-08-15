import React from 'react'
import { render } from 'react-dom'

import { App } from './components/App.jsx'

window.React = React

render(
  <App />, document.getElementById('app')
)
