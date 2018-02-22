import React, { Component } from "react";
import styled from "styled-components";
import { BrowserRouter as Browser, Route } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
import Search from "./Search";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <Browser>
        <React.Fragment>
          <Header />
          <Route exact path="/" component={Main} />
          <Route path="/search" component={Search} />
          <Footer />
        </React.Fragment>
      </Browser>
    );
  }
}

export default App;
