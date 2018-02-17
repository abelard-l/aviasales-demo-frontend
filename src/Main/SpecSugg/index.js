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
  font-size: 16px;
  justify-content: flex-start;
  line-height: 20px;
  max-height: 64px;
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
`;

const ImgTopRight = styled.img``;

const Img = styled.img`
  padding: 22px 12px;
  width: 100%;
  @media (min-width: 1200px) {
  }
`;

const Price = styled.div`
  color: #5c5c5c;
  font-size: 20px;
  line-height: 16px;
  padding: 18px 13px 0px 13px;
  text-align: right;
`;

const Days = styled.div`
  color: #d93633;
  font-size: 12px;
  line-height: 15px;
  padding: 10px 12px;
  text-align: right;
`;

const P = styled.p`
  color: #242424;
  font-size: 12px;
  height: 80px;
  line-height: 16px;
  padding: 0 12px;
`;

const Button = styled.button`
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

const BottomParagraphs = styled.div`
  color: white;
  padding: 25px 0px 23px 0px;
`;

const PBottomLeft = styled.p`
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

const A = styled.a`
  cursor: pointer;
  text-decoration: underline;

  &:hover {
    text-decoration: none;
  }
`;

const PBottomRight = styled.p`
  text-align: center;

  @media (min-width: 768px) {
    text-align: right;
  }
`;

export default () => (
  <SpecSugg>
    <div className="row">
      <div className="col-lg-offset-1 col-lg-10 col-xs">
        <Title>Спецпредложения на авиабилеты</Title>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-offset-1 col-md-offset-0 col-lg-10 col-md-12">
        <Cards>
          <Card>
            <Top>
              Билеты от 499 рублей!
              <TopRightSide>
                <ImgTopRight src={circle} />
              </TopRightSide>
            </Top>
            <div className="row">
              <div className="col-lg-6 col-md-5 col-xs-6">
                <Img src={pobeda} />
              </div>
              <div className="col-lg-6 col-md-7 col-xs-6">
                <Price>от 499 &#x584;</Price>
                <Days>Осталось 45 дней</Days>
              </div>
            </div>
            <P>
              Билеты от 499 рублей! Специальное предложение от авиакомпании
              Победа
            </P>
            <Button>Узнать подробности</Button>
          </Card>

          <Card>
            <Top>
              В Нью-Йорк от 20680 рублей!
              <TopRightSide>
                <ImgTopRight src={circle} />
              </TopRightSide>
            </Top>
            <div className="row">
              <div className="col-lg-6 col-md-5 col-xs-6">
                <Img src={lufthansa} />
              </div>
              <div className="col-lg-6 col-md-7 col-xs-6">
                <Price>от 20 680 &#x584;</Price>
                <Days>Осталось 19 дней</Days>
              </div>
            </div>
            <P>
              Из Москвы в США от 20680 рублей! Специальное предложение от
              авиакомпании Lufthansa
            </P>
            <Button>Узнать подробности</Button>
          </Card>

          <Card>
            <Top>
              В Лос-Анджелес от 22360 рублей
              <TopRightSide>
                <ImgTopRight src={circle} />
              </TopRightSide>
            </Top>
            <div className="row">
              <div className="col-lg-6 col-md-5 col-xs-6">
                <Img src={lufthansa} />
              </div>
              <div className="col-lg-6 col-md-7 col-xs-6">
                <Price>от 20 360 &#x584;</Price>
                <Days>Осталось 19 дней</Days>
              </div>
            </div>
            <P>
              Из Москвы в США от 22360 рублей! Специальное предложение от
              авиакомпании Lufthansa
            </P>
            <Button>Узнать подробности</Button>
          </Card>
        </Cards>
      </div>
    </div>
    <BottomParagraphs>
      <div className="row">
        <div className="col-lg-offset-1 col-lg-5 col-md-6 col-xs-12">
          <PBottomLeft>
            <A>Смотреть все спецпредложения</A>
          </PBottomLeft>
        </div>
        <div className="col-lg-5 col-md-6 col-xs-12">
          <PBottomRight>* средняя цена по направлению</PBottomRight>
        </div>
      </div>
    </BottomParagraphs>
  </SpecSugg>
);
