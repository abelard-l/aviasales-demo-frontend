import React, { Component } from "react";
import styled from "styled-components";
import aeroflot from "./aeroflot.png";
import airlines from "./airlines.png";
import onetwortip from "./onetwortip.png";
import koreanair from "./korean-air.png";
import elal from "./elal.png";
import arrow from "./arrow.svg";

const PricelessTickets = styled.section`
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
  position: relative;
`;

const AgenciesDepiction = styled.div`
  text-align: center;
`;

const Agency = styled.img`
  margin-bottom: 15px;
  margin-left: 45px;

  @media (min-width: 1200px) {
    margin-left: 25px;
  }
`;

const RightArrow = styled.button`
  background: none;
  background-image: url(${arrow});
  background-position: center;
  border: none;
  height: 32px;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 18px;
`;

const LeftArrow = styled.button`
  background: none;
  background-image: url(${arrow});
  background-position: center;
  border: none;
  height: 32px;
  left: 0;
  position: absolute;
  top: 50%;
  transform: rotate(180deg) translateY(50%);
  width: 18px;
`;

const Circle = styled.button`
  background-color: transparent;
  border: 1px solid #818181;
  border-radius: 50%;
  height: 10px;
  margin-left: 4px;
  margin-right: 4px;
  padding: 0;
  width: 10px;
`;

const CircleFull = styled.button`
  background-color: #818181;
  border: 1px solid #818181;
  border-radius: 50%;
  height: 10px;
  margin-left: 4px;
  margin-right: 4px;
  padding: 0;
  width: 10px;
`;

const Pagination = styled.div`
  margin-top: 24px;
  text-align: center;
`;

export default () => (
  <PricelessTickets>
    <div className="container">
      <Title>Дешевые авиабилеты от крупнейших авиакомпаний и агентств</Title>
      <Agencies>
        <LeftArrow />
        <RightArrow />
        <AgenciesDepiction>
          <Agency src={aeroflot} />
          <Agency src={airlines} />
          <Agency src={onetwortip} />
          <Agency src={koreanair} />
          <Agency src={elal} />
        </AgenciesDepiction>
      </Agencies>
      <Pagination>
        <CircleFull />
        <Circle />
        <Circle />
      </Pagination>
    </div>
  </PricelessTickets>
);
