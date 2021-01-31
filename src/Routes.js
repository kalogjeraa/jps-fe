import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/common/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Certifications from './components/pages/Certifications';
import Fulfillment from './components/pages/Fulfillment';
import PrivateLabeling from './components/pages/PrivateLabeling';
import Quote from './components/pages/Quote';
import TelephoneDial from './components/pages/TelephoneDial';

const Routes = () => {
  return (
    <>
      <Navbar />
      <Router>
        <Switch>
          <Route to="/" exact component={Home} />
          <Route to="/about" exact component={About} />
          <Route to="/certifications" exact component={Certifications} />
          <Route to="/fulfillment" exact component={Fulfillment} />
          <Route to="/private-labeling" exact component={PrivateLabeling} />
          <Route to="/quote" exact component={Quote} />
          <Route to="/telephone-dial" exact component={TelephoneDial} />
        </Switch>
      </Router>
    </>
  )
};

export default Routes;