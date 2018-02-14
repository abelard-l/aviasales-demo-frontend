import React, { Component } from "react";
import styled from "styled-components";
import Top from "./Top";
import Cards from "./Cards";
import BestPrices from "./BestPrices";
import Slider from "./Slider";
import WannaKnow from "./WannaKnow";
import SpecSugg from "./SpecSugg";
import Information from "./Information";
import DownloadMobApp from "./DownloadMobApp";

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
      <WannaKnow />
      <SpecSugg />
      <Information />
      <DownloadMobApp />
    </div>
  </Main>
);
