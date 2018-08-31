import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Menu } from './Menu.jsx'
import { Home } from './Home.jsx'
import { About } from './About.jsx'

export const App = () => (
  <Router>
    <div>
  <Menu />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </div>
  </Router>
)
