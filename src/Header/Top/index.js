import React, { Component } from "react";
import styled from "styled-components";
import logo from "./logo.svg";

const Top = styled.section`
  font-size: 20px;
  line-height: 25px;
  margin-bottom: 47px;
  padding-top: 12px;

  @media (min-width: 768px) {
    margin-bottom: 81px;
  }

  @media (min-width: 1200px) {
    margin-bottom: 200px;
  }
`;

const LogoWrap = styled.div`
  color: white;
`;
const Logo = styled.img`
  vertical-align: middle;
  margin-right: 12px;
`;
const SiteName = styled.span`
  vertical-align: middle;
`;

export default () => (
  <Top>
    <div className="container">
      <LogoWrap>
        <div className="row middle-xs">
          <div className="col-xs-offset-1">
            <Logo src={logo} />
            <SiteName>aviasales</SiteName>
          </div>
        </div>
      </LogoWrap>
    </div>
  </Top>
);
