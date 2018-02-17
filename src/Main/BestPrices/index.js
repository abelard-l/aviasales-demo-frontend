import React, { Component } from "react";
import styled from "styled-components";
import { BlueLink, HeaderCenter } from "../../commonComponents";
import rusflag from "../../res/images/flag-russia.png";
import armflag from "../../res/images/flag-armenia.png";
import molflag from "../../res/images/flag-moldavia.png";
import calendar from "./calendar.svg";

const BestPrices = styled.section``;

const Group = styled.img`
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

const Card = styled.div`
  flex-basis: 100%;
  margin-bottom: 40px;

  @media (min-width: 768px) {
    margin-bottom: 50px;
  }

  @media (min-width: 1200px) {
    flex-basis: 31%;
  }
`;

const Title = styled.div`
  display: flex;
`;

const WrapFlag = styled.div`
  flex-basis: 30px;
  padding-right: 4px;
`;

const TitleInfo = styled.div`
  flex-basis: auto;
`;

const Flag = styled.img``;

const CitiesAndPrices = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;

const Cities = styled.div`
  flex-basis: 60%;
`;

const City = styled.div`
  color: #5b5b5c;
  font-size: 20px;
  font-weight: bold;
  line-height: 32px;
`;

const Country = styled.div`
  color: #a0b0b9;
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
  text-transform: uppercase;
`;

const FromCity = styled.div``;

const Prices = styled.div`
  flex-basis: 40%;
`;

const Price = styled.div`
  text-align: right;
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
      <Group src={calendar} />
      <HeaderCenter>Лучшие цены на авиабилеты за последний месяц</HeaderCenter>
      <div className="row">
        <div className="col-md-offset-1 col-md-10">
          <Cards>
            <Card>
              <Title>
                <WrapFlag>
                  <Flag src={rusflag} />
                </WrapFlag>
                <TitleInfo>
                  <City>Симферополь (Крым)</City>
                  <Country>Крым</Country>
                </TitleInfo>
              </Title>
              <CitiesAndPrices>
                <Cities>
                  <FromCity>Из Москвы</FromCity>
                  <FromCity>Из Санкт-Петербурга</FromCity>
                  <FromCity>Из Новосибирска</FromCity>
                  <FromCity>Из Екатеринбурга</FromCity>
                  <FromCity>Из Челябинска</FromCity>
                </Cities>
                <Prices>
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
                </Prices>
              </CitiesAndPrices>
            </Card>
            <Card>
              <Title>
                <WrapFlag>
                  <Flag src={armflag} />
                </WrapFlag>
                <TitleInfo>
                  <City>Ереван</City>
                  <Country>Армения</Country>
                </TitleInfo>
              </Title>
              <CitiesAndPrices>
                <Cities>
                  <FromCity>Из Москвы</FromCity>
                  <FromCity>Из Санкт-Петербурга</FromCity>
                  <FromCity>Из Сочи</FromCity>
                  <FromCity>Из Краснодара</FromCity>
                  <FromCity>Из Ростова-на-Дону</FromCity>
                </Cities>
                <Prices>
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
                </Prices>
              </CitiesAndPrices>
            </Card>
            <Card>
              <Title>
                <WrapFlag>
                  <Flag src={molflag} />
                </WrapFlag>
                <TitleInfo>
                  <City>Кишинёв</City>
                  <Country>Молдавия</Country>
                </TitleInfo>
              </Title>
              <CitiesAndPrices>
                <Cities>
                  <FromCity>Из Москвы</FromCity>
                  <FromCity>Из Санкт-Петербурга</FromCity>
                  <FromCity>Из Краснодара</FromCity>
                  <FromCity>Из Сургута</FromCity>
                  <FromCity>Из Нового Уренгоя</FromCity>
                </Cities>
                <Prices>
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
                </Prices>
              </CitiesAndPrices>
            </Card>
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
