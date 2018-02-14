import React, { Component } from "react";
import styled from "styled-components";
import First from "./First";
import Second from "./Second";

const Footer = styled.footer`
  padding-bottom: 43px;
  padding-top: 56px;
`;

export default () => (
  <Footer>
    <div className="container">
      <First />
      <Second />
    </div>
  </Footer>
);
