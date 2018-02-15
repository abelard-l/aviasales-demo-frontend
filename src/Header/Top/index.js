import React, { Component } from "react";
import styled from "styled-components";
import logo from "./logo.png";

const Top = styled.section`
  font-size: 20px;
  line-height: 25px;
  margin-bottom: 200px;
  padding-top: 12px;

  @media (max-width: 991px) {
    margin-bottom: 81px;
  }
`;

const Logotype = styled.div`
  color: white;
`;
const LogoImg = styled.img`
  vertical-align: middle;
  margin-right: 12px;
`;
const Text = styled.span`
  vertical-align: middle;
`;

export default () => (
  <Top>
    <div className="container">
      <Logotype>
        <div className="row middle-xs">
          <div className="col-xs-offset-1">
            <LogoImg src={logo} />
            <Text>aviasales</Text>
          </div>
        </div>
      </Logotype>
    </div>
  </Top>
);
