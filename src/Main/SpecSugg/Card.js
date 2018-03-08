import React from 'react';
import styled from 'styled-components';
import { Rouble } from '../../commonComponents';
import { makeDigits, translate } from '../../commonFunctions';

const Card = styled.div`
  background: white;
  flex-basis: 96%;
  margin-bottom: 12px;

  @media (min-width: 768px) {
    flex-basis: 32%;
    max-width: 32%;
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
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
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

export default props => (
  <Card>
    <Top>
      {translate(props.specData.title)}
      <TopRightSide>
        <TopRightContent src={props.specData.topImg} />
      </TopRightSide>
    </Top>
    <AviacompanyAndPrices>
      <Aviacompany src={props.specData.aviaImg} />
      <PricesAndDays>
        <Price>
          от {makeDigits(props.specData.price)}
          <Rouble />
        </Price>
        <Days>Осталось {props.specData.days} дней</Days>
      </PricesAndDays>
    </AviacompanyAndPrices>
    <Information>{translate(props.specData.description)}</Information>
    <DiscoverDetails>Узнать подробности</DiscoverDetails>
  </Card>
);
