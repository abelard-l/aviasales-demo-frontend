import React, { Component } from "react";
import styled from "styled-components";

const LinksToInformation = styled.section`
  border-bottom: 1px solid #e0e6e8;
  padding-bottom: 29px;
`;

const Title = styled.h3`
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  margin-bottom: 20px;
  text-transform: uppercase;
`;

const LinkToInformation = styled.a`
  color: #5b5b5c;
  display: block;
  cursor: pointer;
  font-size: 12px;
  line-height: 16px;
  margin-top: 12px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const BolderGrayLink = styled.a`
  color: #4a4a4a;
  cursor: pointer;
  display: block;
  font-size: 12px;
  line-height: 16px;
  margin-bottom: 30px;
  margin-top: 12px;
  font-weight: 500;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export default () => (
  <LinksToInformation>
    <div className="row">
      <div className="col-md-2 col-xs-6">
        <Title>страны</Title>
        <LinkToInformation href="#">Россия</LinkToInformation>
        <LinkToInformation href="#">Таиланд</LinkToInformation>
        <LinkToInformation href="#">Черногория</LinkToInformation>
        <LinkToInformation href="#">Кипр</LinkToInformation>
        <LinkToInformation href="#">Болгария</LinkToInformation>
        <LinkToInformation href="#">Грузия</LinkToInformation>
        <BolderGrayLink href="#">Все страны →</BolderGrayLink>
      </div>
      <div className="col-md-2 col-xs-6">
        <Title>ГОРОДА</Title>
        <LinkToInformation href="#">Москва</LinkToInformation>
        <LinkToInformation href="#">Санкт-Петербург</LinkToInformation>
        <LinkToInformation href="#">Симферополь</LinkToInformation>
        <LinkToInformation href="#">Адлер</LinkToInformation>
        <LinkToInformation href="#">Екатеринбург</LinkToInformation>
        <LinkToInformation href="#">Лондон</LinkToInformation>
        <BolderGrayLink href="#">Все города →</BolderGrayLink>
      </div>
      <div className="col-md-2 col-xs-6">
        <Title>АВИАКОМПАНИИ</Title>
        <LinkToInformation href="#">Air Berlin</LinkToInformation>
        <LinkToInformation href="#">Air France</LinkToInformation>
        <LinkToInformation href="#">Alitalia</LinkToInformation>
        <LinkToInformation href="#">Air Baltic</LinkToInformation>
        <LinkToInformation href="#">Emirates</LinkToInformation>
        <LinkToInformation href="#">KLM</LinkToInformation>
        <BolderGrayLink href="#">Все авиакомпании →</BolderGrayLink>
      </div>
      <div className="col-md-2 col-xs-6">
        <Title>АЭРОПОРТЫ</Title>
        <LinkToInformation href="#">Шереметьево</LinkToInformation>
        <LinkToInformation href="#">Курумоч</LinkToInformation>
        <LinkToInformation href="#">Домодедово</LinkToInformation>
        <LinkToInformation href="#">Толмачево</LinkToInformation>
        <LinkToInformation href="#">Владивосток</LinkToInformation>
        <LinkToInformation href="#">Гамбург</LinkToInformation>
        <BolderGrayLink href="#">Все аэропорты →</BolderGrayLink>
      </div>
      <div className="col-md-2 col-xs-6">
        <Title>НАПРАВЛЕНИЯ</Title>
        <LinkToInformation href="#">MOW – SIP</LinkToInformation>
        <LinkToInformation href="#">MOW – AER</LinkToInformation>
        <LinkToInformation href="#">MOW – TIV</LinkToInformation>
        <LinkToInformation href="#">MOW – MRV</LinkToInformation>
        <LinkToInformation href="#">LED – MOW</LinkToInformation>
        <LinkToInformation href="#">MOW – BKK</LinkToInformation>
      </div>
      <div className="col-md-2 col-xs-6">
        <Title>СЕРВИСЫ</Title>
        <LinkToInformation href="#">Горящие авиабилеты</LinkToInformation>
        <LinkToInformation href="#">Календарь низких цен</LinkToInformation>
        <LinkToInformation href="#">Карта низких цен</LinkToInformation>
        <LinkToInformation href="#">Спецпредложения</LinkToInformation>
        <LinkToInformation href="#">Таблица цен</LinkToInformation>
        <LinkToInformation href="#">Блог</LinkToInformation>
        <LinkToInformation href="#">Помощь</LinkToInformation>
      </div>
    </div>
  </LinksToInformation>
);
