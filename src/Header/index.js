import React, { Component } from "react";
import styled, { css } from "styled-components";
import Top from "./Top";
import arrows from "./arrow.svg";
import arrowdown from "./arrow-down.svg";
import calendar from "./calendar.svg";
import aero from "./aero.svg";

const Header = styled.header`
  background: linear-gradient(
    119.26deg,
    #00b0de -25.78%,
    #01aedc -22.1%,
    #02abdb -18.38%,
    #02abdb -14.68%,
    #02abdb -14.46%,
    #196ebd 73.68%
  );
  padding-bottom: 88px;

  @media (min-width: 768px) {
    padding-bottom: 122px;
  }

  @media (min-width: 1200px) {
    padding-bottom: 250px;
  }
`;

const Title = styled.h1`
  color: white;
  font-size: 20px;
  font-weight: bold;
  line-height: 48px;
  margin-bottom: 8px;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 40px;
  }
`;

const SubTitle = styled.h2`
  color: white;
  display: none;
  font-size: 24px;
  font-weight: bold;
  line-height: normal;
  margin-bottom: 40px;
  margin-top: 8px;
  text-align: center;

  @media (min-width: 768px) {
    display: block;
  }
`;

const TicketParams = styled.form`
  display: flex;
  flex-wrap: wrap;

  @media (min-width: 1200px) {
    flex-wrap: nowrap;
  }
`;

const DestFrom = styled.div`
  flex-basis: 100%;
  position: relative;

  @media (min-width: 768px) {
    flex-basis: 50%;
  }

  @media (min-width: 1200px) {
    flex-basis: 22%;
  }
`;

const DestFromInput = styled.input`
  background: white;
  border: none;
  border-radius: 4px 4px 0px 0px;
  box-sizing: border-box;
  font-size: 16px;
  line-height: 20px;
  margin: 1px;
  padding: 16px;
  width: calc(100% - 2px);

  @media (min-width: 768px) {
    border-radius: 4px 0px 0px 0px;
  }

  @media (min-width: 1200px) {
    border-radius: 4px 0px 0px 4px;
  }
`;

const Airport = styled.p`
  color: #a0b0b9;
  font-size: 16px;
  line-height: 20px;
  padding-right: 11px;
  text-align: center;
`;

const DestFromBtn = styled.button`
  background: url(${arrows}) no-repeat center center;
  border: none;
  cursor: pointer;
  height: 18px;
  width: 16px;
`;

const DestTo = styled.div`
  flex-basis: 100%;

  @media (min-width: 768px) {
    flex-basis: 50%;
  }

  @media (min-width: 1200px) {
    flex-basis: 22%;
  }
`;

const DestToInput = styled.input`
  background: white;
  border: none;
  border-radius: 0px 0px 0px 0px;
  box-sizing: border-box;
  font-size: 16px;
  line-height: 20px;
  margin: 1px;
  padding: 16px;
  width: calc(100% - 2px);

  @media (min-width: 768px) {
    border-radius: 0px 4px 0px 0px;
  }

  @media (min-width: 1200px) {
    border-radius: 0px 0px 0px 0px;
  }
`;

const DateFrom = styled.div`
  flex-basis: 50%;
  position: relative;

  @media (min-width: 768px) {
    flex-basis: 25%;
  }

  @media (min-width: 1200px) {
    flex-basis: 18%;
  }
`;

const DateFromInput = styled.input`
  background: white;
  border: none;
  border-radius: 0px 0px 0px 0px;
  box-sizing: border-box;
  font-size: 16px;
  line-height: 20px;
  margin: 1px;
  padding: 16px;
  width: calc(100% - 2px);

  @media (min-width: 768px) {
    border-radius: 0px 0px 0px 4px;
  }

  @media (min-width: 1200px) {
    border-radius: 0px 0px 0px 0px;
  }
`;

const DateTo = styled.div`
  flex-basis: 50%;
  position: relative;

  @media (min-width: 768px) {
    flex-basis: 25%;
  }

  @media (min-width: 1200px) {
    flex-basis: 18%;
  }
`;

const DateBtn = styled.button`
  background: url(${calendar}) no-repeat center center;
  border: none;
  cursor: pointer;
  height: 20px;
  width: 17px;
`;

const FlightType = styled.div`
  flex-basis: 100%;
  position: relative;

  @media (min-width: 768px) {
    flex-basis: 50%;
  }

  @media (min-width: 1200px) {
    flex-basis: 22%;
  }
`;

const FlightTypeChoose = styled.button`
  background: url(${arrowdown}) no-repeat center center;
  border: none;
  cursor: pointer;
  height: 5px;
  width: 10px;
`;

const Passenger = styled.div`
  background: white;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  box-sizing: border-box;
  font-size: 16px;
  line-height: 20px;
  margin: 1px;
  padding: 16px;
  width: (100% - 2px);

  @media (min-width: 768px) {
    border-bottom-left-radius: 0px;
  }

  @media (min-width: 1200px) {
    border-radius: 0px 4px 4px 0px;
  }
`;

const GrayerText = styled.span`
  color: #a0b0b9;
`;

const DateToInput = styled.input`
  background: white;
  border: none;
  box-sizing: border-box;
  font-size: 16px;
  line-height: 20px;
  margin: 1px;
  padding: 16px;
  width: calc(100% - 2px);
`;

const RightInputField = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: nowrap;
  height: 100%;
  padding-right: 18px;
  position: absolute;
  right: 0;
  top: 0;
`;

const WrapFindTickets = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;

  @media (min-width: 768px) {
    margin-top: 48px;
  }
`;

const FindTickets = styled.button`
  color: #ffffff;
  background: #ff9241;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  padding: 15px 74px 16px 45px;
  position: relative;

  @media (min-width: 768px) {
    font-size: 28px;
  }
`;

const FindTicketsRight = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  position: absolute;
  right: 0;
  top: 0;
`;

const Aero = styled.img`
  margin-right: 24px;
`;

export default () => (
  <Header>
    <Top />
    <Title>Поиск дешевых авиабилетов</Title>
    <SubTitle>Лучший способ купить авиабилеты дешево</SubTitle>
    <div className="container">
      <div className="row">
        <div className="col-xs-offset-1 col-xs-10">
          <TicketParams>
            <DestFrom>
              <DestFromInput type="text" defaultValue="Москва" />
              <RightInputField>
                <Airport>MOW</Airport>
                <DestFromBtn />
              </RightInputField>
            </DestFrom>
            <DestTo>
              <DestToInput type="text" placeholder="Город прибытия" />
            </DestTo>
            <DateFrom>
              <DateFromInput type="text" placeholder="Туда" />
              <RightInputField>
                <DateBtn />
              </RightInputField>
            </DateFrom>
            <DateTo>
              <DateToInput type="text" placeholder="Обратно" />
              <RightInputField>
                <DateBtn />
              </RightInputField>
            </DateTo>
            <FlightType>
              <Passenger>
                1 пассажир, <GrayerText>эконом</GrayerText>
              </Passenger>
              <RightInputField>
                <FlightTypeChoose />
              </RightInputField>
            </FlightType>
          </TicketParams>
        </div>
      </div>
      <WrapFindTickets>
        <FindTickets>
          Найти билеты
          <FindTicketsRight>
            <Aero src={aero} />
          </FindTicketsRight>
        </FindTickets>
      </WrapFindTickets>
    </div>
  </Header>
);
