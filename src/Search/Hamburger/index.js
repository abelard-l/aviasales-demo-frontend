import React, { Component } from "react";
import styled from "styled-components";
import hamburger from "./hamburger.svg";

const HamburgerWrap = styled.section`
  display: none;
  padding: 16px 0px;

  @media (min-width: 768px) {
    display: block;
  }

  @media (min-width: 1200px) {
    display: none;
  }
`;

const Hamburger = styled.button`
  background: url(${hamburger}) no-repeat center center #23a9f6;
  border: none;
  border-radius: 10px;
  display: block;
  margin: 0 auto;
  padding: 17px 24px;
`;

export default () => (
  <HamburgerWrap>
    <Hamburger />
  </HamburgerWrap>
);
