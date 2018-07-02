import React, { Component } from 'react';
import styled from 'styled-components';

export const BlueLink = styled.a`
  color: #00ace2;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: #5c5c5c;
    text-decoration: underline;
  }
`;

export const GrayLink = styled.a`
  color: #5b5b5c;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const HeaderCenter = styled.h2`
  color: #4a4a4a;
  font-size: 24px;
  font-weight: 500;
  line-height: 36px;
  margin-bottom: 56px;
  margin-top: 20px;
  text-align: center;
`;

export const RoubleStyle = styled.span`
  font-family: Rouble;
`;

export class Rouble extends Component {
  render() {
    return <RoubleStyle>p</RoubleStyle>;
  }
}
