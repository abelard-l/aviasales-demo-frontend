import React, { Component } from 'react';
import styled from 'styled-components';
import Card from './Card';
import { cardsData } from './data';

const Cards = styled.section`
  padding-bottom: 44px;
`;

export default () => (
  <Cards>
    <div className="container">
      <div className="row">
        <div className="col-xl-5 col-md-10 col-md-offset-1 col-xs-12 col-xs-offset-0">
          <Card cardInfo={cardsData[0]} />
        </div>
        <div className="col-xl-5 col-xl-offset-0 col-md-10 col-md-offset-1 col-xs-12 col-xs-offset-0">
          <Card cardInfo={cardsData[1]} />
        </div>
        <div className="col-xl-5 col-md-10 col-md-offset-1 col-xs-12 col-xs-offset-0">
          <Card cardInfo={cardsData[2]} />
        </div>
        <div className="col-xl-5 col-xl-offset-0 col-md-10 col-md-offset-1 col-xs-12 col-xs-offset-0">
          <Card cardInfo={cardsData[3]} />
        </div>
        <div className="col-xl-5 col-md-10 col-md-offset-1 col-xs-12 col-xs-offset-0">
          <Card cardInfo={cardsData[4]} />
        </div>
        <div className="col-xl-5 col-xl-offset-0 col-md-10 col-md-offset-1 col-xs-12 col-xs-offset-0">
          <Card cardInfo={cardsData[5]} />
        </div>
      </div>
    </div>
  </Cards>
);
