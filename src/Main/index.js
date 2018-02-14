import React, { Component } from "react";
import styled from "styled-components";
import Top from "./Top";
import Cards from "./Cards";
import BestPrices from "./BestPrices";
import Slider from "./Slider";

const Main = styled.main`
  padding-top: 56px;
`;

export default () => (
  <Main>
    <div className="container">
      <Top />
      <Cards />
      <BestPrices />
      <Slider />
    </div>
  </Main>
);
