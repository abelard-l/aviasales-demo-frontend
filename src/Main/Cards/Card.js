import React from "react";
import styled from "styled-components";
import { BlueLink, Rouble } from "../../commonComponents";
import { makeDigits } from "../../commonFunctions";
import { format } from "date-fns";
import ruLocale from "date-fns/locale/ru";

const Card = styled.img`
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  width: 100%;
`;

const WrapCard = styled.div`
  border-radius: 4px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  margin-bottom: 31px;
  padding: 24px 10px;
`;

const WrapFlag = styled.div`
  display: none;
  flex-basis: 30px;

  @media (min-width: 768px) {
    display: block;
  }
`;

const Flag = styled.img``;

const CityAndCountry = styled.div`
  flex-basis: 55%;
`;

const PriceAndDate = styled.div`
  flex-basis: 45%;
`;

const City = styled.div`
  color: #5b5b5c;
  font-size: 16px;
  font-weight: bold;
  line-height: 32px;

  @media (min-width: 768px) {
    font-size: 20px;
  }
`;

const Country = styled.div`
  color: #a0b0b9;
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
  text-transform: uppercase;
`;

const Price = styled.div`
  color: #00bae8;
  font-size: 14px;
  line-height: 32px;
  text-align: right;

  @media (min-width: 768px) {
    font-size: 20px;
  }
`;
const Date = styled.div`
  color: #aabec6;
  line-height: 20px;
  font-size: 12px;
  font-weight: 500;
  text-align: right;
`;

function formatDate(day) {
  return format(new Date(2014, 1, 1), "D MMM YYYY, dd", {
    locale: ruLocale
  });
}

export default props => (
  <React.Fragment>
    <Card src={props.cardInfo.cityImage} />
    <WrapCard>
      <WrapFlag>
        <Flag src={props.cardInfo.flag} />
      </WrapFlag>
      <CityAndCountry>
        <City>{props.cardInfo.city}</City>
        <Country>{props.cardInfo.country}</Country>
      </CityAndCountry>
      <PriceAndDate>
        <Price>
          <BlueLink>
            Найти от {makeDigits(props.cardInfo.price)}
            <Rouble />
          </BlueLink>
        </Price>
        <Date>{formatDate(props.cardInfo.date)}</Date>
      </PriceAndDate>
    </WrapCard>
  </React.Fragment>
);
