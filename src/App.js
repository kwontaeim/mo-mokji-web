import React, { useEffect, useState } from 'react';
import { Route, Link, BrowserRouter as Router, Switch} from 'react-router-dom'

import NotFound from './components/NotFound'
import Mo_mokji from './components/Mo-mokji'
import Users from './components/Users'
import Contact from './components/Contact'

const App = () => {
  return (
  <Router>
    <div>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/users">Users</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
    <Switch>
      <Route exact path="/" component={Mo_mokji} />
      <Route path="/users" component={Users} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
    </div>
  </Router>
  );
}

export default App;
