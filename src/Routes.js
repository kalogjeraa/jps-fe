import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/pages/Home';

const Routes = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route to="/" exact component={Home} />
        </Switch>
      </Router>
    </>
  )
};

export default Routes;