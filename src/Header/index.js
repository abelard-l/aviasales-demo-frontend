import React, { Component } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
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
  padding-bottom: ${props => (props.narrow ? "10px" : "88px")};

  @media (min-width: 768px) {
    padding-bottom: ${props => (props.narrow ? "30px" : "122px")};
  }

  @media (min-width: 1200px) {
    padding-bottom: ${props => (props.narrow ? "30px" : "250px")};
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
  display: ${props => (props.narrow ? "none" : "flex")};
  flex-wrap: wrap;

  @media (min-width: 768px) {
    display: flex;
  }

  @media (min-width: 1200px) {
    flex-wrap: wrap;
  }
`;

const DestFrom = styled.div`
  flex-basis: 100%;
  position: relative;

  @media (min-width: 768px) {
    flex-basis: 50%;
  }

  @media (min-width: 1200px) {
    flex-basis: ${props => (props.narrow ? "18%" : "22%")};
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
    flex-basis: ${props => (props.narrow ? "18%" : "21%")};
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
    flex-basis: ${props => (props.narrow ? "14%" : "18%")};
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
    flex-basis: ${props => (props.narrow ? "14%" : "18%")};
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
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (min-width: 768px) {
    flex-basis: ${props => (props.narrow ? "25%" : "50%")};
  }

  @media (min-width: 1200px) {
    flex-basis: ${props => (props.narrow ? "19%" : "21%")};
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

const WrapFindTickets = styled(Link)`
  display: ${props => (props.narrow ? "block" : "flex")};
  justify-content: center;
  margin-top: 48px;
  flex-basis: 100%;
  max-width: 100%;

  @media (min-width: 768px) {
    margin-top: ${props => (props.narrow ? "0px" : "48px")};
    flex-basis: ${props => (props.narrow ? "25%" : "100%")};
    max-width: ${props => (props.narrow ? "25%" : "100%")};
  }

  @media (min-width: 1200px) {
    margin-top: ${props => (props.narrow ? "0px" : "48px")};
    flex-basis: ${props => (props.narrow ? "17%" : "100%")};
    max-width: ${props => (props.narrow ? "17%" : "100%")};
  }
`;

const FindTickets = styled.button`
  color: #ffffff;
  background: #ff9241;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: ${props => (props.narrow ? "18px" : "24px")};
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  padding: ${props => (props.narrow ? "15px 18px" : "15px 74px 16px 45px")};
  position: relative;
  margin-left: ${props => (props.narrow ? "12px" : "0px")};
  width: ${props => (props.narrow ? "calc(100% - 1px)" : "inherit")};

  @media (min-width: 768px) {
    font-size: ${props => (props.narrow ? "20px" : "28px")};
    margin-left: 1px;
    width: ${props => (props.narrow ? "calc(100% - 1px)" : "inherit")};
  }
`;

const FindTicketsRight = styled.div`
  align-items: center;
  display: ${props => (props.narrow ? "none" : "flex")};
  height: 100%;
  justify-content: center;
  position: absolute;
  right: 0;
  top: 0;
`;

const Aero = styled.img`
  margin-right: 24px;
`;

export default ({ narrow }) => (
  <Header narrow={narrow}>
    <Top narrow={narrow} />
    {!narrow && (
      <React.Fragment>
        <Title>Поиск дешевых авиабилетов</Title>
        <SubTitle>Лучший способ купить авиабилеты дешево</SubTitle>
      </React.Fragment>
    )}
    <div className="container">
      <div className="row">
        <div
          className={
            narrow ? "col-xs-offset-0 col-xs-12" : "col-xs-offset-1 col-xs-10"
          }
        >
          <TicketParams narrow={narrow}>
            <DestFrom narrow={narrow}>
              <DestFromInput type="text" defaultValue="Москва" />
              <RightInputField>
                <Airport>MOW</Airport>
                <DestFromBtn />
              </RightInputField>
            </DestFrom>
            <DestTo narrow={narrow}>
              <DestToInput type="text" placeholder="Город прибытия" />
            </DestTo>
            <DateFrom narrow={narrow}>
              <DateFromInput type="text" placeholder="Туда" />
              <RightInputField>
                <DateBtn />
              </RightInputField>
            </DateFrom>
            <DateTo narrow={narrow}>
              <DateToInput type="text" placeholder="Обратно" />
              <RightInputField>
                <DateBtn />
              </RightInputField>
            </DateTo>
            <FlightType narrow={narrow}>
              <Passenger>
                1 пассажир, <GrayerText>эконом</GrayerText>
              </Passenger>
              <RightInputField>
                <FlightTypeChoose />
              </RightInputField>
            </FlightType>
            <WrapFindTickets narrow={narrow && narrow.toString()} to="/search">
              <FindTickets narrow={narrow}>
                Найти билеты
                <FindTicketsRight narrow={narrow}>
                  <Aero src={aero} />
                </FindTicketsRight>
              </FindTickets>
            </WrapFindTickets>
          </TicketParams>
        </div>
      </div>
    </div>
  </Header>
);
