import React, { Component } from "react";
import styled from "styled-components";
import LinksToInformation from "./LinksToInformation";
import SocialAndStores from "./SocialAndStores";

const Footer = styled.footer`
  padding-bottom: 43px;
  padding-top: 56px;
`;

export default () => (
  <Footer>
    <div className="container">
      <LinksToInformation />
      <SocialAndStores />
    </div>
  </Footer>
);
