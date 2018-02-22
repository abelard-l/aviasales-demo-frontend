import React, { Component } from "react";
import styled from "styled-components";

import baggage from "./icons/baggage.svg";
import baggageRed from "./icons/baggage-no-red.svg";
import handsBaggage from "./icons/hands-baggage.svg";

const BaggageRules = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;

const HandsBag = styled.span`
  display: inline-block;
  background: url(${handsBaggage}) no-repeat center center;
  height: 20px;
  margin-right: 5px;
  padding-top: 11px;
  width: 19px;
`;

const HandsBagBlur = styled.span`
  display: inline-block;
  background: url(${handsBaggage}) no-repeat center center;
  height: 20px;
  margin-right: 5px;
  opacity: 0.4;
  width: 19px;
`;

const Bag = styled.span`
  display: inline-block;
  background: url(${baggage}) no-repeat center center;
  height: 23px;
  padding-top: 13px;
  width: 17px;
`;

const BagRed = styled.span`
  display: inline-block;
  background: url(${baggageRed}) no-repeat center center;
  height: 23px;
  padding-top: 13px;
  width: 17px;
`;

export default props => (
  <BaggageRules>
    {props.rules.hands === "none" ? (
      <HandsBagBlur />
    ) : (
      <HandsBag>{props.rules.hands}</HandsBag>
    )}
    {props.rules.baggage === "red" ? (
      <BagRed />
    ) : props.rules.baggage === "none" ? (
      <Bag>X</Bag>
    ) : (
      <Bag>{props.rules.baggage}</Bag>
    )}
  </BaggageRules>
);
