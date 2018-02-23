import React, { Component } from "react";
import styled from "styled-components";

const ToTop = styled.div`
  padding-top: 10px;
  @media (min-width: 768px) {
    display: none;
  }
`;

const Button = styled.button`
  background: #00ace2;
  border: 0;
  display: block;
  mix-blend-mode: normal;
  opacity: 0.5;
  padding: 6px 16px;
  border-radius: 100px;
  font-weight: 900;
  line-height: normal;
  margin: 0px auto 16px auto;
  font-size: 14px;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;
`;

export default () => (
  <ToTop>
    <Button>Наверх</Button>
  </ToTop>
);
