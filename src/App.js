import React, { Component } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./Main";
import Search from "./Search";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Route exact path="/" component={Main} />
          <Route path="/search" component={Search} />
          <Footer />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
