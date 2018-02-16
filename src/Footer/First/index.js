import React, { Component } from "react";
import styled from "styled-components";
import { GrayLink } from "../../commonComponents";
const First = styled.section`
  border-bottom: 1px solid #e0e6e8;
  padding-bottom: 29px;
`;

const H3 = styled.h3`
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  margin-bottom: 20px;
  text-transform: uppercase;
`;

const MenuItem = styled.div`
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
  <First>
    <div className="row">
      <div className="col-sm-2 col-xs-6">
        <H3>страны</H3>
        <MenuItem>
          <GrayLink href="#">Россия</GrayLink>
        </MenuItem>
        <MenuItem>
          <GrayLink href="#">Таиланд</GrayLink>
        </MenuItem>
        <MenuItem>
          <GrayLink href="#">Черногория</GrayLink>
        </MenuItem>
        <MenuItem>
          <GrayLink href="#">Кипр</GrayLink>
        </MenuItem>
        <MenuItem>
          <GrayLink href="#">Болгария</GrayLink>
        </MenuItem>
        <MenuItem>
          <GrayLink href="#">Грузия</GrayLink>
        </MenuItem>
        <MenuItem>
          <BolderGrayLink href="#">Все страны →</BolderGrayLink>
        </MenuItem>
      </div>
      <div className="col-sm-2 col-xs-6">
        <H3>ГОРОДА</H3>
        <MenuItem>
          <GrayLink href="#">Москва</GrayLink>
        </MenuItem>
        <MenuItem>
          <GrayLink href="#">Санкт-Петербург</GrayLink>
        </MenuItem>
        <MenuItem>
          <GrayLink href="#">Симферополь</GrayLink>
        </MenuItem>
        <MenuItem>
          <GrayLink href="#">Адлер</GrayLink>
        </MenuItem>
        <MenuItem>
          <GrayLink href="#">Екатеринбург</GrayLink>
        </MenuItem>
        <MenuItem>
          <GrayLink href="#">Лондон</GrayLink>
        </MenuItem>
        <MenuItem>
          <BolderGrayLink href="#">Все города →</BolderGrayLink>
        </MenuItem>
      </div>
      <div className="col-sm-2 col-xs-6">
        <H3>АВИАКОМПАНИИ</H3>
        <MenuItem>
          <GrayLink href="#">Air Berlin</GrayLink>
        </MenuItem>
        <MenuItem>
          <GrayLink href="#">Air France</GrayLink>
        </MenuItem>
        <MenuItem>
          <GrayLink href="#">Alitalia</GrayLink>
        </MenuItem>
        <MenuItem>
          <GrayLink href="#">Air Baltic</GrayLink>
        </MenuItem>
        <MenuItem>
          <GrayLink href="#">Emirates</GrayLink>
        </MenuItem>
        <MenuItem>
          <GrayLink href="#">KLM</GrayLink>
        </MenuItem>
        <MenuItem>
          <BolderGrayLink href="#">Все авиакомпании →</BolderGrayLink>
        </MenuItem>
      </div>
      <div className="col-md-2 col-xs-6">
        <H3>АЭРОПОРТЫ</H3>
        <MenuItem>
          <GrayLink href="#">Шереметьево</GrayLink>
        </MenuItem>
        <MenuItem>
          <GrayLink href="#">Курумоч</GrayLink>
        </MenuItem>
        <MenuItem>
          <GrayLink href="#">Домодедово</GrayLink>
        </MenuItem>
        <MenuItem>
          <GrayLink href="#">Толмачево</GrayLink>
        </MenuItem>
        <MenuItem>
          <GrayLink href="#">Владивосток</GrayLink>
        </MenuItem>
        <MenuItem>
          <GrayLink href="#">Гамбург</GrayLink>
        </MenuItem>
        <MenuItem>
          <BolderGrayLink href="#">Все аэропорты →</BolderGrayLink>
        </MenuItem>
      </div>
      <div className="col-md-2 col-xs-6">
        <H3>НАПРАВЛЕНИЯ</H3>
        <MenuItem>
          <GrayLink href="#">MOW – SIP</GrayLink>
        </MenuItem>
        <MenuItem>
          <GrayLink href="#">MOW – AER</GrayLink>
        </MenuItem>
        <MenuItem>
          <GrayLink href="#">MOW – TIV</GrayLink>
        </MenuItem>
        <MenuItem>
          <GrayLink href="#">MOW – MRV</GrayLink>
        </MenuItem>
        <MenuItem>
          <GrayLink href="#">LED – MOW</GrayLink>
        </MenuItem>
        <MenuItem>
          <GrayLink href="#">MOW – BKK</GrayLink>
        </MenuItem>
      </div>
      <div className="col-md-2 col-xs-6">
        <H3>СЕРВИСЫ</H3>
        <MenuItem>
          <GrayLink href="#">Горящие авиабилеты</GrayLink>
        </MenuItem>
        <MenuItem>
          <GrayLink href="#">Календарь низких цен</GrayLink>
        </MenuItem>
        <MenuItem>
          <GrayLink href="#">Карта низких цен</GrayLink>
        </MenuItem>
        <MenuItem>
          <GrayLink href="#">Спецпредложения</GrayLink>
        </MenuItem>
        <MenuItem>
          <GrayLink href="#">Таблица цен</GrayLink>
        </MenuItem>
        <MenuItem>
          <GrayLink href="#">Блог</GrayLink>
        </MenuItem>
        <MenuItem>
          <GrayLink href="#">Помощь</GrayLink>
        </MenuItem>
      </div>
    </div>
  </First>
);
