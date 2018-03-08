import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './Main';
import Search from './Search';
import Footer from './Footer';

export default () => (
  <Router>
    <React.Fragment>
      <Route exact path="/" component={Main} />
      <Route path="/search" component={Search} />
      <Footer />
    </React.Fragment>
  </Router>
);
