import React, { Component } from "react";
import styled from "styled-components";
import {
  BlueLink,
  CommonFlag,
  CommonCity,
  CommonCountry
} from "../../commonComponents";
import card1 from "./card-1.png";
import card2 from "./card-2.png";
import card3 from "./card-3.png";
import card4 from "./card-4.png";
import card5 from "./card-5.png";
import card6 from "./card-6.png";
import rusFlag from "../../res/images/flag-russia.png";
import spaFlag from "../../res/images/flag-spain.png";

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
  flex-basis: 30px;
`;
const LeftSide = styled.div`
  flex-basis: 55%;
`;
const RightSide = styled.div`
  flex-basis: 45%;
`;

const Flag = CommonFlag;

const City = CommonCity;
const Country = CommonCountry;

const Price = styled.div`
  color: #00bae8;
  font-size: 20px;
  line-height: 32px;
  text-align: right;
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
              <Flag src={rusFlag} />
            </WrapFlag>
            <LeftSide>
              <City>Краснодар</City>
              <Country>Россия</Country>
            </LeftSide>
            <RightSide>
              <Price>
                <BlueLink>Найти от 1212 &#x584;</BlueLink>
              </Price>
              <Date>18 марта</Date>
            </RightSide>
          </WrapCard>
        </div>
        <div className="col-xl-5 col-xl-offset-0 col-md-10 col-md-offset-1 col-xs-12 col-xs-offset-0">
          <Card src={card2} />
          <WrapCard>
            <WrapFlag>
              <Flag src={rusFlag} />
            </WrapFlag>
            <LeftSide>
              <City>Сочи (Адлер)</City>
              <Country>Россия</Country>
            </LeftSide>
            <RightSide>
              <Price>
                <BlueLink>Найти от 1 334 &#x584;</BlueLink>
              </Price>
              <Date>27 марта</Date>
            </RightSide>
          </WrapCard>
        </div>
        <div className="col-xl-5 col-md-10 col-md-offset-1 col-xs-12 col-xs-offset-0">
          <Card src={card3} />
          <WrapCard>
            <WrapFlag>
              <Flag src={rusFlag} />
            </WrapFlag>
            <LeftSide>
              <City>Санкт-Петербург</City>
              <Country>Россия</Country>
            </LeftSide>
            <RightSide>
              <Price>
                <BlueLink>Найти от 1 508 &#x584;</BlueLink>
              </Price>
              <Date>19 февраля</Date>
            </RightSide>
          </WrapCard>
        </div>
        <div className="col-xl-5 col-xl-offset-0 col-md-10 col-md-offset-1 col-xs-12 col-xs-offset-0">
          <Card src={card4} />
          <WrapCard>
            <WrapFlag>
              <Flag src={rusFlag} />
            </WrapFlag>
            <LeftSide>
              <City>Минеральные Воды</City>
              <Country>Россия</Country>
            </LeftSide>
            <RightSide>
              <Price>
                <BlueLink>Найти от 2 074 &#x584;</BlueLink>
              </Price>
              <Date>13 марта</Date>
            </RightSide>
          </WrapCard>
        </div>
        <div className="col-xl-5 col-md-10 col-md-offset-1 col-xs-12 col-xs-offset-0">
          <Card src={card5} />
          <WrapCard>
            <WrapFlag>
              <Flag src={rusFlag} />
            </WrapFlag>
            <LeftSide>
              <City>Симферополь (Крым)</City>
              <Country>Россия</Country>
            </LeftSide>
            <RightSide>
              <Price>
                <BlueLink>Найти от 2 407 &#x584;</BlueLink>
              </Price>
              <Date>13 марта</Date>
            </RightSide>
          </WrapCard>
        </div>
        <div className="col-xl-5 col-xl-offset-0 col-md-10 col-md-offset-1 col-xs-12 col-xs-offset-0">
          <Card src={card6} />
          <WrapCard>
            <WrapFlag>
              <Flag src={spaFlag} />
            </WrapFlag>
            <LeftSide>
              <City>Барселона</City>
              <Country>ИСПАНИЯ</Country>
            </LeftSide>
            <RightSide>
              <Price>
                <BlueLink>Найти от 4 247 &#x584;</BlueLink>
              </Price>
              <Date>24 марта</Date>
            </RightSide>
          </WrapCard>
        </div>
      </div>
    </div>
  </Cards>
);
