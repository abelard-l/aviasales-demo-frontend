import React, { Component } from "react";
import styled from "styled-components";
import { BlueLink, Rouble } from "../../commonComponents";
import { makeDigits, translate } from "../../commonFunctions";

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

const FromCity = styled.div`
  margin-bottom: 5px;
`;

const Prices = styled.div`
  flex-basis: 40%;
`;

const Price = styled.div`
  text-align: right;
  margin-bottom: 5px;
`;

export default props => (
  <Card>
    <Title>
      <WrapFlag>
        <Flag src={props.bestPriceInfo.flag} />
      </WrapFlag>
      <TitleInfo>
        <City>{translate(props.bestPriceInfo.city)}</City>
        <Country>{translate(props.bestPriceInfo.country)}</Country>
      </TitleInfo>
    </Title>
    <CitiesAndPrices>
      <Cities>
        {props.bestPriceInfo.cities.map(city => (
          <FromCity>{translate(city.name)}</FromCity>
        ))}
      </Cities>
      <Prices>
        {props.bestPriceInfo.cities.map(city => {
          return (
            <Price>
              <BlueLink>
                {makeDigits(city.price)}
                <Rouble />
              </BlueLink>
            </Price>
          );
        })}
      </Prices>
    </CitiesAndPrices>
  </Card>
);
