import React, { Component } from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import Hamburger from "./Hamburger";
import ToTop from "./ToTop";
import Cards from "./Cards";

const Search = styled.main`
  background-color: #eaeaea;
`;

export default () => (
  <Search>
    <div className="container">
      <Helmet>
        <title>Search</title>
      </Helmet>
      <ToTop />
      <Hamburger />
      <div className="row">
        <div className="col-xl-3 hidden-lg hidden-md hidden-sm hidden-xs">
          Левый блок с аккордеонами
        </div>
        <div className="col-xl-7">
          <Cards />
        </div>
      </div>
    </div>
  </Search>
);
