import React, { Component } from "react";
import styled from "styled-components";
import lufthansa from "./lufthansa.png";
import pobeda from "./pobeda.png";
import circle from "./tr-circle.png";

const SpecSugg = styled.section`
  background: linear-gradient(106.41deg, #00b0de -42.02%, #196ebd 57.98%);
`;

const Title = styled.h2`
  color: #ffffff;
  font-size: 30px;
  font-weight: 500;
  line-height: 42px;
  padding-left: 10px;
  padding-top: 24px;
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  @media (min-width: 1200px) {
    justify-content: space-between;
  }
`;

const Card = styled.div`
  background: white;
  flex-basis: 96%;
  margin-bottom: 12px;

  @media (min-width: 768px) {
    flex-basis: 32%;
  }
`;

const Top = styled.div`
  color: #ffffff;
  background: #cd2027;
  box-sizing: border-box;
  font-size: 15px;
  justify-content: flex-start;
  line-height: 20px;
  overflow: hidden;
  padding: 22px 45px 22px 16px;
  position: relative;
`;

const TopRightSide = styled.div`
  align-items: center;
  display: flex;
  position: absolute;
  height: 100%;
  right: 0;
  top: 0;
  width: 45px;
  z-index: 200;
`;

const TopRightContent = styled.img``;

const AviacompanyAndPrices = styled.div`
  align-items: center;
  display: flex;
  flex-basis: 100%;
  justify-content: space-between;

  padding-left: 10px;
`;

const Aviacompany = styled.img`
  box-sizing: border-box;
  height: 25px;

  @media (min-width: 1200px) {
    height: 30px;
    padding-left: 5px;
  }
`;

const PricesAndDays = styled.div`
  box-sizing: border-box;
`;

const Price = styled.div`
  box-sizing: border-box;
  color: #5c5c5c;
  font-size: 18px;
  line-height: 16px;
  padding: 18px 13px 0px 13px;
  text-align: right;

  @media (min-width: 1200px) {
    font-size: 20px;
  }
`;

const Days = styled.div`
  box-sizing: border-box;
  color: #d93633;
  font-size: 12px;
  line-height: 15px;
  padding: 10px 12px;
  text-align: right;
`;

const Information = styled.p`
  color: #242424;
  font-size: 12px;
  height: 80px;
  line-height: 16px;
  padding: 0 12px;
`;

const DiscoverDetails = styled.button`
  color: #d93533;
  background: rgba(0, 0, 0, 0.0001);
  border: 2px solid #cd1f27;
  border-radius: 3px;
  box-sizing: border-box;
  cursor: pointer;
  font-size: 16px;
  line-height: 20px;
  margin: 0px 16px 20px 16px;
  padding: 10px 0px;
  text-align: center;
  width: calc(100% - 32px);
`;

const AdditionalInfo = styled.div`
  color: white;
  padding: 25px 0px 23px 0px;
`;

const LookAllSuggWrap = styled.p`
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

const LookAllSugg = styled.a`
  cursor: pointer;
  text-decoration: underline;

  &:hover {
    text-decoration: none;
  }
`;

const MediumPrice = styled.p`
  text-align: center;

  @media (min-width: 768px) {
    text-align: right;
  }
`;

export default () => (
  <SpecSugg>
    <div className="container">
      <div className="row">
        <div className="col-lg-offset-1 col-lg-10 col-xs">
          <Title>Спецпредложения на авиабилеты</Title>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-offset-1 col-md-offset-0 col-lg-10 col-md-12">
          <Cards>
            <Card>
              <Top>Билеты от 499 &#x584; !</Top>
              <AviacompanyAndPrices>
                <Aviacompany src={pobeda} />
                <PricesAndDays>
                  <Price>от 499 &#x584;</Price>
                  <Days>Осталось 45 дней</Days>
                </PricesAndDays>
              </AviacompanyAndPrices>
              <Information>
                Билеты от 499 рублей! Специальное предложение от авиакомпании
                Победа
              </Information>
              <DiscoverDetails>Узнать подробности</DiscoverDetails>
            </Card>

            <Card>
              <Top>
                В Тиват от 20680 &#x584; !
                <TopRightSide>
                  <TopRightContent src={circle} />
                </TopRightSide>
              </Top>
              <AviacompanyAndPrices>
                <Aviacompany src={lufthansa} />
                <PricesAndDays>
                  <Price>от 20 680 &#x584;</Price>
                  <Days>Осталось 19 дней</Days>
                </PricesAndDays>
              </AviacompanyAndPrices>
              <Information>
                Из Москвы в США от 20680 рублей! Специальное предложение от
                авиакомпании Lufthansa
              </Information>
              <DiscoverDetails>Узнать подробности</DiscoverDetails>
            </Card>

            <Card>
              <Top>
                В Рим от 22360 &#x584; !
                <TopRightSide>
                  <TopRightContent src={circle} />
                </TopRightSide>
              </Top>
              <AviacompanyAndPrices>
                <Aviacompany src={lufthansa} />
                <PricesAndDays>
                  <Price>от 20 360 &#x584;</Price>
                  <Days>Осталось 19 дней</Days>
                </PricesAndDays>
              </AviacompanyAndPrices>
              <Information>
                Из Москвы в США от 22360 рублей! Специальное предложение от
                авиакомпании Lufthansa
              </Information>
              <DiscoverDetails>Узнать подробности</DiscoverDetails>
            </Card>
          </Cards>
        </div>
      </div>
      <AdditionalInfo>
        <div className="row">
          <div className="col-lg-offset-1 col-lg-5 col-md-6 col-xs-12">
            <LookAllSuggWrap>
              <LookAllSugg>Смотреть все спецпредложения</LookAllSugg>
            </LookAllSuggWrap>
          </div>
          <div className="col-lg-5 col-md-6 col-xs-12">
            <MediumPrice>* средняя цена по направлению</MediumPrice>
          </div>
        </div>
      </AdditionalInfo>
    </div>
  </SpecSugg>
);
