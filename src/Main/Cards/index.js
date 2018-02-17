import React, { Component } from "react";
import styled from "styled-components";
import { BlueLink } from "../../commonComponents";
import card1 from "./card-1.png";
import card2 from "./card-2.png";
import card3 from "./card-3.png";
import card4 from "./card-4.png";
import card5 from "./card-5.png";
import card6 from "./card-6.png";
import rusflag from "../../res/images/flag-russia.png";
import spaflag from "../../res/images/flag-spain.png";

const Cards = styled.section`
  padding-bottom: 44px;
`;

const Card = styled.img`
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  width: 100%;
`;

const WrapCard = styled.div`
  border-radius: 4px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  margin-bottom: 31px;
  padding: 24px 10px;
`;

const WrapFlag = styled.div`
  display: none;
  flex-basis: 30px;

  @media (min-width: 768px) {
    display: block;
  }
`;

const Flag = styled.img``;

const CityAndCountry = styled.div`
  flex-basis: 55%;
`;

const PriceAndDate = styled.div`
  flex-basis: 45%;
`;

const City = styled.div`
  color: #5b5b5c;
  font-size: 16px;
  font-weight: bold;
  line-height: 32px;

  @media (min-width: 768px) {
    font-size: 20px;
  }
`;

const Country = styled.div`
  color: #a0b0b9;
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
  text-transform: uppercase;
`;

const Price = styled.div`
  color: #00bae8;
  font-size: 14px;
  line-height: 32px;
  text-align: right;

  @media (min-width: 768px) {
    font-size: 20px;
  }
`;
const Date = styled.div`
  color: #aabec6;
  line-height: 20px;
  font-size: 12px;
  font-weight: 500;
  text-align: right;
`;

export default () => (
  <Cards>
    <div className="container">
      <div className="row">
        <div className="col-xl-5 col-md-10 col-md-offset-1 col-xs-12 col-xs-offset-0">
          <Card src={card1} />
          <WrapCard>
            <WrapFlag>
              <Flag src={rusflag} />
            </WrapFlag>
            <CityAndCountry>
              <City>Краснодар</City>
              <Country>Россия</Country>
            </CityAndCountry>
            <PriceAndDate>
              <Price>
                <BlueLink>Найти от 1212 &#x584;</BlueLink>
              </Price>
              <Date>18 марта</Date>
            </PriceAndDate>
          </WrapCard>
        </div>
        <div className="col-xl-5 col-xl-offset-0 col-md-10 col-md-offset-1 col-xs-12 col-xs-offset-0">
          <Card src={card2} />
          <WrapCard>
            <WrapFlag>
              <Flag src={rusflag} />
            </WrapFlag>
            <CityAndCountry>
              <City>Сочи (Адлер)</City>
              <Country>Россия</Country>
            </CityAndCountry>
            <PriceAndDate>
              <Price>
                <BlueLink>Найти от 1 334 &#x584;</BlueLink>
              </Price>
              <Date>27 марта</Date>
            </PriceAndDate>
          </WrapCard>
        </div>
        <div className="col-xl-5 col-md-10 col-md-offset-1 col-xs-12 col-xs-offset-0">
          <Card src={card3} />
          <WrapCard>
            <WrapFlag>
              <Flag src={rusflag} />
            </WrapFlag>
            <CityAndCountry>
              <City>Санкт-Петербург</City>
              <Country>Россия</Country>
            </CityAndCountry>
            <PriceAndDate>
              <Price>
                <BlueLink>Найти от 1 508 &#x584;</BlueLink>
              </Price>
              <Date>19 февраля</Date>
            </PriceAndDate>
          </WrapCard>
        </div>
        <div className="col-xl-5 col-xl-offset-0 col-md-10 col-md-offset-1 col-xs-12 col-xs-offset-0">
          <Card src={card4} />
          <WrapCard>
            <WrapFlag>
              <Flag src={rusflag} />
            </WrapFlag>
            <CityAndCountry>
              <City>Минеральные Воды</City>
              <Country>Россия</Country>
            </CityAndCountry>
            <PriceAndDate>
              <Price>
                <BlueLink>Найти от 2 074 &#x584;</BlueLink>
              </Price>
              <Date>13 марта</Date>
            </PriceAndDate>
          </WrapCard>
        </div>
        <div className="col-xl-5 col-md-10 col-md-offset-1 col-xs-12 col-xs-offset-0">
          <Card src={card5} />
          <WrapCard>
            <WrapFlag>
              <Flag src={rusflag} />
            </WrapFlag>
            <CityAndCountry>
              <City>Симферополь (Крым)</City>
              <Country>Россия</Country>
            </CityAndCountry>
            <PriceAndDate>
              <Price>
                <BlueLink>Найти от 2 407 &#x584;</BlueLink>
              </Price>
              <Date>13 марта</Date>
            </PriceAndDate>
          </WrapCard>
        </div>
        <div className="col-xl-5 col-xl-offset-0 col-md-10 col-md-offset-1 col-xs-12 col-xs-offset-0">
          <Card src={card6} />
          <WrapCard>
            <WrapFlag>
              <Flag src={spaflag} />
            </WrapFlag>
            <CityAndCountry>
              <City>Барселона</City>
              <Country>ИСПАНИЯ</Country>
            </CityAndCountry>
            <PriceAndDate>
              <Price>
                <BlueLink>Найти от 4 247 &#x584;</BlueLink>
              </Price>
              <Date>24 марта</Date>
            </PriceAndDate>
          </WrapCard>
        </div>
      </div>
    </div>
  </Cards>
);
