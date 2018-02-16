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
  display: flex;
  justify-content: space-between;
  margin-bottom: 80px;

  @media (max-width: 991px) {
    flex-wrap: wrap;
  }

  @media (max-width: 575px) {
    margin-bottom: 40px;
  }
`;

const Card = styled.div`
  flex-basis: 31%;

  @media (max-width: 991px) {
    flex-basis: 100%;
    margin-bottom: 50px;
  }

  @media (max-width: 575px) {
    margin-bottom: 40px;
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

const Flag = CommonFlag;
const City = CommonCity;
const Country = CommonCountry;
const FromCity = styled.div``;
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

export default () => (
  <BestPrices>
    <Group src={imgGroup} />
    <H2Center>Лучшие цены на авиабилеты за последний месяц</H2Center>
    <div className="row">
      <div className="col-sm-offset-1 col-sm-10">
        <CitiesAndPrices>
          <Card>
            <Title>
              <WrapFlag>
                <Flag src={rusFlag} />
              </WrapFlag>
              <TitleInfo>
                <City>Симферополь (Крым)</City>
                <Country>Крым</Country>
              </TitleInfo>
            </Title>
            <div className="row">
              <div className="col-xs-7">
                <FromCity>Из Москвы</FromCity>
                <FromCity>Из Санкт-Петербурга</FromCity>
                <FromCity>Из Новосибирска</FromCity>
                <FromCity>Из Екатеринбурга</FromCity>
                <FromCity>Из Челябинска</FromCity>
              </div>
              <div className="col-xs-5">
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
          </Card>
          <Card>
            <Title>
              <WrapFlag>
                <Flag src={armFlag} />
              </WrapFlag>
              <TitleInfo>
                <City>Ереван</City>
                <Country>Армения</Country>
              </TitleInfo>
            </Title>
            <div className="row">
              <div className="col-xs-7">
                <FromCity>Из Москвы</FromCity>
                <FromCity>Из Санкт-Петербурга</FromCity>
                <FromCity>Из Сочи</FromCity>
                <FromCity>Из Краснодара</FromCity>
                <FromCity>Из Ростова-на-Дону</FromCity>
              </div>
              <div className="col-xs-5">
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
          </Card>
          <Card>
            <Title>
              <WrapFlag>
                <Flag src={molFlag} />
              </WrapFlag>
              <TitleInfo>
                <City>Кишинёв</City>
                <Country>Молдавия</Country>
              </TitleInfo>
            </Title>
            <div className="row">
              <div className="col-xs-7">
                <FromCity>Из Москвы</FromCity>
                <FromCity>Из Санкт-Петербурга</FromCity>
                <FromCity>Из Краснодара</FromCity>
                <FromCity>Из Сургута</FromCity>
                <FromCity>Из Нового Уренгоя</FromCity>
              </div>
              <div className="col-xs-5">
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
          </Card>
        </CitiesAndPrices>
      </div>
    </div>
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
