import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Home } from './Home.jsx'
import { About } from './About.jsx'

export const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </div>
  </Router>
)
