import React, { Component } from "react";
import styled from "styled-components";
import { GrayLink } from "../../commonComponents";

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

const LinkToInformation = styled.div`
  font-size: 12px;
  line-height: 16px;
  margin-top: 12px;
`;

const BolderGrayLink = styled.a`
  color: #4a4a4a;
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
        <LinkToInformation>
          <GrayLink href="#">Россия</GrayLink>
        </LinkToInformation>
        <LinkToInformation>
          <GrayLink href="#">Таиланд</GrayLink>
        </LinkToInformation>
        <LinkToInformation>
          <GrayLink href="#">Черногория</GrayLink>
        </LinkToInformation>
        <LinkToInformation>
          <GrayLink href="#">Кипр</GrayLink>
        </LinkToInformation>
        <LinkToInformation>
          <GrayLink href="#">Болгария</GrayLink>
        </LinkToInformation>
        <LinkToInformation>
          <GrayLink href="#">Грузия</GrayLink>
        </LinkToInformation>
        <LinkToInformation>
          <BolderGrayLink href="#">Все страны →</BolderGrayLink>
        </LinkToInformation>
      </div>
      <div className="col-md-2 col-xs-6">
        <Title>ГОРОДА</Title>
        <LinkToInformation>
          <GrayLink href="#">Москва</GrayLink>
        </LinkToInformation>
        <LinkToInformation>
          <GrayLink href="#">Санкт-Петербург</GrayLink>
        </LinkToInformation>
        <LinkToInformation>
          <GrayLink href="#">Симферополь</GrayLink>
        </LinkToInformation>
        <LinkToInformation>
          <GrayLink href="#">Адлер</GrayLink>
        </LinkToInformation>
        <LinkToInformation>
          <GrayLink href="#">Екатеринбург</GrayLink>
        </LinkToInformation>
        <LinkToInformation>
          <GrayLink href="#">Лондон</GrayLink>
        </LinkToInformation>
        <LinkToInformation>
          <BolderGrayLink href="#">Все города →</BolderGrayLink>
        </LinkToInformation>
      </div>
      <div className="col-md-2 col-xs-6">
        <Title>АВИАКОМПАНИИ</Title>
        <LinkToInformation>
          <GrayLink href="#">Air Berlin</GrayLink>
        </LinkToInformation>
        <LinkToInformation>
          <GrayLink href="#">Air France</GrayLink>
        </LinkToInformation>
        <LinkToInformation>
          <GrayLink href="#">Alitalia</GrayLink>
        </LinkToInformation>
        <LinkToInformation>
          <GrayLink href="#">Air Baltic</GrayLink>
        </LinkToInformation>
        <LinkToInformation>
          <GrayLink href="#">Emirates</GrayLink>
        </LinkToInformation>
        <LinkToInformation>
          <GrayLink href="#">KLM</GrayLink>
        </LinkToInformation>
        <LinkToInformation>
          <BolderGrayLink href="#">Все авиакомпании →</BolderGrayLink>
        </LinkToInformation>
      </div>
      <div className="col-md-2 col-xs-6">
        <Title>АЭРОПОРТЫ</Title>
        <LinkToInformation>
          <GrayLink href="#">Шереметьево</GrayLink>
        </LinkToInformation>
        <LinkToInformation>
          <GrayLink href="#">Курумоч</GrayLink>
        </LinkToInformation>
        <LinkToInformation>
          <GrayLink href="#">Домодедово</GrayLink>
        </LinkToInformation>
        <LinkToInformation>
          <GrayLink href="#">Толмачево</GrayLink>
        </LinkToInformation>
        <LinkToInformation>
          <GrayLink href="#">Владивосток</GrayLink>
        </LinkToInformation>
        <LinkToInformation>
          <GrayLink href="#">Гамбург</GrayLink>
        </LinkToInformation>
        <LinkToInformation>
          <BolderGrayLink href="#">Все аэропорты →</BolderGrayLink>
        </LinkToInformation>
      </div>
      <div className="col-md-2 col-xs-6">
        <Title>НАПРАВЛЕНИЯ</Title>
        <LinkToInformation>
          <GrayLink href="#">MOW – SIP</GrayLink>
        </LinkToInformation>
        <LinkToInformation>
          <GrayLink href="#">MOW – AER</GrayLink>
        </LinkToInformation>
        <LinkToInformation>
          <GrayLink href="#">MOW – TIV</GrayLink>
        </LinkToInformation>
        <LinkToInformation>
          <GrayLink href="#">MOW – MRV</GrayLink>
        </LinkToInformation>
        <LinkToInformation>
          <GrayLink href="#">LED – MOW</GrayLink>
        </LinkToInformation>
        <LinkToInformation>
          <GrayLink href="#">MOW – BKK</GrayLink>
        </LinkToInformation>
      </div>
      <div className="col-md-2 col-xs-6">
        <Title>СЕРВИСЫ</Title>
        <LinkToInformation>
          <GrayLink href="#">Горящие авиабилеты</GrayLink>
        </LinkToInformation>
        <LinkToInformation>
          <GrayLink href="#">Календарь низких цен</GrayLink>
        </LinkToInformation>
        <LinkToInformation>
          <GrayLink href="#">Карта низких цен</GrayLink>
        </LinkToInformation>
        <LinkToInformation>
          <GrayLink href="#">Спецпредложения</GrayLink>
        </LinkToInformation>
        <LinkToInformation>
          <GrayLink href="#">Таблица цен</GrayLink>
        </LinkToInformation>
        <LinkToInformation>
          <GrayLink href="#">Блог</GrayLink>
        </LinkToInformation>
        <LinkToInformation>
          <GrayLink href="#">Помощь</GrayLink>
        </LinkToInformation>
      </div>
    </div>
  </LinksToInformation>
);
