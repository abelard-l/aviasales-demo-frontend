import React, { Component } from "react";
import styled, { css } from "styled-components";
import Top from "./Top";
import arrows from "./arrows.png";
import arrowDown from "./arrow-down.svg";
import calendar from "./calendar.png";
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
  padding-bottom: 250px;
`;

const H1 = styled.h1`
  color: white;
  font-size: 40px;
  font-weight: bold;
  line-height: 48px;
  margin-bottom: 8px;
  text-align: center;
`;

const H2 = styled.h2`
  color: white;
  font-size: 24px;
  font-weight: bold;
  line-height: normal;
  margin-bottom: 40px;
  margin-top: 8px;
  text-align: center;
`;

const TicketParams = styled.form`
  display: flex;
`;

const DestFrom = styled.div`
  flex-basis: 22%;
  margin: 1px;
  position: relative;
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
  flex-basis: 22%;
  margin: 1px;
`;

const DateFrom = styled.div`
  flex-basis: 18%;
  margin: 1px;
  position: relative;
`;

const DateTo = styled.div`
  flex-basis: 18%;
  margin: 1px;
  position: relative;
`;

const DateBtn = styled.button`
  background: url(${calendar}) no-repeat center center;
  border: none;
  cursor: pointer;
  height: 20px;
  width: 17px;
`;

const FlightType = styled.div`
  flex-basis: 22%;
  margin: 1px;
  position: relative;
`;

const FlightTypeBtn = styled.button`
  background: url(${arrowDown}) no-repeat center center;
  border: none;
  cursor: pointer;
  height: 5px;
  width: 10px;
`;

const Passenger = styled.div`
  background: white;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  box-sizing: border-box;
  font-size: 16px;
  line-height: 20px;
  padding: 16px;
  width: 100%;

  & span {
    color: #a0b0b9;
  }
`;

const Input = styled.input`
  background: white;
  border: none;
  box-sizing: border-box;
  font-size: 16px;
  line-height: 20px;
  padding: 16px;
  width: 100%;

  ${props =>
    props.leftradius &&
    css`
      border-bottom-left-radius: 4px;
      border-top-left-radius: 4px;
    `};
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

const WrapFindTicketsBtn = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 48px;
`;

const FindTicketsBtn = styled.button`
  color: #ffffff;
  background: #ff9241;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  padding: 15px 74px 16px 45px;
  position: relative;
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
    <H1>Поиск дешевых авиабилетов</H1>
    <H2>Лучший способ купить авиабилеты дешево</H2>
    <div className="container">
      <div className="row">
        <div className="col-xs-offset-1 col-xs-10">
          <TicketParams>
            <DestFrom>
              <Input type="text" defaultValue="Москва" leftradius />
              <RightInputField>
                <Airport>MOW</Airport>
                <DestFromBtn />
              </RightInputField>
            </DestFrom>
            <DestTo>
              <Input type="text" placeholder="Город прибытия" />
            </DestTo>
            <DateFrom>
              <Input type="text" placeholder="Туда" />
              <RightInputField>
                <DateBtn />
              </RightInputField>
            </DateFrom>
            <DateTo>
              <Input type="text" placeholder="Обратно" />
              <RightInputField>
                <DateBtn />
              </RightInputField>
            </DateTo>
            <FlightType>
              <Passenger>
                1 пассажир, <span>эконом</span>
              </Passenger>
              <RightInputField>
                <FlightTypeBtn />
              </RightInputField>
            </FlightType>
          </TicketParams>
        </div>
      </div>
      <WrapFindTicketsBtn>
        <FindTicketsBtn>
          Найти билеты
          <FindTicketsRight>
            <Aero src={aero} />
          </FindTicketsRight>
        </FindTicketsBtn>
      </WrapFindTicketsBtn>
    </div>
  </Header>
);
