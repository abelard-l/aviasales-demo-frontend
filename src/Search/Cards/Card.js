import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import FlightRoute from './FlightRoute';
import BaggageRules from './BaggageRules';
import Mark from './Mark';
import { Rouble } from '../../commonComponents';
import { makeDigits, translate } from '../../commonFunctions';
import arrowDown from './icons/arrow-down.svg';
import followArrow from './icons/follow-arrow.svg';

const WrapCard = styled.div``;

const CardWrap = styled.div`
  background: #ffffff;
  border-radius: 4px;
  display: block;
  flex-wrap: nowrap;
  margin-bottom: 8px;
  padding-bottom: 2px;
  background: #ffffff;
  @media (min-width: 768px) {
    display: flex;
    margin-bottom: 20px;
    padding-bottom: 0px;
  }
`;

const BaggageAndPrice = styled.div`
  display: none;
  border-right: 1px solid #eaeaea;
  flex-basis: 32%;
  max-width: 32%;
  padding: 0 0 0 0;

  @media (min-width: 768px) {
    display: block;
  }
`;

const Baggage = styled.div`
  color: #9ab0b9;
  display: flex;
  flex-wrap: nowrap;
  font-size: 10px;
  font-weight: bold;
  justify-content: center;
  letter-spacing: -0.4px;
  line-height: normal;
  text-align: center;
`;

const ThingsFree = styled.div`
  flex-basis: 50%;
  padding: 10px 0px;
`;

const ThingsFreeNoBaggage = styled.div`
  background: #f8fbfb;
  border: 1px solid #eaeaea;
  flex-basis: 50%;
  padding: 10px 0px;
`;

const NoBaggageText = styled.div`
  color: #9ab0b9;
  font-size: 10px;
  line-height: 15px;
  text-align: center;
`;

const ThingsForMoney = styled.div`
  flex-basis: 50%;
  padding: 10px 0px;
`;

const TicketsRemain = styled.div`
  line-height: 18px;
  font-size: 12px;
  text-align: center;
  color: #ff654e;
  margin: 7px 0px;
`;

const BuyTicket = styled.button`
  background: #ff6d00;
  border: 0;
  border-radius: 4px;
  display: block;
  padding: 6px 42px;
  font-weight: 500;
  line-height: 24px;
  margin: 15px auto 0px auto;
  font-size: 16px;
  text-align: center;
  color: #ffffff;
`;

const BuyWhere = styled.div`
  line-height: 18px;
  font-size: 12px;
  text-align: center;
  margin-top: 8px;
  color: #a0b0b9;
`;

const SpecSuggestions = styled.div`
  line-height: 18px;
  font-size: 12px;
  color: #59bce5;
  margin: 24px auto 0px auto;
  max-width: 154px;
  padding: 0px 24px 24px 24px;
`;

const SpecSugg = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;

const SuggName = styled.div`
  flex-basis: 60%;
  max-width: 60%;
  text-align: left;
  margin-bottom: 4px;
`;

const SuggPrice = styled.div`
  flex-basis: 40%;
  max-width: 40%;
  text-align: right;
  margin-bottom: 4px;
`;

const AddSugg = styled.div`
  font-weight: 500;
  line-height: 18px;
  font-size: 12px;
  text-align: center;
  color: #59bce5;
  margin-top: 9px;
`;

const DiscountText = styled.div`
  font-weight: 500;
  line-height: 15px;
  font-size: 10px;
  text-align: center;
  color: #66d295;
`;

const FullFlightInfo = styled.div`
  flex-basis: 68%;
  max-width: 68%;
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`;

const FullFlightHeader = styled.div`
  display: flex;
  flex-wrap: nowrap;
  padding: 15px 10px 12px 16px;
`;

const AviaCompany = styled.div`
  flex-basis: 65%;
  max-width: 65%;
  text-align: right;
  @media (min-width: 768px) {
    text-align: inherit;
    flex-basis: 50%;
    max-width: 50%;
  }
`;

const AviaCompanyImg = styled.img`
  margin-right: 18px;
  max-width: 99px;
`;

const Charter = styled.div`
  background: url(${followArrow}) no-repeat right top;
  flex-basis: 50%;
  max-width: 50%;
  text-align: right;
`;

const CharterText = styled.span`
  border: 1px solid #2196f3;
  border-radius: 15px;
  display: inline-block;
  color: #23a9f6;
  font-size: 10px;
  line-height: 18px;
  margin-right: 41px;
  padding: 3px 4px;
  text-transform: uppercase;
`;

const FullFlightBody = styled.div``;

const AddInfo = styled.div`
  background: url(${arrowDown}) no-repeat center center #edf5f7;
  flex-basis: 20px;
  max-width: 20px;
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`;

const Mob = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
`;

const PriceAndAvia = styled.div`
  display: flex;
  flex-wrap: nowrap;
  padding: 16px 8px;
`;

const Price = styled.div`
  flex-basis: 35%;
  max-width: 35%;
  line-height: normal;
  font-size: 22px;
  color: #ff9241;
`;

const Card = ({ wholeCard }) => (
  <WrapCard>
    {wholeCard.general.mark !== 'none' && <Mark type={wholeCard.general.mark} />}
    <CardWrap>
      <BaggageAndPrice>
        <Baggage>
          {wholeCard.thingsForMoney.showRule ? (
            <React.Fragment>
              <ThingsFreeNoBaggage>
                <BaggageRules rules={wholeCard.thingsFree} />
                <NoBaggageText>{wholeCard.thingsFree.text}</NoBaggageText>
              </ThingsFreeNoBaggage>
              <ThingsForMoney>
                <BaggageRules rules={wholeCard.thingsForMoney} />
                <DiscountText>
                  - {wholeCard.thingsForMoney.discount}
                  <Rouble />
                </DiscountText>
              </ThingsForMoney>
            </React.Fragment>
          ) : (
            <ThingsFree>
              <BaggageRules rules={wholeCard.thingsFree} />
            </ThingsFree>
          )}
        </Baggage>
        {wholeCard.general.ticketsRemain !== false && (
          <TicketsRemain>Осталось {wholeCard.general.ticketsRemain} билета</TicketsRemain>
        )}
        <BuyTicket>
          Купить<br /> за {makeDigits(wholeCard.general.price)}
          <Rouble />
        </BuyTicket>
        <BuyWhere>На {translate(wholeCard.general.company)}</BuyWhere>
        {wholeCard.specSugg.length !== 0 && (
          <SpecSuggestions>
            {wholeCard.specSugg.slice(0, 2).map(item => (
              <SpecSugg key={item.id}>
                <SuggName>{translate(item.name)}</SuggName>
                <SuggPrice>
                  {makeDigits(item.price)}
                  <Rouble />
                </SuggPrice>
              </SpecSugg>
            ))}
            {wholeCard.specSugg.length > 2 && (
              <AddSugg>+ Еще {wholeCard.specSugg.length - 2} предложения</AddSugg>
            )}
          </SpecSuggestions>
        )}
      </BaggageAndPrice>
      <FullFlightInfo>
        <FullFlightHeader>
          <AviaCompany>
            {wholeCard.general.airline.length !== 0 &&
              wholeCard.general.airline.map(item => (
                <AviaCompanyImg key={item.id} src={item.name} />
              ))}
          </AviaCompany>
          <Charter>{wholeCard.general.isCharter && <CharterText>Чартер</CharterText>}</Charter>
        </FullFlightHeader>
        <FullFlightBody>
          <FlightRoute flight={wholeCard.flightForward} />
          <FlightRoute flight={wholeCard.flightBack} />
        </FullFlightBody>
      </FullFlightInfo>
      <AddInfo />
      <Mob>
        <PriceAndAvia>
          <Price>
            {makeDigits(wholeCard.general.price)}
            <Rouble />
          </Price>
          <AviaCompany>
            {wholeCard.general.airline.length !== 0 &&
              wholeCard.general.airline.map(item => (
                <AviaCompanyImg key={item.id} src={item.name} />
              ))}
          </AviaCompany>
        </PriceAndAvia>
        <FullFlightBody>
          <FlightRoute direction="to" flight={wholeCard.flightForward} />
          <FlightRoute flight={wholeCard.flightBack} />
        </FullFlightBody>
      </Mob>
    </CardWrap>
  </WrapCard>
);

Card.propTypes = {
  wholeCard: PropTypes.shape({}).isRequired,
};

export default Card;
