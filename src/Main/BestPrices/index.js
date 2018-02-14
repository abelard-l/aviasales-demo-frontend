import React, { Component } from "react";
import styled from "styled-components";
import {
  BlueLink,
  H2Center,
  CommonFlag,
  CommonCity,
  CommonCountry,
  PCenter
} from "../../commonComponents";
import rusFlag from "../../res/images/flag-russia.png";
import armFlag from "../../res/images/flag-armenia.png";
import molFlag from "../../res/images/flag-moldavia.png";
import imgGroup from "./group.png";

const BestPrices = styled.section``;

const Group = styled.img`
  display: block;
  height: 64px;
  margin: 32px auto 20px auto;
`;

const CitiesAndPrices = styled.div`
  margin-bottom: 80px;
`;

const Flag = CommonFlag;
const City = CommonCity;
const Country = CommonCountry;
const FromCity = styled.div``;
const Price = styled.div``;

const SubText = styled.p`
  color: #a0b0b9;
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 75px;
  margin-top: 16px;
  text-align: center;
`;

export default () => (
  <BestPrices>
    <Group src={imgGroup} />
    <H2Center>Лучшие цены на авиабилеты за последний месяц</H2Center>
    <CitiesAndPrices>
      <div className="row">
        <div className="col-md-3 col-sm-offset-1">
          <div className="row">
            <div className="col-xs-2">
              <Flag src={rusFlag} />
            </div>
            <div className="col-xs-10">
              <City>Симферополь (Крым)</City>
              <Country>Крым</Country>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-6">
              <FromCity>Из Москвы</FromCity>
              <FromCity>Из Санкт-Петербурга</FromCity>
              <FromCity>Из Новосибирска</FromCity>
              <FromCity>Из Екатеринбурга</FromCity>
              <FromCity>Из Челябинска</FromCity>
            </div>
            <div className="col-xs-6">
              <Price>
                <BlueLink>от 4 813 &#x584;</BlueLink>
              </Price>
              <Price>
                <BlueLink>от 7 857 &#x584;</BlueLink>
              </Price>
              <Price>
                <BlueLink>от 15 127 &#x584;</BlueLink>
              </Price>
              <Price>
                <BlueLink>от 9 275 &#x584;</BlueLink>
              </Price>
              <Price>
                <BlueLink>от 9 148 &#x584;</BlueLink>
              </Price>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="row">
            <div className="col-xs-2">
              <Flag src={rusFlag} />
            </div>
            <div className="col-xs-10">
              <City>Ереван</City>
              <Country>Армения</Country>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-6">
              <FromCity>Из Москвы</FromCity>
              <FromCity>Из Санкт-Петербурга</FromCity>
              <FromCity>Из Сочи</FromCity>
              <FromCity>Из Краснодара</FromCity>
              <FromCity>Из Ростова-на-Дону</FromCity>
            </div>
            <div className="col-xs-6">
              <Price>
                <BlueLink>от 6 758 &#x584;</BlueLink>
              </Price>
              <Price>
                <BlueLink>от 9 932 &#x584;</BlueLink>
              </Price>
              <Price>
                <BlueLink>от 11 951 &#x584;</BlueLink>
              </Price>
              <Price>
                <BlueLink>от 11 741 &#x584;</BlueLink>
              </Price>
              <Price>
                <BlueLink>от 11 956 &#x584;</BlueLink>
              </Price>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="row">
            <div className="col-xs-2">
              <Flag src={rusFlag} />
            </div>
            <div className="col-xs-10">
              <City>Кишинёв</City>
              <Country>Молдавия</Country>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-6">
              <FromCity>Из Москвы</FromCity>
              <FromCity>Из Санкт-Петербурга</FromCity>
              <FromCity>Из Краснодара</FromCity>
              <FromCity>Из Сургута</FromCity>
              <FromCity>Из Нового Уренгоя</FromCity>
            </div>
            <div className="col-xs-6">
              <Price>
                <BlueLink>от 8 319 &#x584;</BlueLink>
              </Price>
              <Price>
                <BlueLink>от 10 800 &#x584;</BlueLink>
              </Price>
              <Price>
                <BlueLink>от 12 098 &#x584;</BlueLink>
              </Price>
              <Price>
                <BlueLink>от 16 277 &#x584;</BlueLink>
              </Price>
              <Price>
                <BlueLink>от 15 987 &#x584;</BlueLink>
              </Price>
            </div>
          </div>
        </div>
      </div>
    </CitiesAndPrices>
    <PCenter>
      Мы знаем, где купить авиабилеты дешево. Билеты на самолет в 220 стран
      мира.<br /> Поиск и сравнение цен на авиабилеты среди 100 агентств и 728
      авиакомпаний.
    </PCenter>
    <SubText>
      Цены, найденные пользователями за последние 48 часов, не являются офертой.
    </SubText>
  </BestPrices>
);
