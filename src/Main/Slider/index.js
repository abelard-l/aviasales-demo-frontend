import React, { Component } from "react";
import styled from "styled-components";
import aeroflot from "./aeroflot.png";
import airlines from "./airlines.png";
import onetwortip from "./onetwortip.png";
import koreanair from "./korean-air.png";
import elal from "./elal.png";

const Slider = styled.section`
  display: none;
  padding-bottom: 28px;

  @media (min-width: 768px) {
    display: block;
  }
`;

const Title = styled.h2`
  color: #5c5c5c;
  font-size: 32px;
  line-height: 40px;
  text-align: center;
`;

const Agencies = styled.div`
  text-align: center;
`;

const Agency = styled.img`
  margin-bottom: 15px;
  margin-left: 25px;
`;

export default () => (
  <Slider>
    <Title>Дешевые авиабилеты от крупнейших авиакомпаний и агентств</Title>
    <Agencies>
      <Agency src={aeroflot} />
      <Agency src={airlines} />
      <Agency src={onetwortip} />
      <Agency src={koreanair} />
      <Agency src={elal} />
    </Agencies>
  </Slider>
);
