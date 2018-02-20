import React, { Component } from "react";
import styled from "styled-components";
import { HeaderCenter } from "../../commonComponents";
import calendar from "./calendar.svg";
import { bestPricesData } from "./data";
import BestPrice from "./BestPrice";

const BestPrices = styled.section``;

const Logotype = styled.img`
  display: block;
  height: 64px;
  margin: 32px auto 20px auto;
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 40px;

  @media (min-width: 1200px) {
    flex-wrap: nowrap;
  }

  @media (min-width: 768px) {
    margin-bottom: 80px;
  }
`;

const SubText = styled.p`
  color: #a0b0b9;
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 75px;
  margin-top: 16px;
  text-align: center;
`;

export const TextCenter = styled.p`
  font-size: 16px;
  line-height: 26px;
  text-align: center;
`;

export default () => (
  <BestPrices>
    <div className="container">
      <Logotype src={calendar} />
      <HeaderCenter>Лучшие цены на авиабилеты за последний месяц</HeaderCenter>
      <div className="row">
        <div className="col-md-offset-1 col-md-10">
          <Cards>
            <BestPrice bestPriceInfo={bestPricesData[0]} />
            <BestPrice bestPriceInfo={bestPricesData[1]} />
            <BestPrice bestPriceInfo={bestPricesData[2]} />
          </Cards>
        </div>
      </div>
      <TextCenter>
        Мы знаем, где купить авиабилеты дешево. Билеты на самолет в 220 стран
        мира.<br /> Поиск и сравнение цен на авиабилеты среди 100 агентств и 728
        авиакомпаний.
      </TextCenter>
      <SubText>
        Цены, найденные пользователями за последние 48 часов, не являются
        офертой.
      </SubText>
    </div>
  </BestPrices>
);
