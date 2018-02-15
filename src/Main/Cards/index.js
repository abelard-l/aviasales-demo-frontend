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
  width: 100%;
`;

const WrapFlag = styled.div``;
const LeftSide = styled.div``;
const RightSide = styled.div;

const Flag = CommonFlag;

const City = CommonCity;
const Country = CommonCountry;

const Price = styled.div`
  color: #00bae8;
  font-size: 22px;
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
    <div className="row">
      <div className="col-sm-5 col-xs-offset-1">
        <Card src={card1} />
        <div className="row">
          <div className="col-xs-2">
            <Flag src={rusFlag} />
          </div>
          <div className="col-xs-5">
            <City>Краснодар</City>
            <Country>Россия</Country>
          </div>
          <div className="col-xs-5">
            <Price>
              <BlueLink>
                Найти от 1212 <up>&#x584;</up>
              </BlueLink>
            </Price>
            <Date>18 марта</Date>
          </div>
        </div>
      </div>
      <div className="col-sm-5">
        <Card src={card2} />
        <div className="row">
          <div className="col-xs-2">
            <Flag src={rusFlag} />
          </div>
          <div className="col-xs-5">
            <City>Краснодар</City>
            <Country>Россия</Country>
          </div>
          <div className="col-xs-5">
            <Price>
              <BlueLink>
                Найти от 1212 <up>&#x584;</up>
              </BlueLink>
            </Price>
            <Date>18 марта</Date>
          </div>
        </div>
      </div>
      <div className="col-sm-5 col-xs-offset-1">
        <Card src={card3} />
        <div className="row">
          <div className="col-xs-2">
            <Flag src={rusFlag} />
          </div>
          <div className="col-xs-5">
            <City>Краснодар</City>
            <Country>Россия</Country>
          </div>
          <div className="col-xs-5">
            <Price>
              <BlueLink>
                Найти от 1212 <up>&#x584;</up>
              </BlueLink>
            </Price>
            <Date>18 марта</Date>
          </div>
        </div>
      </div>
      <div className="col-sm-5">
        <Card src={card4} />
        <div className="row">
          <div className="col-xs-2">
            <Flag src={rusFlag} />
          </div>
          <div className="col-xs-5">
            <City>Краснодар</City>
            <Country>Россия</Country>
          </div>
          <div className="col-xs-5">
            <Price>
              <BlueLink>
                Найти от 1212 <up>&#x584;</up>
              </BlueLink>
            </Price>
            <Date>18 марта</Date>
          </div>
        </div>
      </div>
      <div className="col-sm-5 col-xs-offset-1">
        <Card src={card5} />
        <div className="row">
          <div className="col-xs-2">
            <Flag src={rusFlag} />
          </div>
          <div className="col-xs-5">
            <City>Краснодар</City>
            <Country>Россия</Country>
          </div>
          <div className="col-xs-5">
            <Price>
              <BlueLink>
                Найти от 1212 <up>&#x584;</up>
              </BlueLink>
            </Price>
            <Date>18 марта</Date>
          </div>
        </div>
      </div>
      <div className="col-sm-5">
        <Card src={card6} />
        <div className="row">
          <div className="col-xs-2">
            <Flag src={rusFlag} />
          </div>
          <div className="col-xs-5">
            <City>Краснодар</City>
            <Country>Россия</Country>
          </div>
          <div className="col-xs-5">
            <Price>
              <BlueLink>
                Найти от 1212 <up>&#x584;</up>
              </BlueLink>
            </Price>
            <Date>18 марта</Date>
          </div>
        </div>
      </div>
    </div>
  </Cards>
);
