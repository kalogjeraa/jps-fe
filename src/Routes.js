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
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact render={() => <Home />} />
          <Route path="/about" exact render={()=> <About />} />
          <Route path="/certifications" exact render={() => <Certifications />} />
          <Route path="/fulfillment" exact render={() => <Fulfillment />} />
          <Route path="/private-labeling" exact render={() => <PrivateLabeling/>} />
          <Route path="/quote" exact render={() => <Quote />} />
          <Route path="/telephone-dial" exact render={() => <TelephoneDial />} />
        </Switch>
      </Router>
    </>
  )
};

export default Routes;