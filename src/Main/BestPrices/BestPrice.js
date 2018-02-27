import React, { Component } from "react";
import styled from "styled-components";
import { BlueLink, Rouble } from "../../commonComponents";
import { makeDigits } from "../../commonFunctions";

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

export default props => (
  <Card>
    <Title>
      <WrapFlag>
        <Flag src={props.bestPriceInfo.flag} />
      </WrapFlag>
      <TitleInfo>
        <City>{props.bestPriceInfo.city}</City>
        <Country>{props.bestPriceInfo.country}</Country>
      </TitleInfo>
    </Title>
    <CitiesAndPrices>
      <Cities>
        <FromCity>{props.bestPriceInfo.fromCities[0].name}</FromCity>
        <FromCity>{props.bestPriceInfo.fromCities[1].name}</FromCity>
        <FromCity>{props.bestPriceInfo.fromCities[2].name}</FromCity>
        <FromCity>{props.bestPriceInfo.fromCities[3].name}</FromCity>
        <FromCity>{props.bestPriceInfo.fromCities[4].name}</FromCity>
      </Cities>
      <Prices>
        <Price>
          <BlueLink>
            от {makeDigits(props.bestPriceInfo.fromCities[0].price)}
            <Rouble />
          </BlueLink>
        </Price>
        <Price>
          <BlueLink>
            от {makeDigits(props.bestPriceInfo.fromCities[1].price)}
            <Rouble />
          </BlueLink>
        </Price>
        <Price>
          <BlueLink>
            от {makeDigits(props.bestPriceInfo.fromCities[2].price)}
            <Rouble />
          </BlueLink>
        </Price>
        <Price>
          <BlueLink>
            от {makeDigits(props.bestPriceInfo.fromCities[3].price)}
            <Rouble />
          </BlueLink>
        </Price>
        <Price>
          <BlueLink>
            от {makeDigits(props.bestPriceInfo.fromCities[4].price)}
            <Rouble />
          </BlueLink>
        </Price>
      </Prices>
    </CitiesAndPrices>
  </Card>
);
